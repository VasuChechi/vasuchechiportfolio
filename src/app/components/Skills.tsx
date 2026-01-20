import { motion } from 'motion/react';
import {
  Code2,
  Database,
  Server,
  GitBranch,
  Container,
  Cloud,
  Workflow,
  Shield,
  Boxes,
  Zap,
  FileCode,
  Layers,
} from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      category: 'Backend & .NET Technologies',
      skills: [
        { name: 'ASP.NET Core', icon: Code2 },
        { name: 'C#', icon: FileCode },
        { name: 'Web API / REST', icon: Zap },
        { name: 'Entity Framework Core', icon: Layers },
        { name: 'LINQ', icon: Code2 },
        { name: 'MVC Pattern', icon: Boxes },
      ],
    },
    {
      category: 'Database & Storage',
      skills: [
        { name: 'SQL Server', icon: Database },
        { name: 'T-SQL', icon: Database },
        { name: 'PostgreSQL', icon: Database },
        { name: 'Redis Cache', icon: Zap },
        { name: 'Azure SQL', icon: Cloud },
        { name: 'MongoDB', icon: Database },
      ],
    },
    {
      category: 'Cloud & DevOps',
      skills: [
        { name: 'Microsoft Azure', icon: Cloud },
        { name: 'Azure DevOps', icon: Workflow },
        { name: 'Docker', icon: Container },
        { name: 'Git / GitHub', icon: GitBranch },
        { name: 'CI/CD Pipelines', icon: Workflow },
        { name: 'IIS / Kestrel', icon: Server },
      ],
    },
    {
      category: 'Frontend & Additional Skills',
      skills: [
        { name: 'Blazor', icon: Zap },
        { name: 'JavaScript / jQuery', icon: Code2 },
        { name: 'HTML / CSS', icon: FileCode },
        { name: 'Bootstrap', icon: Layers },
        { name: 'SignalR', icon: Zap },
        { name: 'Identity / JWT', icon: Shield },
      ],
    },
  ];

  const certifications = [
    'Microsoft Certified: Azure Developer Associate',
    'Microsoft Certified: .NET Developer',
    'SQL Server Database Administration',
  ];

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/10">
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
              Expertise
            </motion.p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4">
              Technical Skills
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto" />
          </div>

          <div className="space-y-12 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
              >
                <h3 className="text-xl mb-6 text-center md:text-left">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                        duration: 0.4,
                      }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="flex items-center gap-2 px-5 py-3 rounded-lg bg-background/50 border border-border/30 hover:border-primary/50 hover:bg-muted/50 transition-all cursor-default"
                    >
                      <skill.icon size={18} className="text-primary" />
                      <span className="text-sm">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-center"
          >
            <h3 className="text-xl mb-6">Certifications & Training</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
                  className="px-6 py-3 rounded-lg bg-primary/10 border border-primary/20 text-sm"
                >
                  {cert}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}