import { XLg } from "react-bootstrap-icons";
import CSSL_Awards_Flyer from "../../../assets/img/CSSL_Awards_Flyer.jpg";


const View_more = (props) => {
  // eslint-disable-next-line react/prop-types
  const { isOpen, onClose } = props;

  return (
    <div
      className="backdrop"
      style={{
        display: isOpen ? "block" : "none",
        backgroundColor: "transparent",

      }}
    >


      <div
        className="modal view-more-modal"
        style={{
          display: isOpen ? "block" : "none",
          minHeight: "300px",
          width: "450px",
          paddingInline: "1rem",
          height: "600px",
          userSelect: "none",
        }}
      >
        <div className="view-more-heading">
          <h5></h5>
          {/* <h5></h5> */}
          <button
            onClick={() => {
              onClose(false);
            }}
          >
            <XLg />
          </button>
        </div>

        {/* <div className="terms-wrapper" style={{ border: "none" }}> */}
        <img className="view-more-img" src={CSSL_Awards_Flyer} alt="" />
        {/* </div> */}
      </div>

      {/* <div className="term-footer"></div> */}
    </div>
  );
};

export default View_more;
