import { useNavigate } from "react-router-dom";
import FullScreenError from "../../../../../../components/FullScreenError/FullScreenErrorPage";
import FullScreenLoader from "../../../../../../components/FullScreenLoader/FullScreenLoader";
import useRecords from "../../../../../../customHooks/useRecords";
import RecordCard from "./RecordCard/RecordCard";

const RenderRecords = () => {
  const { recordsIdData, recordsIdLoading, recordsIdError, recordsIdRefetch } =
    useRecords({});
  const navigate = useNavigate();

  if (recordsIdLoading) return <FullScreenLoader />;
  if (recordsIdError)
    return (
      <FullScreenError
        refetch={recordsIdRefetch}
        title="Failed to fetch records please retry."
        back={navigate.bind(null, "/dashboard")}
      />
    );

  return (
    <>
      {recordsIdData.map((rawObj) => (
        <RecordCard key={rawObj?._id} recordId={rawObj?._id} />
      ))}
    </>
  );
};
export default RenderRecords;
