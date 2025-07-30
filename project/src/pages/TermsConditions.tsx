import React from 'react';

export default function TermsConditions() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms & Conditions</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            Last updated: December 15, 2024
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Acceptance of Terms</h2>
            <p className="text-gray-700">
              By accessing and using BESTDEALS, you accept and agree to be bound by the terms 
              and provision of this agreement. If you do not agree to abide by the above, 
              please do not use this service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Service Description</h2>
            <p className="text-gray-700 mb-4">
              BESTDEALS is a price comparison platform that helps users find the best deals 
              across multiple Indian e-commerce platforms. We provide:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Price comparison services across multiple platforms</li>
              <li>Product search and discovery features</li>
              <li>User account management</li>
              <li>Wishlist and cart functionality</li>
              <li>Price tracking and alerts</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">User Responsibilities</h2>
            <p className="text-gray-700 mb-4">
              As a user of our service, you agree to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Provide accurate and current information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Use the service only for lawful purposes</li>
              <li>Not attempt to disrupt or harm our systems</li>
              <li>Respect intellectual property rights</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Affiliate Relationships</h2>
            <p className="text-gray-700">
              BESTDEALS participates in affiliate programs with various e-commerce platforms. 
              We may earn commissions from purchases made through our affiliate links. 
              This does not affect the price you pay or our commitment to providing 
              accurate price comparisons.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Disclaimer of Warranties</h2>
            <p className="text-gray-700">
              The information on this platform is provided on an "as is" basis. We make no 
              warranties, expressed or implied, and hereby disclaim all other warranties 
              including implied warranties of merchantability, fitness for a particular 
              purpose, or non-infringement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitation of Liability</h2>
            <p className="text-gray-700">
              In no event shall BESTDEALS be liable for any direct, indirect, punitive, 
              incidental, special, consequential damages arising out of or in any way 
              connected with the use of this platform.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Modifications</h2>
            <p className="text-gray-700">
              We reserve the right to modify these terms at any time. Changes will be 
              effective immediately upon posting. Your continued use of the service 
              constitutes acceptance of any changes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
            <p className="text-gray-700">
              For questions regarding these terms, please contact us:
            </p>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-700">
                Email: legal@bestdeals.com<br/>
                Phone: +91 12345 67890<br/>
                Address: Mumbai, India
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}