import { motion } from 'motion/react';
import { Code2, Users, Zap, Award } from 'lucide-react';

export function About() {
 const highlights = [
  {
    icon: Code2,
    title: 'ASP.NET MVC Development',
    description: 'Building structured, maintainable web applications using ASP.NET MVC, C#, and the .NET Framework',
  },
  {
    icon: Zap,
    title: 'Database & Backend Logic',
    description: 'Designing and managing efficient data-driven solutions using MS SQL Server, RDBMS concepts, and Entity Framework',
  },
  {
    icon: Users,
    title: 'Front-End Integration',
    description: 'Creating user-friendly interfaces with HTML, JavaScript, and React, integrated seamlessly with backend logic',
  },
  {
    icon: Award,
    title: 'Clean Code & Problem Solving',
    description: 'Applying object-oriented programming principles and strong problem-solving skills to deliver reliable solutions',
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
  <h3 className="text-2xl mb-6">Building Scalable Web Applications</h3>

  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
    With hands-on professional experience in ASP.NET development, I focus on
    building reliable, maintainable, and performance-oriented web applications
    that solve real business problems.
  </p>

  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
    My core expertise includes developing ASP.NET MVC applications using C#,
    designing efficient and normalized database structures with MS SQL Server,
    and implementing backend logic using Entity Framework and object-oriented
    programming principles.
  </p>

  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
    I also work with front-end technologies such as HTML, JavaScript, and React
    to create user-friendly interfaces, while focusing on clean code, proper
    validations, and smooth backend–frontend integration.
  </p>

  <p className="text-lg text-muted-foreground leading-relaxed">
    I enjoy working in collaborative team environments, communicating clearly
    with team members and stakeholders, and continuously learning new
    technologies to improve my skills and deliver better software solutions.
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