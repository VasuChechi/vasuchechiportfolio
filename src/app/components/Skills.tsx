import { motion } from 'motion/react';
import {
  Code2,
  Database,
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
        { name: 'ASP.NET', icon: Code2 },
    { name: 'ASP.NET MVC', icon: Boxes },
    { name: 'C#', icon: FileCode },
    { name: '.NET Framework', icon: Layers },
    { name: 'Entity Framework', icon: Layers },
    { name: 'LINQ', icon: Code2 },
    { name: 'Web API (REST)', icon: Zap },
    { name: 'OOP Concepts', icon: Code2 },
      ],
    },
    {
      category: 'Database & Data Concepts',
      skills: [
        { name: 'MS SQL Server', icon: Database },
        { name: 'RDBMS Concepts', icon: Database },
        { name: 'Stored Procedures', icon: Database },
        { name: 'Joins & Queries', icon: Database },
      ],
    },
    {
      category: 'Frontend Development',
      skills: [
        { name: 'HTML', icon: FileCode },
        { name: 'JavaScript', icon: Code2 },
        { name: 'jQuery', icon: Code2 },
        { name: 'React', icon: Zap },
      ],
    },
    {
      category: 'Professional Skills',
      skills: [
        { name: 'Problem Solving', icon: Zap },
        { name: 'Communication', icon: Shield },
        { name: 'Team Collaboration', icon: Boxes },
    { name: 'Time Management', icon: Layers },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-background to-muted/20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3">
            Expertise
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        {/* Categories */}
        <div className="space-y-24">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
            >
              <h3 className="text-2xl font-semibold text-center mb-12">
                {category.category}
              </h3>

              {/* Skill Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay:
                        categoryIndex * 0.1 + skillIndex * 0.05,
                      duration: 0.4,
                    }}
                    whileHover={{ y: -8 }}
                    className="
                      group relative overflow-hidden
                      rounded-2xl p-6 text-center
                      bg-white/5 backdrop-blur-md
                      border border-white/10
                      hover:border-primary/50
                      transition-all duration-300
                    "
                  >
                    {/* Glow */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary/20 to-transparent" />

                    {/* Icon */}
                    <div className="relative z-10 flex items-center justify-center w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 text-primary">
                      <skill.icon size={24} />
                    </div>

                    {/* Text */}
                    <p className="relative z-10 text-sm font-medium">
                      {skill.name}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
