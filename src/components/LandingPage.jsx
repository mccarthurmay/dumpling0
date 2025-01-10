import React, { useState, useEffect } from 'react';
import { Heart, Shield, DollarSign, Search, Percent, Tag, Mail, ExternalLink, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import AboutSection from './AboutSection';
// Component definitions at the top
const DumplingIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-12 h-12">
      <path d="M8 32C8 20 20 8 32 8s24 12 24 24-12 24-24 24S8 44 8 32z" 
            fill="#FFE5D2" 
            strokeWidth="2.5"
            stroke="#4B5563"/>
      <path d="M14 28c0 0 8-8 18-8s18 8 18 8" 
            fill="none" 
            stroke="#4B5563" 
            strokeWidth="2.5" 
            strokeLinecap="round"/>
      <circle cx="26" cy="34" r="2.5" fill="#4B5563"/>
      <circle cx="38" cy="34" r="2.5" fill="#4B5563"/>
      <path d="M26 42c3 2.5 9 2.5 12 0" 
            fill="none" 
            stroke="#4B5563" 
            strokeWidth="2.5" 
            strokeLinecap="round"/>
      <circle cx="22" cy="38" r="2" fill="#FFA5A5" opacity="0.6"/>
      <circle cx="42" cy="38" r="2" fill="#FFA5A5" opacity="0.6"/>
    </svg>
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
  const [showThankYou, setShowThankYou] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

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

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    setSubmitStatus(email ? 'email' : 'success');
    setShowThankYou(true);
  };

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
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="transform group-hover:rotate-12 transition-transform duration-300">
                <DumplingIcon />
              </div>
              <div className="text-2xl font-bold">Dumpling0</div>
            </Link>
            <div className="space-x-6">
              <HashLink smooth to="#features" className="hover:text-blue-200 transition-colors duration-300">Features</HashLink>
              <Link to="/stores" className="hover:text-blue-200 transition-colors duration-300">Stores</Link>
              <HashLink smooth to="#about" className="hover:text-blue-200 transition-colors duration-300">About</HashLink>
              
              <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
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
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 hover:shadow-lg flex items-center justify-center space-x-2">
              <span>Add to Browser</span>
              <span className="text-sm">(It's Free)</span>
            </button>
          </div>
        </div>
      </header>
      
      {/* Key Features */}
      <section id="features" className="bg-gray-50 py-20 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className={`transform transition-all duration-1000 ${isVisible.features ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-3xl font-bold text-center mb-16">Why Choose Dumpling0?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <FeatureCard 
                  icon={<DollarSign className="w-12 h-12 text-blue-600" />}
                  title="100% Profit Sharing"
                  description="We share 100% of our affiliate commission earnings with you - unlike any cashback platform out there."
                />
                <FeatureCard 
                  icon={<Eye className="w-12 h-12 text-blue-600" />}
                  title="Transparency"
                  description="See exactly what you'll earn, in real-time. No hidden fees, no secret commissions - just complete transparency at every step."
                />
                <FeatureCard 
                  icon={<Heart className="w-12 h-12 text-blue-600" />}
                  title="Creator-Friendly*"
                  description="We don't automatically override creator affiliate links. We give you the choice to support your creator."
                />
                <FeatureCard 
                  icon={<Shield className="w-12 h-12 text-blue-600" />}
                  title="Privacy First"
                  description="Your data is yours. We never sell your personal information or browsing history to third parties."
                />
                <div className="col-span-2 text-sm text-gray-500 italic mt-2 text-center">
                  * Unlike every other cashback company out there... we see you, competitors 👀
                </div>
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
              
              {!showThankYou ? (
                <>
                  <p className="text-gray-600 mb-6 text-center">
                    Want to see your favorite store on Dumpling0? Let us know! 
                    No store is too niche - we'll do our best to add it.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="store-name" className="block text-sm font-medium text-gray-700 mb-1">
                        Store Name*
                      </label>
                      <input
                        type="text"
                        id="store-name"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter store name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Email (to notify you when we add it)
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="email@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="store-url" className="block text-sm font-medium text-gray-700 mb-1">
                        Store Website (optional)
                      </label>
                      <input
                        type="url"
                        id="store-url"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="https://"
                      />
                    </div>
                    <div>
                      <label htmlFor="comments" className="block text-sm font-medium text-gray-700 mb-1">
                        Why do you love this store? (optional)
                      </label>
                      <textarea
                        id="comments"
                        rows="3"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Tell us what makes this store special"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center space-x-2"
                    >
                      <span>Submit Suggestion</span>
                      <ExternalLink className="w-4 h-4" />
                    </button>
                    <p className="text-sm text-gray-500 text-center mt-2">
                      We read every suggestion and will email you when we add your store!
                    </p>
                  </form>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 mx-auto mb-4">
                    <DumplingIcon />
                  </div>
                  <h4 className="text-xl font-medium mb-2">Thank you for your suggestion!</h4>
                  <p className="text-gray-600 mb-4">We'll work on adding this store to our network.</p>
                  {submitStatus === 'email' && (
                    <p className="text-sm text-blue-600">We'll notify you when it's added!</p>
                  )}
                  <button 
                    onClick={() => {
                      setShowThankYou(false);
                      setSubmitStatus('');
                    }}
                    className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Suggest another store
                  </button>
                </div>
              )}
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
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <AboutSection />

      {/* Footer */}
      <footer className="bg-gray-50 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <DumplingIcon />
              <div className="text-gray-600">© 2024 Dumpling0. All rights reserved.</div>
            </div>
            <div className="space-x-6">
              <a href="#privacy" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Privacy Policy</a>
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