import { useContext } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import BorderedButton from "../../../../../../../../components/Buttons/BorderedButton";
import Button from "../../../../../../../../components/Buttons/Button";
import RenderRecordsContext from "../../../../../../../../context/renderRecordsContext";
import useRecord from "../../../../../../../../customHooks/useRecord";
import recordApi, {
  useLazyGenerateRecordPDFQuery,
} from "../../../../../../../../store/recordApi";
import { copyToClipBoard } from "../../../../../../../../utils/helper";
import { ActionsContainer } from "./RecordActions.style";
import { FaFileDownload } from "react-icons/fa";

const RecordActions = ({ copyText = "", recordId = "" }) => {
  const dispatch = useDispatch();
  const { triggerDeleteRecord, deleteRecordQuery } = useRecord({ recordId });
  const [triggerRecordPdf, { isLoading: pdfIsLoading }] =
    useLazyGenerateRecordPDFQuery();
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
    try {
      const res = await triggerRecordPdf({ recordId });
      if (res?.error) {
        const error = new Error("Failed to generate pdf.");
        throw error;
      }
    } catch (error) {
      toast.error(error?.message, { position: "top-center" });
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
      <Button onClick={generateRecord} loader={pdfIsLoading}>
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
