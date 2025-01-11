import React from 'react';
import { Shield, Lock, Eye, Database, X, Check } from 'lucide-react';

const PolicySection = ({ title, children }) => (
  <div className="mb-12">
    <h2 className="text-2xl font-bold mb-4">{title}</h2>
    {children}
  </div>
);

const DataPoint = ({ icon: Icon, title, description, type = "neutral" }) => (
  <div className="flex items-start space-x-4 mb-4">
    <div className={`p-2 rounded-lg ${
      type === "positive" ? "bg-green-100" : 
      type === "negative" ? "bg-red-100" : 
      "bg-blue-100"
    }`}>
      <Icon className={`w-6 h-6 ${
        type === "positive" ? "text-green-600" : 
        type === "negative" ? "text-red-600" : 
        "text-blue-600"
      }`} />
    </div>
    <div>
      <h3 className="font-semibold mb-1">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-center mb-4">Privacy Policy</h1>
          <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto">
            Your privacy is our priority. Here's exactly what data we collect, how we use it, 
            and most importantly - what we don't do with it.
          </p>
          <p className="text-center text-gray-500 mt-4">Last updated: January 2024</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Quick Summary */}
          <div className="bg-white p-8 rounded-xl shadow-lg mb-16">
            <h2 className="text-2xl font-bold mb-6">TL;DR Summary</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-green-600 flex items-center">
                  <Check className="w-5 h-5 mr-2" />
                  What We Do
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                    Track purchases for cashback processing
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                    Store your email for account management
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                    Use cookies for essential functionality
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold text-red-600 flex items-center">
                  <X className="w-5 h-5 mr-2" />
                  What We Don't Do
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></div>
                    Sell your data to third parties
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></div>
                    Track your general browsing history
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></div>
                    Share data with advertisers
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Detailed Sections */}
          <PolicySection title="Data We Collect">
            <div className="space-y-6">
              <DataPoint 
                icon={Lock}
                title="Account Information"
                description="Your email address and payment information for cashback processing."
              />
              <DataPoint 
                icon={Database}
                title="Purchase Data"
                description="When you make a purchase through our extension, we track the order ID, amount, and store name to process your cashback."
              />
              <DataPoint 
                icon={Eye}
                title="Extension Usage"
                description="Basic analytics about how you interact with our extension to improve functionality."
              />
            </div>
          </PolicySection>

          <PolicySection title="How We Use Your Data">
            <p className="text-gray-600 mb-6">
              We use your data solely for providing and improving our cashback service. Here's exactly how:
            </p>
            <div className="space-y-6">
              <DataPoint 
                icon={Lock}
                title="Cashback Processing"
                description="We track purchases to ensure you receive your cashback correctly."
                type="positive"
              />
              <DataPoint 
                icon={Shield}
                title="Service Improvement"
                description="Anonymous usage data helps us fix bugs and improve the extension."
                type="positive"
              />
            </div>
          </PolicySection>

          <PolicySection title="What We Don't Do">
            <div className="space-y-6">
              <DataPoint 
                icon={X}
                title="No Data Selling"
                description="We never sell your personal information or browsing history to third parties."
                type="negative"
              />
              <DataPoint 
                icon={X}
                title="No Tracking"
                description="We don't track your general browsing history or behavior outside of our extension."
                type="negative"
              />
              <DataPoint 
                icon={X}
                title="No Advertising"
                description="We don't share your data with advertisers or use it for targeted advertising."
                type="negative"
              />
            </div>
          </PolicySection>

          <PolicySection title="Data Storage and Security">
            <p className="text-gray-600 mb-6">
              We take the security of your data seriously and implement industry-standard security measures:
            </p>
            <ul className="list-disc list-inside space-y-4 text-gray-600">
              <li>All data is encrypted in transit and at rest</li>
              <li>We use secure cloud providers with SOC 2 compliance</li>
              <li>Regular security audits and updates</li>
              <li>Access to user data is strictly limited and logged</li>
            </ul>
          </PolicySection>

          <PolicySection title="Your Rights">
            <p className="text-gray-600 mb-6">
              You have full control over your data. You can:
            </p>
            <ul className="list-disc list-inside space-y-4 text-gray-600">
              <li>Request a copy of your data</li>
              <li>Ask us to delete your data</li>
              <li>Opt-out of non-essential data collection</li>
              <li>Update your information at any time</li>
            </ul>
          </PolicySection>

          <PolicySection title="Contact Us">
            <p className="text-gray-600 mb-4">
              If you have any questions about our privacy policy or how we handle your data, please contact us at:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-blue-600">privacy@dumpling0.com</p>
            </div>
          </PolicySection>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;