import { Route, Routes } from "react-router-dom";
import Page from "../../components/Page/Page";
import useGreetings from "../../customHooks/useGreetings";
import ActiveSection from "./components/ActiveSection/ActiveSection";
import Welcome from "./components/Sections/Welcome/Welcome";
import Sidebar from "./components/Sidebar/Sidebar";

const DashboardPage = () => {
  useGreetings();
  return (
    <>
      <Sidebar />
      <Page>
        <ActiveSection />
        <Routes>
          <Route path="list-users" element={<p>List Users</p>} />
          <Route path="create-user" element={<p>Create Users</p>} />
          <Route path="list-records" element={<p>List Records</p>} />
          <Route path="create-record" element={<p>Create Record</p>} />
          <Route path="send-alert" element={<p>Send Alert</p>} />
          <Route path="update-tenant" element={<p>Update Tenant</p>} />
          <Route path="*" element={<Welcome />} />
        </Routes>
      </Page>
    </>
  );
};
export default DashboardPage;
