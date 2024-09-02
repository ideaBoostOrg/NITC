import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../assets/css/ModalPopup.css';  // Import the custom CSS file


function ModalPopup(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="custom-modal"  // Apply the custom class
    >
      <Modal.Body>
        <h4>CSSL Member NIC does not match with the entered NIC</h4>
        <p>
          Please enter the NIC number with the NIC Number you gave when registering as a CSSL Member or Untick the box if you are not an CSSL Member.
          <br /> <br />
          If any issues feel free to contact us on <a href="mailto:cssl@nitc.com">cssl@nitc.com</a> or <strong>+94 77 536 2782</strong> 
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button className="btn-close" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalPopup;
