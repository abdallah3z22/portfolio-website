// Loading Screen
window.addEventListener("load", () => {
  gsap.to("#loading-screen", {
    opacity: 0,
    duration: 1,
    onComplete: () => {
      document.getElementById("loading-screen").style.display = "none";
    },
  });
});

// Custom Cursor
document.addEventListener("mousemove", (e) => {
  gsap.to("#cursor", { x: e.clientX - 10, y: e.clientY - 10, duration: 0.1 });
  gsap.to("#cursor-trail", {
    x: e.clientX - 10,
    y: e.clientY - 10,
    duration: 0.3,
  });
});

// Typing Effect
const typingText = document.getElementById("typing-text");
const text = "Hi, I am Abdallah Zaitoun";
let i = 0;

function typeWriter() {
  if (i < text.length) {
    typingText.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}

typeWriter();

// Parallax Background
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  gsap.to("#parallax-bg", { y: scrolled * 0.5, duration: 0.1 });
});

// Floating Particles
function createParticles() {
  const particlesContainer = document.getElementById("particles");
  for (let i = 0; i < 50; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";
    particle.style.left = Math.random() * 100 + "%";
    particle.style.animationDelay = Math.random() * 10 + "s";
    particlesContainer.appendChild(particle);
  }
}

createParticles();

// VanillaTilt for Profile Image
VanillaTilt.init(document.querySelector(".profile-img"), {
  max: 25,
  speed: 400,
  glare: true,
  "max-glare": 0.5,
});

// Skill Bars Animation
const skillBars = document.querySelectorAll(".skill-bar .fill");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.width = entry.target.style.width;
    }
  });
});

skillBars.forEach((bar) => observer.observe(bar));

// Project Cards Animation
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".project-card").forEach((card) => {
  gsap.from(card, {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
      trigger: card,
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    },
  });
});

// Experience Timeline Animation
gsap.utils.toArray(".timeline-item").forEach((item) => {
  gsap.from(item, {
    opacity: 0,
    x: item.classList.contains("even") ? -50 : 50,
    duration: 1,
    scrollTrigger: {
      trigger: item,
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    },
  });
});

// Magnetic Buttons
document.querySelectorAll(".btn-glow").forEach((btn) => {
  btn.addEventListener("mousemove", (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    gsap.to(btn, { x: x * 0.3, y: y * 0.3, duration: 0.3 });
  });

  btn.addEventListener("mouseleave", () => {
    gsap.to(btn, { x: 0, y: 0, duration: 0.3 });
  });
});

// Scroll to Top Button
const scrollTopBtn = document.getElementById("scroll-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    scrollTopBtn.style.display = "block";
    gsap.from(scrollTopBtn, { opacity: 0, y: 20, duration: 0.5 });
  } else {
    scrollTopBtn.style.display = "none";
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Smooth Scrolling for Navigation
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});

// Contact Form Animation
gsap.from("#contact-form", {
  opacity: 0,
  y: 50,
  duration: 1,
  scrollTrigger: {
    trigger: "#contact-form",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
  },
});

// Social Icons Animation
gsap.from(".social-icons", {
  opacity: 0,
  y: 50,
  duration: 1,
  scrollTrigger: {
    trigger: ".social-icons",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
  },
});
