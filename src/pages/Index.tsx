import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { PuzzleLoader } from '@/components/PuzzleLoader';
import { CustomLoader } from '@/components/CustomLoader';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Projects } from '@/components/Projects';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

const Index = () => {
  const [showPuzzle, setShowPuzzle] = useState(true);
  const [showLoader, setShowLoader] = useState(false);
  const [showPortfolio, setShowPortfolio] = useState(false);

  const handlePuzzleComplete = () => {
    setShowPuzzle(false);
    setShowLoader(true);
  };

  const handleLoaderComplete = () => {
    setShowLoader(false);
    setShowPortfolio(true);
  };

  // Skip loading screens for development (remove in production)
  useEffect(() => {
    const skipLoading = localStorage.getItem('skipPortfolioLoading');
    if (skipLoading === 'true') {
      setShowPuzzle(false);
      setShowLoader(false);
      setShowPortfolio(true);
    }
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <AnimatePresence mode="wait">
          {showPuzzle && (
            <PuzzleLoader key="puzzle" onComplete={handlePuzzleComplete} />
          )}
          {showLoader && (
            <CustomLoader key="loader" onComplete={handleLoaderComplete} />
          )}
          {showPortfolio && (
            <div key="portfolio">
              <Navigation />
              <main>
                <Hero />
                <About />
                <Projects />
                <Contact />
              </main>
              <Footer />
            </div>
          )}
        </AnimatePresence>
      </div>
    </ThemeProvider>
  );
};

export default Index;
