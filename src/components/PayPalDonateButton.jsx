import React, { useEffect, useRef } from 'react';
import { ExternalLink } from 'lucide-react';

const PayPalDonateButton = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.paypalobjects.com/donate/sdk/donate-sdk.js';
    script.charset = 'UTF-8';
    
    script.onload = () => {
      if (window.PayPal) {
        window.PayPal.Donation.Button({
          env: 'production',
          hosted_button_id: 'ZWQU8JSWCHPE6',
          image: {
            src: '',  // Empty string removes PayPal's default image
            alt: 'Donate with PayPal button',
            title: 'PayPal - The safer, easier way to pay online!',
          }
        }).render('#paypal-donate-btn');
      }
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div 
      id="paypal-donate-btn"
      className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 inline-flex items-center cursor-pointer"
    >
      Support with PayPal <ExternalLink className="w-4 h-4 ml-2" />
    </div>
  );
};

export default PayPalDonateButton;