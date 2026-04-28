import "./App.css";

function App() {
  return (
    <main className="site">
      <div className="stars"></div>
      <div className="grid"></div>

      <nav className="navbar">
        <div className="logo">NANCY://SPACE</div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="hero-content">
          <p className="status">● SYSTEM ONLINE</p>

          <h1>
            Hi, I’m <span>Nancy Wei</span>
          </h1>

          <h2>Full-Stack Developer / Open Source Explorer</h2>

          <p className="description">
            I build digital products with code, design, and curiosity. Welcome
            to my cyber universe — a space for projects, articles, and ideas.
          </p>

        </div>

        <div className="terminal-card">
          <div className="terminal-header">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="terminal-body">
            <p>
              <span className="green">$</span> boot portfolio
            </p>
            <p>Loading profile...</p>
            <p>Role: Master of IT Student</p>
            <p>Stack: React / Spring Boot / PostgreSQL</p>
            <p>Mission: Build useful software</p>
            <p className="typing">Access granted_</p>
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <p className="section-label">PROJECT DATABASE</p>
        <h2>Featured Projects</h2>

        <div className="cards">
          <div className="card">
            <h3>Target Task Manager</h3>
            <p>
              A full-stack task management app built with React, Spring Boot,
              JWT authentication, and PostgreSQL.
            </p>
          </div>

          <div className="card">
            <h3>RecycleRight App</h3>
            <p>
              A mobile app concept helping users learn recycling rules,
              preferences, and reminders.
            </p>
          </div>

          <div className="card">
            <h3>Open Source Journey</h3>
            <p>
              Notes, proposals, and contributions from my learning journey in
              open source communities.
            </p>
          </div>
        </div>
      </section>

      

      <section id="contact" className="section contact">
        <p className="section-label">TRANSMISSION CHANNEL</p>
        <h2>Contact Me</h2>
        <p>
          Interested in my projects or collaboration? Connect with me
          through GitHub or email.
        </p>

        <div className="contact-links">
          <a href="https://github.com/NancyWei123" target="_blank">
            GitHub
          </a>
          <a href="https://www.linkedin.com" target="_blank">
            LinkedIn
          </a>
        </div>
      </section>
    </main>
  );
}

export default App;