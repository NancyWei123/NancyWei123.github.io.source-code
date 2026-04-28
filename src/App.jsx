import { useState } from "react";
import "./App.css";

const commands = {
  help: [
    "Available commands:",
    "",
    "about       Show information about me",
    "projects    View my projects",
    "skills      View my tech stack",
    "opensource  View my open source journey",
    "contact     Show contact information",
    "clear       Clear the terminal",
  ],

  about: [
    "Nancy Wei",
    "",
    "Master of IT student and full-stack developer.",
    "I build web applications, explore open source, and learn by creating real projects.",
  ],

  projects: [
    "Projects:",
    "",
    "[01] Target Task Manager",
    "     Full-stack task management app built with React, Spring Boot, JWT, and PostgreSQL.",
    "",
    "[02] RecycleRight App",
    "     Mobile app concept for recycling guidance, preferences, and reminders.",
    "",
    "[03] Personal Cyber Portfolio",
    "     A hacker-style terminal website built with React.",
  ],

  skills: [
    "Tech Stack:",
    "",
    "Frontend: React, Vite, JavaScript, HTML, CSS",
    "Backend: Spring Boot, Java, REST APIs, JWT",
    "Database: PostgreSQL, MySQL, Redis",
    "Tools: GitHub, Docker, Postman, VS Code",
  ],

  opensource: [
    "Open Source Journey:",
    "",
    "Notes:",
    "- Reading documentation",
    "- Understanding large codebases",
    "- Learning contribution workflows",
    "",
    "Proposals:",
    "- GSoC-style proposal drafts",
    "- Project timelines",
    "- Expected outcomes",
    "",
    "Contributions:",
    "- Pull requests",
    "- Issue discussions",
    "- Documentation improvements",
  ],

  contact: [
    "Contact:",
    "",
    "GitHub:   https://github.com/NancyWei123",
    "LinkedIn: https://www.linkedin.com",
    "Email:    nwei0012@student.monash.edu",
  ],
};

function App() {
  const [history, setHistory] = useState([
    "NANCY TERMINAL v1.0.0",
    "Type 'help' to see available commands.",
    "",
  ]);

  const [input, setInput] = useState("");

  const runCommand = (commandText) => {
    const command = commandText.trim().toLowerCase();

    if (command === "") {
      return;
    }

    if (command === "clear") {
      setHistory([]);
      return;
    }

    if (commands[command]) {
      setHistory((prev) => [
        ...prev,
        `nancy@portfolio:~$ ${command}`,
        ...commands[command],
        "",
      ]);
    } else {
      setHistory((prev) => [
        ...prev,
        `nancy@portfolio:~$ ${command}`,
        `Command not found: ${command}`,
        "Type 'help' to see available commands.",
        "",
      ]);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    runCommand(input);
    setInput("");
  };

  return (
    <main className="terminal-site">
      <div className="terminal-bg"></div>
      <div className="scanlines"></div>

      <section className="terminal-window">
        <div className="terminal-topbar">
          <div className="window-buttons">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <p>nancy@portfolio: ~/home</p>
        </div>

        <div className="terminal-screen">
          {history.map((line, index) => (
            <p key={index} className="terminal-line">
              {line}
            </p>
          ))}

          <form onSubmit={handleSubmit} className="command-line">
            <span>nancy@portfolio:~$</span>
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              autoFocus
              spellCheck="false"
              aria-label="Terminal command input"
            />
          </form>
        </div>
      </section>
    </main>
  );
}

export default App;