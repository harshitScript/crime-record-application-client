import { useNavigate } from "react-router-dom";
import FullScreenError from "../../../../../../components/FullScreenError/FullScreenErrorPage";
import FullScreenLoader from "../../../../../../components/FullScreenLoader/FullScreenLoader";
import useRecords from "../../../../../../customHooks/useRecords";
import RecordCard from "./RecordCard/RecordCard";

const RenderRecords = () => {
  const { recordsData, recordsLoading, recordsError, recordsRefetch } =
    useRecords({});
  const navigate = useNavigate();

  if (recordsLoading) return <FullScreenLoader />;
  if (recordsError)
    return (
      <FullScreenError
        refetch={recordsRefetch}
        title="Failed to fetch records please retry."
        back={navigate.bind(null, "/dashboard")}
      />
    );

  return (
    <>
      {recordsData.map((record) => (
        <RecordCard key={record?._id} record={record} />
      ))}
    </>
  );
};
export default RenderRecords;
