import React from 'react';
import { Shield, Lock, Eye, Database, Globe, BarChart, Users, Heart } from 'lucide-react';

export function PrivacyPolicy() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8">
        <h1 className="text-3xl font-bold mb-8 flex items-center">
          <Shield className="h-8 w-8 text-indigo-600 mr-2" />
          Privacy Policy
        </h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Eye className="h-6 w-6 text-indigo-600 mr-2" />
              Information We Collect
            </h2>
            <p className="text-gray-600 mb-4">
              Share Profit Calculator collects minimal information to provide and improve our services. We collect:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Usage data (calculator inputs, preferences)</li>
              <li>Technical information (browser type, device information)</li>
              <li>Analytics data through Google Analytics</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Database className="h-6 w-6 text-indigo-600 mr-2" />
              How We Use Your Information
            </h2>
            <p className="text-gray-600 mb-4">We use collected information to:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Provide and maintain our calculator service</li>
              <li>Improve user experience</li>
              <li>Generate anonymous usage statistics</li>
              <li>Detect and prevent technical issues</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Globe className="h-6 w-6 text-indigo-600 mr-2" />
              Cookies and Tracking
            </h2>
            <p className="text-gray-600 mb-4">
              We use cookies and similar tracking technologies to track activity on our service and hold certain information. Cookies are files with small amount of data that may include an anonymous unique identifier.
            </p>
            <p className="text-gray-600">
              We use the following types of cookies:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-2">
              <li>Essential cookies for site functionality</li>
              <li>Analytics cookies (Google Analytics)</li>
              <li>Preference cookies to remember your settings</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Users className="h-6 w-6 text-indigo-600 mr-2" />
              Children's Privacy
            </h2>
            <p className="text-gray-600 mb-4">
              Our service is not intended for use by children under the age of 13. We do not knowingly collect personally identifiable information from children under 13. If you are a parent or guardian and you are aware that your child has provided us with personal data, please contact us.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <BarChart className="h-6 w-6 text-indigo-600 mr-2" />
              Analytics
            </h2>
            <p className="text-gray-600 mb-4">
              We use Google Analytics to help us understand how our users use the site. Google Analytics collects standard internet log information and visitor behavior information in a way that doesn't identify anyone.
            </p>
            <p className="text-gray-600">
              You can opt-out of Google Analytics by installing the Google Analytics Opt-out Browser Add-on.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Lock className="h-6 w-6 text-indigo-600 mr-2" />
              Data Security
            </h2>
            <p className="text-gray-600 mb-4">
              The security of your data is important to us. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Heart className="h-6 w-6 text-indigo-600 mr-2" />
              Your Rights
            </h2>
            <p className="text-gray-600 mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Access your personal data</li>
              <li>Request correction of your personal data</li>
              <li>Request deletion of your personal data</li>
              <li>Object to processing of your personal data</li>
              <li>Request restriction of processing your personal data</li>
              <li>Request transfer of your personal data</li>
              <li>Withdraw consent</li>
            </ul>
          </section>

          <section className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <p className="text-gray-600">
              If you have any questions about this Privacy Policy, please contact us at:{' '}
              <a href="mailto:contact@shareprofitcalculator.com" className="text-indigo-600 hover:text-indigo-800">
                contact@shareprofitcalculator.com
              </a>
            </p>
          </section>

          <section className="text-sm text-gray-500">
            <p>Last updated: November 10, 2024</p>
          </section>
        </div>
      </div>
    </main>
  );
}