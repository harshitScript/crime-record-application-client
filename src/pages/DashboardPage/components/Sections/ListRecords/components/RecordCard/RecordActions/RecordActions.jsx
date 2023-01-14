import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import BorderedButton from "../../../../../../../../components/Buttons/BorderedButton";
import Button from "../../../../../../../../components/Buttons/Button";
import useRecord from "../../../../../../../../customHooks/useRecord";
import recordApi from "../../../../../../../../store/recordApi";
import { copyToClipBoard } from "../../../../../../../../utils/helper";
import { ActionsContainer } from "./RecordActions.style";

const RecordActions = ({ copyText = "", recordId = "" }) => {
  const dispatch = useDispatch();
  const { triggerDeleteRecord, deleteRecordQuery } = useRecord({ recordId });
  const copySuccess = () => toast.success("Record UID copied");
  const copyFailure = () => toast.success("Failed to copy Record UID");
  const deleteRecord = async () => {
    try {
      const response = await triggerDeleteRecord({ recordId });
      if (response?.error) throw new Error();
      toast.success("Record deleted successfully.");
      dispatch(recordApi.util.invalidateTags(["record-ids"]));
    } catch {
      toast.error("Failed to delete record.");
    }
  };
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
      <BorderedButton
        onClick={deleteRecord}
        loader={deleteRecordQuery?.isLoading}
      >
        Delete
      </BorderedButton>
    </ActionsContainer>
  );
};
export default RecordActions;
