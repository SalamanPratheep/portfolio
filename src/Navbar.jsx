
export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-lg border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-8 py-4">

        <h1 className="text-cyan-400 font-bold text-xl md:text-2xl hover:text-white transition">
          Salaman Pratheep
        </h1>

        <div className="flex gap-4 md:gap-6 text-sm md:text-base">

          <a
            href="#about"
            className="hover:text-cyan-400 transition"
          >
            About
          </a>

          <a
            href="#skills"
            className="hover:text-cyan-400 transition"
          >
            Skills
          </a>

          <a
            href="#experience"
            className="hover:text-cyan-400 transition"
          >
            Experience
          </a>

          <a
            href="#projects"
            className="hover:text-cyan-400 transition"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="hover:text-cyan-400 transition"
          >
            Contact
          </a>

        </div>
      </div>
    </nav>
  );
}

