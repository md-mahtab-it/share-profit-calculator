import { 
  BarChart2, 
  Calculator, 
  HelpCircle, 
  BookOpen, 
  Target,
  Info,
  Lightbulb
} from 'lucide-react';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Menu */}
        <div className="flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center md:justify-start">
            <RouterLink to="/" className="flex items-center">
              <BarChart2 className="h-8 w-8" />
              <span className="ml-2 text-xl font-bold">Share Profit Calculator</span>
            </RouterLink>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-white/10 transition"
              >
                <Calculator className="h-4 w-4 mr-2" />
                Calculator
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-white/10 transition"
              >
                <Lightbulb className="h-4 w-4 mr-2" />
                About
              </button>
              <button 
                onClick={() => scrollToSection('features')}
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-white/10 transition"
              >
                <Target className="h-4 w-4 mr-2" />
                Features
              </button>
              <button 
                onClick={() => scrollToSection('calculation')}
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-white/10 transition"
              >
                <Info className="h-4 w-4 mr-2" />
                Calculation
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-white/10 transition"
              >
                <HelpCircle className="h-4 w-4 mr-2" />
                FAQ
              </button>
              <button 
                onClick={() => scrollToSection('tips')}
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-white/10 transition"
              >
                <BookOpen className="h-4 w-4 mr-2" />
                Tips
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden border-t border-white/10">
          <div className="px-2 pt-2 pb-3 flex flex-wrap gap-1 justify-center">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center px-2 py-1 text-xs font-medium text-white hover:bg-white/10 transition rounded"
            >
              <Calculator className="h-3 w-3 mr-1" />
              Calculator
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="inline-flex items-center px-2 py-1 text-xs font-medium text-white hover:bg-white/10 transition rounded"
            >
              <Lightbulb className="h-3 w-3 mr-1" />
              About
            </button>
            <button 
              onClick={() => scrollToSection('features')}
              className="inline-flex items-center px-2 py-1 text-xs font-medium text-white hover:bg-white/10 transition rounded"
            >
              <Target className="h-3 w-3 mr-1" />
              Features
            </button>
            <button 
              onClick={() => scrollToSection('calculation')}
              className="inline-flex items-center px-2 py-1 text-xs font-medium text-white hover:bg-white/10 transition rounded"
            >
              <Info className="h-3 w-3 mr-1" />
              Calculation
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="inline-flex items-center px-2 py-1 text-xs font-medium text-white hover:bg-white/10 transition rounded"
            >
              <HelpCircle className="h-3 w-3 mr-1" />
              FAQ
            </button>
            <button 
              onClick={() => scrollToSection('tips')}
              className="inline-flex items-center px-2 py-1 text-xs font-medium text-white hover:bg-white/10 transition rounded"
            >
              <BookOpen className="h-3 w-3 mr-1" />
              Tips
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}