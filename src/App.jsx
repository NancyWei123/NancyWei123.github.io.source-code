import { education, experience, profile, projects, skills } from "./resumeData";

function Section({ eyebrow, title, children }) {
  return (
    <section className="section">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

function TagList({ items }) {
  return (
    <div className="tag-list">
      {items.map((item) => (
        <span key={item} className="tag">
          {item}
        </span>
      ))}
    </div>
  );
}

function TimelineCard({ item }) {
  return (
    <article className="timeline-card">
      <div>
        <h3>{item.role || item.degree}</h3>
        <p className="subheading">
          {item.company || item.school}
          {item.location ? ` • ${item.location}` : ""}
        </p>
      </div>
      <span className="period">{item.period}</span>
      <ul>
        {item.details?.map((detail) => <li key={detail}>{detail}</li>)}
        {item.bullets?.map((bullet) => <li key={bullet}>{bullet}</li>)}
      </ul>
    </article>
  );
}

function App() {
  return (
    <main>
      <header className="hero">
        <nav className="nav">
          <a href="#top" className="logo" aria-label="Go to top">
            NW
          </a>
          <div className="nav-links">
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href={`mailto:${profile.email}`} className="nav-button">
              Contact
            </a>
          </div>
        </nav>

        <div id="top" className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Online Resume</p>
            <h1>{profile.name}</h1>
            <p className="hero-title">{profile.title}</p>
            <p className="summary">{profile.summary}</p>
            <div className="hero-actions">
              <a className="button primary" href={`mailto:${profile.email}`}>
                Email Me
              </a>
              <a className="button secondary" href={profile.github} target="_blank" rel="noreferrer">
                View GitHub
              </a>
              <a className="button secondary" href={profile.blog} target="_blank" rel="noreferrer">
                View Blog
              </a>
            </div>
          </div>

          <aside className="profile-card" aria-label="Contact information">
            <div className="avatar">NW</div>
            <h2>{profile.name}</h2>
            <p>{profile.location}</p>
            <div className="contact-list">
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              <a href={`tel:${profile.phone.replaceAll(" ", "")}`}>{profile.phone}</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </aside>
        </div>
      </header>

      <Section eyebrow="About" title="What I’m looking for">
        <div className="about-card">
          <p>
            I’m looking for an internship or graduate opportunity where I can contribute to
            practical software projects, continue learning from experienced teams, and grow as a
            full-stack developer.
          </p>
        </div>
      </Section>

      <Section eyebrow="Core strengths" title="Technical Skills">
        <div id="skills" className="skills-grid">
          {skills.map((group) => (
            <article key={group.title} className="skill-card">
              <h3>{group.title}</h3>
              <TagList items={group.items} />
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Education" title="Academic Background">
        <div className="timeline">
          {education.map((item) => (
            <TimelineCard key={`${item.degree}-${item.school}`} item={item} />
          ))}
        </div>
      </Section>

      <Section eyebrow="Selected work" title="Projects">
        <div id="projects" className="project-grid">
          {projects.map((project) => (
            <article key={project.name} className="project-card">
              <div className="project-header">
                <div>
                  <h3>{project.name}</h3>
                  <p className="subheading">{project.type} • {project.year}</p>
                </div>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noreferrer" className="small-link">
                    Source
                  </a>
                )}
              </div>
              <p>{project.description}</p>
              <TagList items={project.tech} />
              <ul>
                {project.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Experience" title="Work Experience">
        <div id="experience" className="timeline">
          {experience.map((item) => (
            <TimelineCard key={`${item.role}-${item.company}`} item={item} />
          ))}
        </div>
      </Section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} {profile.name}. Built with React, JavaScript, and CSS.</p>
        <a href={`mailto:${profile.email}`}>Let’s work together</a>
      </footer>
    </main>
  );
}

export default App;
