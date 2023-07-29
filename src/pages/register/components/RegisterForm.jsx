/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { useSearchParams } from 'react-router-dom';
import TermsModal from "./TermsModal";
import { loadPaycorpPayment } from '../../../pay';
import { packages } from "../packages";
import { firestore } from "../../../firebase";
import { collection, getDocs, query, where, addDoc, doc, updateDoc, arrayUnion } from "firebase/firestore";
import Loading from "../../../components/Loading";
import SomethingWentWrong from "../../../components/SomethingWentWrong";
import cryptoRandomString from 'crypto-random-string';


const RegisterForm = ({ isMember, setisMember, memberId, setMemberId, clientRef, setClientRef, comment, setComment, formData, sessions, firstTime }) => {

  const EVENTS = {
    Full_package: false,
    Inauguration: false,
    Day_01: false,
    Day_02: false,
  }

  const EVENT_LIST = [
    { name: 'Full_package', isRegistered: false },
    { name: 'Inauguration', isRegistered: false },
    { name: 'Day_01', isRegistered: false },
    { name: 'Day_02', isRegistered: false },
  ]


  const [searchParams] = useSearchParams();
  const type = searchParams.get('type');
  const pack = packages[0];

  const [termsModalOpen, setTermsModalOpen] = useState(false);
  const [acceptTerm, setAcceptTerm] = useState(false);
  const [amount, setAmount] = useState(parseFloat(pack.price));
  const [discount, setDiscount] = useState(0);
  const [netTotal, setNetTotal] = useState(0);

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



    if (sessions.length === 0 || falseCount === 3) {
      //first time
      setEventList({
        ...EVENTS,
        [type]: true
      })

      window.sessionStorage.setItem('NITC_REGISTRATION_WEB_APP_USER_FIRST_TIME', JSON.stringify(true));
    } else {
      // not first time
      const newEvents = {}
      sessions.forEach(s => {
        if (!s.isRegistered)
          newEvents[s.name] = false
      })

      if (type in newEvents) {
        setEventList({
          ...newEvents,
          [type]: true
        })
      } else {
        setEventList({
          ...newEvents,
          [Object.keys(newEvents)[0]]: true
        })
      }
      window.sessionStorage.setItem('NITC_REGISTRATION_WEB_APP_USER_FIRST_TIME', JSON.stringify(false));
    }



    // if (sessions.length > 0) {
    //   // not first time
    //   const newEvents = {}
    //   sessions.forEach(s => {
    //     if (!s.isRegistered)
    //       newEvents[s.name] = false
    //   })

    //   if (type in newEvents) {
    //     setEventList({
    //       ...newEvents,
    //       [type]: true
    //     })
    //   } else {
    //     setEventList({
    //       ...newEvents,
    //       [Object.keys(newEvents)[0]]: true
    //     })
    //   }
    //   window.sessionStorage.setItem('NITC_REGISTRATION_WEB_APP_USER_FIRST_TIME', JSON.stringify(false));

    // } else {
    //   //first time
    //   setEventList({
    //     ...EVENTS,
    //     [type]: true
    //   })

    //   window.sessionStorage.setItem('NITC_REGISTRATION_WEB_APP_USER_FIRST_TIME', JSON.stringify(true));
    // }

    const EarlyBirdDate = new Date('2023-08-26');
    const today = new Date();
    if (today > EarlyBirdDate) {
      setEligbleForEarlyBird(false);
    } else {
      setEligbleForEarlyBird(true);
    }

  }, [sessions, type])


  const handleAcceptTerms = (e) => {
    const value = e.target.checked;
    if (value == true) {
      setAcceptTerm(true);
    } else {
      setAcceptTerm(false);
    }
  }

  const handleInputCheck = (e) => {

    const trueCount = Object.values(eventList).filter(v => v === true).length
    if (trueCount === 1 && eventList[e.target.name] === true) {
      return
    }

    if ((sessions.length === 0 || falseCount === 3) && trueCount === 2 && eventList[e.target.name] === false) {
      setEventList({
        ...EVENTS,
        Full_package: true
      })
      return
    }

    if (e.target.name === "Full_package") {
      setIsFullPackage(e.target.checked);
      setEventList({
        ...EVENTS,
        Full_package: true
      })
    } else {
      setIsFullPackage(false);
      if (sessions.length === 0 || falseCount === 3) {
        setEventList({
          ...eventList,
          Full_package: false,
          [e.target.name]: e.target.checked
        })
      } else {
        setEventList({
          ...eventList,
          [e.target.name]: e.target.checked
        })
      }
    }

  }

  useEffect(() => {
    let total = 0
    for (const key in eventList) {
      if (eventList[key] === true) {
        total += parseFloat(packages.find(p => p.key === key).price)
      }
    }
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


  }, [eventList, isMember, eligbleForEarlyBird])


  const handlePaymentGatway = (cRef, comm) => {
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

  }

  const handlePayNow = async (e) => {
    e.preventDefault();
    setIsLoading(true)

    let fSessionData = [
      { name: 'Inauguration', isRegistered: false },
      { name: 'Day_01', isRegistered: false },
      { name: 'Day_02', isRegistered: false },
    ]

    if (sessions.length === 0 || falseCount === 3) {
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
            isMember: isMember,
            memberId: memberId ?? "",
            confKit: 'Not Issued',
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
            isMember: isMember,
            memberId: memberId ?? "",
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
                      <p className="">Please choose the sessions you wish to register for.</p>
                    </div>
                    {
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
                    }
                    <div className="package-container">
                      {
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
                      }
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

