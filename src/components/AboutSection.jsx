{/* About Section Component */}
const AboutSection = () => {
    return (
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
                We created Dumpling0 because we believe the industry needs more transparency and fairness.
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
                    75% of affiliate earnings shared with users (the rest covers operating costs)
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
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 flex items-center">
                  Support on Patreon <ExternalLink className="w-4 h-4 ml-2" />
                </button>
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
    );
  };
  
  export default AboutSection;