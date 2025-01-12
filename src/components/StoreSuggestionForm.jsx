import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import DumplingIcon from './DumplingIcon';
import PropTypes from 'prop-types';

// Add export default
export const StoreSuggestionForm = () => {
  const [showThankYou, setShowThankYou] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError('');

    const formData = {
      timestamp: new Date().toISOString(),
      storeName: event.target['store-name'].value,
      email: event.target.email.value || 'Not provided',
      storeUrl: event.target['store-url'].value || 'Not provided',
      comments: event.target.comments.value || 'Not provided'
    };

    try {
      const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby_ML-NP_O2v5lqykGIeEqElGIzTpeAy1I5XPqXa3VRSsFoh7LMCOxlOizArgLuaBQU/exec';

const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      // Show thank you message
      setShowThankYou(true);
      event.target.reset();
    } catch (err) {
      setError('Failed to submit suggestion. Please try again later.');
      console.error('Submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (showThankYou) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 mx-auto mb-4">
          <DumplingIcon />
        </div>
        <h4 className="text-xl font-medium mb-2">Thank you for your suggestion!</h4>
        <p className="text-gray-600 mb-4">We'll work on adding this store to our network.</p>
        {formData?.email && (
          <p className="text-sm text-blue-600">We'll notify you when it's added!</p>
        )}
        <button 
          onClick={() => setShowThankYou(false)}
          className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
        >
          Suggest another store
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="p-4 bg-red-50 text-red-600 rounded-lg text-sm">
          {error}
        </div>
      )}
      
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
        disabled={isSubmitting}
        className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <span>Submitting...</span>
        ) : (
          <>
            <span>Submit Suggestion</span>
            <ExternalLink className="w-4 h-4" />
          </>
        )}
      </button>
      
      <p className="text-sm text-gray-500 text-center mt-2">
        We review every suggestion and will notify you when we add your store!
      </p>
    </form>
  );
};

export default StoreSuggestionForm;