import Page from "../../components/Page/Page";
import useTenantConfiguration from "../../customHooks/useTenantInfo";

const JourneyPage = () => {
  const { appViews } = useTenantConfiguration();
  console.log("The app views available => ", appViews);
  return <Page></Page>;
};
export default JourneyPage;
