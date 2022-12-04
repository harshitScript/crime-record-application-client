import { Navigate, Route, Routes } from "react-router-dom";
import Layout1 from "./components/Layouts/Layout1";
import JourneyPage from "./pages/JourneyPage/JourneyPage";

function App() {
  return (
    <Layout1>
      <Routes>
        <Route path="/" element={<Navigate to="/journey-page" replace />} />
        <Route path="/journey-page" element={<JourneyPage />} />
      </Routes>
    </Layout1>
  );
}

export default App;
