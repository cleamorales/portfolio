import { useState } from "react";

const projects = [
  {
    title: "Paycheck Calculator",
    type: "Personal Finance Tool",
    description:
      "A program that calculates take-home earnings for tipped employees, based on hours worked, tip-out, and taxes. It is also a Payroll tracking system with a SQLite database integration.",
    stack: ["C++", "SQLite"],
    image: "/paycheckImg.png",
    alt: "Numbers",
    github: "https://github.com/cleamorales/paycheck-calculator",
  },
  {
    title: "Study Behavior Tracker",
    type: "Productivity tool",
    description:
      "A personal productivity tool that allows users to log daily study hours, sleep, workouts, focus, and mood. It organizes data over time, tracks progress, highlights trends, and helps users identify patterns in their habits to improve productivity and wellness.",
    stack: ["React", "Node.js", "MySQL", "Express"],
    image: "/studytrackerImg.jpeg",
    alt: "studying",
    github: "https://github.com/cleamorales/study-tracker",
  },
];

const skills = [
  "React",
  "Node.js",
  "JavaScript",
  "TypeScript",
  "Tailwind CSS",
  "C++",
  "Java",
  "Python",
  "MySQL",
  "Express.js",
  "Git & GitHub",
  "AWS",
  "Figma",
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={`h-4 w-4 ${diagonal ? "-rotate-45" : ""}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M5 12h14M14 7l5 5-5 5" />
    </svg>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="overflow-hidden bg-[#f5f0e8] text-[#292621]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#3d382f]/10 bg-[#f5f0e8]/85 backdrop-blur-md">
        <div className="mx-auto flex h-[76px] max-w-[1500px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <a
            href="#top"
            className="font-display flex items-center gap-2 text-[19px] tracking-[-0.035em]"
            onClick={closeMenu}
          >
            <span className="bg-accent h-2 w-2 rounded-full" />
            Clea Morales
          </a>

          <nav className="font-mono hidden items-center gap-10 text-[10px] font-medium uppercase tracking-[0.12em] md:flex">
            <a className="nav-link" href="#work">
              Projects
            </a>
            <a className="nav-link" href="#about">
              About
            </a>
            <a className="nav-link" href="#skills">
              Skills
            </a>
            <a className="nav-link" href="#contact">
              Contact
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="border border-[#3d382f]/35 px-4 py-2 transition-colors hover:bg-[#292621] hover:text-[#f5f0e8]"
            >
              Resume
            </a>
          </nav>

          <button
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="relative h-10 w-10 md:hidden"
          >
            <span
              className={`absolute left-2 top-[15px] h-px w-6 bg-current transition-transform ${menuOpen ? "translate-y-[5px] rotate-45" : ""}`}
            />
            <span
              className={`absolute left-2 top-[25px] h-px w-6 bg-current transition-transform ${menuOpen ? "-translate-y-[5px] -rotate-45" : ""}`}
            />
          </button>
        </div>
        <div
          className={`grid bg-[#f5f0e8] transition-[grid-template-rows] duration-500 md:hidden ${menuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
        >
          <nav className="overflow-hidden">
            <div className="flex flex-col px-5 pb-8 pt-3 font-display text-3xl">
              {["work", "about", "skills", "contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={closeMenu}
                  className="border-t border-[#3d382f]/15 py-4 capitalize"
                >
                  {item}
                </a>
              ))}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
                className="mt-4 flex items-center justify-between border border-[#3d382f]/30 px-4 py-4 text-xl"
              >
                Resume
                <Arrow diagonal />
              </a>
            </div>
          </nav>
        </div>
      </header>

      <section id="top" className="relative min-h-[100svh] overflow-hidden pt-[76px]">
        <div className="absolute inset-0 top-[76px] bg-[url('/petal-texture.png')] bg-cover bg-center opacity-90" />
        <div className="absolute inset-0 top-[76px] bg-gradient-to-b from-[#f8f3ec]/5 via-[#f5f0e8]/10 to-[#f5f0e8]" />
        <div className="absolute inset-x-0 bottom-0 h-[44%] bg-gradient-to-t from-[#f5f0e8] via-[#f5f0e8]/85 to-transparent" />

        <div className="relative mx-auto flex min-h-[calc(100svh-76px)] max-w-[1500px] flex-col justify-end px-5 pb-[clamp(7rem,16vh,10rem)] sm:px-8 lg:px-12">
          <div className="grid items-end gap-8 lg:grid-cols-[1fr_300px]">
            <h1 className="font-display max-w-5xl text-[clamp(4.2rem,9vw,9rem)] leading-[0.9] tracking-[-0.065em]">
              Clea <span className="text-accent">Morales</span>
            </h1>
            <p className="font-mono flex items-center gap-3 pb-1 text-[10px] font-medium uppercase tracking-[0.12em] lg:pb-3">
              <span className="h-px w-9 bg-current" />
              Aspiring Software Engineer
            </p>
          </div>
        </div>
      </section>

      <section
        id="work"
        className="px-5 pb-24 pt-12 sm:px-8 sm:pb-32 sm:pt-16 lg:px-12 lg:pb-40 lg:pt-20"
      >
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-14 border-b border-[#3d382f]/25 pb-5 sm:mb-20">
            <div>
              <p className="font-mono mb-3 text-[10px] font-medium uppercase tracking-[0.12em]">
                Projects
              </p>
              <h2 className="font-display text-4xl tracking-[-0.045em] sm:text-6xl">
                Things I've built
              </h2>
            </div>
          </div>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {projects.map((project) => (
              <article key={project.title} className="project-card group">
                <div className="project-image-shell relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.alt}
                    className="h-full w-full object-cover grayscale-[18%] transition duration-700 ease-out group-hover:scale-[1.025]"
                  />
                  <div className="absolute inset-0 bg-[#c8ad8b]/10 mix-blend-multiply" />
                  <div className="project-grid" aria-hidden="true" />
                </div>
                <div className="px-3 pb-3 pt-5">
                  <h3 className="font-display text-3xl leading-none tracking-[-0.04em] sm:text-4xl">
                    {project.title}
                  </h3>
                  <p className="font-mono mt-3 text-[9px] uppercase tracking-[0.1em] text-[#686158]">
                    {project.type}
                  </p>
                  <p className="mt-5 text-[14px] leading-6 text-[#514c44]">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((technology) => (
                      <span
                        key={technology}
                        className="font-mono rounded-full border border-[#3d382f]/20 bg-white/25 px-3 py-1 text-[9px] tracking-[-0.01em]"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono mt-7 inline-flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.1em]">
                    View project <Arrow diagonal />
                    </a>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-12 flex justify-center sm:mt-16">
            <a
              href="https://github.com/cleamorales"
              target="_blank"
              rel="noreferrer"
              className="font-mono group inline-flex items-center gap-3 border border-[#3d382f]/35 px-6 py-3 text-[10px] font-medium uppercase tracking-[0.1em] transition-colors hover:bg-[#292621] hover:text-[#f5f0e8]"
            >
              More on GitHub
              <span className="transition-transform group-hover:translate-x-1">
                <Arrow diagonal />
              </span>
            </a>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="bg-[#302e29] px-5 py-24 text-[#eee7dc] sm:px-8 sm:py-32 lg:px-12 lg:py-40"
      >
        <div className="mx-auto max-w-[1500px]">
          <p className="font-mono text-[10px] font-medium uppercase tracking-[0.12em] text-[#bdb5a9]">
            About me
          </p>
          <div className="mt-10 grid gap-16 lg:grid-cols-[1.3fr_0.7fr] lg:gap-24">
            <div className="order-2 justify-self-center lg:justify-self-end">
              <div className="relative max-w-[260px] border border-[#bdb5a9]/35 p-2">
                <span
                  aria-hidden="true"
                  className="absolute -right-2 -top-2 h-8 w-8 border-r border-t border-[#c7bbae]"
                />
                <span
                  aria-hidden="true"
                  className="absolute -bottom-2 -left-2 h-8 w-8 border-b border-l border-[#c7bbae]"
                />
                <img
                  src="/about-portrait.jpg"
                  alt="Picture of Me"
                  className="aspect-[2/3] w-full object-cover object-top"
                />
              </div>
            </div>
            <div className="order-1">
              <h2 className="font-display text-[clamp(3rem,5.8vw,6.5rem)] leading-[1] tracking-[-0.055em]">
                Hi
                <br />
                <span className="text-[#c7bbae]">I'm Clea</span>
              </h2>
              <div className="mt-14 grid gap-8 border-t border-white/20 pt-8 sm:grid-cols-2">
                <p className="max-w-md text-[15px] leading-7 text-[#d0c9bf]">
                  A Computer Science student passionate about software engineering, web development, and building full-stack applications. 
                  I enjoy working on projects that require both analytical thinking and creativity, from designing algorithms and data structures to developing interactive and responsive web experiences. 
                  Currently, I’m exploring machine learning and advanced web technologies to broaden my skill set and deepen my understanding of the field. Feel free to connect with me.
                </p>
                <div className="font-mono text-[10px] uppercase leading-7 tracking-[0.08em] text-[#bdb5a9]">
                  <p>Beyond work and school, I’m into learning new languages (human and code), reading psychology, 
                    and traveling whenever I can to see new places and perspectives.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="skills"
        className="px-5 pb-12 pt-24 sm:px-8 sm:pb-16 sm:pt-32 lg:px-12 lg:pb-20 lg:pt-40"
      >
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-12 border-y border-[#3d382f]/25 py-12 lg:grid-cols-[0.65fr_1.35fr] lg:items-center lg:gap-20">
            <div>
              <p className="font-mono mb-3 text-[10px] font-medium uppercase tracking-[0.12em]">
                Skills
              </p>
              <h2 className="font-display text-4xl tracking-[-0.045em] sm:text-6xl">Technologies I've worked with</h2>
            </div>
            <ul className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="font-mono rounded-full border border-[#3d382f]/20 bg-white/25 px-4 py-2 text-[11px] tracking-[-0.01em]"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <footer
        id="contact"
        className="relative overflow-hidden px-5 pb-8 pt-12 sm:px-8 sm:pt-16 lg:px-12 lg:pt-20"
      >
        <div className="pointer-events-none absolute -bottom-28 -right-36 h-[500px] w-[500px] rounded-full bg-[#e7ded1] blur-3xl" />
        <div className="relative mx-auto max-w-[1500px]">
          <p className="font-mono mb-8 text-[10px] font-medium uppercase tracking-[0.12em]">
            Contact
          </p>
          <h2 className="font-display max-w-5xl text-[clamp(3rem,6.5vw,7rem)] leading-[0.95] tracking-[-0.06em]">
            Reach out!
          </h2>
          <p className="mt-8 max-w-2xl text-[15px] leading-7 text-[#514c44] sm:text-[17px]">
            Whether you want to talk about a project, tech, or an opportunity, I&apos;m always happy
            to chat!
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-8">
            <a
              href="cleaamorales@gmail.com"
              className="group inline-flex items-center gap-3 border-b border-[#3d382f]/40 pb-2 font-mono text-[11px] font-medium uppercase tracking-[0.1em]"
            >
              Email me
              <span className="transition-transform group-hover:translate-x-1">
                <Arrow diagonal />
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/clea-ama-morales"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 border-b border-[#3d382f]/40 pb-2 font-mono text-[11px] font-medium uppercase tracking-[0.1em]"
            >
              LinkedIn
              <span className="transition-transform group-hover:translate-x-1">
                <Arrow diagonal />
              </span>
            </a>
          </div>

          <div className="font-mono mt-24 flex flex-col gap-6 border-t border-[#3d382f]/25 pt-6 text-[9px] uppercase tracking-[0.1em] sm:mt-32 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Clea Morales</p>
            <div className="ml-auto flex gap-7">
              <a className="nav-link" href="https://github.com/cleamorales" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a className="nav-link" href="https://www.linkedin.com/in/clea-ama-morales" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a className="nav-link" href="mailto:cleaamorales@gmail.com">
                Email
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
