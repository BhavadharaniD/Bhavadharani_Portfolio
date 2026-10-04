import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight, ExternalLink, Github, Linkedin, Mail, Menu, X,
  Code2, Database, Server, Terminal, Download
} from "lucide-react";
import "./style.css";

const projects = [
  {
    title: "DocLink",
    role: "Full-Stack Developer",
    description: "Telemedicine platform for appointment booking, role-based dashboards, digital medical records and real-time doctor–patient consultation.",
    tech: ["MERN", "JWT", "Socket.IO", "REST API"],
    link: "https://doclink-mern.vercel.app/"
  },
  {
    title: "ResourceFlow",
    role: "Frontend / Application Developer",
    description: "Role-based resource and inventory management platform with request approvals, real-time Firestore updates and transaction-based stock management.",
    tech: ["React", "Firebase", "Firestore", "Clerk"],
    link: "https://warehouse-facility-management-syste.vercel.app/"
  },
  {
    title: "StudentHub",
    role: "Full-Stack Developer",
    description: "Campus activity and placement management system for certificates, placement documentation, student records and portfolio generation.",
    tech: ["MERN", "Multer", "PDFKit", "MongoDB"],
    link: null
  }
];

const skills = [
  { icon: Code2, title: "Programming", items: ["Java", "OOPS", "DSA", "JavaScript", "SQL"] },
  { icon: Terminal, title: "Frontend", items: ["React.js", "HTML", "CSS", "Tailwind CSS"] },
  { icon: Server, title: "Backend", items: ["Node.js", "Express.js", "REST APIs", "Socket.IO"] },
  { icon: Database, title: "Database & Tools", items: ["MongoDB", "Firebase", "Git", "GitHub", "Postman"] }
];

