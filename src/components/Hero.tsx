import { motion } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const typewriterText = "Creative Technologist";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 gradient-hero" />
      <motion.div
        animate={{ 
          background: [
            'radial-gradient(circle at 20% 80%, hsl(var(--brand-primary) / 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 20%, hsl(var(--brand-secondary) / 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 40% 40%, hsl(var(--brand-accent) / 0.1) 0%, transparent 50%)',
          ]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0"
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-brand-primary font-medium text-lg tracking-wider uppercase"
            >
              Hello, I'm
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-7xl font-bold text-foreground leading-tight"
            >
              Alex Johnson
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="h-16 flex items-center justify-center"
            >
              <motion.h2
                key={typewriterText}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-2xl md:text-3xl text-muted-foreground font-mono"
              >
                {typewriterText.split('').map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="inline-block"
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="inline-block w-0.5 h-8 bg-brand-primary ml-1"
                />
              </motion.h2>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
              Passionate about creating digital experiences that blend creativity with cutting-edge technology. 
              Currently pursuing Computer Science with a focus on full-stack development.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.0 }}
              className="flex flex-wrap gap-4 justify-center mt-8"
            >
              <Button 
                size="lg" 
                className="gradient-primary text-white hover:shadow-glow transition-all duration-300"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white transition-all duration-300"
              >
                View Projects
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2 }}
              className="flex gap-6 justify-center mt-8"
            >
              {[
                { icon: Github, href: "#", label: "GitHub" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Mail, href: "#contact", label: "Email" }
              ].map(({ icon: Icon, href, label }, index) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-card rounded-full border border-border shadow-brand-md hover:shadow-brand-lg hover:border-brand-primary transition-all duration-300"
                  aria-label={label}
                >
                  <Icon className="w-6 h-6 text-foreground hover:text-brand-primary transition-colors" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="block p-2 text-brand-primary hover:text-brand-secondary transition-colors"
        >
          <ArrowDown className="w-6 h-6" />
        </motion.a>
      </motion.div>
      
      {/* Floating elements */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-10 w-20 h-20 bg-brand-primary/10 rounded-full blur-xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-10 w-32 h-32 bg-brand-secondary/10 rounded-full blur-xl"
      />
    </section>
  );
};