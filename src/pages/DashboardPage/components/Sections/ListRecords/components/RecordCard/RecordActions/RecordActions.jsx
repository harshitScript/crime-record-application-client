import { toast } from "react-hot-toast";
import BorderedButton from "../../../../../../../../components/Buttons/BorderedButton";
import Button from "../../../../../../../../components/Buttons/Button";
import { copyToClipBoard } from "../../../../../../../../utils/helper";
import { ActionsContainer } from "./RecordActions.style";

const RecordActions = ({ copyText = "" }) => {
  const copySuccess = () => toast.success("Record UID copied");
  const copyFailure = () => toast.success("Failed to copy Record UID");
  return (
    <ActionsContainer>
      <Button
        onClick={copyToClipBoard.bind(null, {
          text: copyText,
          success: copySuccess,
          failure: copyFailure,
        })}
      >
        Copy UID
      </Button>
      <BorderedButton>Delete</BorderedButton>
    </ActionsContainer>
  );
};
export default RecordActions;
