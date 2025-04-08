import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
export function App() {
  return <div className="w-full min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>;
}