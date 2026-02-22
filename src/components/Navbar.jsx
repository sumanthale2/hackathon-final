import { Bell, MessageCircle, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Navbar({ userName, showGreeting }) {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-gradient-to-r from-blue-900 to-blue-800 border-b border-blue-700 px-6 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-yellow-500 rounded-md flex items-center justify-center">
              <div className="w-6 h-6 bg-yellow-600 rounded transform rotate-45"></div>
            </div>
            <span className="text-white font-semibold text-xl">synchrony</span>
          </div>
        </div>

        {showGreeting && userName && (
          <div className="absolute left-1/2 transform -translate-x-1/2 text-center">
            <h1 className="text-white text-3xl font-bold">Welcome back, {userName}!</h1>
            <p className="text-blue-200 text-sm">Great progress on your credit uplift journey</p>
          </div>
        )}

        {!showGreeting && (
          <div className="absolute left-1/2 transform -translate-x-1/2 text-center">
            <h1 className="text-white text-2xl font-bold">Synchrony Credit Uplift Engine</h1>
            <p className="text-blue-200 text-xs">Driving Disruptive Innovation for Credit Growth</p>
          </div>
        )}

        <div className="flex items-center space-x-4">
          <button className="text-white hover:text-blue-200 transition">
            <Bell className="w-6 h-6" />
          </button>
          <button className="text-white hover:text-blue-200 transition">
            <MessageCircle className="w-6 h-6" />
          </button>
          <button
            onClick={handleLogout}
            className="text-white hover:text-blue-200 transition"
            title="Logout"
          >
            <LogOut className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
