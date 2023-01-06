import { toast } from "react-hot-toast";
import Button from "../../../../../../../../components/Buttons/Button";
import { copyToClipBoard } from "../../../../../../../../utils/helper";
import { FailedOuterCard } from "./FailedRecordCard.style";

const FailedRecordCard = ({ refetch, recordId }) => {
  const copyUId = () => {
    copyToClipBoard({
      text: recordId,
      success: () =>
        toast.success("Record uid copied.", { position: "top-center" }),
      failure: () => {
        toast.error("Failed to copy UID.", {
          position: "top-center",
        });
      },
    });
  };

  return (
    <FailedOuterCard>
      <main>
        <span className="title">Failed To fetch record.</span>
        {
          <span className="uid" onClick={copyUId}>
            {recordId}
          </span>
        }
        <Button onClick={refetch}>Refetch Record</Button>
      </main>
    </FailedOuterCard>
  );
};
export default FailedRecordCard;
