import { Box } from "../../../../../../../../components/Box/Box";
import { Card } from "../../../../../../../../components/Cards/Card";
import TextField from "../../../../../../../../components/FormFields/TextField";
import TitleSection from "../../TitleSection/TitleSection";

const Permissions = ({ register = () => {}, utility = {} }) => {
  return (
    <Card>
      <TitleSection title="Permissions" />
      {utility.open ? (
        <Box>
          <TextField />
        </Box>
      ) : (
        <></>
      )}
    </Card>
  );
};

export default Permissions;
