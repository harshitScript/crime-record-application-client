import Page from "../../components/Page/Page";
import useTenantConfiguration from "../../customHooks/useTenantConfiguration";
import ViewCard from "./components/ViewCard";

const JourneyPage = () => {
  const { appViews } = useTenantConfiguration();

  return (
    <Page>
      {appViews.map((view) => (
        <ViewCard key={view?.code} {...view} />
      ))}
    </Page>
  );
};
export default JourneyPage;
