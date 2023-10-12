import { XLg } from "react-bootstrap-icons";
import { useState } from "react";
const TermsModal = (props) => {
  // eslint-disable-next-line react/prop-types
  const { isOpen, onClose, setAcceptTerm } = props;

  const [selectedValue, setSelectedValue] = useState("decline");

  const handleAccept = (e) => {
    e.preventDefault();
    if (selectedValue === "accept") {
      setAcceptTerm(true);
    } else {
      setAcceptTerm(false);
    }
    onClose(false);
  };

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };

  return (
    <div className="backdrop" style={{ display: isOpen ? "block" : "none" }}>
      <div className="modal" style={{ display: isOpen ? "block" : "none" }}>
        <div className="terms-heading">
          <h5>Terms and Conditions for Online Payment</h5>
          <button
            onClick={() => {
              onClose(false);
            }}
          >
            <XLg />
          </button>
        </div>
        <div className="terms-wrapper">
          <div className="section">
            <p>
              The Terms and Conditions contained herein shall apply to any
              person (“Applicant”) using the services of the Computer Society of
              Sri Lanka (CSSL) for making Application through an online payment
              gateway service (“Service”) offered by Payment Gateway Service
              provider, through CSSL’s website i.e. www.cssl.lk Each Applicant
              is therefore deemed to have read and accepted these Terms and
              Conditions.
            </p>
          </div>
          <div className="section">
            <h5>Privacy Policy</h5>
            <p>
              CSSL respects and protects the privacy of the individuals that
              access the information and use the services provided through them.
              Individually identifiable information about the Applicant is not
              will fully disclosed to any third party without first receiving
              the Applicant’s permission, as covered in this Privacy Policy.
            </p>
            <p>
              Please be aware, however, that CSSL will release specific personal
              information about the Applicant if required to do so in the
              following circumstances
            </p>
            <ol className="section-ol">
              <li>
                in order to comply with any valid legal process such as a search
                warrant, statute, or court order, or
              </li>
              <li>
                if any of Applicant’s actions on CSSL’s website violate the
                Terms of Service or any of CSSL’s guidelines for specific
                services, or
              </li>
              <li>
                to protect or defend CSSL’s legal rights or property, the CSSL
                site, or CSSL Applicants; or
              </li>
              <li>
                to investigate, prevent, or take action regarding illegal
                activities, suspected fraud, situations involving potential
                threats to the security, integrity of CSSL website/offerings.
              </li>
            </ol>
          </div>
          <div className="section">
            <h5>General Terms and Conditions for Online-Payments</h5>

            <p>
              Once an Applicant has accepted these Terms and Conditions, he/she
              may register and avail the Services.
            </p>
            <p>
              CSSL’s rights, obligations, undertakings shall be subject to the
              laws in force in Sri Lanka, as well as any directives/ procedures
              of Government of Sri Lanka, and nothing contained in these Terms
              and Conditions shall be in derogation of CSSL's right to comply
              with any law enforcement agencies request or requirements relating
              to any Applicant’s use of the website or information provided to
              or gathered by CSSL with respect to such use. Each Applicant
              accepts and agrees that the provision of details of his/her use of
              the Website to regulators or police or to any other third party in
              order to resolve disputes or complaints which relate to the
              Website shall be at the absolute discretion of CSSL.
            </p>
            <p>
              If any part of these Terms and Conditions are determined to be
              invalid or unenforceable pursuant to applicable law including, but
              not limited to, the warranty disclaimers and liability limitations
              set forth herein, then the invalid or unenforceable provision will
              be deemed superseded by a valid, enforceable provision that most
              closely matches the intent of the original provision and the
              remainder of these Terms and Conditions shall continue in effect.
            </p>
            <p>
              These Terms and Conditions constitute the entire agreement between
              the Applicant and CSSL. These Terms and Conditions supersede all
              prior or contemporaneous communications and proposals, whether
              electronic, oral, or written, between the Applicant and CSSL. A
              printed version of these Terms and Conditions and of any notice
              given in electronic form shall be admissible in judicial or
              administrative proceedings based upon or relating to these Terms
              and Conditions to the same extent and subject to the same
              conditions as other business documents and records originally
              generated and maintained in printed form.
            </p>
            <p>
              The entries in the books of CSSL and/or the Payment Service
              Providers kept in the ordinary course of business of CSSL and/or
              the Payment Service Providers with regard to transactions covered
              under these Terms and Conditions and matters therein appearing
              shall be binding on the Applicant and shall be conclusive proof of
              the genuineness and accuracy of the transaction.
            </p>
          </div>
          <div className="section">
            <h5>Limitation of Liability</h5>
            <p>
              CSSL has made this Service available to the Applicant as a matter
              of convenience. CSSL expressly disclaims any claim or liability
              arising out of the provision of this Service. The Applicant agrees
              and acknowledges that he/she shall be solely responsible for
              his/her conduct and that CSSL reserves the right to terminate the
              rights to use the Service immediately without giving any prior
              notice thereof.
            </p>
            <p>
              CSSL and/or the Payment Service Providers shall not be liable for
              any inaccuracy, error or delay in, or omission of
            </p>
            <ol className="section-ol">
              <li>any data, information or message, or</li>
              <li>
                the transmission or delivery of any such data, information or
                message; or
              </li>
              <li>
                any loss or damage arising from or occasioned by any such
                inaccuracy, error, delay or omission, nonperformance or
                interruption in any such data, information or message.
              </li>
            </ol>
            <p>
              Under no circumstances shall the CSSL and/or the Payment Service
              Providers, its employees, directors, and its third party agents
              involved in processing, delivering or managing the Services, be
              liable for any direct, indirect, incidental, special or
              consequential damages, or any damages whatsoever, including
              punitive or exemplary arising out of or in any way connected with
              the provision of or any inadequacy or deficiency in the provision
              of the Services or resulting from unauthorized access or
              alteration of transmissions of data or arising from suspension or
              termination of the Services.
            </p>
            <p>
              CSSL and the Payment Service Provider(s) assume no liability
              whatsoever for any monetary or other damage suffered by the
              Applicant on account of:
            </p>
            <ol className="section-ol">
              <li>
                the delay, failure, interruption, or corruption of any data or
                other information transmitted in connection with use of the
                Payment Gateway or Services in connection thereto; and/ or
              </li>
              <li>
                Any interruption or errors in the operation of the Payment
                Gateway.
              </li>
            </ol>
            <p>
              The Applicant shall indemnify and hold harmless the Payment
              Service Provider(s) and CSSL and their respective officers,
              directors, agents, and employees, from any claim or demand, or
              actions arising out of or in connection with the utilization of
              the Services.
            </p>
            <p>
              The Applicant agrees that CSSL or any of its employees will not be
              held liable by the Applicant for any loss or damages arising from
              your use of, or reliance upon the information contained on the
              Website, or any failure to comply with these Terms and Conditions
              where such failure is due to circumstance beyond CSSL’s reasonable
              control.
            </p>
          </div>
          <div className="section">
            <h5>Miscellaneous Conditions</h5>
            <p>
              The Applicant agrees, understands and confirms that his/her
              personal data including without limitation details relating to
              debit card/credit card transmitted over the Internet may be
              susceptible to misuse, hacking, theft and/ or fraud and that CSSL
              or the Payment Service Provider(s) have no control over such
              matters.
            </p>
            <p>
              Although all reasonable care has been taken towards guarding
              against unauthorized use of any information transmitted by the
              Applicant, CSSL does not represent or guarantee that the use of
              the Services provided by/through it will not result in theft
              and/or unauthorized use of data over the Internet.
            </p>
            <p>
              CSSL, the Payment Service Provider(s) and its affiliates and
              associates shall not be liable, at any time, for any failure of
              performance, error, omission, interruption, deletion, defect,
              delay in operation or transmission, computer virus, communications
              line failure, theft or destruction or unauthorized access to,
              alteration of, or use of information contained on the Website.
            </p>
            <p>
              The total e-payment online transactions are executed using state
              of the art technology (TLS) to ensure secured transaction. CSSL
              shall not be liable for any failure by the Applicant or third
              party making payment of Fees to properly protect data from being
              seen on their screen by other persons or otherwise obtained by
              such persons, during the online payment process or in respect of
              any omission to provide accurate information in the course of the
              online payment process.
            </p>
          </div>
          <div className="section">
            <h5>Debit/Credit Card, Bank Account Details</h5>
            <p>
              The Applicant agrees that the debit/credit card details provided
              by him/her for use of the aforesaid Service(s) must be correct and
              accurate and that the Applicant shall not use a debit/credit card,
              that is not lawfully owned by him/her or the use of which is not
              authorized by the lawful owner thereof. The Applicant further
              agrees and undertakes to provide correct and valid debit/credit
              card details.
            </p>
            <p>
              The Applicant may pay his/her application fees to CSSL by using a
              debit/credit card or through online banking account. The Applicant
              warrants, agrees and confirms that when he/she initiates a payment
              transaction and/or issues an online payment instruction and
              provides his/her card/bank details:
            </p>
            <ol className="section-ol">
              <li>
                The Applicant is fully and lawfully entitled to use such
                credit/debit card, bank account for such transactions;
              </li>
              <li>
                The Applicant is responsible to ensure that the card/bank
                account details provided by him/ her are accurate;
              </li>
              <li>
                The Applicant authorizes debit of the nominated card/bank
                account for the payment of fees selected by such Applicant along
                with the applicable Fees.
              </li>
              <li>
                The Applicant is responsible to ensure that sufficient credit is
                available on the nominated card/ bank account at the time of
                making the payment to permit the payment.
              </li>
            </ol>
          </div>
          <div className="section">
            <h5>Transaction Charges</h5>
            <p>
              CSSL does not charge any processing fee or service charge from the
              Applicants for online payment. However applicants have to bear the
              necessary transaction charge plus service tax applicable for
              online payment of Application fee. This charge will be taken by
              e-payment solution provider for giving this service. Charges are
              mentioned in CSSL payment Portal where Applicant proceeds for
              online payment.
            </p>
          </div>
          <div className="section">
            <h5>Payment Gateway/Net Banking Disclaimer</h5>
            <p>
              The Service is provided in order to facilitate access to pay
              Application fee online. CSSL or the Payment Service Provider(s) do
              not make any representation of any kind, express or implied, as to
              the operation of the Payment Gateway other than what is specified
              in the Website for this purpose. By accepting/agreeing to these
              Terms and Conditions, the User expressly agrees that his/her use
              of the aforesaid online payment Service is entirely at own risk
              and responsibility of the User.
            </p>
          </div>
          <div className="section">
            <h5>Refund and Cancellation Policy</h5>
            <p>
              Refund for Charge Back Transaction: In the event there is any
              claim for/of charge back by the Applicant for any reason
              whatsoever, such Applicant shall immediately approach CSSL with
              his/ her claim details and claim refund from CSSL alone. Such
              refund (if any) shall be made only by CSSL via payment gateway or
              by means of a demand draft or such other means as CSSL deems
              appropriate. No claims for refund/charge back shall be made by any
              Applicant to the Payment Service Provider(s) and in the event such
              claim is made it shall not be entertained.
            </p>
            <p>
              In these Terms and Conditions, the term “Charge Back” shall mean,
              approved and settled credit card or net banking purchase
              transaction(s) which are at any time refused, debited or charged
              back to merchant account (and shall also include similar debits to
              Payment Service Provider's accounts, if any) by the acquiring bank
              or credit card company for any reason whatsoever, together with
              the bank fees, penalties and other charges incidental thereto.
            </p>
            <p>
              Refund for fraudulent/duplicate transaction(s): The Applicant
              shall directly contact CSSL for any fraudulent transaction(s) on
              account of misuse of Card/ Bank details by a fraudulent
              individual/party and such issues shall be suitably addressed by
              CSSL alone in line with their policies and rules.
            </p>
            <p>
              Server Slow Down/Session Timeout: In case the Website or Payment
              Service Provider’s webpage, that is linked to the Website, is
              experiencing any server related issues like ‘slow down’ or
              ‘failure’ or ‘session timeout’, the Applicant shall, before
              initiating the second payment, check whether his/her Bank Account
              has been debited or not and accordingly resort to one of the
              following options:
            </p>
            <ol className="section-ol">
              <li>
                In case the Bank Account appears to be debited, ensure that
                he/she does not make the payment twice and immediately
                thereafter contact CSSL via e-mail or any other mode of contact
                as provided by CSSL to confirm payment.
              </li>
              <li>
                In case the Bank Account is not debited, the Applicant may
                initiate a fresh transaction to make payment.
              </li>
            </ol>
          </div>
          {/* <div className="section">
            <h5>Product and Services sold</h5>
            <p>This is an academic institution.</p>
          </div> */}
        </div>
        <div className="term-footer">
          <div className="radio-group">
            <div className="form-check">
              <input
                onChange={handleChange}
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                value="decline"
                checked={selectedValue === "decline"}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Decline
              </label>
            </div>
            <div className="form-check">
              <input
                onChange={handleChange}
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                value="accept"
                checked={selectedValue === "accept"}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                Accept
              </label>
            </div>
          </div>
          <div className="action-btns">
            <button className="next" onClick={handleAccept}>
              Ok
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsModal;
