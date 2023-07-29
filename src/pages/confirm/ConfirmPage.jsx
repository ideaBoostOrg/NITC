import logo from "../../assets/img/logo-crop.png";

/* eslint-disable no-unused-vars */
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

import PaymentConfirmed from "./components/PaymentConfirmed";
import PaymentFailed from "./components/PaymentFailed";

import { firestore } from "../../firebase";
import { collection, doc, query, getDocs, where, updateDoc, arrayUnion } from "firebase/firestore";
import PaymentProcessing from "./components/PaymentProcessing";
import SomethingWentWrong from "../../components/SomethingWentWrong";


function ConfirmPage() {

    const [searchParams] = useSearchParams()
    const clientRef = searchParams.get('clientRef')
    const reqid = searchParams.get('reqid')

    const [data, setData] = useState()
    const [isPaymentConfirmed, setIsPaymentConfirmed] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)


    useEffect(() => {

        const sendEmail = (data) => {
            axios.post('https://api.imanage.services/api/api/nitc', data)
                .then(Response => {
                    // console.table(Response.data);
                })
                .catch((error) => {
                    console.log(error);
                })
        }

        const updateTicketCount = async (memberId) => {
            try {
                const memberCollection = collection(firestore, "members")
                const memberQuery = query(memberCollection, where("memNo", "==", memberId))
                const memberQuerySnapshot = await getDocs(memberQuery)

                if (memberQuerySnapshot.empty) {
                    // setIsError(true)
                    return
                }

                const memberDoc = doc(firestore, "members", memberQuerySnapshot.docs[0].id)
                const memberData = memberQuerySnapshot.docs[0].data()

                const ticketCount = memberData.ticketCount ?? 0

                await updateDoc(memberDoc, {
                    ticketCount: ticketCount + 1
                })

                console.log("Ticket Count Updated");

            } catch (err) {
                // setIsError(true)
                console.log(err)
            }
        }

        const updatePayment = async (clientRef, email, status, transactionDetails) => {
            const eventsLocal = JSON.parse(window.sessionStorage.getItem('NITC_REGISTRATION_WEB_APP_USER_REGISTERING_SESSIONS'))

            if (!eventsLocal) {
                setIsError(true)
                return
            }

            if (eventsLocal.clientRef !== clientRef) {
                setIsError(true)
                return
            }

            try {

                const userCollection = collection(firestore, "users")
                const userQuery = query(userCollection, where("email", "==", email))
                const userQuerySnapshot = await getDocs(userQuery)
                if (userQuerySnapshot.empty) {
                    setIsError(true)
                    return
                }

                const userDoc = doc(firestore, "users", userQuerySnapshot.docs[0].id)
                const userData = userQuerySnapshot.docs[0].data()

                let userSessions = userData.reg_sessions ?? [
                    { name: 'Inauguration', isRegistered: false },
                    { name: 'Day_01', isRegistered: false },
                    { name: 'Day_02', isRegistered: false },
                ]
                let securityStatus = userData.securityStatus ?? "inactive"

                let paymentStatus = userData.paymentStatus ?? "Payment Failed"

                if (status === "Paid") {
                    userSessions = eventsLocal.sessions
                    securityStatus = "active"
                    paymentStatus = "Paid"
                }

                await updateDoc(userDoc, {
                    paymentStatus: paymentStatus,
                    transactionDetails: arrayUnion({
                        ...transactionDetails,
                        status: status,
                        timestamp: new Date().toLocaleString('en-US', { timeZone: 'Asia/Colombo' }),
                    }),
                    reg_sessions: userSessions,
                    securityStatus: securityStatus,

                })

                if (status === "Paid") {
                    if (userData?.memberId) {
                        updateTicketCount(userData.memberId)
                    }
                    sendEmail({
                        firstName: userData?.firstName,
                        lastName: userData?.lastName,
                        email: userData?.email,
                        nic: userData?.nic,
                        paymentRef: clientRef,
                        amount: transactionDetails?.paymentAmount,
                        inaguration: userSessions[0].isRegistered,
                        day1: userSessions[1].isRegistered,
                        day2: userSessions[2].isRegistered,
                        organization: userData?.organization,
                    })
                }

                console.log(status);

            } catch (error) {
                setIsError(true)
                console.log(error)
            }
        }

        const confirmPg = async () => {
            setIsLoading(true)

            const url = 'https://e5ncju2y5f.execute-api.eu-west-2.amazonaws.com/prod/confirm'
            // const url = 'https://7kw2pe2bd8.execute-api.us-east-1.amazonaws.com/dev/confirm' //bashi
            // const url = 'http://localhost:3400/confirm'
            try {
                const response = await axios.post(url, {
                    clientRef: clientRef,
                    reqId: reqid
                })

                if (response) {
                    const responseString = response.data
                    const responseArray = responseString.split('&')
                    const results = {}
                    responseArray.forEach((item) => {
                        const [key, value] = item.split('=')
                        results[key] = value
                    })
                    if (results?.responseCode) {

                        if (results?.responseCode === "00" && results?.clientRef === clientRef) {
                            updatePayment(clientRef, results?.comment, "Paid", results)
                            setIsLoading(false)
                            setIsPaymentConfirmed(true)
                        }
                        else {
                            updatePayment(clientRef, results?.comment, "Payment Failed", results)
                            setIsLoading(false)
                            setIsPaymentConfirmed(false)
                        }

                    } else {
                        console.log("Error 02: Payment Failed");
                        setIsPaymentConfirmed(false)
                        setIsError(null)
                    }

                }
                else {
                    console.log("Error 03: Payment Failed");
                    setIsPaymentConfirmed(false)
                    setIsError(null)
                }

            } catch (error) {
                console.log("Error 04: Reqeust error");
                console.log(error)
                setIsError(null)
            }
        }


        confirmPg()

    }, [])

    return (
        <>
            <section>
                <nav className="navbar navbar-expand-lg bg-inverse scrolling-navbar top-nav-collapse">
                    <div className="container">
                        <div className="navbar-brand">
                            <img src={logo} alt="" />
                        </div>
                    </div>
                </nav>
            </section>
            {isLoading ? <PaymentProcessing /> : isError ? <SomethingWentWrong /> : isPaymentConfirmed ? <PaymentConfirmed data={data} /> : <PaymentFailed data={data} />
            }
        </>
    )
}

export default ConfirmPage