import { Modal } from "react-bootstrap";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useVisitor from "../../customHooks/useVisitor";
import BorderedButton from "../Buttons/BorderedButton";
import Button from "../Buttons/Button";
const CookiePopup = () => {
  const navigate = useNavigate();
  const { triggerTrackVisitorQuery, trackVisitorQuery } = useVisitor();
  const acceptClickHandler = async () => {
    try {
      await triggerTrackVisitorQuery();
      toast.success("Cookie set Successfully", { position: "top-center" });
    } catch {
      toast.error("Failed to set Cookies.", {
        position: "top-center",
      });
    }
  };
  const denyClickHandler = () => {
    navigate("/view/records", { replace: true });
  };
  return (
    <Modal show={true}>
      <Modal.Header>
        <Modal.Title>Privacy</Modal.Title>
      </Modal.Header>
      <Modal.Body>We use cookies to improve your experience.</Modal.Body>
      <Modal.Footer>
        <Button
          onClick={acceptClickHandler}
          loader={trackVisitorQuery?.isLoading}
        >
          {trackVisitorQuery?.isError ? "Retry" : "Accept"}
        </Button>
        <BorderedButton onClick={denyClickHandler}>Deny</BorderedButton>
      </Modal.Footer>
    </Modal>
  );
};
export default CookiePopup;
