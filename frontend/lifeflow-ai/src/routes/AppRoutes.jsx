import { Routes, Route } from "react-router-dom";

import LandingPage from "../pages/LandingPage";
import LoginDonor from "../pages/LoginDonor";
import LoginHospital from "../pages/LoginHospital";
import SignupDonor from "../pages/SignupDonor";
import SignupHospital from "../pages/SignupHospital";
import DonorDashboard from "../pages/DonorDashboard";
import HospitalDashboard from "../pages/HospitalDashboard";
import EmergencyAlert from "../pages/EmergencyAlert";
import CreateRequest from "../pages/CreateRequest";
import RequestMonitoring from "../pages/RequestMonitoring";
import Analytics from "../pages/Analytics";
import LiveMap from "../pages/LiveMap";
import HelpFAQ from "../pages/HelpFAQ";
import DonorProfile from "../pages/DonorProfile";
import Chatbot from "../pages/Chatbot";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login-donor" element={<LoginDonor />} />
      <Route path="/login-hospital" element={<LoginHospital />} />
      <Route path="/signup-donor" element={<SignupDonor />} />
      <Route path="/signup-hospital" element={<SignupHospital />} />
      <Route path="/donor-dashboard" element={<DonorDashboard />} />
      <Route path="/hospital-dashboard" element={<HospitalDashboard />} />
      <Route path="/emergency-alert" element={<EmergencyAlert />} />
      <Route path="/create-request" element={<CreateRequest />} />
      <Route path="/request-monitoring" element={<RequestMonitoring />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/live-map" element={<LiveMap />} />
      <Route path="/help" element={<HelpFAQ />} />
      <Route path="/donor-profile" element={<DonorProfile />} />
      <Route path="/chatbot" element={<Chatbot />} />
    </Routes>
  );
}
