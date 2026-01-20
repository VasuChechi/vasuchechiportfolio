import { motion } from 'motion/react';
import { Code2, Users, Zap, Award } from 'lucide-react';

export function About() {
  const highlights = [
    {
      icon: Code2,
      title: 'Clean Architecture',
      description: 'Building maintainable, scalable systems with SOLID principles and design patterns',
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Delivering fast, efficient applications with 90+ Lighthouse scores',
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Leading cross-functional teams and mentoring junior developers',
    },
    {
      icon: Award,
      title: 'Best Practices',
      description: 'Following industry standards with comprehensive testing and CI/CD',
    },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-sm uppercase tracking-wider text-muted-foreground mb-4"
            >
              About
            </motion.p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4">
              Professional Profile
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl mb-6">Building Enterprise Solutions</h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                With over 5 years of professional experience in ASP.NET development,
                I specialize in architecting and developing enterprise-grade web
                applications and APIs that drive business value and deliver
                exceptional performance.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                My expertise spans the full Microsoft technology stack, from
                ASP.NET Core Web APIs and MVC applications to SQL Server database
                design and Azure cloud deployment. I'm passionate about writing
                clean, maintainable C# code following SOLID principles.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently focused on .NET 8, microservices architecture, and cloud-native
                applications, helping businesses modernize their infrastructure and
                build scalable solutions.
              </p>
            </motion.div>

            <div className="grid gap-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="p-6 rounded-lg bg-muted/20 border border-border/30 hover:border-border/60 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 shrink-0">
                      <item.icon className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="mb-2">{item.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}