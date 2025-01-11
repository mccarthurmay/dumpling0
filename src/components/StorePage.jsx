import React, { useState } from 'react';
import { DollarSign, ExternalLink, Star, ThumbsUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const StoreCard = ({ name, cashback, hasPage, logoUrl }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
          {/* Replace with actual store logos */}
          <span className="text-xl font-bold">{name[0]}</span>
        </div>
        {hasPage && (
          <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
            Store Page
          </span>
        )}
      </div>
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="text-gray-600 mb-4">Up to {cashback}% cashback</p>
      {hasPage ? (
        <Link 
          to={`/stores/${name.toLowerCase()}`}
          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
        >
          View Details <ExternalLink className="w-4 h-4 ml-1" />
        </Link>
      ) : (
        <span className="text-sm text-gray-500">Coming Soon</span>
      )}
    </div>
  );
};
const StorePage = () => {
  const [showThankYou, setShowThankYou] = useState(false);
  const [suggestion, setSuggestion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowThankYou(true);
    setTimeout(() => {
      setShowThankYou(false);
      setSuggestion('');
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold text-center mb-4">Partner Stores</h1>
          <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto">
            Discover all our partner stores and their exclusive cashback rates. Some stores have dedicated pages with special deals and features.
          </p>
        </div>
      </header>

      {/* Featured Stores */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8">Featured Partners</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <StoreCard 
              name="Amazon"
              cashback="10"
              hasPage={true}
            />
            <StoreCard 
              name="eBay"
              cashback="4"
              hasPage={false}
            />
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8">Coming Soon</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <StoreCard 
              name="Best Buy"
              cashback="?"
              hasPage={false}
            />
            <StoreCard 
              name="Home Depot"
              cashback="?"
              hasPage={false}
            />
            <StoreCard 
              name="Walmart"
              cashback="?"
              hasPage={false}
            />
          </div>
        </div>
      </section>

      {/* Store Page Suggestion */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
            <div className="text-center mb-8">
              <Star className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2">Which Store Next?</h2>
              <p className="text-gray-600">
                Help us prioritize! Which store would you like to see a dedicated page for next?
              </p>
            </div>

            {!showThankYou ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="store-suggestion" className="block text-sm font-medium text-gray-700 mb-1">
                    Store Name
                  </label>
                  <input
                    type="text"
                    id="store-suggestion"
                    value={suggestion}
                    onChange={(e) => setSuggestion(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g., Target, Costco, etc."
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center"
                >
                  Submit Suggestion
                </button>
              </form>
            ) : (
              <div className="text-center py-4">
                <ThumbsUp className="w-12 h-12 text-green-500 mx-auto mb-2" />
                <p className="text-lg font-medium text-green-600">Thanks for your suggestion!</p>
                <p className="text-gray-600">We'll consider this for our next store page.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default StorePage;