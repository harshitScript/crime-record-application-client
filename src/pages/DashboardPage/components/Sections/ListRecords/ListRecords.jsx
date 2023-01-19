import styled from "styled-components/macro";
import { Card } from "../../../../../components/Cards/Card";
import { SubTitleMd } from "../../../../../components/Typography/SubTitle";
import { TitleMd } from "../../../../../components/Typography/Title";
import RenderRecordsContext from "../../../../../context/renderRecordsContext";
import RenderRecords from "./components/RenderRecords";
const ListRecords = () => {
  return (
    <>
      <StickyCard>
        <TitleMd>List Records Section</TitleMd>
        <SubTitleMd>List all the records in the database.</SubTitleMd>
      </StickyCard>
      <RenderRecordsContext.Provider value={{ user: true }}>
        <RenderRecords />
      </RenderRecordsContext.Provider>
    </>
  );
};
const StickyCard = styled(Card)`
  position: sticky;
  top: 10px;
  z-index: 1;
`;
export default ListRecords;
