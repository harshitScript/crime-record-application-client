import { Card } from "../../../../../components/Cards/Card";
import styled from "styled-components/macro";
import { TitleMd } from "../../../../../components/Typography/Title";
import { SubTitleMd } from "../../../../../components/Typography/SubTitle";
import CardLoader from "../../../../../components/Loaders/CardLoader";
import CardError from "../../../../../components/Errors/CardError";
import CreateRecordForm from "./components/CreateRecordForm/CreateRecordForm";
import { useUrlQueries } from "../../../../../customHooks/useUrlQuery";
import useRecord from "../../../../../customHooks/useRecord";

const CreateRecord = () => {
  const { edit } = useUrlQueries();
  const { recordData, recordDataError, recordDataLoading, recordDataRefetch } =
    useRecord({ recordId: edit });

  return (
    <>
      <StickyCard>
        <TitleMd>Create Criminal Record</TitleMd>
        <SubTitleMd>
          create a new criminal record with all the available data.
        </SubTitleMd>
      </StickyCard>
      {recordDataLoading ? (
        <CardLoader height="200px" helperText="Fetching record details." />
      ) : (
        <></>
      )}
      {recordDataError ? (
        <CardError
          height="200px"
          helperText="Failed to fetch record details."
          refetch={recordDataRefetch}
        />
      ) : (
        <></>
      )}
      <CreateRecordForm initialRecordData={recordData} />
    </>
  );
};

const StickyCard = styled(Card)`
  position: sticky;
  top: 10px;
  z-index: 1;
`;

export default CreateRecord;
