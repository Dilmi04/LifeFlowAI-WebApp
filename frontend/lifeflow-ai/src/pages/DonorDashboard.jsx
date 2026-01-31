import { useNavigate } from "react-router-dom";

export default function DonorDashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Header */}
      <div className="bg-red-600 text-white px-8 py-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">LifeFlow AI</h1>
        <button
          onClick={() => navigate("/")}
          className="bg-white text-red-600 px-4 py-2 rounded-lg font-medium"
        >
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Donor Info Card */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Donor Profile</h2>
          <p><strong>Name:</strong> Sample Donor</p>
          <p><strong>Blood Group:</strong> O+</p>
          <p><strong>Location:</strong> Colombo</p>

          <div className="mt-4">
            <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full">
              Available to Donate
            </span>
          </div>
        </div>

        {/* Emergency Alert */}
        <div className="bg-red-50 border border-red-200 rounded-xl p-6">
          <h2 className="text-xl font-semibold text-red-700 mb-2">
            🚨 Emergency Alert
          </h2>
          <p className="text-gray-700 mb-4">
            Urgent blood request for <strong>O+</strong> at
            <strong> National Hospital</strong>.
          </p>

          <button
            onClick={() => navigate("/emergency-alert")}
            className="bg-red-600 text-white px-6 py-3 rounded-lg w-full"
          >
            View Emergency Request
          </button>
        </div>

        {/* Donation History */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Donation History</h2>
          <ul className="space-y-2 text-gray-700">
            <li>🩸 Jan 2025 – Colombo General Hospital</li>
            <li>🩸 Oct 2024 – Kandy Teaching Hospital</li>
            <li>🩸 July 2024 – National Blood Bank</li>
          </ul>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>

          <div className="flex flex-col gap-4">
            <button
              onClick={() => navigate("/donor-profile")}
              className="bg-gray-100 px-6 py-3 rounded-lg hover:bg-gray-200"
            >
              Update Profile
            </button>

            <button
              onClick={() => navigate("/help")}
              className="bg-gray-100 px-6 py-3 rounded-lg hover:bg-gray-200"
            >
              Help & FAQ
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
