import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext'
import { User, LogIn } from 'lucide-react';
import LandingPage from './components/LandingPage';
import StorePage from './components/StorePage';
import AmazonPage from './components/AmazonPage';
import PrivacyPolicy from './components/PrivacyPolicy';
import LoginPage from './components/LoginPage';

const AccountButton = () => {
  const { isLoggedIn, logout } = useAuth();
  
  if (isLoggedIn) {
    return (
      <div className="relative group">
        <button className="flex items-center space-x-2 text-white hover:text-blue-200 transition-colors duration-300">
          <User className="w-5 h-5" />
          <span>Account</span>
        </button>
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 hidden group-hover:block">
          <Link 
            to="/account" 
            className="block px-4 py-2 text-gray-800 hover:bg-blue-50"
          >
            My Account
          </Link>
          <button 
            onClick={logout}
            className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-blue-50"
          >
            Sign Out
          </button>
        </div>
      </div>
    );
  }

  return (
    <Link 
      to="/login"
      className="flex items-center space-x-2 text-white hover:text-blue-200 transition-colors duration-300"
    >
      <LogIn className="w-5 h-5" />
      <span>Sign In</span>
    </Link>
  );
};

const Navigation = () => {
  const location = useLocation();
  
  // Don't show navigation on landing page
  if (location.pathname === '/') {
    return null;
  }

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="text-2xl font-bold">Dumpling0</div>
          </Link>
          <div className="space-x-6">
            <Link to="/" className="hover:text-blue-200 transition-colors duration-300">Home</Link>
            <Link to="/stores" className="hover:text-blue-200 transition-colors duration-300">Stores</Link>
            <Link to="/about" className="hover:text-blue-200 transition-colors duration-300">About</Link>
            <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
              Add to Browser
            </button>
            <AccountButton/>
          </div>
        </div>
      </div>
    </nav>
  );
};

const App = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/stores" element={<StorePage />} />
          <Route path="/stores/amazon" element={<AmazonPage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;