import { useNavigate } from "react-router-dom";
import {
  SubTitleMd,
  SubTitleSm,
} from "../../../../../../../components/Typography/SubTitle";
import { TitleMd } from "../../../../../../../components/Typography/Title";
import useRecord from "../../../../../../../customHooks/useRecord";
import FailedRecordCard from "./FailedRecordCard/FailedRecordCard";
import ImageSection from "./ImageSection/ImageSection";
import ListCrimes from "./ListCrimes/ListCrimes";
import LoadingRecord from "./LoadingRecord/LoadingRecord";
import RecordActions from "./RecordActions/RecordActions";
import { CenterLink, OuterCard } from "./RecordCard.style";

const RecordCard = ({ recordId }) => {
  const navigate = useNavigate();
  const { recordData, recordDataError, recordDataRefetch, recordDataLoading } =
    useRecord({ recordId });

  if (recordDataLoading) {
    return <LoadingRecord />;
  }

  if (recordDataError) {
    return <FailedRecordCard refetch={recordDataRefetch} recordId={recordId} />;
  }

  const onEditClick = () => {
    navigate(`/dashboard/create-record?edit=${recordId}`);
  };

  return (
    <OuterCard>
      <section className="first-section">
        <ImageSection
          recordId={recordData?._id}
          imageData={recordData?.imageData}
          recordDataRefetch={recordDataRefetch}
        />
      </section>
      <section className="second-section">
        <TitleMd>{recordData?.name}</TitleMd>
        <CenterLink onClick={onEditClick}>Edit</CenterLink>
        <hr />
        <SubTitleSm>
          {recordData?.mobile},{recordData?.address}
        </SubTitleSm>
        <SubTitleMd>
          {recordData?.city}, {recordData?.state}
        </SubTitleMd>
        <hr />
        <RecordActions
          copyText={recordId}
          recordId={recordId}
          creatorId={recordData?.creator}
        />
        <hr />
        <ListCrimes crimesList={recordData?.crimes} />
      </section>
    </OuterCard>
  );
};
export default RecordCard;
