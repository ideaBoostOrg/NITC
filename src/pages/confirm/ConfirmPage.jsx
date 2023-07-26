import logo from "../../assets/img/logo-crop.png";

/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

import PaymentConfirmed from "./components/PaymentConfirmed";
import PaymentFailed from "./components/PaymentFailed";

import { firestore } from "../../firebase";
import { collection, doc, query, getDocs, where, updateDoc, arrayUnion } from "firebase/firestore";
import PaymentProcessing from "./components/PaymentProcessing";


function ConfirmPage() {

    const [searchParams] = useSearchParams()
    const clientRef = searchParams.get('clientRef')
    const reqid = searchParams.get('reqid')

    const [data, setData] = useState()
    const [isPaymentConfirmed, setIsPaymentConfirmed] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        const url = 'https://e5ncju2y5f.execute-api.eu-west-2.amazonaws.com/prod/confirm'
        // const url = 'https://7kw2pe2bd8.execute-api.us-east-1.amazonaws.com/dev/confirm' //bashi
        // const url = 'http://localhost:3400/confirm'
        axios.post(url, {
            clientRef: clientRef,
            reqId: reqid
        }
        )
            .then(Response => {
                const responseString = Response.data
                const responseArray = responseString.split('&')
                const results = {}
                responseArray.forEach((item) => {
                    const [key, value] = item.split('=')
                    results[key] = value
                })

                // console.table(results)
                setData(results)

                if (results?.responseCode) {
                    if (results?.responseCode === "00" && results?.clientRef === clientRef) {
                        updatePaymentStatus("Paid", results);
                        setIsLoading(false)
                        setIsPaymentConfirmed(true)
                    }
                    else {
                        updatePaymentStatus("Payment Failed", results);
                        setIsLoading(false)
                        setIsPaymentConfirmed(false)
                    }

                } else {
                    setIsPaymentConfirmed(false)
                }
            })
            .catch((error) => {
                console.log(error);
                setIsPaymentConfirmed(false)

            })


    }, [])

    const sendEmail = (data) => {
        axios.post('https://api.imanage.services/api/api/nitc', data)
            .then(Response => {
                // console.table(Response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const updatePaymentStatus = async (status, additionalData) => {
        try {
            const usersCollectionRef = collection(firestore, "users");
            const querySnapshot = await getDocs(
                query(usersCollectionRef, where("clientRef", "==", clientRef))
            );
            if (!querySnapshot.empty) {
                const userDoc = doc(firestore, "users", querySnapshot.docs[0].id);
                const userData = querySnapshot.docs[0].data();

                await updateDoc(userDoc, {
                    paymentStatus: status,
                    transactionDetails: additionalData
                });

                // change this to "Paid"
                if (status === 'Paid') {
                    sendEmail({
                        firstName: userData?.firstName,
                        lastName: userData?.lastName,
                        email: userData?.email,
                        nic: userData?.nic,
                        paymentRef: userData?.clientRef,
                        amount: additionalData?.paymentAmount,
                        inaguration: userData?.reg_sessions[0].isRegistered,
                        day1: userData?.reg_sessions[1].isRegistered,
                        day2: userData?.reg_sessions[2].isRegistered,
                        organization: userData?.organization,
                    })
                }
            }
        } catch (error) {
            console.log("Error updating payment status:", error);
        }
    };

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
            {isLoading ? <PaymentProcessing /> : isPaymentConfirmed ? <PaymentConfirmed data={data} /> : <PaymentFailed data={data} />
            }
        </>
    )
}

export default ConfirmPage