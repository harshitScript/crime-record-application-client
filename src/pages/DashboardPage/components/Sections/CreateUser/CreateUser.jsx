import { Card } from "../../../../../components/Cards/Card";
import { SubTitleMd } from "../../../../../components/Typography/SubTitle";
import { TitleMd } from "../../../../../components/Typography/Title";
import CreateUserForm from "./components/CreateUserForm/CreateUserForm";
import styled from "styled-components/macro";

const CreateUser = () => {
  return (
    <>
      <StickyCard>
        <TitleMd>Create User Section</TitleMd>
        <SubTitleMd>
          create a new user with all the available permissions.
        </SubTitleMd>
      </StickyCard>
      <CreateUserForm />
    </>
  );
};

const StickyCard = styled(Card)`
  position: sticky;
  top: 10px;
`;
export default CreateUser;
