import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout1 from "./components/Layouts/Layout1";
import useAuth from "./customHooks/useAuth";
import AdminPage from "./pages/AdminPage/AdminPage";
import AuthenticationPage from "./pages/AuthenticationPage/AuthenticationPage";
import JourneyPage from "./pages/JourneyPage/JourneyPage";
import { Toaster } from "react-hot-toast";
import UserPage from "./pages/UserPage/UserPage";
import CheckUser from "./Checkers/CheckUser";

function App() {
  const { isAuthenticated } = useAuth();
  return (
    <Layout1>
      <Routes>
        <Route path="/" element={<Navigate to="/journey" replace />} />
        <Route path="/journey" element={<JourneyPage />} />
        <Route path="/authentication/:type" element={<AuthenticationPage />} />
        <Route
          path="/admin/*"
          element={
            isAuthenticated() ? (
              <CheckUser>
                <AdminPage />
              </CheckUser>
            ) : (
              <Navigate to="/authentication/admin" replace />
            )
          }
        />
        <Route
          path="/user/*"
          element={
            isAuthenticated() ? (
              <CheckUser>
                <UserPage />
              </CheckUser>
            ) : (
              <Navigate to="/authentication/user" replace />
            )
          }
        />
      </Routes>
      <Toaster />
    </Layout1>
  );
}

export default App;
