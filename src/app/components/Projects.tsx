import { motion } from 'motion/react';
import { ExternalLink, Github, TrendingUp } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'Ezy Finance Deals – Finance Tools Platform (Australia)',
      description:
        'Australia-based finance platform offering embedded financial tools and calculators to help users explore, compare, and plan loan options efficiently.',
      highlights: [
        'Embedded finance tools and smart loan calculators',
        'Integration with Quickly, Calendly, and LoanOptions.ai',
        'Seamless user flow for loan discovery and scheduling consultations',
        'Optimized UI for faster decision-making and improved engagement',
      ],
      tech: ['React.js', 'ASP.NET', 'SQL Server', 'REST APIs'],
      github: 'https://github.com',
      demo: 'https://ezyfinancedeals.com.au/',
      showGithub: false,
      showDemo: true,
      impact:
        'Improved customer engagement and simplified loan comparison process',
      image: '/assets/ezyfinance.png',
      imageAlt: 'Ezy Finance Deals logo',
    },
    {
      title: 'Job & Workforce Management System (Australia)',
      description:
        'Subscription-based job and workforce management software designed to manage employees, sites, tenders, and operational workflows for Australian businesses.',
      highlights: [
        'Employee management with site assignments and work tracking',
        'Tender, work order, and job lifecycle management',
        'Employee application, client, and supplier onboarding forms',
        'Downloadable operational reports in PDF and Excel formats',
      ],
      tech: ['React.js', 'ASP.NET', 'SQL Server', 'WebSockets'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      showGithub: false,
      showDemo: false,
      impact:
        'Centralized workforce operations and improved overall efficiency',
      image: '/assets/FS_Icon.png',
      imageAlt: 'Workforce management logo',
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
              Real-world projects demonstrating experience in building
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
                <div className="relative h-52 overflow-hidden border-b border-border/30 flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    className="h-36 w-36 object-contain transition-transform duration-500 group-hover:scale-105"
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
                  {(project.showGithub || project.showDemo) && (
                    <div className="flex gap-4">
                      {project.showGithub && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <Github size={18} />
                          View Code
                        </a>
                      )}
                     
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
