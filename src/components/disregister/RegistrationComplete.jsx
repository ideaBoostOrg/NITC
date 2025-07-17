import { CheckCircleFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const RegistrationComplete = () => {

    return (
        <>
            <section id="" className="section-padding notificaiton-pages">
                <div className="confirm-container">
                    <CheckCircleFill className="icon" />
                    <h2>Registration Complete !</h2>
                    <p>Thank you!</p>
                    <Link className="back-btn" to="/">Go Back</Link>
                </div>
            </section >
        </>
    )
}

export default RegistrationComplete