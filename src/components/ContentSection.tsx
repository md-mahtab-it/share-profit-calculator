import React from 'react';
import { 
  Calculator, 
  HelpCircle, 
  BookOpen, 
  AlertCircle, 
  CheckCircle2,
  XCircle,
  Info,
  Lightbulb,
  Target,
  List,
  Zap
} from 'lucide-react';

export function ContentSection() {
  return (
    <div className="mt-12 space-y-12">
      {/* Introduction */}
      <section id="about" className="bg-white rounded-lg shadow-xl p-8">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <Lightbulb className="h-6 w-6 text-indigo-600 mr-2" />
          About Share Profit Calculator
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold mb-3">What is Share Profit Calculator?</h3>
            <p className="text-gray-600">
              Our Share Profit Calculator is a comprehensive tool designed to help investors accurately calculate potential returns on stock investments. 
              It takes into account various factors including purchase price, selling price, number of shares, commission fees, and capital gains tax to provide 
              a detailed analysis of your investment's profitability.
            </p>
          </div>

          <div id="features" className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3 flex items-center">
                <Target className="h-5 w-5 text-indigo-600 mr-2" />
                Key Features
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Real-time profit/loss calculations</li>
                <li>• Support for multiple currencies</li>
                <li>• Flexible commission structures (flat fee or percentage)</li>
                <li>• Capital Gains Tax consideration</li>
                <li>• ROI and price change analysis</li>
                <li>• Professional investment summary</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3 flex items-center">
                <Zap className="h-5 w-5 text-indigo-600 mr-2" />
                Benefits
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Make informed investment decisions</li>
                <li>• Understand true cost of trading</li>
                <li>• Plan for tax implications</li>
                <li>• Compare different investment scenarios</li>
                <li>• Track investment performance</li>
                <li>• Optimize trading strategies</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3 flex items-center">
              <List className="h-5 w-5 text-indigo-600 mr-2" />
              How to Use
            </h3>
            <ol className="space-y-3 text-gray-600">
              <li>
                <span className="font-semibold">1. Enter Purchase Details:</span>
                <p>Input the stock purchase price per share and the number of shares you bought or plan to buy.</p>
              </li>
              <li>
                <span className="font-semibold">2. Add Selling Information:</span>
                <p>Enter the selling price per share (actual or projected).</p>
              </li>
              <li>
                <span className="font-semibold">3. Set Commission Fees:</span>
                <p>Specify your broker's commission fees for both buying and selling. Choose between flat fee ($) or percentage (%) based on your broker's structure.</p>
              </li>
              <li>
                <span className="font-semibold">4. Adjust Tax Rate:</span>
                <p>Enter your applicable Capital Gains Tax rate to see after-tax profits.</p>
              </li>
              <li>
                <span className="font-semibold">5. Review Results:</span>
                <p>Analyze the comprehensive breakdown of costs, profits, ROI, and tax implications.</p>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* Calculation Method */}
      <section id="calculation" className="bg-white rounded-lg shadow-xl p-8">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <Calculator className="h-6 w-6 text-indigo-600 mr-2" />
          Calculation Method
        </h2>
        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold mb-3">Basic Profit/Loss Formula</h3>
            <div className="space-y-2 font-mono text-sm">
              <p>Total Buy Cost = (Share Price × Number of Shares) + Buy Commission</p>
              <p>Total Sell Proceeds = (Selling Price × Number of Shares) - Sell Commission</p>
              <p>Gross Profit/Loss = Total Sell Proceeds - Total Buy Cost</p>
              <p>Net Profit/Loss = Gross Profit/Loss - Capital Gains Tax</p>
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold mb-3">ROI Calculation</h3>
            <div className="space-y-2 font-mono text-sm">
              <p>ROI (%) = (Net Profit ÷ Total Buy Cost) × 100</p>
              <p>Price Change (%) = ((Selling Price - Purchase Price) ÷ Purchase Price) × 100</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faq" className="bg-white rounded-lg shadow-xl p-8">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <HelpCircle className="h-6 w-6 text-indigo-600 mr-2" />
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold mb-2">What is Capital Gains Tax (CGT)?</h3>
            <p className="text-gray-600">Capital Gains Tax is a tax on the profit when you sell an asset that has increased in value. The tax is calculated on the gain you make, not the total amount you receive.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">How are commissions calculated?</h3>
            <p className="text-gray-600">Commissions can be calculated as either a flat fee ($) or a percentage (%) of the transaction value. Our calculator supports both methods for both buy and sell transactions.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">What is ROI?</h3>
            <p className="text-gray-600">Return on Investment (ROI) measures the profitability of an investment as a percentage of the initial investment. It takes into account all costs including commissions and taxes.</p>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section id="tips" className="bg-white rounded-lg shadow-xl p-8">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <BookOpen className="h-6 w-6 text-indigo-600 mr-2" />
          Investment Tips
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="font-semibold text-green-600 flex items-center">
              <CheckCircle2 className="h-5 w-5 mr-2" />
              Best Practices
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Consider transaction costs before trading</li>
              <li>• Calculate potential tax implications</li>
              <li>• Diversify your investment portfolio</li>
              <li>• Keep detailed records of all trades</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold text-red-600 flex items-center">
              <XCircle className="h-5 w-5 mr-2" />
              Common Mistakes
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Ignoring commission fees</li>
              <li>• Forgetting about tax obligations</li>
              <li>• Not considering the total cost basis</li>
              <li>• Making emotional trading decisions</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-amber-50 rounded-lg p-6">
        <div className="flex items-start">
          <AlertCircle className="h-6 w-6 text-amber-600 mr-2 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold text-amber-800 mb-2">Disclaimer</h3>
            <p className="text-amber-700 text-sm">
              This calculator is for informational purposes only and should not be considered financial advice. 
              The actual profit or loss from stock trading may vary based on market conditions, timing, and other factors. 
              Always consult with a qualified financial advisor before making investment decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Pro Tips Box */}
      <section className="bg-indigo-50 rounded-lg p-6">
        <div className="flex items-start">
          <Info className="h-6 w-6 text-indigo-600 mr-2 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold text-indigo-800 mb-2">Pro Tips</h3>
            <ul className="text-indigo-700 text-sm space-y-2">
              <li>• Use the calculator to compare different scenarios before making trades</li>
              <li>• Save your calculations for tax reporting purposes</li>
              <li>• Consider using different commission types based on your broker's fee structure</li>
              <li>• Regular monitoring of your investment performance can help optimize your strategy</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}