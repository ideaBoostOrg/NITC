/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { useState } from "react";
import { CheckCircleFill, XCircleFill } from "react-bootstrap-icons";
import Loading from "../../../components/Loading";
import { firestore } from "../../../firebase";
import RegistrationComplete from "./RegistrationComplete";

function DisBillingDetails({ setIsCheckout, setFormData, setSessions, setFirstTime, setIsValiedMember }) {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [nic, setNic] = useState("");
    const [organization, setOrganization] = useState("");
    const [address, setAddress] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [mode, setMode] = useState("Physical");


    const [btnState, setBtnState] = useState("verify");

    const [inputError, setInputError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [isRegistered, setIsRegistered] = useState(false);

    const [isEmailValid, setIsEmailValid] = useState(null);
    const [isEmailValidating, setIsEmailValidating] = useState(null);

    const [isNicValid, setIsNicValid] = useState(null);
    const [isContactNoValid, setIsContactNoValid] = useState(null);


    const handleRadioBtn = (e) => {
        const value = e.target.value;
        setMode(value);
    }

    const createNewRecord = async () => {
        setIsLoading(true);
        setIsRegistered(false);
        try {
            await addDoc(collection(firestore, "online-2024"),
                {
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    nic: nic,
                    organization: organization ?? "",
                    address: address,
                    contactNumber: contactNumber,
                    confKit: 'Not Issued',
                    isInvitee: true,
                    securityStatus: "active",
                });
            setIsRegistered(true);
        } catch (err) {
            console.log(err);
            setIsRegistered(false);
        } finally {
            setIsLoading(false);
        }

    }

    const handleNext = () => {
        if (mode === 'Online') {
            createNewRecord()
            setFirstName("")
            setLastName("")
            setEmail("")
            setNic("")
            setOrganization("")
            setAddress("")
            setContactNumber("")
        } else {
            handleNextPage()
        }
    }

    const handleNextPage = () => {
        if (isEmailValid && isContactNoValid && isNicValid) {
            if (firstName && lastName && email && nic && address) {
                setInputError(false);
                const data = {
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    nic: nic,
                    organization: organization ?? "",
                    address: address,
                    contactNumber: contactNumber,
                }
                setFormData(data)
                setIsCheckout(true);
            } else {
                setInputError(true);
            }
        }
    }

    const handleValidateEmail = async (email) => {
        if (email === "") {
            setIsEmailValid(null);
            return;
        }
        const regexEmail = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
        if (!regexEmail.test(email)) {
            setIsEmailValid(false);
            return;
        }
        setIsEmailValidating(true);
        const q = query(collection(firestore, "users-2024"), where("email", "==", email))
        const querySnapshot = await getDocs(q)
        if (querySnapshot.docs.length > 0) {
            setFirstTime(false)
            const user = querySnapshot.docs[0].data()
            const reg_sessions = user.regSessions ?? []
            setSessions(reg_sessions)
            const unRegisteredSessions = reg_sessions.filter(session => session.isRegistered === false)
            if (reg_sessions.length > 0 && unRegisteredSessions.length < 1) {
                setIsEmailValid(false)
            } else {
                setIsEmailValid(true)

            }
        } else {
            setFirstTime(true)
            setSessions([])
            setIsEmailValid(true)
        }

        setIsEmailValidating(false)
    }

    const handleValidateNic = (nic) => {
        if (nic === "") {
            setIsNicValid(null);
            return;
        }

        const oldEmailRegex = /^[1-9][0-9]{8}[vV]$/;
        const newEmailRegex = /^[0-9]{12}$/;
        const passportRegex = /^[A-Z]{2}[0-9]{7}$/;

        if (oldEmailRegex.test(nic) || newEmailRegex.test(nic) || passportRegex.test(nic)) {
            setIsNicValid(true);
        } else {
            setIsNicValid(false);
        }
    }

    const handleValidateContanctNo = (contactNo) => {
        if (contactNo === "") {
            setIsContactNoValid(null)
            return;
        }

        const regexContactNo = /^[0-9]{10}$/
        const regexContactNoWithPluses = /^\+[0-9]{11}$/

        if (regexContactNo.test(contactNo) || regexContactNoWithPluses.test(contactNo)) {
            setIsContactNoValid(true)
        } else {
            setIsContactNoValid(false)
        }
    }

    return (
      <>
        {isLoading ? (
          <Loading />
        ) : isRegistered ? (
          <RegistrationComplete />
        ) : (
          <>
            <section
              className="section-padding"
              style={{ margin: "30px 10px", padding: "0" }}
            >
              <div className="container">
                <div className="cssl-member-box row">
                  <div className="col-lg-12 col-sm-12">
                    <h5 style={{ fontSize: "20px", marginBottom: "30px" }}>
                      Billing details for Digital Investment Summit
                    </h5>

                    <div className="">
                      <p style={{ marginBottom: "10px" }}>Attendence method</p>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <div className="form-check" style={{marginBottom:'10px'}}>
                          <input
                            className="form-check-input"
                            type="radio"
                            name="mode"
                            onChange={handleRadioBtn}
                            value="Online"
                            id="online"
                              disabled
                          />
                          <label className="form-check-label" htmlFor="online">
                            Online - Attend the Digital Investment Summit online
                            free of charge
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="mode"
                            onChange={handleRadioBtn}
                            value="Physical"
                            id="physical"
                            checked
                          />
                          <label
                            className="form-check-label"
                            htmlFor="physical"
                          >
                            Physical - Attend the conference in person for $45.00
                            (15300.00 LKR)
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <br></br>
                <form>
                  <div className="row">
                    <div className="col-lg-6 col-sm-12 form-group">
                      <label className="required-label" htmlFor="firstName">
                        First Name
                      </label>
                      {inputError && (
                        <span className="input-error">
                          This field is required
                        </span>
                      )}
                      <input
                        required
                        className="form-control form-control-sm f-input"
                        type="text"
                        id="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        style={{ borderColor: inputError ? "#f27474" : "#ccc" }}
                      />
                    </div>
                    <div className="col-lg-6 col-sm-12 form-group">
                      <label className="required-label" htmlFor="lastName">
                        Last Name
                      </label>
                      {inputError && (
                        <span className="input-error">
                          This field is required
                        </span>
                      )}
                      <input
                        required
                        className="form-control form-control-sm f-input"
                        type="text"
                        id="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        style={{ borderColor: inputError ? "#f27474" : "#ccc" }}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6 col-sm-12 form-group">
                      <div className="alert-row">
                        <label className="required-label" htmlFor="email">
                          Email
                        </label>
                        {
                          // isEmailValidating === null ? "" :
                          //     isEmailValid === null ? inputError && <span className="input-error">This field is required</span> :
                          //         isEmailValid ? "" : <span className="input-error">Email already in use.</span>
                          isEmailValidating === null ? (
                            inputError && (
                              <span className="input-error">
                                This field is required
                              </span>
                            )
                          ) : isEmailValidating ? (
                            ""
                          ) : isEmailValid ? (
                            ""
                          ) : (
                            <span className="input-error">
                              Email already in use.
                            </span>
                          )
                        }
                        {/* <span className="double-check-alert">Please, double-check your email.</span> */}
                      </div>
                      <div className="input-validate">
                        <input
                          required
                          className="form-control form-control-sm f-input"
                          type="email"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          onInput={(e) => handleValidateEmail(e.target.value)}
                          style={{
                            borderColor: inputError
                              ? "#f27474"
                              : "#ccc !important",
                          }}
                        />
                        <div className="input-validate-icon">
                          {isEmailValidating === null ? (
                            ""
                          ) : isEmailValidating ? (
                            <div className="loading-spinner-container">
                              <div className="spinner"></div>
                            </div>
                          ) : isEmailValid ? (
                            <CheckCircleFill
                              style={{
                                color: "#15b046",
                              }}
                            />
                          ) : (
                            <XCircleFill
                              style={{
                                color: "#f00",
                              }}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-12 form-group">
                      <label className="required-label" htmlFor="contactNumber">
                        Contact Number
                      </label>
                      {isContactNoValid === null ? (
                        inputError && (
                          <span className="input-error">
                            This field is required
                          </span>
                        )
                      ) : isContactNoValid ? (
                        ""
                      ) : (
                        <span className="input-error">
                          Invalid Contact Number
                        </span>
                      )}
                      <input
                        required
                        className="form-control form-control-sm f-input"
                        type="text"
                        id="contactNumber"
                        value={contactNumber}
                        onChange={(e) => setContactNumber(e.target.value)}
                        onInput={(e) =>
                          handleValidateContanctNo(e.target.value)
                        }
                        style={{ borderColor: inputError ? "#f27474" : "#ccc" }}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6 col-sm-12 form-group">
                      <label className="required-label" htmlFor="nic">
                        NIC
                      </label>
                      {isNicValid === null ? (
                        inputError && (
                          <span className="input-error">
                            This field is required
                          </span>
                        )
                      ) : isNicValid ? (
                        ""
                      ) : (
                        <span className="input-error">Invalid NIC</span>
                      )}
                      <input
                        required
                        className="form-control form-control-sm f-input"
                        type="text"
                        id="nic"
                        value={nic}
                        onChange={(e) => setNic(e.target.value)}
                        onInput={(e) => handleValidateNic(e.target.value)}
                        style={{ borderColor: inputError ? "#f27474" : "#ccc" }}
                      />
                    </div>
                    <div className="col-lg-6 col-sm-12 form-group">
                      <label className="optional-label" htmlFor="organization">
                        Organization
                      </label>
                      <input
                        required
                        className="form-control form-control-sm f-input"
                        type="text"
                        id="organization"
                        value={organization}
                        onChange={(e) => setOrganization(e.target.value)}
                        style={{ borderColor: "#ccc" }}
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-6 col-sm-12 form-group">
                      <label className="required-label" htmlFor="address">
                        Address
                      </label>
                      {inputError && (
                        <span className="input-error">
                          This field is required
                        </span>
                      )}
                      <input
                        required
                        className="form-control form-control-sm f-input"
                        type="text"
                        id="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        style={{ borderColor: inputError ? "#f27474" : "#ccc" }}
                      />
                    </div>
                  </div>

                  <div className="form-group d-flex justify-content-end">
                    <button
                      className="submit-btn next-btn"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNext();
                      }}
                      disabled={
                        !isEmailValid || !isContactNoValid || !isNicValid
                      }
                    >
                      Next
                    </button>
                  </div>
                </form>
              </div>
            </section>
          </>
        )}
      </>
    );
}

export default DisBillingDetails
