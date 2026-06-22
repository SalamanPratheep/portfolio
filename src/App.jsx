import Hero from "./Hero";
import Skills from "./Skills";
import Projects from "./Projects";
import Navbar from "./Navbar";

function App() {
return ( <div className="bg-[#050816] text-white min-h-screen"> <Navbar />

  <Hero />

  {/* About */}
  <section
    id="about"
    className="py-24 px-6 max-w-5xl mx-auto text-center"
  >
    <h2 className="text-5xl font-bold text-cyan-400 mb-8">
      About Me
    </h2>

    <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-cyan-500/20">
      <p className="text-lg text-gray-300 leading-9">
        Java Backend Developer with 2+ years of experience in ERP,
        Billing and HRMS application development. Proficient in Java,
        Spring Boot, RESTful APIs, Hibernate, JPA, PostgreSQL and
        MySQL. Experienced in backend development, database
        optimization, authentication and business process automation.
      </p>
    </div>
  </section>

  <Skills />

  {/* Experience */}

<section
  id="experience"
  className="py-24 px-6 max-w-5xl mx-auto"
>
  <h2 className="text-5xl font-bold text-center text-cyan-400 mb-16">
    Experience
  </h2>

  <div className="relative border-l-2 border-cyan-500 ml-6">

<div className="mb-16 ml-10">
  <div className="absolute w-5 h-5 bg-cyan-400 rounded-full -left-[11px]"></div>

  <h3 className="text-3xl font-bold">
    Associate Software Engineer
  </h3>

  <p className="text-cyan-400">
    Huewine Technologies Pvt Ltd
  </p>

  <p className="text-gray-400 mt-2">
    Dec 2024 – Present
  </p>

  <ul className="mt-6 space-y-3 text-gray-300">
    <li>✔ Developed and maintained ERP, Billing and HRMS applications.</li>
    <li>✔ Designed and implemented RESTful APIs.</li>
    <li>✔ Worked with PostgreSQL and MySQL databases.</li>
    <li>✔ Implemented Spring Security and authentication modules.</li>
    <li>✔ Improved application performance through query optimization.</li>
  </ul>
</div>

<div className="ml-10">
  <div className="absolute w-5 h-5 bg-cyan-400 rounded-full -left-[11px]"></div>

  <h3 className="text-3xl font-bold">
    Java Developer Intern
  </h3>

  <p className="text-cyan-400">
    Huewine Technologies Pvt Ltd
  </p>

  <p className="text-gray-400 mt-2">
    Feb 2024 – Sep 2024
  </p>

  <ul className="mt-6 space-y-3 text-gray-300">
    <li>✔ Assisted backend development using Java and Spring Boot.</li>
    <li>✔ Developed REST APIs and database operations.</li>
    <li>✔ Participated in debugging, testing and deployment.</li>
    <li>✔ Worked with Hibernate, JPA and PostgreSQL.</li>
  </ul>
</div>
</div>

  </section>

  <Projects />

  {/* Education */}
  <section
    id="education"
    className="py-24 px-6 text-center"
  >
    <h2 className="text-5xl font-bold text-cyan-400 mb-12">
      Education
    </h2>

    <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-lg rounded-3xl p-10 border border-cyan-500/20">
      <h3 className="text-2xl font-bold">
        MBA – Operations Management
      </h3>

      <p className="text-gray-300">
        Maria College
      </p>

      <div className="my-8"></div>

      <h3 className="text-2xl font-bold">
        B.E – Mechanical Engineering
      </h3>

      <p className="text-gray-300">
        Bethlahem Institute of Engineering
      </p>
    </div>
  </section>

  {/* Contact */}
  <section
    id="contact"
    className="py-24 px-6 text-center"
  >
    <h2 className="text-5xl font-bold text-cyan-400 mb-10">
      Contact
    </h2>

    <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-lg rounded-3xl p-10 border border-cyan-500/20">
      <p className="text-lg">
        📧 salamonpratheep@gmail.com
      </p>

      <p className="text-lg mt-4">
        📍 Kanyakumari, Tamil Nadu, India
      </p>

      <div className="flex justify-center gap-8 mt-8">
        <a
          href="https://github.com/SalamanPratheep"
          target="_blank"
          rel="noreferrer"
          className="text-cyan-400 hover:text-white transition"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/salaman-pratheep-598b09324/"
          target="_blank"
          rel="noreferrer"
          className="text-cyan-400 hover:text-white transition"
        >
          LinkedIn
        </a>
      </div>
    </div>
  </section>

  {/* Footer */}
  <footer className="py-8 text-center border-t border-cyan-500/20">
    <p className="text-gray-400">
      © 2026 Salaman Pratheep. All Rights Reserved.
    </p>
  </footer>
</div>

);
}

export default App;
