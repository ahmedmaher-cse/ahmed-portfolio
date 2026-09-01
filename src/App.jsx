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
        <a href="#home" className="logo" onClick={() => setMenuOpen(false)}>
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

          <a href="#focus" onClick={() => setMenuOpen(false)}>
            Focus
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
              Building a strong foundation in software development and
              problem-solving through C# and Computer Engineering, while growing
              toward Full-Stack .NET development.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="btn primary-btn">
                View My Work
              </a>

              <a href="#contact" className="btn secondary-btn">
                Contact Me
              </a>

              <a
                href="./Ahmed-Maher-CV.pdf"
                download="Ahmed-Maher-CV.pdf"
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
              software development and problem-solving. I'm currently building
              my skills in C#, Object-Oriented Programming, C++, and SQL while
              expanding my technical knowledge through continuous learning and
              practical projects.
            </p>

            <p>
              My background in Digital Logic Design and Circuit Design has
              helped me develop a structured approach to understanding and
              solving technical problems from both software and engineering
              perspectives.
            </p>

            <p>
              I'm currently training through the Digital Egypt Pioneers
              Initiative (DEPI) Full Stack .NET track, where I'm continuing to
              build my foundation and work toward becoming an aspiring
              Full-Stack .NET Developer.
            </p>
          </div>
        </section>

        {/* ================= SKILLS ================= */}
        <section id="skills" className="section alt-section">
          <div className="section-header">
            <p className="section-tag">MY SKILLS</p>
            <h2>Technical Skills</h2>
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

        {/* ================= CURRENT FOCUS ================= */}
        <section id="focus" className="section">
          <div className="section-header">
            <p className="section-tag">CURRENT FOCUS</p>
            <h2>What I'm Building</h2>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-number">01</div>

              <h3>C# & Programming Fundamentals</h3>

              <p>
                Strengthening my programming foundation through C# and core
                software development concepts.
              </p>
            </div>

            <div className="service-card">
              <div className="service-number">02</div>

              <h3>Object-Oriented Programming</h3>

              <p>
                Learning how to design structured and maintainable applications
                using object-oriented programming principles.
              </p>
            </div>

            <div className="service-card">
              <div className="service-number">03</div>

              <h3>Full-Stack .NET Journey</h3>

              <p>
                Currently expanding my software development knowledge through
                the DEPI Full Stack .NET training program.
              </p>
            </div>

            <div className="service-card">
              <div className="service-number">04</div>

              <h3>Engineering & Problem Solving</h3>

              <p>
                Applying analytical thinking and my Computer Engineering
                background to understand and solve technical problems.
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
            ```jsx
            <article className="project-card">
              <div className="project-number">01</div>

              <h3>Command-Line Calculator</h3>

              <p>
                Developed a command-line calculator in C++ supporting arithmetic
                and exponentiation operations with input validation, error
                handling, and formatted output.
              </p>

              <div className="project-tech">
                <span>C++</span>
                <span>C++17</span>
              </div>

              <a
                href="https://github.com/ahmedmaher-cse/cpp-command-line-calculator"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                <FaGithub /> View on GitHub
              </a>
            </article>
            ```
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
                <span className="timeline-date">2024 — 2028</span>

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

            <h2>Let's Connect.</h2>

            <p>
              I'm always interested in learning opportunities, internships, and
              technical projects. Feel free to reach out.
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

              <a href="mailto:ahmedmahersobh2@gmail.com" aria-label="Email">
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
