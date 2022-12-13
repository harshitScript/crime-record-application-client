import { Box } from "../../../../../../../../components/Box/Box";
import { Card } from "../../../../../../../../components/Cards/Card";
import TextField from "../../../../../../../../components/FormFields/TextField";
import TitleSection from "../../TitleSection/TitleSection";

const AuthenticationDetails = ({ register = () => {}, utility = {} }) => {
  return (
    <Card>
      <TitleSection title="Authentication Details" />
      {utility.open ? (
        <>
          <Box>
            <TextField />
          </Box>
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
export default AuthenticationDetails;
