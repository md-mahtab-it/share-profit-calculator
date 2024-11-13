import { Mail, Github, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Share Profit Calculator</h3>
            <p className="text-sm">Advanced stock profit calculations made simple. Make informed investment decisions with our professional tools.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="hover:text-white transition">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white transition">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="space-y-2">
              <a href="mailto:contact@shareprofitcalculator.com" className="flex items-center hover:text-white transition">
                <Mail className="h-5 w-5 mr-2" />
                contact@shareprofitcalculator.com
              </a>
              <div className="flex space-x-4 mt-4">
                <a href="https://github.com/shareprofitcalculator" className="hover:text-white transition">
                  <Github className="h-6 w-6" />
                </a>
                <a href="https://linkedin.com/company/shareprofitcalculator" className="hover:text-white transition">
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Share Profit Calculator. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}