/* eslint-disable react/prop-types */
import { CheckCircleFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { useState } from "react";
const PaymentConfirmed = ({ data }) => {

    const [isCopied, setIsCopied] = useState(false)

    const copyToClipboard = async (text) => {
        setIsCopied(false)
        if ('clipboard' in navigator) {
            navigator.clipboard.writeText(text)
        } else {
            return document.execCommand('copy', true, text);
        }
        setIsCopied(true)
    }

    console.log(data.clientRef);

    return (
        <>
            <section id="" className="section-padding">
                <div className="confirm-container">
                    <CheckCircleFill className="icon" />
                    <h2>Payment Confirmed !</h2>
                    <div
                        onClick={() => copyToClipboard(data?.clientRef)}
                        className="payment-confirmed-reference-box"
                        style={isCopied ? { border: "1px solid #00bfa6" } : { border: "1px solid #e0e0e0" }}
                    >
                        <p>{data?.clientRef}</p>
                        {isCopied ? <small className="copied">Copied to clipboard</small> : <small>Reference Number</small>}
                    </div>
                    <p>You will receive an email containing the reference number and invoice, along with the payment confirmation.</p>
                    <p>Thank you!</p>
                    <Link className="back-btn" to="/">Go Back</Link>
                </div>
            </section >

        </>
    )
}

export default PaymentConfirmed