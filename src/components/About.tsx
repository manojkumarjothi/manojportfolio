import { motion } from 'framer-motion';
import { Code, Palette, Zap, Award, BookOpen, Users } from 'lucide-react';
import { Card } from '@/components/ui/card';

const skills = [
  { name: "Python & Django", level: 80, color: "bg-brand-primary" },
  { name: "Flask & FastAPI", level: 80, color: "bg-brand-secondary" },
  { name: "React & JavaScript", level: 80, color: "bg-brand-accent" },
  { name: "PostgreSQL & MongoDB", level: 88, color: "bg-brand-warning" },
  { name: "Data Science & ML", level: 80, color: "bg-brand-success" },
  { name: "Docker & AWS", level: 75, color: "bg-brand-info" },
];

const highlights = [
  {
    icon: Code,
    title: "Python Full-Stack",
    description: "Building scalable web applications with Django, Flask, and modern Python frameworks with robust API design."
  },
  {
    icon: Palette,
    title: "Data Science & ML",
    description: "Developing machine learning models and data analysis solutions with Pandas, NumPy, Scikit-learn, and TensorFlow."
  },
  {
    icon: Zap,
    title: "API Development",
    description: "Creating efficient REST APIs and microservices with FastAPI, Django REST Framework, and database optimization."
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
            I'm a dedicated Computer Science student specializing in Python full-stack development and data science. 
            Passionate about building scalable applications and leveraging machine learning to solve real-world problems.
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
                My journey with Python began during my first year of engineering when I discovered its versatility in both web development and data analysis. 
                What started with learning basic syntax quickly evolved into building full-fledged applications using Django and exploring machine learning algorithms.
              </p>
              <p>
                I’m currently pursuing my Bachelor of Engineering in Computer Science and Engineering (BE-CSE) at
                Adhiyamaan College of Engineering, Hosur, where I’ve maintained a CGPA of 8.5. I specialize in Python full-stack development, data science, and machine learning. 
                Over the years, I’ve completed several internships and contributed to multiple open-source Python projects, gaining hands-on experience across domains.
              </p>
              <p>
               When I’m not developing Python applications, you’ll often find me analyzing datasets, experimenting with new ML models, or mentoring fellow students in Django and 
               data science fundamentals. I’m passionate about continuous learning and sharing knowledge within the developer community.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border">
                <BookOpen className="w-8 h-8 text-brand-primary" />
                <div>
                  <p className="font-semibold text-foreground">8.5 GPA</p>
                  <p className="text-sm text-muted-foreground">Academic Excellence</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border">
                <Users className="w-8 h-8 text-brand-secondary" />
                <div>
                  <p className="font-semibold text-foreground">5+ Students</p>
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
