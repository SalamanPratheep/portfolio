import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

export default function Hero() {
  return (
    // <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28">

      {/* Background Glow */}
      <div className="absolute w-96 h-96 bg-cyan-500/20 blur-3xl rounded-full top-20 left-10"></div>
      <div className="absolute w-96 h-96 bg-purple-500/20 blur-3xl rounded-full bottom-20 right-10"></div>

      <div className="text-center z-10 px-6">

        <motion.img
          // src={`${import.meta.env.BASE_URL}profile.png`}
          src="https://salamanpratheep.github.io/portfolio/profile.png"
          alt="Salaman Pratheep"
          className="
            w-52
            h-52
            object-cover
            rounded-full
            mx-auto
            border-4
            border-cyan-400
            shadow-[0_0_40px_rgba(34,211,238,0.6)]
          "
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
          }}
        />

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="
            text-6xl
            md:text-7xl
            font-bold
            mt-8
            bg-gradient-to-r
            from-cyan-400
            to-purple-400
            bg-clip-text
            text-transparent
          "
        >
          Salaman Pratheep
        </motion.h1>

        <div className="mt-4 text-2xl md:text-3xl font-semibold text-cyan-300">
          <TypeAnimation
            sequence={[
              "Java Backend Developer",
              2000,
              "Spring Boot Developer",
              2000,
              "REST API Developer",
              2000,
              "Spring Security Developer",
              2000,
            ]}
            speed={50}
            deletionSpeed={65}
            cursor={true}
            repeat={Infinity}
          />
        </div>

        <p className="max-w-4xl mx-auto mt-6 text-lg text-gray-300 leading-8">
          Java Backend Developer with 2+ years of experience in ERP,
          Billing and HRMS application development. Proficient in Java,
          Spring Boot, REST APIs, Hibernate, JPA, PostgreSQL and MySQL,
          with expertise in backend development, database optimization,
          JWT authentication, API integration and business process automation.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-10">

          <a
            href="#projects"
            className="
              px-8
              py-4
              rounded-full
              bg-cyan-500
              text-black
              font-semibold
              hover:scale-105
              transition
            "
          >
            View Projects
          </a>

          <a
            // href={`${import.meta.env.BASE_URL}resume.pdf`}
            href="https://salamanpratheep.github.io/portfolio/resume.pdf"
            download
            className="
              px-8
              py-4
              rounded-full
              border
              border-cyan-400
              flex
              items-center
              gap-2
              hover:bg-cyan-500/20
              transition
            "
          >
            <FaDownload />
            Resume
          </a>

        </div>

        <div className="flex justify-center gap-8 mt-10 text-4xl">

          <a
            href="https://github.com/SalamanPratheep"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 hover:scale-110 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/salaman-pratheep-598b09324/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 hover:scale-110 transition"
          >
            <FaLinkedin />
          </a>

        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
            <h3 className="text-3xl font-bold text-cyan-400">2+</h3>
            <p>Years Experience</p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
            <h3 className="text-3xl font-bold text-cyan-400">ERP</h3>
            <p>HRMS & Billing Systems</p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
            <h3 className="text-3xl font-bold text-cyan-400">JWT</h3>
            <p>Security & Authentication</p>
          </div>

        </div>

      </div>

    </section>
  );
}

