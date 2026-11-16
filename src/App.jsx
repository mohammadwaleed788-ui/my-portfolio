
import { useState } from "react";
import {
  Mail,
  ArrowUpRight,
  Code2,
  Server,
  Database,
  Globe,
  Menu,
  X,
} from "lucide-react";

const skills = [
  { name: "React.js", category: "Frontend", icon: Code2 },
  { name: "JavaScript", category: "Frontend", icon: Code2 },
  { name: "HTML & CSS", category: "Frontend", icon: Globe },
  { name: "Node.js", category: "Backend", icon: Server },
  { name: "Express.js", category: "Backend", icon: Server },
  { name: "PostgreSQL", category: "Database", icon: Database },
  { name: "MongoDB", category: "Database", icon: Database },
  { name: "REST APIs", category: "Backend", icon: Globe },
];

const projects = [
  {
    number: "01",
    name: "Sumip Landing Page",
    description:
      "A modern landing page focused on clean design, responsive layouts, and a polished user experience.",
    stack: ["React", "JavaScript", "CSS"],
    github:
      "https://github.com/mohammadwaleed788-ui/sumip-landing-page",
  },
  {
    number: "02",
    name: "MERN Task",
    description:
      "A full-stack application demonstrating frontend and backend development with the MERN stack.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/mohammadwaleed788-ui/MERN-Task",
  },
  {
    number: "03",
    name: "PDF Content Matcher",
    description:
      "A project exploring PDF content processing and matching, showcasing practical problem-solving.",
    stack: ["JavaScript", "Web Development"],
    github:
      "https://github.com/mohammadwaleed788-ui/pdf-content-matcher",
  },
];

