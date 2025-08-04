import { motion } from 'framer-motion';
import { Code, Palette, Zap, Award, BookOpen, Users } from 'lucide-react';
import { Card } from '@/components/ui/card';

const skills = [
  { name: "React", level: 90, color: "bg-blue-500" },
  { name: "TypeScript", level: 85, color: "bg-blue-600" },
  { name: "Node.js", level: 80, color: "bg-green-500" },
  { name: "Python", level: 75, color: "bg-yellow-500" },
  { name: "Design", level: 70, color: "bg-purple-500" },
  { name: "MongoDB", level: 65, color: "bg-green-600" },
];

const highlights = [
  {
    icon: Code,
    title: "Full-Stack Development",
    description: "Experienced in both frontend and backend technologies with a focus on modern web development."
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating beautiful, user-centered designs that provide exceptional user experiences."
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Passionate about writing clean, efficient code and optimizing application performance."
  }
];

export const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate Computer Science student with a love for creating innovative digital solutions. 
            Currently in my third year, I combine technical expertise with creative thinking to build meaningful projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Personal Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">My Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                My passion for technology began in high school when I built my first website. 
                What started as curiosity quickly grew into a deep fascination with how code can 
                bring ideas to life and solve real-world problems.
              </p>
              <p>
                Currently pursuing my Bachelor's in Computer Science at University College, 
                I've maintained a 3.8 GPA while actively participating in hackathons, 
                contributing to open-source projects, and leading the university's coding club.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new design trends, reading about 
                emerging technologies, or mentoring fellow students in their programming journey.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border">
                <BookOpen className="w-8 h-8 text-brand-primary" />
                <div>
                  <p className="font-semibold text-foreground">3.8 GPA</p>
                  <p className="text-sm text-muted-foreground">Academic Excellence</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border">
                <Users className="w-8 h-8 text-brand-secondary" />
                <div>
                  <p className="font-semibold text-foreground">50+ Students</p>
                  <p className="text-sm text-muted-foreground">Mentored</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">Technical Skills</h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="space-y-2"
                >
                  <div className="flex justify-between">
                    <span className="font-medium text-foreground">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className={`h-full ${skill.color} rounded-full`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <Card className="p-6 h-full text-center hover:shadow-brand-lg transition-all duration-300 border-border hover:border-brand-primary/50">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 mx-auto mb-4 bg-brand-primary/10 rounded-full flex items-center justify-center"
                >
                  <highlight.icon className="w-8 h-8 text-brand-primary" />
                </motion.div>
                <h4 className="text-xl font-bold text-foreground mb-2">{highlight.title}</h4>
                <p className="text-muted-foreground">{highlight.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};