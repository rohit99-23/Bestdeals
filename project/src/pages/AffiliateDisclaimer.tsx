import React from 'react';

export default function AffiliateDisclaimer() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Affiliate Disclaimer</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            Last updated: December 15, 2024
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Affiliate Marketing Disclosure</h2>
            <p className="text-gray-700 mb-4">
              BESTDEALS participates in various affiliate marketing programs, which means we may 
              earn commissions on purchases made through our affiliate links. This disclosure 
              is made in accordance with the Federal Trade Commission's guidelines concerning 
              the use of endorsements and testimonials in advertising.
            </p>
            <p className="text-gray-700">
              When you click on certain links on our website and make a purchase, we may 
              receive a commission. This helps us maintain our free service and continue 
              providing you with the best price comparison experience.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Affiliate Partners</h2>
            <p className="text-gray-700 mb-4">
              We maintain affiliate relationships with various e-commerce platforms including but not limited to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Amazon India</li>
              <li>Flipkart</li>
              <li>Meesho</li>
              <li>Myntra</li>
              <li>Ajio</li>
              <li>Other leading Indian e-commerce platforms</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">No Additional Cost to You</h2>
            <p className="text-gray-700">
              Our affiliate partnerships do not result in any additional cost to you. The prices 
              you see on our platform are the same prices offered directly by the retailers. 
              We simply receive a small commission from the retailer when you make a purchase 
              through our affiliate links.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Commitment to Objectivity</h2>
            <p className="text-gray-700 mb-4">
              Despite our affiliate relationships, we are committed to providing:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Accurate and up-to-date price information</li>
              <li>Honest and unbiased product comparisons</li>
              <li>Transparent disclosure of our affiliate relationships</li>
              <li>Equal treatment of all platforms and products</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Editorial Independence</h2>
            <p className="text-gray-700">
              Our editorial content, including product reviews, comparisons, and recommendations, 
              is created independently of our affiliate partnerships. We do not allow our 
              affiliate relationships to influence our editorial decisions or the information 
              we present to users.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Third-Party Responsibility</h2>
            <p className="text-gray-700">
              While we strive to provide accurate information, we are not responsible for the 
              products, services, or policies of our affiliate partners. Any issues with 
              purchases, returns, or customer service should be directed to the respective 
              retailer.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to This Disclaimer</h2>
            <p className="text-gray-700">
              We may update this affiliate disclaimer from time to time. Any changes will be 
              posted on this page with an updated revision date. We encourage you to review 
              this disclaimer periodically.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700">
              If you have any questions about our affiliate relationships or this disclaimer, 
              please contact us:
            </p>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-700">
                Email: affiliate@bestdeals.com<br/>
                Phone: +91 12345 67890<br/>
                Address: Mumbai, India
              </p>
            </div>
          </section>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mt-8">
            <h3 className="text-lg font-semibold text-orange-800 mb-2">Thank You</h3>
            <p className="text-orange-700">
              Thank you for using BESTDEALS and supporting our mission to help you find the 
              best deals across India's top e-commerce platforms. Your trust is important to us, 
              and we are committed to maintaining transparency in all our business relationships.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}