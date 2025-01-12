import React from 'react';
import { ExternalLink } from 'lucide-react';

const PayPalDonateButton = () => {
  return (
    <a 
      href="https://www.paypal.com/donate/?hosted_button_id=ZWQU8JSWCHPE6"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 flex items-center"
    >
      Support with PayPal <ExternalLink className="w-4 h-4 ml-2" />
    </a>
  );
};

export default PayPalDonateButton;