import { motion } from 'motion/react';
import {
  Code2,
  Database,
  Server,
  Zap,
  Shield,
  Wrench,
  Layout,
  FileCode2,
} from 'lucide-react';

export function Services() {
 const services = [
  {
    icon: Code2,
    title: 'ASP.NET MVC & Web API Development',
    description:
      'Developing secure, scalable web applications and REST APIs using ASP.NET MVC, C#, and industry best practices.',
    features: [
      'ASP.NET MVC architecture',
      'RESTful Web APIs',
      'Authentication & authorization',
      'Clean & maintainable code',
    ],
  },
  {
    icon: Layout,
    title: 'Frontend Development (React & JavaScript)',
    description:
      'Building responsive, user-friendly interfaces using React, JavaScript, HTML, and modern UI practices.',
    features: [
      'React.js components',
      'Dynamic UI & state handling',
      'API integration',
      'Responsive layouts',
    ],
  },
  {
    icon: Database,
    title: 'MS SQL Server & Database Management',
    description:
      'Designing, optimizing, and maintaining relational databases using Microsoft SQL Server.',
    features: [
      'Database schema design',
      'Stored procedures',
      'Joins & performance tuning',
      'Data integrity & security',
    ],
  },
  {
    icon: Server,
    title: 'Backend & Business Logic Development',
    description:
      'Implementing strong backend logic and workflows for enterprise-level applications.',
    features: [
      'C# business logic',
      'Entity Framework',
      'Layered architecture',
      'Reusable components',
    ],
  },
  {
    icon: Shield,
    title: 'Application Security & Validation',
    description:
      'Ensuring application security through validations, role-based access, and secure coding practices.',
    features: [
      'Role-based access',
      'Input validation',
      'Secure data handling',
      'Session & auth control',
    ],
  },
  {
    icon: FileCode2,
    title: 'Enterprise Modules & Systems',
    description:
      'Experience working on real-world enterprise systems like job management, finance tools, and admin dashboards.',
    features: [
      'Admin panels',
      'Payment modules',
      'User & staff management',
      'Document handling systems',
    ],
  },
];


  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-14">
            <p className="text-sm uppercase tracking-wider text-muted-foreground mb-3">
              Services
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4">
              What I Do
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Practical ASP.NET and full-stack development services focused on
              performance, scalability, and clean architecture
            </p>
            <div className="w-16 h-1 bg-primary mx-auto mt-6" />
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="p-6 rounded-xl bg-background border border-border/30 hover:border-primary/50 transition-all hover:shadow-md"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <service.icon className="text-primary" size={26} />
                  </div>
                  <h3 className="text-lg font-semibold">
                    {service.title}
                  </h3>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-sm text-muted-foreground flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center mt-16"
          >
            <p className="text-lg text-muted-foreground mb-6">
              Looking for a reliable ASP.NET developer?
            </p>
            <button
              onClick={() =>
                document
                  .querySelector('#contact')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className="px-8 py-4 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-all"
            >
              Let’s Connect
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
