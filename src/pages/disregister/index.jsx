import { useState } from "react";
// import logo from "../../assets/img/logo-crop.png";
import logo from "../../assets/img/NITC-Logo.png";
import DisBillingDetails from "./components/DisBillingDetails";
import DisRegisterForm from "./components/DisRegisterForm";

function DisRegister() {
  const [isMember, setisMember] = useState(false);
  const [memberId, setMemberId] = useState("");
  const [clientRef, setClientRef] = useState("");
  const [commet, setCommet] = useState("");
  const [isCheckout, setIsCheckout] = useState(false);
  const [sessions, setSessions] = useState([]);
  const [firstTime, setFirstTime] = useState(true);
  const [formData, setFormData] = useState({});
  const [isValiedMember, setIsValiedMember] = useState(false);

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
      {isCheckout ? (
        <DisRegisterForm
          isMember={isMember}
          setisMember={setisMember}
          memberId={memberId}
          setMemberId={setMemberId}
          clientRef={clientRef}
          setClientRef={setClientRef}
          formData={formData}
          sessions={sessions}
          firstTime={firstTime}
          isValiedMember={isValiedMember}
        />
      ) : (
        <DisBillingDetails
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
          setSessions={setSessions}
          setFirstTime={setFirstTime}
          setIsValiedMember={setIsValiedMember}
        />
      )}
    </>
  );
}

export default DisRegister;
