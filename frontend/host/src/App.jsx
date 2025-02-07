import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import Sale from "./pages/Sale";
import MyDashboard from "./pages/MyDashboard"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/sale" element={<Sale />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/myDashboard" element={<MyDashboard />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;