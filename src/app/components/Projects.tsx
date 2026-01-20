import { motion } from 'motion/react';
import { ExternalLink, Github, TrendingUp } from 'lucide-react';
import financeSystemImg from '../../assets/finance-system.svg';
import fieldServiceImg from '../../assets/field-service-system.svg';

export function Projects() {
  const projects = [
    {
      title: 'Finance Management & Loan Processing System',
      description:
        'Web platform for finance companies to manage loan operations, client onboarding, compliance, and reporting in a single system with subscription-based access.',
      highlights: [
        'Loan calculator, application workflow, and approval pipeline',
        'Client and supplier onboarding with compliance tracking',
        'Analytics dashboard with Excel and PDF exports',
        'Automated email notifications for loan status updates',
      ],
      tech: ['React.js', 'ASP.NET', 'SQL Server', 'REST APIs'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      impact: 'Improved loan processing speed and audit readiness',
      image: financeSystemImg,
      imageAlt: 'Finance Management & Loan Processing System',
    },
    {
      title: 'Field Service & Workforce Management System',
      description:
        'Real-time workforce platform for assigning jobs, tracking site activity, and monitoring field teams with live operational visibility.',
      highlights: [
        'Job assignment with status tracking and history',
        'Live dashboard for active sites and on-duty staff',
        'Employee onboarding, leave approvals, and action tracking',
        'Operational reporting with Excel and PDF exports',
      ],
      tech: ['React.js', 'ASP.NET', 'SQL Server', 'WebSockets'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      impact: 'Increased on-site coordination and response time',
      image: fieldServiceImg,
      imageAlt: 'Field Service & Workforce Management System',
    },
  ];

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
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
              Portfolio
            </motion.p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4">
              Featured Projects
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A selection of projects demonstrating expertise in building
              scalable, production-ready applications
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group relative overflow-hidden rounded-lg border border-border/30 bg-background/30 backdrop-blur-sm hover:border-border/60 transition-all"
              >
                <div className="relative h-52 overflow-hidden border-b border-border/30">
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <ul className="mb-4 space-y-2 text-sm text-muted-foreground">
                    {project.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Impact */}
                  <div className="flex items-center gap-2 mb-4 text-sm text-primary">
                    <TrendingUp size={16} />
                    <span>{project.impact}</span>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-md bg-muted/30 text-xs border border-border/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github size={18} />
                      View Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
