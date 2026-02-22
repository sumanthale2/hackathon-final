import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import NewUserDashboard from "./pages/NewUserDashboard";
import ExistingUserDashboard from "./pages/ExistingUserDashboard";
import CardsCatalog from "./pages/CardsCatalog";
import CardApplicationStep1 from "./pages/CardApplicationStep1";
import CardApplicationStep2 from "./pages/CardApplicationStep2";
import CardApplicationStep3 from "./pages/CardApplicationStep3";
import CardApplicationThankYou from "./pages/CardApplicationThankYou";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>

      <Route path="/" element={<Login />} />
      <Route path="/cards" element={<CardsCatalog />} />
      <Route path="/apply-card" element={<CardApplicationStep1 />} />
      <Route path="/apply-card/step2" element={<CardApplicationStep2 />} />
      <Route path="/apply-card/step3" element={<CardApplicationStep3 />} />
      <Route
        path="/apply-card/thankyou"
        element={<CardApplicationThankYou />}
      />
      <Route path="/dashboard/new" element={<NewUserDashboard />} />
      <Route
        path="/dashboard/existing"
        element={
          <ProtectedRoute>
            <ExistingUserDashboard />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
