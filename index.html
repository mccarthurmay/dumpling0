import React, { useState, useEffect } from 'react';
import { Heart, Shield, DollarSign, Search, Percent, Tag } from 'lucide-react';

const DumplingIcon = () => (
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
    handleScroll(); // Check initial visibility
    
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
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 group">
              <div className="transform group-hover:rotate-12 transition-transform duration-300">
                <DumplingIcon />
              </div>
              <div className="text-2xl font-bold">Dumpling0</div>
            </div>
            <div className="space-x-6">
              <a href="#features" className="hover:text-blue-200 transition-colors duration-300">Features</a>
              <a href="#about" className="hover:text-blue-200 transition-colors duration-300">About</a>
              <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
                Add to Browser
              </button>
            </div>
          </div>
        </nav>
        
        <div className="container mx-auto px-6 py-20 relative">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Smarter Savings, Ethically
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Get the best deals while supporting creators. We share 75% of our earnings with you.
            </p>
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 hover:shadow-lg flex items-center justify-center space-x-2">
              <span>Add to Browser</span>
              <span className="text-sm">(It's Free)</span>
            </button>
          </div>
        </div>
      </header>

      {/* Key Features */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-6">
          <div className={`transform transition-all duration-1000 ${isVisible.features ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-3xl font-bold text-center mb-16">Why Choose Dumpling0?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <FeatureCard 
                icon={<DollarSign className="w-12 h-12 text-blue-600" />}
                title="75% Profit Sharing"
                description="We share 75% of our affiliate commission earnings with you - significantly more generous than competitors who typically offer only 0.5-1% through points systems."
              />
              <FeatureCard 
                icon={<Heart className="w-12 h-12 text-blue-600" />}
                title="Creator-Friendly"
                description="We never override creator affiliate links. Support your favorite content creators while still saving money."
              />
              <FeatureCard 
                icon={<Shield className="w-12 h-12 text-blue-600" />}
                title="Privacy First"
                description="Your data is yours. We never sell your personal information or browsing history to third parties."
              />
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
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <div className={`max-w-3xl mx-auto text-center transform transition-all duration-1000 ${isVisible.about ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="mb-8 transform hover:rotate-12 transition-transform duration-300 inline-block">
              <DumplingIcon />
            </div>
            <h2 className="text-3xl font-bold mb-6">Built with Trust</h2>
            <p className="text-lg text-gray-600 mb-8">
              Hi, I'm a 20-year-old solo developer building Dumpling0 while pursuing my education. 
              I created this extension because I believe in transparent and ethical savings tools 
              that benefit both users and content creators.
            </p>
            <div className="bg-blue-50 p-6 rounded-lg transform hover:-translate-y-1 transition-transform duration-300">
              <h3 className="font-bold text-xl mb-4">Our Promises to You</h3>
              <ul className="text-left space-y-4">
                <li className="flex items-center">
                  <Percent className="w-6 h-6 text-blue-600 mr-2" />
                  75% of affiliate earnings shared with users
                </li>
                <li className="flex items-center">
                  <Shield className="w-6 h-6 text-blue-600 mr-2" />
                  Your data is never sold or shared
                </li>
                <li className="flex items-center">
                  <Heart className="w-6 h-6 text-blue-600 mr-2" />
                  Creator affiliate links are always respected
                </li>
              </ul>
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