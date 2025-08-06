import { motion } from 'framer-motion';
import { Code2, Database, Globe, Server, Zap, Cpu } from 'lucide-react';

const languages = [
  { name: 'Python', icon: Code2, color: 'text-brand-primary', bgColor: 'bg-brand-primary/10' },
  { name: 'Django', icon: Server, color: 'text-brand-secondary', bgColor: 'bg-brand-secondary/10' },
  { name: 'Flask', icon: Zap, color: 'text-brand-accent', bgColor: 'bg-brand-accent/10' },
  { name: 'PostgreSQL', icon: Database, color: 'text-brand-warning', bgColor: 'bg-brand-warning/10' },
  { name: 'React', icon: Cpu, color: 'text-brand-info', bgColor: 'bg-brand-info/10' },
  { name: 'FastAPI', icon: Globe, color: 'text-brand-success', bgColor: 'bg-brand-success/10' },
];

export const ProgrammingLanguages = () => {
  return (
    <section className="py-16 bg-muted/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold text-foreground mb-4">Tech Stack</h3>
          <p className="text-lg text-muted-foreground">
            Technologies I use to build powerful Python applications
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {languages.map((lang, index) => (
            <motion.div
              key={lang.name}
              initial={{ opacity: 0, scale: 0.5, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.1, 
                rotate: 5,
                transition: { duration: 0.2 }
              }}
              className="flex flex-col items-center group"
            >
              <motion.div
                className={`w-16 h-16 ${lang.bgColor} rounded-2xl flex items-center justify-center mb-3 group-hover:shadow-lg transition-all duration-300`}
                whileHover={{ y: -5 }}
              >
                <lang.icon className={`w-8 h-8 ${lang.color}`} />
              </motion.div>
              <motion.p
                className="text-sm font-medium text-foreground text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                {lang.name}
              </motion.p>
            </motion.div>
          ))}
        </div>

        {/* Floating animation elements */}
        <div className="relative mt-16 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-brand-primary/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, -40, -20],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};