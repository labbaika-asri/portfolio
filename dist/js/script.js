// Favicon
const favicon = document.querySelector("#favicon");
document.addEventListener("visibilitychange", function () {
  if (document.visibilityState === "visible") {
    document.title = "Portfolio | Labbaika Asri";
    favicon.href = "dist/img/favicon/favicon.png";
  } else {
    document.title = "Come Back to Portfolio";
    favicon.href = "dist/img/favicon/favhand.png";
  }
});

// Navbar fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector("#to-top");

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("translate-y-32");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.add("translate-y-32");
  }

  let sections = document.querySelectorAll("section");
  let menuNavbar = document.querySelectorAll("nav ul li a");

  sections.forEach((section) => {
    let height = section.offsetHeight;
    let top = section.offsetTop;
    let offset = top - 200;
    let id = section.getAttribute("id");

    if (window.pageYOffset > offset && window.pageYOffset < offset + height) {
      menuNavbar.forEach((menu) => {
        let link = menu.href.split("#")[1];
        if (id == link) {
          menu.classList.add("active");
        } else {
          menu.classList.remove("active");
        }
      });
    }
  });
};

// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");
// Klik di Hamburger
hamburger.addEventListener("click", function (e) {
  e.stopPropagation();
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});
window.addEventListener("click", function (e) {
  // Klik di luar Hamburger
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

// Darkmode Toggle
const darkMode = document.querySelector("#dark-mode");
const html = document.querySelector("html");
darkMode.addEventListener("click", function () {
  if (darkMode.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});

// Pindahkan  posisi toggle sesuai mode
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  darkMode.checked = true;
} else {
  document.documentElement.classList.remove("dark");
  darkMode.checked = false;
}

// Particles JS
particlesJS({
  particles: {
    number: {
      value: 90,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#334155",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: "img/github.svg",
        width: 250,
        height: 150,
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 8,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#64748b",
      opacity: 0.4,
      width: 2,
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
});

// Typed JS
const typedJS = document.querySelector("#typed-js");
let typed = new Typed(typedJS, {
  strings: [
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "Android Developer",
  ],
  typeSpeed: 50,
  backSpeed: 20,
  smartBackspace: true, // this is a default
  loop: true,
});

// Vanila Tilt JS
VanillaTilt.init(document.querySelectorAll(".vanila-tilt"), {
  max: 15,
  speed: 100,
  glare: true,
  reverse: true,
  "max-glare": 0.2,
  scale: 1.08,
});

// Custom whatsapp message
const whatsappButton = document.querySelector("#send-whatsapp");
const nameInput = document.querySelector("#name");
const messageInput = document.querySelector("#message");
whatsappButton.addEventListener("click", function (e) {
  whatsappButton.href = `https://api.whatsapp.com/send?phone=62895618701180&text=Halo nama saya ${nameInput.value}, ${messageInput.value}`;
});
