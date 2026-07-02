/* ============ STARFIELD ============ */
(function () {
  const canvas = document.getElementById("starfield");
  const ctx = canvas.getContext("2d");
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let stars = [];
  let w, h;

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    const count = Math.min(180, Math.floor((w * h) / 9000));
    stars = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.3 + 0.3,
      speed: Math.random() * 0.06 + 0.015,
      tw: Math.random() * Math.PI * 2,
      twSpeed: Math.random() * 0.02 + 0.005,
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    for (const s of stars) {
      s.tw += s.twSpeed;
      s.y -= s.speed;
      if (s.y < -2) { s.y = h + 2; s.x = Math.random() * w; }
      const alpha = 0.35 + Math.sin(s.tw) * 0.3;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(226, 232, 240, ${alpha})`;
      ctx.fill();
    }
    if (!reduced) requestAnimationFrame(draw);
  }

  window.addEventListener("resize", resize);
  resize();
  draw();
})();

/* ============ TYPEWRITER ============ */
(function () {
  const roles = [
    "Software Engineer @ OSI Maritime Systems",
    "Software Lead @ SFU Satellite Design",
    "Chief Product Officer @ Fitsomnia",
    "CS Student @ Simon Fraser University",
    "Hackathon Winner — Best UI @ SillyHacks",
  ];
  const el = document.getElementById("typewriter");
  if (!el) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    el.textContent = roles[0];
    return;
  }

  let roleIdx = 0, charIdx = 0, deleting = false;

  function tick() {
    const role = roles[roleIdx];
    el.textContent = role.slice(0, charIdx);

    let delay;
    if (!deleting && charIdx < role.length) {
      charIdx++;
      delay = 55;
    } else if (!deleting) {
      deleting = true;
      delay = 2200;
    } else if (charIdx > 0) {
      charIdx--;
      delay = 28;
    } else {
      deleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      delay = 450;
    }
    setTimeout(tick, delay);
  }
  tick();
})();

/* ============ SCROLL REVEAL ============ */
(function () {
  const els = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  els.forEach((el, i) => {
    el.style.transitionDelay = `${(i % 4) * 70}ms`;
    observer.observe(el);
  });
})();

/* ============ NAV: scrolled state, mobile menu, active link ============ */
(function () {
  const nav = document.getElementById("nav");
  const burger = document.getElementById("burger");
  const links = document.getElementById("navLinks");

  window.addEventListener("scroll", () => {
    nav.classList.toggle("nav--scrolled", window.scrollY > 40);
  });

  burger.addEventListener("click", () => {
    burger.classList.toggle("open");
    links.classList.toggle("open");
  });

  links.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      burger.classList.remove("open");
      links.classList.remove("open");
    })
  );

  const sections = document.querySelectorAll("section[id]");
  const navAnchors = links.querySelectorAll("a[data-section]");
  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navAnchors.forEach((a) =>
            a.classList.toggle("active", a.dataset.section === entry.target.id)
          );
        }
      });
    },
    { rootMargin: "-40% 0px -55% 0px" }
  );
  sections.forEach((s) => spy.observe(s));
})();
