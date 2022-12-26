import { Card } from "../../../../../components/Cards/Card";
import styled from "styled-components/macro";
import { TitleMd } from "../../../../../components/Typography/Title";
import { SubTitleMd } from "../../../../../components/Typography/SubTitle";
import CreateRecordForm from "./components/CreateRecordForm/CreateRecordForm";

const CreateRecord = () => {
  return (
    <>
      <StickyCard>
        <TitleMd>Create Criminal Record</TitleMd>
        <SubTitleMd>
          create a new criminal record with all the available data.
        </SubTitleMd>
      </StickyCard>
      <CreateRecordForm />
    </>
  );
};

const StickyCard = styled(Card)`
  position: sticky;
  top: 10px;
  z-index: 1;
`;

export default CreateRecord;
