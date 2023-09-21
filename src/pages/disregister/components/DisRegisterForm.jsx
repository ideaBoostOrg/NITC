/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import cryptoRandomString from 'crypto-random-string';
import { addDoc, arrayUnion, collection, doc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from 'react-router-dom';
import Loading from "../../../components/Loading";
import SomethingWentWrong from "../../../components/SomethingWentWrong";
import { firestore } from "../../../firebase";
import { loadPaycorpPayment } from '../../../pay';
import TermsModal from "./DisTermsModal";

const packages = [{
  key: "DIS",
  name: "Digital Investment Summit",
  price: 15300.00,
  currency: "LKR",
}];

const DisRegisterForm = ({ clientRef, setClientRef, comment, setComment, formData, sessions, firstTime }) => {



  const EVENTS = {
    Full_package: false,
    Inauguration: false,
    Day_01: false,
    Day_02: false,
    DIS: false
  }

  const EVENT_LIST = [
    { name: 'Full_package', isRegistered: false },
    { name: 'Inauguration', isRegistered: false },
    { name: 'Day_01', isRegistered: false },
    { name: 'Day_02', isRegistered: false },
    { name: 'DIS', isRegistered: false },
  ]

  const navigate = useNavigate()

  const pack = packages[0];

  const [termsModalOpen, setTermsModalOpen] = useState(false);
  const [acceptTerm, setAcceptTerm] = useState(false);
  const [amount, setAmount] = useState(parseFloat(pack.price));
  const [discount, setDiscount] = useState(0);
  const [netTotal, setNetTotal] = useState(pack.price);

  const [eligbleForEarlyBird, setEligbleForEarlyBird] = useState(true);
  const [selectedEvents, setSelectedEvents] = useState(EVENTS)
  const [isFullPackage, setIsFullPackage] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  //----
  const [eventList, setEventList] = useState(EVENTS);

  const registeredSessions = sessions.filter(s => s.isRegistered);
  const falseCount = sessions.filter(s => !s.isRegistered).length;

  useEffect(() => {
    if (sessions.length === 0 || falseCount === 4) {
      //first time
      window.sessionStorage.setItem('NITC_REGISTRATION_WEB_APP_USER_FIRST_TIME', JSON.stringify(true));
      setEventList({
        ...EVENTS,
        DIS: true
      })

    } else {
      // not first time
      window.sessionStorage.setItem('NITC_REGISTRATION_WEB_APP_USER_FIRST_TIME', JSON.stringify(false));
      const newEvents = {}
      sessions.forEach(s => {
        if (!s.isRegistered)
          newEvents[s.name] = false
      })

      setEventList({
        ...newEvents,
        DIS: true
      })

    }

  }, [sessions])




  const handleAcceptTerms = (e) => {
    const value = e.target.checked;
    if (value == true) {
      setAcceptTerm(true);
    } else {
      setAcceptTerm(false);
    }
  }

  const handlePaymentGatway = (cRef, comm) => {
    if (netTotal > 0) {
      setIsError(false);
      const pgData = {
        clientId: 14002485,
        paymentAmount: parseInt(netTotal.toFixed(2) * 100),
        currency: 'LKR',
        // returnUrl: `https://${window.location.hostname}/payment-confirm`,
        returnUrl: `http://127.0.0.1:5173/payment-confirm`,
        clientRef: cRef,
        comment: comm,
      }
      loadPaycorpPayment(pgData)
    } else {
      setIsError(true);
    }

  }

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
        await addDoc(collection(firestore, "users"),
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
        handlePaymentGatway(cRef, comm)
      } catch (err) {
        console.log(err);
        setIsError(true)
      }
    } else {
      const userQuery = query(collection(firestore, "users"), where("email", "==", formData.email));
      const querySnapshot = await getDocs(userQuery);
      if (!querySnapshot.empty) {
        const userDocRef = doc(firestore, "users", querySnapshot.docs[0].id);
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

          handlePaymentGatway(cRef, comm)

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
      {
        isError ? (
          <SomethingWentWrong />
        )
          :
          <>
            {isLoading && <Loading />}
            <TermsModal isOpen={termsModalOpen} onClose={setTermsModalOpen} setAcceptTerm={setAcceptTerm} />
            <section id="register-form" className="section-padding" style={{ margin: "30px 10px", padding: "0" }}>
              <div className="container">
                <div className="row">
                  <div className="col-md-12 col-sm-12 col-lg-7 pdt-50 pdr-50">
                    <div className="ticket-heading">
                      <h5 style={{ fontSize: "1.2rem" }}>
                        Tickets
                      </h5>
                      {/* <p className="">Please choose the sessions you wish to register for.</p> */}
                    </div>
                    {/* {
                      registeredSessions.length > 0 &&
                      <div className="alert alert-warning registered-session" role="alert">
                        You have already registered for {
                          registeredSessions.map((s, index) => {
                            return (
                              <span key={index}>{s.name.replace("_", " ")}{index === registeredSessions.length - 1 ? "" : ", "}</span>
                            )
                          })
                        }

                      </div>
                    } */}
                    <div className="package-container">
                      {/* {
                        packages.map((pack, index) => {
                          if (pack.key in eventList) {
                            return (
                              <div key={index} className="package-box">
                                <input id={pack.key} type="checkbox" name={pack.key} value={pack.key} onChange={handleInputCheck} checked={eventList[pack.key]}></input>
                                <label htmlFor={pack.key}
                                  className="package"
                                >
                                  <div className="package-heading">
                                    <h4 >{pack.name}</h4>
                                    <div className="package-price">
                                      <p><span className="lkr">{pack.currency}</span>  {pack.price}</p>
                                    </div>
                                  </div>
                                  <div className="package-features">
                                    {pack.features.map((feature, index) => {
                                      return (
                                        <span key={index}>{feature}</span>
                                      )
                                    })}
                                  </div>
                                </label>
                              </div>
                            )
                          }
                        })
                      } */}


                      <div className="package-box">
                        <label
                          className="package"
                          style={{ backgroundColor: '#0055ff', minHeight: '75px' }}
                        >
                          <div className="package-heading" >
                            <h4 style={{ color: '#fff' }} >Digital Investment Summit</h4>
                            <div className="package-price">
                              <p style={{ color: '#fff' }}><span style={{ color: '#fff', paddingRight: '0.5rem' }} className="lkr">LKR </span> 12000</p>
                            </div>
                          </div>
                        </label>
                      </div>


                    </div>
                  </div>
                  <div className="col-lg-5 col-md-12">

                    <div className="content">
                      <div className="content-row">
                        <span className="label">
                          Amount
                        </span>
                        <span className="value">
                          <span className="lkr">{pack.currency}</span> {amount.toFixed(2)}
                        </span>
                      </div>

                      {/* {btnState === 'verified' &&
                  <div className="content-row">
                    <span className="label">Discount (20%)</span>
                    <span className="value">
                      - {discount.toFixed(2)} <span className="lkr">{pack.currency}</span>
                    </span>
                  </div>} */}

                      {/* {
                        eventList ?
                          <div className="content-row">
                            <span className="label">CSSL membership discount (20%)</span>
                            <span className="value">
                              - <span className="lkr">{pack.currency}</span> {discount.toFixed(2)}
                            </span>
                          </div>
                          : eligbleForEarlyBird ?
                            <div className="content-row">
                              <span className="label">Early bird discount (10%)</span>
                              <span className="value">
                                - <span className="lkr">{pack.currency}</span> {discount.toFixed(2)}
                              </span>
                            </div>
                            :
                            ""
                      } */}



                      <hr />
                      <div className="content-row net-total">
                        <span className="label">
                          Net Amount
                        </span>
                        <span className="value">
                          <span className="lkr">{pack.currency}</span> {netTotal.toFixed(2)}
                        </span>
                      </div>
                    </div>
                    <div className="form-check flexCheckDefault flex-row-col" style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",

                    }}>
                      <div className="">
                        <input
                          className="form-check-input terms-check-box"
                          type="checkbox"
                          onChange={handleAcceptTerms}
                          value=""
                          id="flexCheckDefault"
                          checked={acceptTerm}
                          onClick={(e) => {
                            e.preventDefault()
                            setTermsModalOpen(true)
                          }}
                        />
                        <label
                          className="form-check-label"
                          onClick={() => setTermsModalOpen(true)}
                        >
                          Accept all terms & conditions.
                        </label>
                      </div>
                    </div>
                    <div className="form-group">
                      <button
                        className="form-control form-control-sm submit-btn"
                        onClick={handlePayNow}

                        disabled={!acceptTerm}

                      >
                        Pay Now
                      </button>
                      <p
                        style={{
                          color: "gray",
                          fontSize: "12px",
                          fontWeight: "600px",
                          textAlign: "center",
                          marginTop: "10px",
                          lineHeight: "1.5",
                        }}
                      >
                        After completing the transaction, we will promptly send you
                        an email containing the reference number and invoice, along
                        with the payment confirmation.
                      </p>
                    </div>
                  </div>
                </div>
              </div >
            </section >
          </>

      }
    </>
  );
};

export default DisRegisterForm;

