import { motion } from 'framer-motion';

interface CustomLoaderProps {
  onComplete: () => void;
}

export const CustomLoader: React.FC<CustomLoaderProps> = ({ onComplete }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-background flex items-center justify-center z-40"
      onAnimationComplete={() => {
        setTimeout(onComplete, 1000);
      }}
    >
      <div className="relative">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-32 h-32 border-4 border-brand-primary/20 rounded-full flex items-center justify-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-24 h-24 border-4 border-t-brand-primary border-r-brand-secondary border-b-brand-accent border-l-transparent rounded-full"
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-center"
        >
          <motion.p
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-brand-primary font-medium"
          >
            Loading Portfolio
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
};