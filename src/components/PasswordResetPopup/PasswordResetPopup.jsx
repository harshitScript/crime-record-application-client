import { Modal } from "react-bootstrap";
import PasswordResetForm from "./Components/PasswordResetForm/PasswordResetForm";

const PasswordResetPopup = ({ onClose = () => {} }) => {
  return (
    <Modal centered show={true}>
      <Modal.Header onHide={onClose}>
        <Modal.Title>Password Reset Request</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <PasswordResetForm />
      </Modal.Body>
    </Modal>
  );
};
export default PasswordResetPopup;
