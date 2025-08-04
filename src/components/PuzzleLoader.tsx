import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Unlock, Code, Terminal } from 'lucide-react';

interface PuzzleLoaderProps {
  onComplete: () => void;
}

const puzzles = [
  {
    question: "What does 'HTML' stand for?",
    answer: "hypertext markup language",
    hint: "It's the standard markup language for web pages",
    icon: Code
  },
  {
    question: "Type the JavaScript keyword to declare a variable:",
    answer: "let",
    hint: "Modern ES6 way to declare variables",
    icon: Terminal
  },
  {
    question: "What CSS property controls text color?",
    answer: "color",
    hint: "It's a very basic styling property",
    icon: Code
  }
];

export const PuzzleLoader: React.FC<PuzzleLoaderProps> = ({ onComplete }) => {
  const [currentPuzzle, setPuzzle] = useState(puzzles[Math.floor(Math.random() * puzzles.length)]);
  const [userInput, setUserInput] = useState('');
  const [showHint, setShowHint] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const checkAnswer = () => {
    const normalizedInput = userInput.toLowerCase().trim();
    const normalizedAnswer = currentPuzzle.answer.toLowerCase().trim();
    
    if (normalizedInput === normalizedAnswer) {
      setIsCorrect(true);
      setShowSuccess(true);
      setTimeout(() => {
        onComplete();
      }, 2000);
    }
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        checkAnswer();
      }
    };

    window.addEventListener('keypress', handleKeyPress);
    return () => window.removeEventListener('keypress', handleKeyPress);
  }, [userInput]);

  const IconComponent = currentPuzzle.icon;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-background flex items-center justify-center z-50"
    >
      <div className="absolute inset-0 bg-gradient-hero opacity-50" />
      
      <motion.div
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="relative max-w-md w-full mx-4 p-8 bg-card rounded-2xl border border-border shadow-brand-xl"
      >
        <AnimatePresence>
          {!showSuccess ? (
            <motion.div
              key="puzzle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center space-y-6"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 mx-auto bg-brand-primary/10 rounded-full flex items-center justify-center"
              >
                <IconComponent className="w-8 h-8 text-brand-primary" />
              </motion.div>

              <div>
                <h2 className="text-2xl font-bold mb-2 text-foreground">Unlock Portfolio</h2>
                <p className="text-muted-foreground text-sm">Solve this puzzle to continue</p>
              </div>

              <div className="space-y-4">
                <p className="text-foreground font-medium">{currentPuzzle.question}</p>
                
                <div className="relative">
                  <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all"
                    placeholder="Type your answer..."
                    autoFocus
                  />
                  <motion.button
                    onClick={checkAnswer}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-brand-primary text-white rounded-md hover:bg-brand-secondary transition-colors"
                  >
                    <Lock className="w-4 h-4" />
                  </motion.button>
                </div>

                <div className="flex justify-between items-center">
                  <button
                    onClick={() => setShowHint(!showHint)}
                    className="text-sm text-brand-primary hover:text-brand-secondary transition-colors"
                  >
                    {showHint ? 'Hide' : 'Show'} Hint
                  </button>
                  <p className="text-xs text-muted-foreground">Press Enter to submit</p>
                </div>

                <AnimatePresence>
                  {showHint && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="p-3 bg-brand-primary/5 rounded-lg text-sm text-muted-foreground"
                    >
                      💡 {currentPuzzle.hint}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center space-y-6"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1, rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-16 h-16 mx-auto bg-brand-success/10 rounded-full flex items-center justify-center"
              >
                <Unlock className="w-8 h-8 text-brand-success" />
              </motion.div>

              <div>
                <h2 className="text-2xl font-bold text-brand-success">Correct!</h2>
                <p className="text-muted-foreground">Unlocking portfolio...</p>
              </div>

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.5 }}
                className="h-2 bg-brand-success/20 rounded-full overflow-hidden"
              >
                <motion.div
                  initial={{ x: '-100%' }}
                  animate={{ x: '0%' }}
                  transition={{ duration: 1.5 }}
                  className="h-full bg-brand-success rounded-full"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};