import { motion } from 'motion/react';
import { Briefcase } from 'lucide-react';

export function Experience() {
  const timeline = [
    {
      type: 'work',
      icon: Briefcase,
      title: 'Associate Software Developer',
      organization: 'Vision Technosys, Jalandhar, Punjab',
      period: 'Nov 4, 2024 – Jan 19, 2026',
      description:
        'Developing and maintaining web applications using ASP.NET MVC framework. Implementing business logic with C#, following Object-Oriented Programming (OOP) principles for efficient and scalable solutions. Collaborating with team members to troubleshoot and resolve software issues, enhancing application performance.',
      achievements: [
        'Developed and maintained ASP.NET MVC applications',
        'Implemented OOP-based scalable business logic',
        'Collaborated with team to optimize performance and fix bugs',
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
                      <div className="p-3 rounded-lg bg-primary/10 inline-block text-blue-500">
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
