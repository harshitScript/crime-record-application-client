import { Card } from "../../../../../components/Cards/Card";
import { SubTitleMd } from "../../../../../components/Typography/SubTitle";
import { TitleMd } from "../../../../../components/Typography/Title";
import CreateUserForm from "./components/CreateUserForm/CreateUserForm";

const CreateUser = () => {
  return (
    <>
      <Card>
        <TitleMd>Create User Section</TitleMd>
        <SubTitleMd>
          create a new user with all the available permissions.
        </SubTitleMd>
      </Card>
      <CreateUserForm />
    </>
  );
};
export default CreateUser;
