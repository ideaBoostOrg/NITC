/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { useSearchParams } from 'react-router-dom';
import { v4 } from 'uuid';
import TermsModal from "./TermsModal";
import { loadPaycorpPayment } from '../../../pay';
import { packages } from "../packages";
import { firestore } from "../../../firebase";
import { collection, getDocs, query, where, addDoc } from "firebase/firestore";
import Loading from "../../../components/Loading";



const RegisterForm = ({ isMember, setisMember, memberId, setMemberId, clientRef, setClientRef, comment, setComment, formData }) => {

  const events = {
    Full_package: false,
    Inauguration: false,
    Day_01: false,
    Day_02: false,
  }

  const [searchParams] = useSearchParams();
  const type = searchParams.get('type');
  const pack = packages[0];

  const [termsModalOpen, setTermsModalOpen] = useState(false);
  const [acceptTerm, setAcceptTerm] = useState(false);
  const [amount, setAmount] = useState(parseFloat(pack.price));
  const [discount, setDiscount] = useState(0);
  const [netTotal, setNetTotal] = useState(0);

  const [eligbleForEarlyBird, setEligbleForEarlyBird] = useState(true);
  const [selectedEvents, setSelectedEvents] = useState(events)
  const [isFullPackage, setIsFullPackage] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setSelectedEvents({
      ...events,
      [type]: true
    })

    const EarlyBirdDate = new Date('2023-08-26');
    const today = new Date();
    if (today > EarlyBirdDate) {
      setEligbleForEarlyBird(false);
    } else {
      setEligbleForEarlyBird(true);
    }

  }, [])


  const handleAcceptTerms = (e) => {
    const value = e.target.checked;
    if (value == true) {
      setAcceptTerm(true);
    } else {
      setAcceptTerm(false);
    }
  }

  const handleInputCheck = (e) => {
    if (e.target.name === "Full_package") {
      setIsFullPackage(e.target.checked);
      setSelectedEvents({
        ...events,
        Full_package: true
      })
    } else {
      setIsFullPackage(false);
      setSelectedEvents({
        ...selectedEvents,
        Full_package: false,
        [e.target.name]: e.target.checked
      })
    }

    console.log(selectedEvents);

  }

  useEffect(() => {

    if (selectedEvents.Inauguration && selectedEvents.Day_01 && selectedEvents.Day_02) {
      console.log('all ture');
      setSelectedEvents({
        ...events,
        Full_package: true
      })
    }

    if (!selectedEvents.Full_package && !selectedEvents.Inauguration && !selectedEvents.Day_01 && !selectedEvents.Day_02) {
      setSelectedEvents({
        ...events,
        [type]: true
      })
    }
    let total = 0
    for (const key in selectedEvents) {
      if (selectedEvents[key] === true) {
        total += parseFloat(packages.find(p => p.key === key).price)
      }
    }
    console.log(total)
    setAmount(total)

    let d = 0
    if (isMember) {
      d = total * 0.2
    } else if (eligbleForEarlyBird) {
      d = total * 0.1
    } else {
      d = 0
    }
    setDiscount(d)
    setNetTotal(total - d)


  }, [selectedEvents])


  const handlePayNow = async (e) => {
    setIsLoading(true)
    e.preventDefault();

    let registeredEvents = [
      {
        name: 'Inauguration',
        isRegistered: selectedEvents.Inauguration
      },
      {
        name: 'Day_01',
        isRegistered: selectedEvents.Day_01
      },
      {
        name: 'Day_02',
        isRegistered: selectedEvents.Day_02
      }
    ]

    if (selectedEvents.Full_package) {

      for (let event in registeredEvents) {
        registeredEvents[event].isRegistered = true
      }

    }

    const cRef = v4();
    // const comm = `email: ${formData.email}, firstName: ${formData.firstName}, nic: ${formData.nic}`
    const comm = `NITC Tickets(testing) - email:${formData.email}`

    const docRef = await addDoc(collection(firestore, "users"),
      {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        nic: formData.nic,
        organization: formData.organization ?? "",
        address: formData.address,
        isMember: isMember,
        memberId: memberId ?? "",
        conf_kit: 'not issued',
        clientRef: cRef,
        comment: comm,
        paymentStatus: 'Pending',
        reg_sessions: registeredEvents,
        securityStatus: "active"
      });

    if (docRef) {
      console.log("Document written with ID: ", docRef.id);
      if (netTotal > 0) {
        setIsError(false);
        const pgData = {
          clientId: 14002485,
          paymentAmount: parseInt(netTotal.toFixed(2) * 100),
          currency: 'LKR',
          returnUrl: `https://${window.location.hostname}/payment-confirm`,
          // returnUrl: `http://127.0.0.1:5173/payment-confirm`,
          clientRef: cRef,
          comment: comm,
        }
        loadPaycorpPayment(pgData)
      } else {
        setIsError(true);
      }
    } else {
      console.log("Document not written");
      setIsError(true);
    }
    setIsLoading(false);
  }


  return (
    <>
      {
        isError ? (
          <h1>Something went wrong</h1>
        )
          :
          <>
            {isLoading && <Loading />}
            <TermsModal isOpen={termsModalOpen} onClose={setTermsModalOpen} setAcceptTerm={setAcceptTerm} />
            <section id="register-form" className="section-padding">
              <div className="container">
                <div className="row">
                  <div className="col-md-12 col-sm-12 col-lg-6 pdt-50 pdr-50">
                    <div className="package-container">
                      {
                        packages.map((pack, index) => {
                          return (
                            <div key={index} className="package-box">
                              <input id={pack.key} type="checkbox" name={pack.key} value={pack.key} onChange={handleInputCheck} checked={selectedEvents[pack.key]}></input>
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
                        })
                      }
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">

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

                      {
                        isMember ?
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
                      }



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

export default RegisterForm;

