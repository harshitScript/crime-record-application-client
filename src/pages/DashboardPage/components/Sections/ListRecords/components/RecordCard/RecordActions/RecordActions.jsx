import { useContext } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import BorderedButton from "../../../../../../../../components/Buttons/BorderedButton";
import Button from "../../../../../../../../components/Buttons/Button";
import RenderRecordsContext from "../../../../../../../../context/renderRecordsContext";
import useRecord from "../../../../../../../../customHooks/useRecord";
import recordApi from "../../../../../../../../store/recordApi";
import { copyToClipBoard } from "../../../../../../../../utils/helper";
import { ActionsContainer } from "./RecordActions.style";
import { FaFileDownload } from "react-icons/fa";

const RecordActions = ({ copyText = "", recordId = "" }) => {
  const dispatch = useDispatch();
  const { triggerDeleteRecord, deleteRecordQuery } = useRecord({ recordId });
  const { user } = useContext(RenderRecordsContext);
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
  const generateRecord = async () => {
    window.open(`${process.env.REACT_APP_BASE_URI}record/${recordId}/pdf`);
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
      <Button onClick={generateRecord}>
        <FaFileDownload />
      </Button>
      {user ? (
        <BorderedButton
          onClick={deleteRecord}
          loader={deleteRecordQuery?.isLoading}
        >
          Delete
        </BorderedButton>
      ) : (
        <></>
      )}
    </ActionsContainer>
  );
};
export default RecordActions;
