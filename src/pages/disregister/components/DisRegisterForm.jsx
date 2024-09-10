import React, { useState, useEffect } from "react";
import cryptoRandomString from 'crypto-random-string';
import { addDoc, arrayUnion, collection, doc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
import { firestore } from "../../../firebase";
import { loadPaycorpPayment } from '../../../pay';
import TermsModal from "./DisTermsModal";
import Loading from "../../../components/Loading";
import SomethingWentWrong from "../../../components/SomethingWentWrong";

const packages = [{
  key: "DIS",
  name: "Digital Investment Summit",
  priceLKR: 15000.00, // Local price in LKR
  priceUSD: 75.00,    // Foreign price in USD
  currencyLKR: "LKR",
  currencyUSD: "USD",
}];

const DisRegisterForm = ({ clientRef, setClientRef, comment, setComment, formData, sessions, firstTime }) => {

  const [termsModalOpen, setTermsModalOpen] = useState(false);
  const [acceptTerm, setAcceptTerm] = useState(false);
  const [discount, setDiscount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [currency, setCurrency] = useState("LKR"); // Default currency
  const [amount, setAmount] = useState(packages[0].priceLKR); // Default to local price
  const [netTotal, setNetTotal] = useState(packages[0].priceLKR); // Default to local net total

  const navigate = useNavigate();
  const pack = packages[0];

  // Handle currency change for local/foreign payments
  const handleCurrencyChange = (event) => {
    const selectedCurrency = event.target.value;
    if (selectedCurrency === "LKR") {
      setCurrency(pack.currencyLKR);
      setAmount(pack.priceLKR);
      setNetTotal(pack.priceLKR - discount); // Apply any discounts to net total if applicable
    } else if (selectedCurrency === "USD") {
      setCurrency(pack.currencyUSD);
      setAmount(pack.priceUSD);
      setNetTotal(pack.priceUSD - discount);
    }
  };

  const handleAcceptTerms = (e) => {
    const value = e.target.checked;
    setAcceptTerm(value);
  };

  const handlePaymentGateway = (cRef, comm) => {
    if (netTotal > 0) {
      setIsError(false);
      const pgData = {
        clientId: 14002485,
        paymentAmount: parseInt(netTotal.toFixed(2) * 100),
        currency: currency,
        returnUrl: `https://${window.location.hostname}/payment-confirm`,
        clientRef: cRef,
        comment: comm,
      };
      loadPaycorpPayment(pgData);
    } else {
      setIsError(true);
    }
  };

  const handlePayNow = async (e) => {
    e.preventDefault();
    setIsLoading(true)

    let fSessionData = [
      { name: 'Inauguration', isRegistered: false },
      { name: 'Day_01', isRegistered: false },
      { name: 'Day_02', isRegistered: false },
      { name: 'DIS', isRegistered: false }
    ]

    if (sessions.length === 0 || falseCount === 4) {
      // first time
      if (eventList.Full_package) {
        fSessionData = fSessionData.map(s => { return { ...s, isRegistered: true } })
      } else {
        fSessionData = fSessionData.map(s => {
          if (eventList[s.name]) return { ...s, isRegistered: true }
          else return s
        })
      }

    } else {

      if (sessions.length > 0) fSessionData = sessions

      fSessionData = fSessionData.map(s => {
        if (eventList[s.name]) return { ...s, isRegistered: true }
        else return s
      })
      fSessionData.push({ name: 'DIS', isRegistered: true })
    }

    const cRef = cryptoRandomString({ length: 20, type: 'numeric' })
    const comm = `${formData.email}`
    window.sessionStorage.setItem('NITC_REGISTRATION_WEB_APP_USER_REGISTERING_SESSIONS', JSON.stringify({
      email: formData.email,
      clientRef: cRef,
      sessions: fSessionData,
    }));

    if (firstTime) {
      try {
        await addDoc(collection(firestore, "users-2024"),
          {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            nic: formData.nic,
            organization: formData.organization ?? "",
            address: formData.address,
            contactNumber: formData.contactNumber,
            confKit: 'Not Issued',
            isInvitee: true,
            securityStatus: "inactive",
            attempts: arrayUnion({
              clientRef: cRef,
              amount: netTotal,
              timestamp: new Date().toLocaleString('en-US', { timeZone: 'Asia/Colombo' }),
              eventList: Object.keys(eventList).filter(k => eventList[k] === true)
            })
          });
          handlePaymentGateway(cRef, comm)
      } catch (err) {
        console.log(err);
        setIsError(true)
      }
    } else {
      const userQuery = query(collection(firestore, "users-2024"), where("email", "==", formData.email));
      const querySnapshot = await getDocs(userQuery);
      if (!querySnapshot.empty) {
        const userDocRef = doc(firestore, "users-2024", querySnapshot.docs[0].id);
        try {
          await updateDoc(userDocRef, {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            nic: formData.nic,
            organization: formData.organization ?? "",
            address: formData.address,
            contactNumber: formData.contactNumber,
            attempts: arrayUnion({
              clientRef: cRef,
              amount: netTotal,
              timestamp: new Date().toLocaleString('en-US', { timeZone: 'Asia/Colombo' }),
              eventList: Object.keys(eventList).filter(k => eventList[k] === true)
            })
          })

          handlePaymentGateway(cRef, comm)

        } catch (error) {
          console.log(error)
          setIsError(true)
        }

      }
    }


    setIsLoading(false)
  }

  return (
    <>
      {isError ? (
        <SomethingWentWrong />
      ) : (
        <>
          {isLoading && <Loading />}
          <TermsModal isOpen={termsModalOpen} onClose={setTermsModalOpen} setAcceptTerm={setAcceptTerm} />
          <section id="register-form" className="section-padding" style={{ margin: "30px 10px", padding: "0" }}>
            <div className="container">
              <div className="row">
                <div className="col-md-12 col-sm-12 col-lg-7 pdt-50 pdr-50">
                  {/* Ticket Information */}
                  <div className="ticket-heading">
                    <h5 style={{ fontSize: "1.2rem" }}>Tickets</h5>
                  </div>

                  {/* Ticket Selection */}
                  <div className="package-container">
                    <div className="package-box">
                      <label className="package" style={{ backgroundColor: '#0055ff', minHeight: '75px' }}>
                        <div className="package-heading">
                          <h4 style={{ color: '#fff' }}>Digital Investment Summit</h4>
                          <div className="package-price">
                            <p style={{ color: '#fff' }}>
                              <span style={{ color: '#fff', paddingRight: '0.5rem' }} className="lkr">LKR 15000 (USD 75)</span>
                            </p>
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="col-lg-5 col-md-12">
                  <div className="content">
                    {/* Currency Selection */}
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="mode"
                        value="LKR"
                        id="lkr"
                        checked={currency === "LKR"}
                        onChange={handleCurrencyChange}
                      />
                      <label className="form-check-label" htmlFor="lkr">Local Registration</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="mode"
                        value="USD"
                        id="usd"
                        checked={currency === "USD"}
                        onChange={handleCurrencyChange}
                      />
                      <label className="form-check-label" htmlFor="usd">Foreign Registration</label>
                    </div>

                    {/* Amount Display */}
                    <div className="content-row">
                      <span className="label">Amount</span>
                      <span className="value">
                        <span className="currency">{currency}</span> {amount.toFixed(2)}
                      </span>
                    </div>

                    <hr />

                    {/* Net Amount Display */}
                    <div className="content-row net-total">
                      <span className="label">Net Amount</span>
                      <span className="value">
                        <span className="currency">{currency}</span> {netTotal.toFixed(2)}
                      </span>
                    </div>
                  </div>

                  {/* Terms and Payment */}
                  <div className="form-check flexCheckDefault flex-row-col" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div>
                      <input
                        className="form-check-input terms-check-box"
                        type="checkbox"
                        onChange={handleAcceptTerms}
                        value=""
                        id="flexCheckDefault"
                        checked={acceptTerm}
                        onClick={(e) => {
                          e.preventDefault();
                          setTermsModalOpen(true);
                        }}
                      />
                      <label className="form-check-label" onClick={() => setTermsModalOpen(true)}>Accept all terms & conditions.</label>
                    </div>
                  </div>

                  <div className="form-group">
                    <button className="form-control form-control-sm submit-btn" onClick={handlePayNow} disabled={!acceptTerm}>
                      Pay Now
                    </button>
                    <p style={{ color: "gray", fontSize: "12px", fontWeight: "600px", textAlign: "center", marginTop: "10px", lineHeight: "1.5" }}>
                      After completing the transaction, we will promptly send you an email containing the reference number and invoice, along with the payment confirmation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default DisRegisterForm;