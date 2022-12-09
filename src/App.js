import { Navigate, Route, Routes } from "react-router-dom";
import Layout1 from "./components/Layouts/Layout1";
import AuthenticationPage from "./pages/AuthenticationPage/AuthenticationPage";
import JourneyPage from "./pages/JourneyPage/JourneyPage";

function App() {
  return (
    <Layout1>
      <Routes>
        <Route path="/" element={<Navigate to="/journey" replace />} />
        <Route path="/journey" element={<JourneyPage />} />
        <Route path="/authentication/:type" element={<AuthenticationPage />} />
      </Routes>
    </Layout1>
  );
}

export default App;
