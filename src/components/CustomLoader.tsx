import React from 'react';
import { motion } from 'framer-motion';

interface CustomLoaderProps {
  onComplete: () => void;
}

export const CustomLoader: React.FC<CustomLoaderProps> = ({ onComplete }) => {
  // Start the 3-second timer immediately
  React.useEffect(() => {
    const timer = setTimeout(onComplete, 3000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-gradient-to-br from-background via-background to-brand-primary/5 flex items-center justify-center z-40"
    >
      <div className="relative flex flex-col items-center">
        {/* Outer rotating ring */}
        <motion.div
          initial={{ scale: 0, rotate: 0 }}
          animate={{ scale: 1, rotate: 360 }}
          transition={{ 
            scale: { duration: 0.6, ease: "backOut" },
            rotate: { duration: 3, repeat: Infinity, ease: "linear" }
          }}
          className="w-40 h-40 border-2 border-brand-primary/30 rounded-full flex items-center justify-center relative"
        >
          {/* Inner spinning loader */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="w-32 h-32 border-4 border-transparent border-t-brand-primary border-r-brand-secondary rounded-full"
          />
          
          {/* Pulsing center dot */}
          <motion.div
            animate={{ scale: [0.8, 1.2, 0.8] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute w-4 h-4 bg-brand-accent rounded-full"
          />
          
          {/* Orbiting dots */}
          {[0, 120, 240].map((rotation, index) => (
            <motion.div
              key={index}
              animate={{ rotate: 360 }}
              transition={{ 
                duration: 2 + index * 0.5, 
                repeat: Infinity, 
                ease: "linear",
                delay: index * 0.3
              }}
              className="absolute inset-0"
            >
              <div 
                className="absolute w-3 h-3 bg-brand-primary rounded-full"
                style={{
                  top: '10px',
                  left: '50%',
                  transform: 'translateX(-50%)'
                }}
              />
            </motion.div>
          ))}
        </motion.div>
        
        {/* Loading text with typewriter effect */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-8 text-center"
        >
          <motion.p
            animate={{ 
              opacity: [0.7, 1, 0.7],
              scale: [1, 1.05, 1]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-brand-primary font-semibold text-lg mb-2"
          >
            Loading Portfolio
          </motion.p>
          
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 3, ease: "easeInOut" }}
            className="h-1 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent rounded-full"
          />
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-muted-foreground text-sm mt-3"
          >
            Preparing your journey...
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
};