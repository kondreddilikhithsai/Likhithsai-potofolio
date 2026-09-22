import { RevealOnScroll } from "../RevealOnScroll";
import profileImg from "../../likhithsai.jpg";
export const About = () => {
  const frontendSkills = ["React", "HTML", "CSS", "JavaScript"];
  const backendSkills = ["Junit", "Java", "Mockito", "SQL", "Hibernate"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

         
          <div className="rounded-xl p-8 border-white/10 border bg-white/5 backdrop-blur-sm transition-all mb-8">
            
          
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start mb-8">
              
              {/* PROFILE IMAGE CARD */}
              <div className="w-48 h-48 md:w-56 md:h-56 shrink-0 rounded-2xl overflow-hidden border-2 border-blue-500/30 shadow-[0_4px_20px_rgba(59,130,246,0.15)] group hover:border-blue-400 transition-all duration-300">
                <img 
                  src={profileImg}
                  alt="Professional Profile"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* BIO & ACTION BUTTONS */}
              <div className="flex-1 flex flex-col justify-between text-center md:text-left">
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Passionate developer with expertise in building scalable web
                  applications and creating innovative solutions.
                </p>

                {/* ACTION BUTTONS SECTION */}
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  <a
                    href="/path-to-your-resume.pdf"
                    download="My_Resume.pdf"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-5 rounded-lg transition-all flex items-center gap-2 shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                  >
                    📥 Download CV
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-white/20 hover:border-white/40 text-white font-medium py-2 px-5 rounded-lg transition-all flex items-center gap-2 bg-white/5"
                  >
                    💻 GitHub
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-blue-500/30 hover:border-blue-500/60 text-blue-400 font-medium py-2 px-5 rounded-lg transition-all flex items-center gap-2 bg-blue-500/5"
                  >
                    👔 LinkedIn
                  </a>
                </div>
              </div>

            </div>

            {/* SKILLS SECTION (INSIDE MAIN CONTAINER) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-white/5 pt-8">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* EDUCATION & WORK GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>Masters in Computer Science from Texas A and M unversity -kingsville</strong> (2019-2021)
                </li>
                <li>
                  <strong>B.Tech in Computer Science from Sir.C.R.Reddy college of Engineering </strong> (2014-2018)
                </li>
              <li>
                  <strong> 10th class in Siddhartha School, Vidyakokila campus,Eluru</strong> (2012-2014)
                </li>
                <li>
                  Relevant Coursework: Java, MySQL, Hibernate, HTML, CSS,
                  JavaScript, React JS
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
              <div className="space-y-6 text-gray-300">
                <div>
                  <h4 className="font-semibold">AJA consulting services (2026 - present)</h4>
                  <p className="text-sm text-gray-400 mt-1">
                    Working on Java and React js course and developing applicaitons
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">Mastercard company(Implementation partner HCL)(2022 - 2023)</h4>
                  <p className="text-sm text-gray-400 mt-1">
                    Increased unit test code coverage from 20 percentage to 95 percentage
                    using JUnit and Mockito.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">Nationwide company(Implementation partner Accenture)(2021 - 2022)</h4>
                  <p className="text-sm text-gray-400 mt-1">
                    Developed Email templates using HTML, CSS, JavaScript, and
                    Postman.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
