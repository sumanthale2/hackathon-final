import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { CreditCard, ArrowRight } from "lucide-react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const result = login(email, password);

    if (result.success) {
      if (result.type === "new") {
        navigate("/dashboard/new");
      } else if (result.type === "existing") {
        navigate("/dashboard/existing");
      }
    } else {
      setError(
        "Invalid credentials. Try new@credit.com or existing@credit.com",
      );
    }
  };

  const handleApplyCards = () => {
    navigate("/cards");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-600/20 blur-3xl rounded-full pointer-events-none" />

      {/* Navbar */}
        <nav className="relative z-20 backdrop-blur-xl bg-white/5 border-b border-white/10 px-6 md:px-8 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
            <div className="flex items.center space-x-3 flex-shrink-0">
          <img
            src="https://www.synchrony.com/syc/img/synchrony_logo.svg"
            alt="Synchrony Logo"
            className="h-9 md:h-10"
          />
            </div>
            <h1 className="hidden sm:block text-2xl md:text-4xl font-bold text-white tracking-tight flex-1 text-center">
          Credit Uplift Engine
            </h1>
            <button
          onClick={handleApplyCards}
          className="group bg-white/10 hover:bg-white/20 text-white px-4 md:px-6 py-2.5 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 border border-white/10 hover:border-white/30 backdrop-blur-md flex-shrink-0 text-sm md:text-base"
            >
          <span className="hidden sm:inline">Apply for Cards</span>
          <span className="sm:hidden">Apply</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </nav>

      <div className="relative z-10 min-h-[calc(100vh-88px)] flex items-center justify-center px-6">
        <div className="w-full max-w-lg">
          {/* Header */}
          <div className="text-center mb-10"></div>

          {/* Login Card */}
          <div className="bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl shadow-black/30 p-10 border border-white/40">
            <h2 className="text-2xl font-semibold text-gray-900 text-center mb-8 tracking-tight">
              Welcome Back
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email */}
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition-all duration-200 shadow-sm"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Password */}
              <div className="space-y-2">
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition-all duration-200 shadow-sm"
                  placeholder="Enter your password"
                  required
                />
              </div>

              {/* Error */}
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm shadow-sm">
                  {error}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3.5 rounded-xl transition-all duration-300 shadow-lg shadow-blue-600/30 hover:shadow-blue-700/40 hover:-translate-y-[1px]"
              >
                Sign In
              </button>
            </form>


          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
