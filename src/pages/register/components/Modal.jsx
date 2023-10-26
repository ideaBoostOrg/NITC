import { useEffect } from 'react';
import { loadPaycorpPayment } from '../../../pay';
import { XLg } from "react-bootstrap-icons";

const Modal = (props) => {

    useEffect(() => {
        loadPaycorpPayment(buildPayment(), 'paycorp-payment')
    }, [])

    // console.log("netTotal : ", netTotal);

    const buildPayment = () => {
        return {
            // NOTE: this is the QuickWeb DEMO client ID.
            // You may use it for initial setup
            // but replace with the Client ID
            // provided by Paycorp for final testing.
            clientId: 14002582,
            paymentAmount: 100.00,
            currency: 'LKR',
            // returnUrl: `https://${window.location.hostname}/payment-confirm?success=true`,
            returnUrl: `http://127.0.0.1:5173/payment-confirm?success=true`,
            clientRef: 'CREF-12345',
            comment: 'This is a demo payment'
        };
    }

    // eslint-disable-next-line react/prop-types
    const { isOpen, onClose } = props;
    return (
        <div className="backdrop" style={{ display: isOpen ? 'block' : 'none' }}>
            <div className="modal" style={{ display: isOpen ? 'block' : 'none' }}>
                <div className="payment-heading">
                    <h5>Payment details</h5>
                    <button onClick={() => { onClose(false) }}><XLg /></button>
                </div>
                <div className="payment-wrapper">
                    <div id="paycorp-payment"></div>
                </div>
            </div>
        </div>
    );
};


export default Modal