function SectionTitle({ eyebrow, title, highlight, description }) {
  return (
    <div className="mb-12">
      <p className="mb-4 text-xs font-bold tracking-[0.25em] text-violet-400">
        {eyebrow}
      </p>
      <h2 className="font-['Space_Grotesk'] text-4xl font-bold tracking-tight sm:text-5xl">
        {title} <span className="text-violet-400">{highlight}</span>
      </h2>
      {description && (
        <p className="mt-4 text-sm leading-7 text-zinc-400">
          {description}
        </p>
      )}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Contact", "#contact"],
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-[#080a12] text-zinc-100">
      {/* Navigation */}
      <header className="relative z-50 mx-auto flex h-20 w-[90%] max-w-6xl items-center justify-between border-b border-white/10">
        <a
          href="#home"
          className="font-['Space_Grotesk'] text-2xl font-bold tracking-tighter"
        >
          MW<span className="text-violet-400">.</span>
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-zinc-200 md:hidden"
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>

        <nav
          className={`${
            menuOpen ? "flex" : "hidden"
          } absolute left-0 top-20 w-full flex-col gap-6 border-b border-white/10 bg-[#10121e] p-6 text-sm text-zinc-300 md:static md:flex md:w-auto md:flex-row md:items-center md:border-0 md:bg-transparent md:p-0`}
        >
          {navLinks.map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={closeMenu}
              className="transition hover:text-violet-400"
            >
              {label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden items-center gap-2 rounded-lg border border-violet-400/40 px-4 py-2.5 text-sm transition hover:bg-violet-500/10 sm:flex"
        >
          Let's Talk <ArrowUpRight size={16} />
        </a>
      </header>

      <main>
        {/* Hero */}
        <section
          id="home"
          className="relative mx-auto grid min-h-[650px] w-[90%] max-w-6xl items-center gap-16 py-20 lg:grid-cols-2"
        >
          <div className="absolute right-0 top-20 -z-0 h-72 w-72 rounded-full bg-violet-600/20 blur-[120px]" />

          <div className="relative z-10">
            <div className="mb-9 inline-flex items-center gap-3 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2 text-xs text-emerald-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_#34d399]" />
              Available for freelance opportunities
            </div>

            <p className="mb-4 text-xs font-bold tracking-[0.3em] text-violet-400">
              HELLO, I'M
            </p>

            <h1 className="font-['Space_Grotesk'] text-6xl font-bold leading-[1.05] tracking-tighter sm:text-7xl lg:text-8xl">
              Mohammad
              <br />
              <span className="text-violet-400">Waleed.</span>
            </h1>

            <h2 className="mt-7 text-xl font-medium text-zinc-300">
              Full-Stack Web Developer
            </h2>

            <p className="mt-5 max-w-lg text-sm leading-8 text-zinc-400">
              I build modern, responsive web applications and reliable
              backend solutions that help businesses turn ideas into reality.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-lg bg-violet-500 px-6 py-3.5 text-sm font-semibold transition hover:-translate-y-1 hover:bg-violet-600"
              >
                Explore My Work <ArrowUpRight size={18} />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 px-6 py-3.5 text-sm font-semibold transition hover:border-violet-400 hover:text-violet-300"
              >
                Contact Me <Mail size={17} />
              </a>
            </div>

            <div className="mt-9 flex gap-5 text-zinc-400">
              <a
                href="https://github.com/mohammadwaleed788-ui"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="transition hover:text-violet-400"
              >
                <Code2 size={21} />
              </a>
              <a
                href="mailto:YOUR_EMAIL@example.com"
                aria-label="Email"
                className="transition hover:text-violet-400"
              >
                <Mail size={21} />
              </a>
            </div>
          </div>

          {/* Code illustration */}
          <div className="relative z-10 mx-auto w-full max-w-lg">
            <div className="rounded-xl border border-violet-400/20 bg-[#111320] shadow-2xl shadow-violet-950/30">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                <div className="flex gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                </div>
                <span className="text-xs text-zinc-500">developer.js</span>
              </div>

              <div className="overflow-x-auto p-6 font-mono text-xs leading-8 sm:text-sm">
                <p><span className="text-violet-400">const</span> developer = {"{"}</p>
                <p className="pl-5">name: <span className="text-emerald-300">'Mohammad Waleed'</span>,</p>
                <p className="pl-5">role: <span className="text-emerald-300">'Full-Stack Developer'</span>,</p>
                <p className="pl-5">skills: [</p>
                <p className="pl-10 text-orange-300">'React',</p>
                <p className="pl-10 text-orange-300">'Node.js',</p>
                <p className="pl-10 text-orange-300">'PostgreSQL'</p>
                <p className="pl-5">],</p>
                <p className="pl-5">passion: <span className="text-emerald-300">'Building great products'</span></p>
                <p>{"};"}</p>
                <p className="mt-3 text-zinc-500">// Turning ideas into reality.</p>
              </div>

              <div className="flex items-center justify-between border-t border-white/10 px-5 py-3 text-xs text-zinc-500">
                <span className="text-emerald-300">● Ready to build</span>
                <span>JavaScript</span>
              </div>
            </div>

            <div className="absolute -right-3 top-8 rounded-lg border border-violet-400/30 bg-[#211a38] px-4 py-3 text-xs text-violet-200 shadow-xl sm:-right-7">
              {"<React />"}
            </div>

            <div className="absolute -bottom-5 -left-3 rounded-lg border border-violet-400/30 bg-[#211a38] px-4 py-3 text-xs text-violet-200 shadow-xl sm:-left-7">
              {"{ }"} Node.js
            </div>
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          className="mx-auto w-[90%] max-w-6xl border-t border-white/10 py-24"
        >
          <SectionTitle eyebrow="GET TO KNOW ME" title="About" highlight="Me" />

          <div className="grid gap-8 md:grid-cols-[0.6fr_1.4fr]">
            <p className="text-xs tracking-widest text-zinc-500">01 / ABOUT</p>
            <div>
              <h3 className="font-['Space_Grotesk'] text-2xl font-semibold leading-relaxed sm:text-3xl">
                I enjoy creating digital experiences that are
                <span className="text-violet-400"> useful, intuitive, and reliable.</span>
              </h3>
              <p className="mt-6 text-sm leading-8 text-zinc-400">
                I'm a web developer focused on building full-stack
                applications. I work with modern frontend technologies,
                backend APIs, and databases to create complete web solutions.
              </p>
              <p className="mt-4 text-sm leading-8 text-zinc-400">
                My goal is to write clean, maintainable code and continuously
                improve my skills while solving real-world problems.
              </p>
              <a
                href="#contact"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-violet-300 hover:text-violet-200"
              >
                Let's work together <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section
          id="skills"
          className="mx-auto w-[90%] max-w-6xl border-t border-white/10 py-24"
        >
          <SectionTitle
            eyebrow="WHAT I WORK WITH"
            title="My"
            highlight="Skills"
            description="Technologies I use to build modern web applications."
          />

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {skills.map((skill) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.name}
                  className="rounded-xl border border-white/10 bg-[#10121d] p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-400/50"
                >
                  <Icon className="mb-6 text-violet-400" size={26} />
                  <h3 className="font-semibold">{skill.name}</h3>
                  <p className="mt-2 text-xs text-zinc-500">{skill.category}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Projects */}
        <section
          id="projects"
          className="mx-auto w-[90%] max-w-6xl border-t border-white/10 py-24"
        >
          <SectionTitle
            eyebrow="SOME OF MY WORK"
            title="Featured"
            highlight="Projects"
            description="A selection of projects that demonstrate my development skills."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.number}
                className="group rounded-xl border border-white/10 bg-[#10121d] p-5 transition duration-300 hover:-translate-y-1 hover:border-violet-400/50"
              >
                <div className="flex items-center justify-between text-xs text-zinc-500">
                  <span>{project.number} / PROJECT</span>
                  <Code2 className="text-violet-400" size={23} />
                </div>

                <div className="my-6 flex h-40 flex-col items-center justify-center gap-5 rounded-lg border border-violet-400/20 bg-gradient-to-br from-violet-950/80 to-slate-900">
                  <span className="font-['Space_Grotesk'] text-4xl font-bold">
                    MW<span className="text-violet-400">.</span>
                  </span>
                  <div className="flex gap-2">
                    <span className="h-1.5 w-10 rounded bg-violet-400/60" />
                    <span className="h-1.5 w-10 rounded bg-violet-400/40" />
                    <span className="h-1.5 w-10 rounded bg-violet-400/20" />
                  </div>
                </div>

                <h3 className="font-['Space_Grotesk'] text-xl font-semibold">
                  {project.name}
                </h3>
                <p className="mt-3 min-h-20 text-xs leading-7 text-zinc-400">
                  {project.description}
                </p>

                <div className="my-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded bg-violet-400/10 px-2.5 py-1.5 text-[10px] text-violet-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between border-t border-white/10 pt-4 text-xs font-semibold text-violet-300"
                >
                  View Source Code
                  <ArrowUpRight size={17} />
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="mx-auto w-[90%] max-w-6xl py-16"
        >
          <div className="rounded-2xl border border-violet-400/20 bg-gradient-to-br from-violet-950/50 to-[#10121d] px-6 py-20 text-center sm:px-12">
            <p className="mb-5 text-xs font-bold tracking-[0.25em] text-violet-300">
              HAVE A PROJECT IN MIND?
            </p>
            <h2 className="font-['Space_Grotesk'] text-4xl font-bold sm:text-6xl">
              Let's build something <span className="text-violet-400">great.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-sm leading-8 text-zinc-400">
              I'm interested in freelance opportunities and collaborations.
              Let's discuss how I can help with your next project.
            </p>
            <a
              href="mailto:YOUR_EMAIL@example.com"
              className="mt-9 inline-flex items-center gap-2 rounded-lg bg-violet-500 px-7 py-4 text-sm font-semibold transition hover:bg-violet-600"
            >
              Get In Touch <Mail size={18} />
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mx-auto flex w-[90%] max-w-6xl flex-wrap items-center justify-between gap-5 border-t border-white/10 py-8">
        <a href="#home" className="font-['Space_Grotesk'] text-2xl font-bold">
          MW<span className="text-violet-400">.</span>
        </a>
        <p className="text-xs text-zinc-500">
          © {new Date().getFullYear()} Mohammad Waleed. All rights reserved.
        </p>
        <a
          href="https://github.com/mohammadwaleed788-ui"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="text-zinc-400 transition hover:text-violet-400"
        >
          <Code2 size={20} />
        </a>
      </footer>
    </div>
  );
}

export default App;
