jsx
{/* ================= PROJECTS ================= */}
<section id="projects" className="section alt-section">
  <div className="section-header">
    <p className="section-tag">MY WORK</p>
    <h2>Featured Projects</h2>
  </div>

  <div className="projects-grid">
    {/* Project 01 */}
    <article className="project-card">
      <div className="project-number">01</div>

      <h3>Command-Line Calculator</h3>

      <p>
        Developed a command-line calculator in C++ supporting
        arithmetic and exponentiation operations with input
        validation, error handling, and formatted output.
      </p>

      <div className="project-tech">
        <span>C++</span>
        <span>C++17</span>
      </div>

      <div className="project-links calculator-links">
        <a
          href="https://github.com/ahmedmaher-cse/cpp-command-line-calculator"
          target="_blank"
          rel="noreferrer"
          className="project-link"
        >
          <FaGithub />
          View on GitHub
        </a>
      </div>
    </article>

    {/* Project 02 */}
    <article className="project-card">
      <div className="project-number">02</div>

      <h3>SecureLock – Digital Access Control System</h3>

      <p>
        Designed and simulated a digital access control system
        featuring code verification, timed door unlocking, countdown
        display, and enhanced security mechanisms including a buzzer
        alarm and 30-second lockout after repeated failed attempts.
      </p>

      <div className="project-tech">
        <span>Digital Logic</span>
        <span>Flip-Flops</span>
        <span>Counters</span>
        <span>7-Segment</span>
      </div>

      <div className="project-links securelock-links">
        <a
          href="https://github.com/ahmedmaher-cse/SecureLock-Digital-Access-Control-System"
          target="_blank"
          rel="noreferrer"
          className="project-link"
        >
          <FaGithub />
          View on GitHub
        </a>

        <a
          href="https://drive.google.com/drive/folders/1byNENC16Bv1t9oxm-E35KOoJa7f0ubDg?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="project-link"
        >
          Watch Demo
        </a>
      </div>
    </article>

    {/* Project 03 */}
    <article className="project-card">
      <div className="project-number">03</div>

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

    {/* Project 04 */}
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
