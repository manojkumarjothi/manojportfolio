
import { motion } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin, Mail, Code, Database, Globe, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProgrammingLanguages } from './ProgrammingLanguages';

const typewriterText = "PythonFull Stack Developer";

export const Hero = () => {
  return (
    <>
      <section id="home" className="min-h-screen flex flex-col relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-50">
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
        </div>
        
        {/* Main content container */}
        <div className="flex-1 flex items-center justify-center relative z-10 py-20">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto space-y-8">
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
                  className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight"
                >
                  Manoj Kumar
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
                    className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-mono"
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
                      className="inline-block w-0.5 h-6 md:h-8 bg-brand-primary ml-1"
                    />
                  </motion.h2>
                </motion.div>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.8 }}
                  className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4"
                >
                  Passionate Python developer building scalable web applications with Django/Flask and creating data-driven solutions. 
                  Currently pursuing Computer Science with specialization in machine learning and backend development.
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.0 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
                >
                  <Button 
                    size="lg" 
                    className="gradient-primary text-white hover:shadow-glow transition-all duration-300 w-full sm:w-auto"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download Resume
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white transition-all duration-300 w-full sm:w-auto"
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
                    { icon: Github, href: "https://github.com/manojkumarjothi/", label: "GitHub" },
                    { icon: Linkedin, href: "https://www.linkedin.com/in/manoj-kumar-97b6672a3", label: "LinkedIn" },
                    { icon: Mail, href: "mailto:manojkumarjothi2006@gmail.com", label: "Email" }
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
        </div>
        
        {/* Professional Details Section - Better organized */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 pb-20"
        >
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              {/* Skills Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="text-center p-6 bg-card/80 backdrop-blur-sm rounded-2xl border border-border hover:border-brand-primary/50 transition-all duration-300"
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-16 h-16 mx-auto mb-4 bg-brand-primary/10 rounded-full flex items-center justify-center"
                  >
                    <Code className="w-8 h-8 text-brand-primary" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Backend Expert</h3>
                  <p className="text-muted-foreground">Django, Flask & FastAPI specialist with 3+ years experience</p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="text-center p-6 bg-card/80 backdrop-blur-sm rounded-2xl border border-border hover:border-brand-secondary/50 transition-all duration-300"
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-16 h-16 mx-auto mb-4 bg-brand-secondary/10 rounded-full flex items-center justify-center"
                  >
                    <Database className="w-8 h-8 text-brand-secondary" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Data Science</h3>
                  <p className="text-muted-foreground">Machine Learning & Analytics with Pandas, NumPy & Scikit-learn</p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="text-center p-6 bg-card/80 backdrop-blur-sm rounded-2xl border border-border hover:border-brand-accent/50 transition-all duration-300"
                >
                  <motion.div
                    animate={{ rotate: [0, -360] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="w-16 h-16 mx-auto mb-4 bg-brand-accent/10 rounded-full flex items-center justify-center"
                  >
                    <Globe className="w-8 h-8 text-brand-accent" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Full Stack</h3>
                  <p className="text-muted-foreground">React frontend integration with Python backend solutions</p>
                </motion.div>
              </div>

              {/* Animated Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-8"
              >
                {[
                  { number: "5+", label: "Projects Completed" },
                  { number: "8.5", label: "GPA Maintained" },
                  { number: "5+", label: "Students Mentored" },
                  { number: "1+", label: "Years Experience" }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 200
                    }}
                    className="text-center p-4 bg-card/50 rounded-xl border border-border/50"
                  >
                    <motion.div
                      animate={{ 
                        opacity: [0.7, 1, 0.7],
                        scale: [1, 1.05, 1]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        delay: index * 0.5
                      }}
                      className="text-2xl md:text-3xl font-bold text-brand-primary mb-2"
                    >
                      {stat.number}
                    </motion.div>
                    <p className="text-muted-foreground text-sm">{stat.label}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
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
        
        {/* Floating elements - positioned better */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-4 md:left-10 w-16 h-16 md:w-20 md:h-20 bg-brand-primary/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-4 md:right-10 w-24 h-24 md:w-32 md:h-32 bg-brand-secondary/10 rounded-full blur-xl"
        />
      </section>

      <ProgrammingLanguages />
    </>
  );
};