function App() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = ["home","about","experience","skills","education","projects","contact"];
    const handler = () => {
      const y = window.scrollY + 180;
      let current = "home";
      sections.forEach(id => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) current = id;
      });
      setActive(current);
    };
    window.addEventListener("scroll", handler);
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({behavior:"smooth"});
    setOpen(false);
  };

  const nav = ["about","experience","skills","education","projects","contact"];

  return (
    <div className="app">
      <header className="header">
        <button className="logo" onClick={() => go("home")}>BH<span>.</span></button>
        <nav className={open ? "nav open" : "nav"}>
          {nav.map(item => (
            <button key={item} className={active === item ? "active" : ""} onClick={() => go(item)}>
              {item}
            </button>
          ))}
          <a className="resume-btn" href="/Bhavadharani-Resume.pdf" download>Resume <Download size={14}/></a>
        </nav>
        <button className="mobile-menu" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-inner">
            <div className="hero-left">
              <p className="hello">HELLO, I'M</p>
              <h1>Bhavadharani <span>D</span></h1>
              <h2>Software Developer <b>·</b> Full-Stack Developer</h2>
              <p className="hero-description">
                Information Technology undergraduate building practical web applications
                with Java, DSA, React, Node.js, Express, MongoDB and SQL.
              </p>
              <div className="hero-buttons">
                <button className="primary" onClick={() => go("projects")}>View Projects <ArrowRight size={17}/></button>
                <a className="outline" href="mailto:bhavadharani2027@gmail.com">Contact Me <Mail size={16}/></a>
              </div>
              <div className="hero-links">
                <a href="https://github.com/Bhavadharanid" target="_blank" rel="noreferrer"><Github size={18}/> GitHub</a>
                <a href="https://www.linkedin.com/in/bhavadharani-d" target="_blank" rel="noreferrer"><Linkedin size={18}/> LinkedIn</a>
              </div>
            </div>

            <div className="hero-right">
              <div className="code-card">
                <div className="code-bar"><span></span><span></span><span></span><small>developer.js</small></div>
                <pre><code><span className="purple">const</span> developer = {'{'}{'\n'}
  name: <span className="green">'Bhavadharani D'</span>,{'\n'}
  role: <span className="green">'Software Developer'</span>,{'\n'}
  education: <span className="green">'B.Tech IT · 2027'</span>,{'\n'}
  skills: [<span className="green">'Java'</span>, <span className="green">'React'</span>,{'\n'}
           <span className="green">'Node.js'</span>, <span className="green">'SQL'</span>],{'\n'}
  building: <span className="green">'real-world software'</span>{'\n'}
{'}'};</code></pre>
                <div className="terminal-line"><span>›</span> currently_building<span className="cursor">_</span></div>
              </div>
              <div className="hero-badge">AVAILABLE FOR INTERNSHIPS</div>
            </div>
          </div>
        </section>

        <section id="about" className="section about">
          <div className="section-title"><span>01</span><h2>About me</h2></div>
          <div className="about-grid">
            <div className="about-photo">
              <img src="/profile.jpeg" alt="Bhavadharani D" />
              <div className="photo-caption">Bhavadharani D<br/><small>B.Tech Information Technology · 2027</small></div>
            </div>
            <div className="about-text">
              <p className="big">I like building software by understanding how the pieces work together.</p>
              <p>
                I am an Information Technology undergraduate at R.M.K. Engineering College.
                My development work has mainly focused on MERN applications, while Java,
                OOPS, DSA and SQL form my core programming foundation.
              </p>
              <p>
                I have worked with authentication, role-based access, REST APIs,
                database integration, file handling and real-time communication.
                I am currently looking for software development and full-stack internship opportunities.
              </p>
              <div className="facts">
                <div><strong>7.91</strong><span>CGPA</span></div>
                <div><strong>2027</strong><span>Graduation</span></div>
                <div><strong>3+</strong><span>Projects</span></div>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="section timeline-section">
          <div className="section-title"><span>02</span><h2>Experience</h2></div>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-head">
                <div><h3>StudentHub — Campus Activity & Placement Management System</h3><p>Student Project · MERN Stack</p></div>
                <span>2025 — Present</span>
              </div>
              <p>
                Contributed to frontend and backend modules for placement tracking,
                certificate management, portfolio generation and student record management.
                Worked with role-based workflows, database schema design and application data flows.
              </p>
            </div>
          </div>
        </section>

        <section id="skills" className="section skills">
          <div className="section-title"><span>03</span><h2>Skills</h2></div>
          <div className="skill-grid">
            {skills.map(({icon: Icon, title, items}) => (
              <div className="skill-box" key={title}>
                <Icon size={23}/>
                <h3>{title}</h3>
                <div>{items.map(item => <span key={item}>{item}</span>)}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="education" className="section education">
          <div className="section-title"><span>04</span><h2>Education</h2></div>
          <div className="education-card">
            <div><p>2024 — 2027</p><h3>R.M.K. Engineering College</h3><h4>B.Tech — Information Technology</h4></div>
            <strong>7.91 CGPA</strong>
          </div>
          <div className="education-card school">
            <div><p>2023</p><h3>Senthil Matric Hr. Sec. School</h3><h4>Higher Secondary Certificate</h4></div>
            <strong>91.5%</strong>
          </div>
        </section>

        <section id="projects" className="section projects">
          <div className="section-title"><span>05</span><h2>Projects</h2></div>
          <div className="project-grid">
            {projects.map((p, i) => (
              <article className="project-card" key={p.title}>
                <div className="project-top"><span>0{i+1}</span><Code2 size={20}/></div>
                <p>{p.role}</p>
                <h3>{p.title}</h3>
                <p className="desc">{p.description}</p>
                <div className="tech">{p.tech.map(t => <span key={t}>{t}</span>)}</div>
                <div className="project-actions">
                  {p.link ? <a href={p.link} target="_blank" rel="noreferrer">Live project <ExternalLink size={14}/></a> : <span className="muted">Project link coming soon</span>}
                  <a href="https://github.com/Bhavadharanid" target="_blank" rel="noreferrer">GitHub <Github size={14}/></a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section achievements">
          <div className="section-title"><span>06</span><h2>Achievements</h2></div>
          <div className="achievement-grid">
            <div><span>01</span><h3>HackNexa Hackathon</h3><p>Presented Smart Balance AI — an AI-based exam stress and study assistant concept.</p></div>
            <div><span>02</span><h3>Best Paper — ICACIS</h3><p>Presented “InnoLink: Bridging the Innovation Gap Between Existing Applications”.</p></div>
            <div><span>03</span><h3>Certifications</h3><p>Java Developer — Infosys Springboard · Database for Developers — Oracle Dev Gym.</p></div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="section-title"><span>07</span><h2>Let's connect</h2></div>
          <p>Looking for software development and full-stack internship opportunities.</p>
          <a className="email" href="mailto:bhavadharani2027@gmail.com">bhavadharani2027@gmail.com</a>
          <div className="contact-social">
            <a href="https://github.com/Bhavadharanid" target="_blank" rel="noreferrer"><Github/> GitHub</a>
            <a href="https://www.linkedin.com/in/bhavadharani-d" target="_blank" rel="noreferrer"><Linkedin/> LinkedIn</a>
            <a href="mailto:bhavadharani2027@gmail.com"><Mail/> Email</a>
          </div>
        </section>
      </main>

      <footer>© 2026 Bhavadharani D <span>Built with React + Vite</span></footer>
    </div>
  );
}
createRoot(document.getElementById("root")).render(<App/>);
