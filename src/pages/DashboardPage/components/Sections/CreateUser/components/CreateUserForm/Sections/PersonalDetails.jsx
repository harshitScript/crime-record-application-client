import { Box } from "../../../../../../../../components/Box/Box";
import { Card } from "../../../../../../../../components/Cards/Card";
import TextField from "../../../../../../../../components/FormFields/TextField";
import TitleSection from "../../TitleSection/TitleSection";
import { Box50, FlexBlock } from "../CreateUserForm.style";

const PersonalDetails = ({ register = () => {}, utility = {} }) => {
  return (
    <Card>
      <TitleSection title="Personal Details" />
      {utility.open ? (
        <>
          <FlexBlock>
            <Box50>
              <TextField />
            </Box50>
            <Box50>
              <TextField />
            </Box50>
          </FlexBlock>
          <Box>
            <TextField />
          </Box>
        </>
      ) : (
        <></>
      )}
    </Card>
  );
};

export default PersonalDetails;
