export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-red-600">
        LifeFlow AI
      </h1>

      <p className="mt-4 text-gray-600 text-center max-w-md">
        AI-powered emergency blood donation coordination platform
      </p>

      <div className="mt-6 flex gap-4">
        <button className="bg-red-600 text-white px-6 py-3 rounded-lg">
          Register as Donor
        </button>
        <button className="border border-red-600 text-red-600 px-6 py-3 rounded-lg">
          Hospital Login
        </button>
      </div>
    </div>
  );
}
