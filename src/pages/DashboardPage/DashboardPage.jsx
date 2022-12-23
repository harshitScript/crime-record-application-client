import { Route, Routes } from "react-router-dom";
import Page from "../../components/Page/Page";
import useGreetings from "../../customHooks/useGreetings";
import CreateRecord from "./components/Sections/CreateRecord/CreateRecord";
import CreateUser from "./components/Sections/CreateUser/CreateUser";
import ListUsers from "./components/Sections/ListUsers/ListUsers";
import Welcome from "./components/Sections/Welcome";
import Sidebar from "./components/Sidebar/Sidebar";

const DashboardPage = () => {
  useGreetings();
  return (
    <>
      <Sidebar />
      <Page>
        <Routes>
          <Route path="list-users" element={<ListUsers />} />
          <Route path="create-user" element={<CreateUser />} />
          <Route path="list-records" element={<p>List Records</p>} />
          <Route path="create-record" element={<CreateRecord />} />
          <Route path="send-alert" element={<p>Send Alert</p>} />
          <Route path="update-tenant" element={<p>Update Tenant</p>} />
          <Route path="*" element={<Welcome />} />
        </Routes>
      </Page>
    </>
  );
};
export default DashboardPage;
