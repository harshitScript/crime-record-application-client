import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout1 from "./components/Layouts/Layout1";
import useAuth from "./customHooks/useAuth";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import AuthenticationPage from "./pages/AuthenticationPage/AuthenticationPage";
import JourneyPage from "./pages/JourneyPage/JourneyPage";
import { Toaster } from "react-hot-toast";
import CheckUser from "./Checkers/CheckUser";
import ViewPage from "./pages/ViewPage/ViewPage";

function App() {
  const { isAuthenticated } = useAuth();
  return (
    <Layout1>
      <Routes>
        <Route path="/" element={<Navigate to="/journey" replace />} />
        <Route path="/journey" element={<JourneyPage />} />
        <Route
          path="/authentication/:type"
          element={
            isAuthenticated() ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <AuthenticationPage />
            )
          }
        />
        <Route
          path="/dashboard/*"
          element={
            isAuthenticated() ? (
              <CheckUser>
                <DashboardPage />
              </CheckUser>
            ) : (
              <Navigate to="/authentication/user" replace />
            )
          }
        />
        <Route path="/view/records" element={<ViewPage />} />
      </Routes>
      <Toaster />
    </Layout1>
  );
}

export default App;
