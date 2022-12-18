import styled from "styled-components/macro";
import { Card } from "../../../../../components/Cards/Card";
import { SubTitleMd } from "../../../../../components/Typography/SubTitle";
import { TitleMd } from "../../../../../components/Typography/Title";
import RenderUsers from "./components/RenderUsers/RenderUsers";

const ListUsers = () => {
  return (
    <>
      <StickyCard>
        <TitleMd>List Users Section</TitleMd>
        <SubTitleMd>List all the active users of the application.</SubTitleMd>
      </StickyCard>
      <RenderUsers />
    </>
  );
};

const StickyCard = styled(Card)`
  position: sticky;
  top: 10px;
  z-index: 1;
`;
export default ListUsers;
