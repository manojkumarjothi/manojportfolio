import { motion } from 'framer-motion';
import { ExternalLink, Github, Code, Smartphone, Globe, Database } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
    githubUrl: "#",
    liveUrl: "#",
    icon: Globe,
    featured: true
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    technologies: ["React", "TypeScript", "Socket.io", "Express", "PostgreSQL"],
    githubUrl: "#",
    liveUrl: "#",
    icon: Code,
    featured: true
  },
  {
    title: "Weather Mobile App",
    description: "Cross-platform mobile app providing detailed weather forecasts with beautiful animations and location-based services.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
    technologies: ["React Native", "Redux", "API Integration", "Expo"],
    githubUrl: "#",
    liveUrl: "#",
    icon: Smartphone,
    featured: false
  },
  {
    title: "Data Visualization Dashboard",
    description: "Interactive dashboard for visualizing complex datasets with charts, graphs, and real-time data updates.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    technologies: ["Vue.js", "D3.js", "Python", "Flask", "Chart.js"],
    githubUrl: "#",
    liveUrl: "#",
    icon: Database,
    featured: false
  },
  {
    title: "AI Chat Assistant",
    description: "Intelligent chatbot using natural language processing to provide helpful responses and assistance.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    technologies: ["Python", "TensorFlow", "React", "FastAPI", "NLP"],
    githubUrl: "#",
    liveUrl: "#",
    icon: Code,
    featured: false
  },
  {
    title: "Social Media Platform",
    description: "A modern social media platform with real-time messaging, post sharing, and social networking features.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
    technologies: ["Next.js", "Prisma", "NextAuth", "Tailwind", "Vercel"],
    githubUrl: "#",
    liveUrl: "#",
    icon: Globe,
    featured: false
  }
];

export const Projects = () => {
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work, from full-stack applications to creative experiments. 
            Each project represents a unique challenge and learning opportunity.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-12 mb-20">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              <motion.div
                className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative group overflow-hidden rounded-2xl shadow-brand-lg hover:shadow-brand-xl transition-all duration-300">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>

              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-brand-primary/10 rounded-lg">
                    <project.icon className="w-6 h-6 text-brand-primary" />
                  </div>
                  <Badge variant="secondary" className="bg-brand-primary/10 text-brand-primary">
                    Featured
                  </Badge>
                </div>

                <h3 className="text-3xl font-bold text-foreground">{project.title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="border-brand-primary/20">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Button variant="outline" className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white">
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </Button>
                  <Button className="gradient-primary text-white hover:shadow-glow">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h3 className="text-3xl font-bold text-foreground text-center">Other Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="overflow-hidden h-full hover:shadow-brand-lg transition-all duration-300 border-border hover:border-brand-primary/50">
                  <div className="relative group">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4 p-2 bg-white/90 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <project.icon className="w-5 h-5 text-brand-primary" />
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <h4 className="text-xl font-bold text-foreground">{project.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>

                    <div className="flex gap-2 pt-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                      <Button size="sm" className="flex-1 gradient-primary text-white">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
