import { Box } from "../../../../../../../../../../components/Box/Box";
import Button from "../../../../../../../../../../components/Buttons/Button";
import LinkButton from "../../../../../../../../../../components/Buttons/LinkButton";
import { TextField } from "../../../../../../../../../../components/FormFields/FormFields.style";
import MultiSelectDD from "../../../../../../../../../../components/FormFields/MultiSelectDD";
import { FlexBox } from "./UserEditForm.style";

const UserEditForm = ({ onDiscard = () => {}, initialUser = {} }) => {
  console.log("The initialUser => ", initialUser);
  return (
    <form>
      <Box>
        <TextField placeholder="First Name" />
      </Box>
      <Box>
        <TextField placeholder="Last Name" />
      </Box>
      <Box>
        <TextField placeholder="Mobile" />
      </Box>
      <Box>
        <TextField placeholder="Email" />
      </Box>
      <Box>
        <TextField placeholder="Password" />
      </Box>
      <Box>
        <MultiSelectDD />
      </Box>
      <FlexBox>
        <Button type="submit">Save</Button>
        <LinkButton onClick={onDiscard}>Discard</LinkButton>
      </FlexBox>
    </form>
  );
};
export default UserEditForm;
