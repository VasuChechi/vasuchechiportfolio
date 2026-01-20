import { motion } from 'motion/react';
import { Briefcase, GraduationCap } from 'lucide-react';

export function Experience() {
  const timeline = [
    {
      type: 'work',
      icon: Briefcase,
      title: 'Senior ASP.NET Developer',
      organization: 'Tech Innovations Inc.',
      period: '2023 - Present',
      description:
        'Leading development of enterprise applications using ASP.NET Core, C#, and Azure. Architecting microservices and RESTful APIs. Mentoring a team of 5 developers. Improved system performance by 50% and reduced deployment time by 70%.',
      achievements: [
        'Migrated legacy .NET Framework to .NET 8',
        'Implemented clean architecture patterns',
        'Reduced Azure hosting costs by 30%',
      ],
    },
    {
      type: 'work',
      icon: Briefcase,
      title: 'ASP.NET Developer',
      organization: 'Digital Solutions Ltd.',
      period: '2021 - 2023',
      description:
        'Built and maintained 15+ web applications using ASP.NET Core MVC and Web API. Designed and optimized SQL Server databases. Implemented CI/CD pipelines using Azure DevOps.',
      achievements: [
        'Developed 15+ production applications',
        'Optimized database queries (40% faster)',
        'Mentored 3 junior developers',
      ],
    },
    {
      type: 'education',
      icon: GraduationCap,
      title: 'B.S. Computer Science',
      organization: 'University of Technology',
      period: '2017 - 2021',
      description:
        'Graduated with First Class Honors. Specialized in Software Engineering and Database Systems. President of Computer Science Society.',
      achievements: [
        'GPA: 3.8/4.0',
        'Dean\'s List all semesters',
        'Led .NET development workshops',
      ],
    },
    {
      type: 'work',
      icon: Briefcase,
      title: 'Junior .NET Developer',
      organization: 'Software Agency',
      period: '2020 - 2021',
      description:
        'Developed web applications using ASP.NET MVC and Web Forms. Worked with SQL Server for database design and stored procedures. Collaborated with senior developers on enterprise projects.',
      achievements: [
        'Built 20+ web applications',
        'Maintained 98% code quality score',
        'Reduced page load times by 35%',
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/10">
      <div className="max-w-5xl mx-auto">
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
              Journey
            </motion.p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4">
              Professional Experience
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto" />
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-border/50" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className={`relative ${
                    index % 2 === 0 ? 'md:pr-[calc(50%+2rem)]' : 'md:pl-[calc(50%+2rem)] md:text-right'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 top-6 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />

                  <div className="ml-8 md:ml-0 p-6 rounded-lg bg-background/50 border border-border/30 hover:border-border/60 transition-all">
                    <div className="flex items-start gap-4 md:block">
                      <div
                        className={`p-3 rounded-lg bg-primary/10 inline-block ${
                          item.type === 'work' ? 'text-blue-500' : 'text-green-500'
                        }`}
                      >
                        <item.icon size={24} />
                      </div>
                      <div className="flex-1">
                        <div className="mb-3">
                          <h3 className="text-xl mb-1">{item.title}</h3>
                          <p className="text-muted-foreground mb-1">
                            {item.organization}
                          </p>
                          <span className="text-sm text-muted-foreground">
                            {item.period}
                          </span>
                        </div>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {item.description}
                        </p>
                        <ul className={`space-y-2 ${index % 2 === 0 ? '' : 'md:text-right'}`}>
                          {item.achievements.map((achievement, i) => (
                            <li
                              key={i}
                              className="text-sm text-muted-foreground flex items-center gap-2"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
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