import { useState } from "react";
import logo from "../../assets/img/logo-crop.png";

import BillingDetails from "./components/BillingDetails";
import RegisterForm from "./components/RegisterForm";


function Register() {

  const [isMember, setisMember] = useState(false);
  const [memberId, setMemberId] = useState("");
  const [clientRef, setClientRef] = useState("");
  const [commet, setCommet] = useState("");
  const [isCheckout, setIsCheckout] = useState(false);

  const [formData, setFormData] = useState({})


  return (
    <>
      <section>
        <nav className="navbar navbar-expand-lg bg-inverse scrolling-navbar top-nav-collapse">
          <div className="container">
            <a href="/" className="navbar-brand">
              <img src={logo} alt="" />
            </a>
          </div>
        </nav>
      </section>
      {
        isCheckout ?
          <RegisterForm
            isMember={isMember}
            setisMember={setisMember}
            memberId={memberId}
            setMemberId={setMemberId}
            clientRef={clientRef}
            setClientRef={setClientRef}
            formData={formData}
          />
          :
          <BillingDetails
            isMember={isMember}
            setisMember={setisMember}
            memberId={memberId}
            setMemberId={setMemberId}
            setIsCheckout={setIsCheckout}
            clientRef={clientRef}
            setClientRef={setClientRef}
            commet={commet}
            setCommet={setCommet}
            setFormData={setFormData}
          />}
    </>
  );
}

export default Register;
