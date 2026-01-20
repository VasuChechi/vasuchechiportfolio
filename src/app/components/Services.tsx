import { motion } from 'motion/react';
import {
  Code2,
  Database,
  Cloud,
  Server,
  Zap,
  Shield,
  RefreshCw,
  Wrench,
} from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Code2,
      title: 'ASP.NET Core Web API Development',
      description:
        'Building robust, scalable RESTful APIs with ASP.NET Core, Entity Framework, and best practices for authentication and security.',
      features: [
        'RESTful API design',
        'JWT Authentication',
        'API documentation (Swagger)',
        'Versioning & middleware',
      ],
    },
    {
      icon: Server,
      title: 'Enterprise Application Development',
      description:
        'Creating full-featured enterprise applications using ASP.NET Core MVC, Blazor, and modern frontend frameworks.',
      features: [
        'MVC applications',
        'Blazor web apps',
        'Microservices architecture',
        'Clean architecture patterns',
      ],
    },
    {
      icon: Database,
      title: 'Database Design & Optimization',
      description:
        'Designing efficient database schemas, writing optimized queries, and implementing data access layers with Entity Framework Core.',
      features: [
        'SQL Server optimization',
        'Entity Framework Core',
        'Stored procedures & T-SQL',
        'Migration strategies',
      ],
    },
    {
      icon: Cloud,
      title: 'Azure Cloud Services',
      description:
        'Deploying and managing applications on Microsoft Azure with App Services, Azure SQL, Azure Functions, and DevOps pipelines.',
      features: [
        'Azure App Services',
        'Azure SQL Database',
        'Azure Functions',
        'CI/CD with Azure DevOps',
      ],
    },
    {
      icon: RefreshCw,
      title: 'Legacy Migration Services',
      description:
        'Modernizing legacy .NET Framework applications to .NET 8, improving performance and enabling cloud deployment.',
      features: [
        '.NET Framework to .NET 8',
        'Code refactoring',
        'Architecture modernization',
        'Zero-downtime migration',
      ],
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description:
        'Analyzing and optimizing application performance, reducing load times, and implementing caching strategies.',
      features: [
        'Code profiling & analysis',
        'Redis caching',
        'Query optimization',
        'Load testing & monitoring',
      ],
    },
    {
      icon: Shield,
      title: 'Security & Authentication',
      description:
        'Implementing robust security measures, authentication systems, and authorization using ASP.NET Identity and OAuth.',
      features: [
        'ASP.NET Identity',
        'OAuth 2.0 / OpenID Connect',
        'Role-based access control',
        'Security best practices',
      ],
    },
    {
      icon: Wrench,
      title: 'Maintenance & Support',
      description:
        'Providing ongoing maintenance, bug fixes, feature enhancements, and technical support for existing applications.',
      features: [
        'Bug fixes & troubleshooting',
        'Feature enhancements',
        'Code reviews',
        'Technical documentation',
      ],
    },
  ];

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/10">
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
              Services
            </motion.p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4">
              What I Offer
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
              Comprehensive ASP.NET development services to help your business
              build, scale, and optimize enterprise applications
            </p>
            <div className="w-16 h-1 bg-primary mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group p-8 rounded-lg bg-background border border-border/30 hover:border-primary/50 transition-all hover:shadow-lg"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors shrink-0">
                    <service.icon className="text-primary" size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl mb-3">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {service.description}
                    </p>
                  </div>
                </div>

                <ul className="space-y-2 ml-16">
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
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-center mt-16"
          >
            <p className="text-lg text-muted-foreground mb-6">
              Ready to start your project?
            </p>
            <button
              onClick={() => {
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-all"
            >
              Let's Work Together
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
