import React from 'react';
import { FileText, Shield, AlertCircle, Scale, Ban, HelpCircle } from 'lucide-react';

export function TermsOfService() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8">
        <h1 className="text-3xl font-bold mb-8 flex items-center">
          <FileText className="h-8 w-8 text-indigo-600 mr-2" />
          Terms of Service
        </h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Scale className="h-6 w-6 text-indigo-600 mr-2" />
              Agreement to Terms
            </h2>
            <p className="text-gray-600">
              By accessing or using Share Profit Calculator, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Shield className="h-6 w-6 text-indigo-600 mr-2" />
              Use License
            </h2>
            <p className="text-gray-600 mb-4">
              Permission is granted to temporarily use Share Profit Calculator for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose</li>
              <li>Attempt to decompile or reverse engineer any software contained in Share Profit Calculator</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <AlertCircle className="h-6 w-6 text-indigo-600 mr-2" />
              Disclaimer
            </h2>
            <p className="text-gray-600 mb-4">
              The materials on Share Profit Calculator are provided on an 'as is' basis. Share Profit Calculator makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Warranties or conditions of merchantability</li>
              <li>Fitness for a particular purpose</li>
              <li>Non-infringement of intellectual property or other violation of rights</li>
            </ul>
            <p className="text-gray-600 mt-4">
              Furthermore, Share Profit Calculator does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Ban className="h-6 w-6 text-indigo-600 mr-2" />
              Limitations
            </h2>
            <p className="text-gray-600 mb-4">
              In no event shall Share Profit Calculator or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use Share Profit Calculator, even if Share Profit Calculator or a Share Profit Calculator authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <HelpCircle className="h-6 w-6 text-indigo-600 mr-2" />
              Financial Advice Disclaimer
            </h2>
            <p className="text-gray-600 mb-4">
              The calculator and information provided on Share Profit Calculator is for general informational purposes only and should not be considered as financial advice. We strongly recommend:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Consulting with qualified financial advisors before making investment decisions</li>
              <li>Verifying all calculations independently</li>
              <li>Understanding that past performance is not indicative of future results</li>
              <li>Acknowledging that stock trading involves risk and potential loss of capital</li>
            </ul>
          </section>

          <section className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <p className="text-gray-600">
              If you have any questions about these Terms of Service, please contact us at:{' '}
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