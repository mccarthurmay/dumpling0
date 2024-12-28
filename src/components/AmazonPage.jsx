import React, { useState } from 'react';
import { ShoppingCart, DollarSign, Tag, Percent, Gift, ArrowRight, Copy } from 'lucide-react';
const CommissionCard = ({ category, rate, effectiveRate, description, exampleProducts }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3 className="font-medium text-lg mb-2">{category}</h3>
      <div className="flex justify-between items-center text-sm">
        <span className="text-gray-600">Amazon Rate: {rate}%</span>
        <ArrowRight className="w-4 h-4 text-gray-400" />
        <span className="text-blue-600 font-medium">Your Rate: {effectiveRate}%</span>
      </div>
      {description && (
        <p className="text-xs text-gray-500 mt-2 border-t pt-2">
          {description}
        </p>
      )}
      {isHovered && exampleProducts && (
        <div className="absolute left-0 right-0 top-full mt-2 p-4 bg-white rounded-lg shadow-xl z-10 text-sm">
          <h4 className="font-medium mb-2">Example Products:</h4>
          <ul className="space-y-1">
            {exampleProducts.map((product, index) => (
              <li key={index} className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                {product}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const DealCard = ({ title, originalPrice, currentPrice, savings, link, category }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="text-xs text-blue-600 font-medium mb-2">{category}</div>
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <div className="flex items-center space-x-4 mb-3">
        <span className="text-gray-500 line-through">${originalPrice}</span>
        <span className="text-2xl font-bold">${currentPrice}</span>
        <span className="text-green-600 text-sm">Save ${savings}</span>
      </div>
      <a href={link} className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center">
        View Deal <ArrowRight className="w-4 h-4 ml-1" />
      </a>
    </div>
  );
};

const PromoCode = ({ code, description, expiry }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md flex items-center justify-between">
      <div>
        <div className="flex items-center space-x-3">
          <span className="font-mono font-bold">{code}</span>
          <span className="text-sm text-gray-600">{description}</span>
        </div>
        <div className="text-xs text-gray-500 mt-1">Expires: {expiry}</div>
      </div>
      <button 
        onClick={handleCopy}
        className={`px-3 py-1 rounded ${copied ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'} text-sm font-medium flex items-center`}
      >
        {copied ? 'Copied!' : <><Copy className="w-4 h-4 mr-1" /> Copy</>}
      </button>
    </div>
  );
};

const AmazonPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-700 text-white relative overflow-hidden py-20">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Amazon Deals & Cashback
        </h1>
        <p className="text-xl mb-8">
          Get up to 7.50% cashback on Amazon purchases
        </p>
        <button 
          onClick={() => {
            document.getElementById('commission-rates').scrollIntoView({ behavior: 'smooth' });
          }}
          className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 hover:shadow-lg flex items-center justify-center mx-auto"
        >
          Details below <span className="ml-2">↓</span>
        </button>
      </div>
      </header>
      {/* Hot Deals Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Today's Hottest Deals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <DealCard 
              title="PLACEHOLDER"
              originalPrice="59.99"
              currentPrice="39.99"
              savings="20.00"
              category="Amazon Devices"
              link="#"
            />
            <DealCard 
              title="PLACEHOLDER"
              originalPrice="139.99"
              currentPrice="99.99"
              savings="40.00"
              category="Amazon Devices"
              link="#"
            />
            <DealCard 
              title="PLACEHOLDER"
              originalPrice="129.99"
              currentPrice="89.99"
              savings="40.00"
              category="Amazon Devices"
              link="#"
            />
          </div>
        </div>
      </section>

      {/* Promo Codes Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Extra Savings with Promo Codes (PLACEHOLDER)</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <PromoCode 
              code="PLACEHOLDER"
              description="20% off select PLACEHOLDER"
              expiry="December 31, 2024"
            />
            <PromoCode 
              code="PLACEHOLDER"
              description="20% off select PLACEHOLDER"
              expiry="December 31, 2024"
            />
            <PromoCode 
              code="PLACEHOLDER"
              description="20% off select PLACEHOLDER"
              expiry="December 31, 2024"
            />
          </div>
        </div>
      </section>

      {/* Commission Structure */}
      <section id="commission-rates" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-6">Transparent Cashback Rates</h2>
            
            <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            We share 75% of our commission with you. Here's exactly what you'll earn on each category:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            <CommissionCard 
                category="Premium Beauty"
                rate="10.00"
                effectiveRate="7.50"
                description="I was having a hard time finding examples of this section. This deal may be a rare occurrence."
                exampleProducts={[ 
                  "L'Oreal Professional Shampoo",
                  "Kat Burki Face Cream"
                ]}
            />
            <CommissionCard 
                category="Digital Music, Physical Music, Handmade Products"
                rate="5.00"
                effectiveRate="3.75"
                description="Includes Full Album Downloads, Vinyls, CDs, Artisan-crafted Products, Furniture, Jewelry, Clothing, Accessories"
                exampleProducts={[ 
                  "Midnights (vinyl) - Taylor Swift",
                  "SOS (CD) - SZA",
                  "Elaine Coyne Collectible Wearable Artwear (handmade)",
                  "Bible Verse Jar (handmade)",
                  "Beef Tallow For Skin (handmade)"
                ]}
            />
            <CommissionCard 
                category="Physical Books, Kitchen, Automotive"
                rate="4.50"
                effectiveRate="3.50"
                exampleProducts={[ 
                  "Dog Man: Big Jim Begins (book)",
                  "Caraway Nonstick Ceramic Cookware Set (kitchen)",
                  "Rain-X Windshield Washer Fluid (automotive)"
                ]}
            />
            <CommissionCard 
                category="Amazon Devices & Fashion"
                rate="4.00"
                effectiveRate="3.00"
                description="Includes Fire Tablets, Kindle Devices, Amazon Smart TVs, Fire TV Devices, Amazon Cloud Cam Devices, Echo, Ring Devices"
                exampleProducts={[ 
                  "Amazon Fire TV 50 4K (smart TV)",
                  "Ring Doorbell (ring devices)"
                ]}
            />

            <CommissionCard 
                category="Fashion"
                rate="4.00"
                effectiveRate="3.00"
                description="Includes Luxury Fashion, Watches, Jewelry, Luggage, Shoes, Handbags, Sunglasses, Accessories"
                exampleProducts={[ 
                  "Gucci Sunglasses (luxury, sunglasses)",
                  "Michael Kors Handbag (handbag)"
                ]}
            />

            <CommissionCard 
                category="Home & Lifestyle"
                rate="3.00"
                effectiveRate="2.25"
                description="Includes Toys, Furniture, Home, Lawn & Garden, Pets, Beauty, Musical Instruments, Sports, Baby Products"
                exampleProducts={[ 
                  "Truper Garden Hoe (lawn & garden)",
                  "Pbooo Dancing Cactus (toy)"
                ]}
            />
            <CommissionCard 
                category="PC & Entertainment"
                rate="2.50"
                effectiveRate="2.00"
                description="Includes PC, PC Components, DVD & Blu-Ray"
                exampleProducts={[ 
                  "AMD Ryzen 7 7800X3D (PC components)",
                  "Happy Gilmore Blu-Ray (blu-ray)"
                ]}
            />
            <CommissionCard 
                category="TVs & Digital Gaming"
                rate="2.00"
                effectiveRate="1.50"
                exampleProducts={[ 
                  "Stardew Valley Digital Code (digital gaming)",
                  "Samsung 4K Crystal TV"

                ]}
            />
            <CommissionCard 
                category="Essentials"
                rate="1.00"
                effectiveRate="0.75"
                description="Includes Amazon Fresh, Physical Video Games & Consoles, Grocery, Health & Personal Care"
                exampleProducts={[ 
                  "Minecraft Xbox 360 (physical video game)",
                  "Cinnamon Toast Crunch (grocery)"
                ]}
            />
            <CommissionCard 
                category="Other Categories"
                rate="4.00"
                effectiveRate="3.00"
            />
            <div className="col-span-2 p-4 bg-red-50 rounded-lg">
                <h3 className="font-bold text-red-600 mb-2">Excluded Categories (0% Cashback)</h3>
                <p className="text-sm text-gray-600">
                Gift Cards, Wireless Service Plans, Alcoholic Beverages, Digital Kindle Products purchased as a subscription, 
                Vehicles, Restaurant Food Delivery, Amazon Appstore, Amazon Prime, Amazon Pay Places
                </p>
            </div>
            </div>
        </div>
        </section>

    </div>
  );
};

export default AmazonPage;