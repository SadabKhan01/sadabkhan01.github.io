import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Reveal from "./components/Reveal.jsx";
import { GitHubIcon, LinkedInIcon, MailIcon, ArrowIcon, Starburst } from "./components/Icons.jsx";
import { profile, stats, experience, projects, skills, education } from "./data.js";

function useTypewriter(phrases) {
  const [text, setText] = useState("");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setText(phrases[0]);
      return;
    }
    let i = 0, chars = 0, deleting = false, timer;
    const tick = () => {
      const phrase = phrases[i];
      setText(phrase.slice(0, chars));
      let delay = 50;
      if (!deleting && chars < phrase.length) chars++;
      else if (!deleting) { deleting = true; delay = 2400; }
      else if (chars > 0) { chars--; delay = 26; }
      else { deleting = false; i = (i + 1) % phrases.length; delay = 400; }
      timer = setTimeout(tick, delay);
    };
    tick();
    return () => clearTimeout(timer);
  }, [phrases]);

  return text;
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="wrap nav__inner">
        <a className="nav__logo" href="#top">
          <Starburst style={{ width: 20, color: "var(--accent)" }} />
          Sadab Khan
        </a>
        <nav className={`nav__links ${open ? "open" : ""}`} onClick={() => setOpen(false)}>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
          <a className="nav__cta" href={profile.resume} target="_blank" rel="noopener noreferrer">Resume</a>
        </nav>
        <button className={`nav__burger ${open ? "open" : ""}`} aria-label="Toggle menu" onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}

function Hero() {
  const role = useTypewriter(profile.roles);
  const { scrollY } = useScroll();
  const rotate = useTransform(scrollY, [0, 900], [0, 160]);
  const drift = useTransform(scrollY, [0, 900], [0, 70]);

  return (
    <section className="hero" id="top">
      <motion.div className="hero__mark" style={{ rotate, y: drift }} aria-hidden="true">
        <Starburst style={{ width: "100%" }} />
      </motion.div>
      <div className="wrap">
        <Reveal>
          <p className="hero__eyebrow"><span className="dot" />Vancouver, BC — open to opportunities</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="hero__title">
            Building software from the <em>ocean floor</em> to <em>orbit</em>.
          </h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="hero__sub">
            I'm Sadab — a CS student at <strong>Simon Fraser University</strong> shipping
            production AI, naval mission systems, and satellite software. Currently at{" "}
            <strong>OSI Maritime Systems</strong>, leading software for{" "}
            <strong>SFU Satellite Design</strong>, and heading product at{" "}
            <strong>Fitsomnia</strong>.
          </p>
        </Reveal>
        <Reveal delay={0.22}>
          <p className="hero__role">{role}<span style={{ opacity: 0.6 }}>▍</span></p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="hero__actions">
            <a className="btn btn--ink" href="#projects">See my work</a>
            <a className="btn btn--line" href="#contact">Get in touch</a>
            <div className="hero__socials">
              <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><GitHubIcon /></a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedInIcon /></a>
              <a href={`mailto:${profile.email}`} aria-label="Email"><MailIcon /></a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="stats">
      <div className="wrap stats__grid">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08}>
            <p className="stat__value serif">{s.value}</p>
            <p className="stat__label">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function SectionHead({ kicker, title }) {
  return (
    <Reveal>
      <div className="section__head">
        <span className="section__kicker">{kicker}</span>
        <h2 className="section__title">{title}</h2>
      </div>
    </Reveal>
  );
}

function About() {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <SectionHead kicker="01" title="About" />
        <div className="about">
          <div className="about__text">
            <Reveal>
              <p>
                I like working where software meets the physical world. I've written simulation
                pipelines for <strong>autonomous submarines</strong>, I lead the software and embedded
                systems team building a <strong>satellite</strong> for the Canadian Space Agency's CIRC
                challenge, and I build <strong>naval mission systems</strong> at OSI Maritime Systems.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <p>
                On the product side, I led backend and AI development at <strong>Fitsomnia</strong>,
                scaling the platform from <strong>30K to 100K+ users</strong> — shipping an AI diet
                coach and an AI food scanner into production along the way.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <p>
                I'm also a serial hackathon-er: my team won <strong>Best UI at SillyHacks</strong> (SFU
                Surge) with a reverse-Turing-test game, and built an AI-guarded healthcare platform
                with <strong>Microsoft Garage</strong> in a single day. When I'm not shipping, I'm
                automating soccer robots for <strong>RoboCup SSL 2026</strong>.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <div className="about__photo">
              <img src="/assets/images/profile.jpeg" alt="Sadab Khan in downtown Vancouver" loading="lazy" />
              <p className="about__langs">English · Bangla · Hindi</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="section section--tint" id="experience">
      <div className="wrap">
        <SectionHead kicker="02" title="Experience" />
        <div className="xp">
          {experience.map((job, i) => (
            <Reveal key={`${job.org}-${job.role}`} delay={Math.min(i * 0.05, 0.2)} y={20}>
              <div className="xp__item">
                <p className="xp__period">{job.period}</p>
                <div>
                  <h3 className="xp__role">{job.role} <span>@ {job.org}</span></h3>
                  <p className="xp__meta">{job.meta}</p>
                  <ul className="xp__points">
                    {job.points.map((p) => <li key={p}>{p}</li>)}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="section" id="projects">
      <div className="wrap">
        <SectionHead kicker="03" title="Selected work" />
        <div className="projects">
          {projects.map((p, i) => {
            const CardTag = p.link ? "a" : "div";
            const linkProps = p.link
              ? { href: p.link, target: "_blank", rel: "noopener noreferrer" }
              : {};
            return (
              <Reveal key={p.title} delay={(i % 2) * 0.08}>
                <CardTag className="card" {...linkProps}>
                  <div className="card__top">
                    <span className="card__badge">{p.badge}</span>
                    {p.link && <span className="card__arrow"><ArrowIcon /></span>}
                  </div>
                  <h3 className="card__title">{p.title}</h3>
                  <p className="card__desc">{p.description}</p>
                  <ul className="card__tags">
                    {p.tags.map((t) => <li key={t}>{t}</li>)}
                  </ul>
                </CardTag>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section section--tint" id="skills">
      <div className="wrap">
        <SectionHead kicker="04" title="Skills & education" />
        <div className="skills">
          {skills.map((g, i) => (
            <Reveal key={g.group} delay={(i % 2) * 0.08}>
              <div className="skills__group">
                <h3>{g.group}</h3>
                <ul>{g.items.map((s) => <li key={s}>{s}</li>)}</ul>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1}>
          <div className="edu">
            <h3>{education.school}</h3>
            <p className="edu__degree">{education.degree} — {education.focus}</p>
            <p>{education.coursework}</p>
            <p><em>{education.clubs}</em></p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="wrap">
        <Reveal>
          <h2 className="contact__title">Let's build something <em>worth orbiting</em>.</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="contact__sub">
            I'm always open to interesting projects, co-op opportunities, and hackathon teams.
            Whether you have a question or just want to say hi — my inbox is open.
          </p>
        </Reveal>
        <Reveal delay={0.18}>
          <a className="btn btn--accent" href={`mailto:${profile.email}`}>Say hello <ArrowIcon /></a>
          <a className="contact__mail" href={`mailto:${profile.email}`}>{profile.email}</a>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <p>© {new Date().getFullYear()} Sadab Khan · Vancouver, BC</p>
        <div className="footer__links">
          <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/SadabKhan01/sadabkhan01.github.io" target="_blank" rel="noopener noreferrer">Source</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
