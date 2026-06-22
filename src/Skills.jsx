import { motion } from "framer-motion";
import { FaJava, FaGitAlt } from "react-icons/fa";
import {
  SiSpringboot,
  SiPostgresql,
  SiPostman,
  SiGradle,
  SiApachemaven,
} from "react-icons/si";

const skills = [
  { name: "Java", icon: <FaJava size={40} /> },
  { name: "Spring Boot", icon: <SiSpringboot size={40} /> },
  { name: "Spring MVC", icon: "⚙️" },
  { name: "Spring Security", icon: "🔐" },
  { name: "Hibernate", icon: "🗄️" },
  { name: "JPA", icon: "📊" },
  { name: "RESTful APIs", icon: "⚡" },
  { name: "PostgreSQL", icon: <SiPostgresql size={40} /> },
  { name: "Git", icon: <FaGitAlt size={40} /> },
  { name: "Maven", icon: <SiApachemaven size={40} /> },
  { name: "Gradle", icon: <SiGradle size={40} /> },
  { name: "Postman", icon: <SiPostman size={40} /> },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <h2 className="text-5xl font-bold text-center text-cyan-400 mb-16">
        Technical Skills
      </h2>

      <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
            whileHover={{
              scale: 1.08,
              y: -5,
            }}
            className="
              bg-white/10
              backdrop-blur-lg
              border border-cyan-500/20
              rounded-2xl
              p-8
              text-center
              shadow-lg
              hover:shadow-cyan-500/30
              transition-all
              duration-300
            "
          >
            <div className="flex justify-center mb-4 text-cyan-400">
              {skill.icon}
            </div>

            <h3 className="text-lg font-semibold">
              {skill.name}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

