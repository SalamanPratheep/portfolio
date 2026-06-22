import { projects } from "./data/portfolioData";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
return ( <section
   id="projects"
   className="py-24 px-6 bg-gradient-to-b from-[#050816] to-[#0f172a]"
 > <h2 className="text-5xl font-bold text-center text-cyan-400 mb-16">
Projects </h2>

  <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
    {projects.map((project, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.15 }}
        whileHover={{
          scale: 1.05,
          y: -10,
        }}
        className="
          bg-white/10
          backdrop-blur-xl
          rounded-3xl
          p-8
          border
          border-cyan-500/20
          shadow-lg
          hover:shadow-cyan-500/30
          transition-all
          duration-300
        "
      >
        <div className="text-5xl mb-5">
          {project.icon}
        </div>

        <h3 className="text-2xl font-bold text-white">
          {project.title}
        </h3>

        <p className="text-gray-300 mt-4 leading-7">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-6">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="
                bg-cyan-500/20
                text-cyan-300
                px-3
                py-1
                rounded-full
                text-sm
              "
            >
              {tech}
            </span>
          ))}
        </div>

        <button
          className="
            mt-8
            flex
            items-center
            gap-2
            bg-cyan-500
            hover:bg-cyan-400
            px-5
            py-3
            rounded-xl
            text-black
            font-semibold
            transition
          "
        >
          <FaGithub />
          View Source
        </button>
      </motion.div>
    ))}
  </div>
</section>

);
}
