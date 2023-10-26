// import { HourglassSplit } from "react-bootstrap-icons";
import { CreditCard } from "react-bootstrap-icons";

/* eslint-disable react/no-unescaped-entities */
function PaymentProcessing() {
    return (
        <section id="" className="section-padding">
            <div className="confirm-container payment-processing">
                <div className="payment-processing-spinner-container">
                    <div className="payment-processing-spinner"></div>
                    {/* <HourglassSplit className="icon" /> */}
                    <CreditCard className="icon" />
                </div>
                <br></br>
                <h2>Payment is Processing.</h2>
                <p>This won't take long. Please do not go back or close the tab.</p>
                <small className="text-center">We are securely processing your payment to ensure a smooth transaction. <br></br>Your patience is greatly appreciated.</small>

            </div>
        </section >
    )
}

export default PaymentProcessing