import { useState } from "react";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaSun,
  FaMoon,
  FaBars,
  FaTimes,
  FaCode,
  FaDatabase,
  FaMicrochip,
  FaBolt,
  FaFileDownload,
} from "react-icons/fa";

import "./App.css";
import profileImage from "./assets/Image.jpg";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      {/* ================= NAVBAR ================= */}
      <nav className="navbar">
        <a
          href="#home"
          className="logo"
          onClick={() => setMenuOpen(false)}
        >
          Ahmed<span>.</span>
        </a>

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="#home" onClick={() => setMenuOpen(false)}>
            Home
          </a>

          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>

          <a href="#skills" onClick={() => setMenuOpen(false)}>
            Skills
          </a>

          <a href="#services" onClick={() => setMenuOpen(false)}>
            Services
          </a>

          <a href="#projects" onClick={() => setMenuOpen(false)}>
            Projects
          </a>

          <a href="#education" onClick={() => setMenuOpen(false)}>
            Education
          </a>

          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </div>

        <div className="nav-actions">
          <button
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle theme"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      <main>
        {/* ================= HERO ================= */}
        <section id="home" className="hero">
          <div className="hero-content">
            <p className="hero-intro">HELLO, I'M</p>

            <h1>
              Ahmed <span>Maher</span>
            </h1>

            <h2>
              Computer Engineering Student & Aspiring Full-Stack .NET Developer
            </h2>

            <p className="hero-description">
              Building practical software solutions through problem-solving,
              clean code, and strong engineering fundamentals.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="btn primary-btn">
                View My Work
              </a>

              <a href="#contact" className="btn secondary-btn">
                Contact Me
              </a>

              <a
                href="/Ahmed-Maher-CV.pdf"
                download
                className="btn secondary-btn"
              >
                <FaFileDownload />
                Download CV
              </a>
            </div>

            <div className="social-links">
              <a
                href="https://github.com/ahmedmaher-cse"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/-ahmedmaher"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          <div className="hero-image-container">
            <div className="image-decoration"></div>

            <img
              src={profileImage}
              alt="Ahmed Maher"
              className="profile-image"
            />
          </div>
        </section>

        {/* ================= ABOUT ================= */}
        <section id="about" className="section">
          <div className="section-header">
            <p className="section-tag">ABOUT ME</p>
            <h2>Who I Am</h2>
          </div>

          <div className="about-content">
            <p>
              I'm a Computer Engineering student with a strong interest in
              software development, problem-solving, and building practical
              technical solutions. I enjoy turning ideas into functional
              applications through structured thinking and clean code.
            </p>

            <p>
              My background in C++, C#, Object-Oriented Programming, SQL, and
              engineering fundamentals helps me approach problems from both
              software and hardware perspectives. Through academic projects and
              continuous hands-on learning, I have developed experience in
              programming, digital logic design, and electronic circuit design.
            </p>

            <p>
              I'm currently expanding my software development expertise through
              the Digital Egypt Pioneers Initiative (DEPI) Full Stack .NET
              track. My goal is to grow into a professional Full-Stack .NET
              Developer capable of building reliable and meaningful real-world
              applications.
            </p>
          </div>
        </section>

        {/* ================= SKILLS ================= */}
        <section id="skills" className="section alt-section">
          <div className="section-header">
            <p className="section-tag">MY SKILLS</p>
            <h2>Technologies & Expertise</h2>
          </div>

          <div className="skills-grid">
            <div className="skill-card">
              <span className="skill-icon">
                <FaCode />
              </span>

              <h3>Programming</h3>
              <p>C#, C++</p>
            </div>

            <div className="skill-card">
              <span className="skill-icon">
                <FaMicrochip />
              </span>

              <h3>OOP</h3>
              <p>Object-Oriented Programming with C#</p>
            </div>

            <div className="skill-card">
              <span className="skill-icon">
                <FaDatabase />
              </span>

              <h3>Database</h3>
              <p>SQL</p>
            </div>

            <div className="skill-card">
              <span className="skill-icon">
                <FaBolt />
              </span>

              <h3>Engineering</h3>
              <p>Circuit Design & Digital Logic Design</p>
            </div>
          </div>
        </section>

        {/* ================= SERVICES ================= */}
        <section id="services" className="section">
          <div className="section-header">
            <p className="section-tag">WHAT I CAN DO</p>
            <h2>Areas I Work With</h2>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-number">01</div>

              <h3>Web Development</h3>

              <p>
                Building responsive and user-friendly web applications while
                continuously developing modern frontend and backend skills.
              </p>
            </div>

            <div className="service-card">
              <div className="service-number">02</div>

              <h3>Backend Development</h3>

              <p>
                Developing structured application logic and learning backend
                development using C# and .NET technologies.
              </p>
            </div>

            <div className="service-card">
              <div className="service-number">03</div>

              <h3>Database Development</h3>

              <p>
                Working with relational databases using SQL and structured data
                management principles.
              </p>
            </div>

            <div className="service-card">
              <div className="service-number">04</div>

              <h3>Digital Logic Design</h3>

              <p>
                Designing and analyzing digital circuits using logic gates,
                flip-flops, counters, and sequential logic.
              </p>
            </div>

            <div className="service-card">
              <div className="service-number">05</div>

              <h3>Circuit Design</h3>

              <p>
                Designing and analyzing electronic circuits and basic hardware
                systems using engineering principles.
              </p>
            </div>

            <div className="service-card">
              <div className="service-number">06</div>

              <h3>Problem Solving</h3>

              <p>
                Applying analytical thinking and structured approaches to solve
                programming and engineering problems.
              </p>
            </div>
          </div>
        </section>

        {/* ================= PROJECTS ================= */}
        <section id="projects" className="section alt-section">
          <div className="section-header">
            <p className="section-tag">MY WORK</p>
            <h2>Featured Projects</h2>
          </div>

          <div className="projects-grid">
            <article className="project-card">
              <div className="project-number">01</div>

              <h3>Command-Line Calculator</h3>

              <p>
                Developed a command-line calculator in C++ supporting
                arithmetic and exponentiation operations with input validation,
                error handling, and formatted output.
              </p>

              <div className="project-tech">
                <span>C++</span>
                <span>C++17</span>
              </div>
            </article>

            <article className="project-card">
              <div className="project-number">02</div>

              <h3>Solar Tracking System</h3>

              <p>
                Designed a hardware-based solar tracking system using LDR
                sensors, a servo motor, op-amps, and resistors to detect light
                direction and adjust panel position.
              </p>

              <div className="project-tech">
                <span>LDR</span>
                <span>Servo Motor</span>
                <span>Op-Amp</span>
              </div>
            </article>

            <article className="project-card">
              <div className="project-number">03</div>

              <h3>Electronic Lock Design</h3>

              <p>
                Designed a digital electronic lock using flip-flops, counters,
                logic gates, a timer, decoder, and seven-segment display.
              </p>

              <div className="project-tech">
                <span>Digital Logic</span>
                <span>Flip-Flops</span>
                <span>Logic Gates</span>
              </div>
            </article>

            <article className="project-card">
              <div className="project-number">04</div>

              <h3>DC Regulated Power Supply</h3>

              <p>
                Designed and built a regulated DC power supply using a
                transformer, bridge rectifier, capacitor, and Zener diode.
              </p>

              <div className="project-tech">
                <span>Electronics</span>
                <span>Circuit Design</span>
              </div>
            </article>
          </div>
        </section>

        {/* ================= EDUCATION ================= */}
        <section id="education" className="section">
          <div className="section-header">
            <p className="section-tag">EDUCATION</p>
            <h2>My Learning Journey</h2>
          </div>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>

              <div>
                <span className="timeline-date">2023 — 2028</span>

                <h3>Ain Shams University</h3>

                <p>Bachelor of Engineering in Computer Engineering</p>

                <p className="timeline-note">
                  Third-Year Student · Expected Graduation: 2028
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>

              <div>
                <span className="timeline-date">2026 — Present</span>

                <h3>Digital Egypt Pioneers Initiative (DEPI)</h3>

                <p>Full Stack .NET Trainee · 200 Hours</p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= CONTACT ================= */}
        <section id="contact" className="contact-section">
          <div className="contact-content">
            <p className="section-tag">GET IN TOUCH</p>

            <h2>Let's Build Something Together.</h2>

            <p>
              I'm always interested in learning opportunities, internships, and
              projects. Feel free to reach out.
            </p>

            <a
              href="mailto:ahmedmahersobh2@gmail.com"
              className="btn primary-btn email-btn"
            >
              <FaEnvelope />
              <span>Send Me an Email</span>
            </a>

            <div className="contact-links">
              <a
                href="https://github.com/ahmedmaher-cse"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/-ahmedmaher"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:ahmedmahersobh2@gmail.com"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <footer>
        <p>© 2026 Ahmed Maher. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;