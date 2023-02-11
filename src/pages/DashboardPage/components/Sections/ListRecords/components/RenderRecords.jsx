import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FullScreenError from "../../../../../../components/FullScreenError/FullScreenErrorPage";
import FullScreenLoader from "../../../../../../components/FullScreenLoader/FullScreenLoader";
import RenderRecordsContext from "../../../../../../context/renderRecordsContext";
import useRecords from "../../../../../../customHooks/useRecords";
import RecordCard from "./RecordCard/RecordCard";
import RecordTypeTabs from "./RecordTypeTabs/RecordTypeTabs";

const RenderRecords = () => {
  const [creator, setCreator] = useState("all");
  const { recordsIdData, recordsIdLoading, recordsIdError, recordsIdRefetch } =
    useRecords({ creator });
  const navigate = useNavigate();
  const { user } = useContext(RenderRecordsContext);

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
      {user ? (
        <RecordTypeTabs creator={creator} setCreator={setCreator} />
      ) : (
        <></>
      )}
      {recordsIdData.map((rawObj) => (
        <RecordCard key={rawObj?._id} recordId={rawObj?._id} />
      ))}
    </>
  );
};
export default RenderRecords;
