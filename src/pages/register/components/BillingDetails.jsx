/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { firestore } from "../../../firebase";
import { collection, getDocs, query, where, addDoc } from "firebase/firestore";
import { CheckCircleFill } from "react-bootstrap-icons";
import { XCircleFill } from "react-bootstrap-icons";
import logo from "../../../assets/img/logo-crop.png";

function BillingDetails({ isMember, setisMember, memberId, setMemberId, setIsCheckout, clientRef, setClientRef, commet, setCommet, setFormData }) {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [nic, setNic] = useState("");
    const [organization, setOrganization] = useState("");
    const [address, setAddress] = useState("");
    const [contactNumber, setContactNumber] = useState("");


    const [btnState, setBtnState] = useState("verify");

    const [inputError, setInputError] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [isEmailValid, setIsEmailValid] = useState(null);
    const [isEmailValidating, setIsEmailValidating] = useState(null);

    const [isNicValid, setIsNicValid] = useState(null);
    const [isContactNoValid, setIsContactNoValid] = useState(null);


    const handleVerify = async () => {
        setBtnState("verifing");

        const q = query(collection(firestore, "members"), where("memNo", "==", memberId));
        const querySnapshot = await getDocs(q);

        if (querySnapshot.docs.length > 0) {
            const member = querySnapshot.docs[0].data();
            handleValidateEmail(member.email)
            handleValidateNic(member.nic)
            setFirstName(member.firstName ?? "");
            setLastName(member.lastName ?? "");
            setEmail(member.email ?? "");
            setNic(member.nic ?? "");
            setOrganization(member.organization ?? "");
            setAddress(member.address ?? "");

            const tq = query(collection(firestore, "tickets"), where("memNo", "==", memberId));
            const ticketQuerySnapshot = await getDocs(tq);

            if (ticketQuerySnapshot.docs.length > 0) {
                setErrorMsg("You have already registered for the conference");
                setBtnState("not-verified");
                return;
            }
            setBtnState("verified");
        } else {
            setBtnState("not-verified");
            setErrorMsg("Invalid member ID, Try again!");
        }

    }

    const showBtn = () => {
        if (btnState === "verify") {
            return (
                <button
                    className="verify-btn"
                    onClick={(e) => {
                        if (memberId === "") {
                            setErrorMsg("Please enter your member ID");
                            setBtnState("not-verified");
                        } else {
                            e.preventDefault();
                            handleVerify();
                        }
                    }}
                >
                    Verify
                </button>
            )
        } else if (btnState === "verifing") {
            return (
                <Checking />
            )
        } else if (btnState === "verified") {
            return (
                <Verified />
            )
        }
        else if (btnState === "not-verified") {
            return (
                <NotVerified />
            )
        }
    }

    const inputBorderColor = () => {
        if (btnState === "verify") {
            return "gray";
        } else if (btnState === "verifing") {
            return "gray";
        } else if (btnState === "verified") {
            return "#15b046";
        }
        else if (btnState === "not-verified") {
            return "#f27474";
        }
    }

    const handleCheckbox = (e) => {
        const value = e.target.checked;
        if (value === true) {
            setisMember(true);
        } else {
            setisMember(false);
            setBtnState("verify");
            setMemberId("");
        }
    }

    const handleNext = async () => {
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
        const q = query(collection(firestore, "users"), where("email", "==", email));
        const querySnapshot = await getDocs(q);
        if (querySnapshot.size > 0) {
            setIsEmailValid(false)
        } else {
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
            <section className="section-padding">
                <div className="container">
                    <h5 style={{ fontSize: "22px", marginBottom: "20px" }}>
                        Billing details
                    </h5>
                    <div className="cssl-member-box row">
                        <div className="col-lg-6 col-sm-12">
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    onChange={handleCheckbox}
                                    value=""
                                    id="csslMemberCheck"
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor="csslMemberCheck"
                                >
                                    I&apos;m a CSSL member.
                                </label>
                            </div>
                            <span className="" style={{ color: "gray" }}>
                                If you are a CSSL member, you will receive a 20% discount.
                            </span>
                        </div>
                        {isMember && (
                            <div className="col-lg-6 col-sm-12">
                                <div className="memberid">
                                    <label htmlFor="memberId">CSSL Member ID</label>
                                    <div className="" style={{ display: "flex" }}>
                                        <input
                                            autoFocus={isMember}
                                            className="memberId-input"

                                            type="text"
                                            id="memberId"
                                            value={memberId}
                                            onChange={(e) => {
                                                setMemberId(e.target.value)
                                                setBtnState("verify")
                                                // setDiscount(0);
                                                // setNetTotal(parseFloat(pack.price))
                                            }
                                            }
                                            onKeyDown={(e) => {
                                                if (e.key === 'Enter') {
                                                    if (memberId === "") {
                                                        setErrorMsg("Please enter your member ID");
                                                        setBtnState("not-verified");
                                                    } else {
                                                        handleVerify()
                                                        e.preventDefault();
                                                        e.target.blur();
                                                    }
                                                }
                                            }}
                                            style={{ borderColor: inputBorderColor(), width: '250px' }}
                                        />
                                        {showBtn()}
                                    </div>
                                </div>
                                {btnState === 'not-verified' && <p style={{ color: '#f27474', marginTop: "0" }}>{errorMsg}</p>}
                            </div>
                        )}
                    </div>
                    <br></br>
                    <form>
                        <div className="row">
                            <div className="col-lg-6 col-sm-12 form-group">
                                <label className="required-label" htmlFor="firstName">First Name</label>
                                {inputError && <span className="input-error">This field is required</span>}
                                <input required
                                    className="form-control form-control-sm f-input"
                                    type="text"
                                    id="firstName"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    style={{ borderColor: inputError ? "#f27474" : "#ccc" }}
                                />
                            </div>
                            <div className="col-lg-6 col-sm-12 form-group">
                                <label className="required-label" htmlFor="lastName">Last Name</label>
                                {inputError && <span className="input-error">This field is required</span>}
                                <input required
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
                                    <label className="required-label" htmlFor="email">Email</label>
                                    {
                                        // isEmailValidating === null ? "" :
                                        //     isEmailValid === null ? inputError && <span className="input-error">This field is required</span> :
                                        //         isEmailValid ? "" : <span className="input-error">Email already in use.</span>
                                        isEmailValidating === null ? inputError && <span className="input-error">This field is required</span> :
                                            isEmailValidating ? "" : isEmailValid ? "" : <span className="input-error">Email already in use.</span>
                                    }
                                    <span className="double-check-alert">Please, double-check your email address.</span>
                                </div>
                                <div className="input-validate">
                                    <input required
                                        className="form-control form-control-sm f-input"
                                        type="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        onInput={(e) => handleValidateEmail(e.target.value)}
                                        style={{ borderColor: inputError ? "#f27474" : "#ccc !important" }}
                                    />
                                    <div className="input-validate-icon">
                                        {
                                            isEmailValidating === null ? "" :
                                                isEmailValidating ?
                                                    <div className="loading-spinner-container">
                                                        <div className="spinner"></div>
                                                    </div> :
                                                    isEmailValid ? <CheckCircleFill style={{
                                                        color: "#15b046",
                                                    }} /> : <XCircleFill style={{
                                                        color: "#f00"
                                                    }} />
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 form-group">
                                <label className="required-label" htmlFor="contactNumber">Contact Number</label>
                                {
                                    isContactNoValid === null ? inputError && <span className="input-error">This field is required</span> :
                                        isContactNoValid ? "" : <span className="input-error">Invalid Contact Number</span>
                                }
                                <input required
                                    className="form-control form-control-sm f-input"
                                    type="text"
                                    id="contactNumber"
                                    value={contactNumber}
                                    onChange={(e) => setContactNumber(e.target.value)}
                                    onInput={(e) => handleValidateContanctNo(e.target.value)}
                                    style={{ borderColor: inputError ? "#f27474" : "#ccc" }}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-sm-12 form-group">
                                <label className="required-label" htmlFor="nic">NIC</label>
                                {
                                    isNicValid === null ? inputError && <span className="input-error">This field is required</span> :
                                        isNicValid ? "" : <span className="input-error">Invalid NIC</span>
                                }
                                <input required
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
                                <label className="optional-label" htmlFor="organization">Organization</label>
                                <input required
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
                                <label className="required-label" htmlFor="address">Address</label>
                                {inputError && <span className="input-error">This field is required</span>}
                                <input required
                                    className="form-control form-control-sm f-input"
                                    type="text"
                                    id="address"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    style={{ borderColor: inputError ? "#f27474" : "#ccc" }}
                                />
                            </div>
                        </div>

                        <div className="form-footer">
                            <p className="star-before">For members of professional bodies (BCS, ISACA, IESL, IET,
                                IEEE, ACM, ACS, SLASSCOM, and FITTIS), an exclusive discount awaits! Contact
                                your secretariat to claim this benefit.</p>
                        </div>
                        <div className="form-group d-flex justify-content-end">
                            <button
                                className="submit-btn"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleNext()
                                }}

                                disabled={!isEmailValid || !isContactNoValid || !isNicValid}

                            >
                                Next
                            </button>
                        </div>
                    </form>
                </div>
            </section>


        </>
    )
}

export default BillingDetails

const Checking = () => {
    return (
        <div className=" checking">
            <div className="loading-spinner-container">
                <div className="spinner"></div>
            </div>
        </div>
    )
}

const Verified = () => {
    return (
        <div className="verified">
            <CheckCircleFill />
        </div>
    )
}

const NotVerified = () => {
    return (
        <div className="not-verified">
            <XCircleFill />
        </div>
    )
}