import Page from "../../components/Page/Page";
import RenderRecordsContext from "../../context/renderRecordsContext";
import RenderRecords from "../DashboardPage/components/Sections/ListRecords/components/RenderRecords";

const ViewPage = () => {
  return (
    <Page>
      <RenderRecordsContext.Provider
        value={{
          user: false,
        }}
      >
        <RenderRecords />
      </RenderRecordsContext.Provider>
    </Page>
  );
};
export default ViewPage;
