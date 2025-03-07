import React, { useState, useEffect } from 'react';
import { Heart, Shield, DollarSign, Search, Percent, Tag, Mail, ExternalLink, Eye, User, LogIn } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useAuth } from '../contexts/AuthContext';
import DumplingIcon from './DumplingIcon.jsx';
import PayPalDonateButton from './PayPalDonateButton.jsx';
import StoreSuggestionForm from './StoreSuggestionForm.jsx';

const AccountButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoggedIn, logout } = useAuth();
  
  if (isLoggedIn) {
    return (
      <div 
        className="relative"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {/* Wrapper div that contains both button and dropdown */}
        <div className="h-full">
          <button 
            className="flex items-center space-x-2 text-white hover:text-blue-200 transition-colors duration-300 h-full"
          >
            <User className="w-5 h-5" />
            <span>Account</span>
          </button>
          
          {/* Remove any gap between button and dropdown */}
          {isOpen && (
            <>
              {/* Invisible bridge to prevent gap */}
              <div className="absolute h-2 w-full top-full" />
              
              <div 
                className="absolute right-0 top-full w-48 bg-white rounded-lg shadow-lg py-2 z-50"
              >
                <Link 
                  to="/account" 
                  className="block px-4 py-2 text-gray-800 hover:bg-blue-50 transition-colors duration-200"
                >
                  My Account
                </Link>
                <button 
                  onClick={logout}
                  className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-blue-50 transition-colors duration-200"
                >
                  Sign Out
                </button>
              </div>
            </>
          )}
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



const PartnerCard = ({ name, cashback, status, comingSoon }) => {
  return (
    <div className={`p-6 bg-white rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 relative ${comingSoon ? 'opacity-90' : ''}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 flex-shrink-0">
            <DollarSign className={`w-full h-full ${comingSoon ? 'text-gray-400' : 'text-blue-600'}`} />
          </div>
          <span className={`font-medium text-lg ${comingSoon ? 'text-gray-600' : ''}`}>{name}</span>
        </div>
        {cashback && (
          <span className="text-blue-600 text-sm font-medium">
            Up to {cashback}% cashback
          </span>
        )}
        {comingSoon && (
          <span className="absolute top-4 right-4 px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">
            Coming Soon
          </span>
        )}
      </div>
      {status && (
        <div className="mt-3 text-sm text-gray-500">
          Status: {status}
        </div>
      )}
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="p-6 rounded-lg bg-white shadow-lg transform hover:-translate-y-1 transition-all duration-300 hover:shadow-xl">
      <div className="mb-4 transform hover:scale-110 transition-transform duration-300">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const LandingPage = () => {
  const [isVisible, setIsVisible] = useState({
    features: false,
    coming: false,
    about: false
  });

  useEffect(() => {
    const handleScroll = () => {
      const features = document.getElementById('features');
      const coming = document.getElementById('coming-soon');
      const about = document.getElementById('about');
      
      const isElementVisible = (el) => {
        const rect = el?.getBoundingClientRect();
        return rect && rect.top <= window.innerHeight * 0.75;
      };

      setIsVisible({
        features: isElementVisible(features),
        coming: isElementVisible(coming),
        about: isElementVisible(about)
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-700 text-white relative overflow-hidden">
        {/* Animated background circles */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute w-64 h-64 rounded-full bg-blue-500 opacity-10 -top-20 -left-20 animate-pulse"/>
          <div className="absolute w-96 h-96 rounded-full bg-blue-400 opacity-10 -bottom-40 -right-20 animate-pulse delay-700"/>
        </div>

        <nav className="container mx-auto px-6 py-4 relative">
          <div className="flex items-center justify-between relative z-50">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="transform group-hover:rotate-12 transition-transform duration-300">
                <DumplingIcon />
              </div>
              <div className="text-2xl font-bold">Dumpling0</div>
            </Link>
            <div className="flex items-center space-x-6">
              <AccountButton />
              <Link to="/stores" className="hover:text-blue-200 transition-colors duration-300">Stores</Link>
              <HashLink smooth to="#about" className="hover:text-blue-200 transition-colors duration-300">About</HashLink>
              <button 
              onClick={() => window.open('https://chromewebstore.google.com/detail/dumpling0/ndkdhoccdoakbnpaofnapceeagllofjc', '_blank', 'noopener,noreferrer')}
              className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
                Add to Browser
              </button>
            </div>
          </div>
        </nav>
        
        <div className="container mx-auto px-6 py-20">  
          <div className="max-w-2xl">  
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Smarter Savings, Ethically
            </h1>
            <p className="text-lg md:text-xl mb-6">
              The only cashback extension that shares 100% of earnings.
            </p>
            <button 
            onClick={() => window.open('https://chromewebstore.google.com/detail/dumpling0/ndkdhoccdoakbnpaofnapceeagllofjc', '_blank', 'noopener,noreferrer')}
            className="bg-white text-blue-600 px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 hover:shadow-lg flex items-center justify-center space-x-2">
              <span>Add to Browser</span>
              <span className="text-sm">(It's Free)</span>
            </button>
          </div>
        </div>
      </header>
      {/* About */}
      <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="mb-8 transform hover:rotate-12 transition-transform duration-300 inline-block">
                <DumplingIcon />
              </div>
              <h2 className="text-3xl font-bold mb-6">Why We Made This</h2>
              <p className="text-lg text-gray-600 mb-8">
                Hi, we're Max and Sophia, two college students who got fed up with the current state of cashback extensions. 
                Dumpling0 is a passion project of ours because we believe the industry needs more transparency and fairness.
              </p>
            </div>
  
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="font-bold text-xl mb-4 text-blue-600">The Problem</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    Companies like Honey take up to 90% of affiliate commissions
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    Creator affiliate links get overridden without consent
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    Hidden affiliate injections even when no coupons exist
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    User data being sold to third parties
                  </li>
                </ul>
              </div>
  
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="font-bold text-xl mb-4 text-green-600">Our Solution</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    100% of affiliate earnings shared with users 
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Full respect for creator affiliate links
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    100% transparent operation - no hidden injections
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Zero data selling, ever
                  </li>
                </ul>
              </div>
            </div>
  
            <div className="bg-blue-50 p-8 rounded-xl mb-12">
              <h3 className="font-bold text-xl mb-4 text-center">Community-Powered Project</h3>
              <p className="text-gray-600 mb-6">
                Dumpling0 is run entirely through community support. We're not backed by venture capital or big tech - 
                we're just two students trying to make online shopping more fair for everyone. While this is a portfolio 
                project to help us land future opportunities, we're committed to keeping it running as long as the 
                community supports it.
              </p>
              <div className="flex justify-center space-x-4">
                <button 
                  onClick={() => window.open('https://www.patreon.com/dumpling0', '_blank', 'noopener,noreferrer')}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 flex items-center"
                >
                  Support on Patreon <ExternalLink className="w-4 h-4 ml-2" />
                </button>
                <PayPalDonateButton/>
              </div>
            </div>
  
            <div className="text-center text-sm text-gray-500">
              <p>
                Running costs scale with our user base. Your support through Patreon helps keep our servers running 
                and enables us to add more features and stores.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-6">Our Growing Network</h2>
            
            <div className="text-center mb-12">
              <p className="text-gray-600">
                Joined by <span className="font-medium">2</span> major retailers and growing
              </p>
              <p className="text-sm text-gray-500 mt-2">
                We're constantly expanding our network to bring you the best savings
              </p>
            </div>
            
            {/* Current Partners */}
            <div className="mb-16">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <Shield className="w-5 h-5 text-blue-600 mr-2" />
                Current Partners
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <PartnerCard name="Amazon" cashback="10" />
                <PartnerCard name="eBay" cashback="4" />
              </div>

              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <Tag className="w-5 h-5 text-blue-600 mr-2" />
                Under Review
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                <PartnerCard name="Best Buy" comingSoon status="Application Submitted" />
                <PartnerCard name="Home Depot" comingSoon status="Under Review" />
                <PartnerCard name="Walmart" comingSoon status="Under Review" />
              </div>
            </div>

            {/* Suggestion Box */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center mb-6">
                <DumplingIcon />
                <h3 className="text-2xl font-semibold ml-3">Request Your Favorite Store</h3>
              </div>
              
              <p className="text-gray-600 mb-6 text-center">
                Want to see your favorite store on Dumpling0? Let us know! 
                No store is too niche - we'll do our best to add it.
              </p>

              <StoreSuggestionForm />
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section id="coming-soon" className="bg-gray-50 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-50"/>
        <div className="container mx-auto px-6 relative">
          <div className={`transform transition-all duration-1000 ${isVisible.coming ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-3xl font-bold text-center mb-16">Coming Soon</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <FeatureCard 
                icon={<Search className="w-12 h-12 text-blue-600" />}
                title="Price Comparison Engine"
                description="Find the best deals across multiple retailers with our intelligent price comparison tool."
              />
              <FeatureCard 
                icon={<Tag className="w-12 h-12 text-blue-600" />}
                title="Smart Coupon Engine"
                description="Automatically find and apply the best working coupon codes for maximum savings."
              />
              <FeatureCard
                icon={<Eye className="w-12 h-12 text-blue-600" />}
                title="Optional Ad Activation"
                description="Support us through *slightly* intrusive ads ~ we'll use your feedback of course. It's like donating without donating!"
              />
            </div>
          </div>
        </div>
      </section>

      

      {/* Footer */}
      <footer className="bg-gray-50 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <DumplingIcon />
              <div className="text-gray-600">© 2024 Dumpling0. All rights reserved.</div>
            </div>
            <div className="space-x-6">
              <Link to="/privacy" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                Privacy Policy
              </Link>
              <a href="#terms" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Terms of Service</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;