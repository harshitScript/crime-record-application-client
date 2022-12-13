import { TitleMd } from "../../../../components/Typography/Title";
import { SubTitleMd } from "../../../../components/Typography/SubTitle";
import { Card } from "../../../../components/Cards/Card";

const Welcome = () => {
  return (
    <Card>
      <TitleMd>Welcome to Dashboard</TitleMd>
      <SubTitleMd>
        Please visit the actions bar on the left to begin.
      </SubTitleMd>
    </Card>
  );
};
export default Welcome;
