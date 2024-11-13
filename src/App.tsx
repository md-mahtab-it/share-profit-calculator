import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Calculator } from './components/Calculator';
import { Footer } from './components/Footer';
import { ContentSection } from './components/ContentSection';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfService } from './pages/TermsOfService';

function HomePage() {
  return (
    <>
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Share Profit Calculator
          </h1>
          <p className="text-center text-gray-600 mb-8">
            Make informed investment decisions with our advanced stock profit calculator
          </p>
          
          <Calculator />
          <ContentSection />
        </div>
      </main>
    </>
  );
}

export function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
      </Routes>

      <Footer />
    </div>
  );
}