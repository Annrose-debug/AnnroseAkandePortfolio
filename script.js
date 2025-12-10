
  //  SMOOTH SCROLL FOR NAV LINKS

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});


  //  REVEAL ON SCROLL

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  revealElements.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 150; 

    if (elementTop < windowHeight - revealPoint) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll(); 


  //  HERO TYPING EFFECT (NAME ONLY)

document.addEventListener("DOMContentLoaded", () => {
  const typingElement = document.querySelector(".typing");
  const nameText = "Annrose Akande";
  let index = 0;
  let isDeleting = false;
  let speed = 150; 

  function type() {
    if (!isDeleting) {
      typingElement.textContent = nameText.substring(0, index + 1);
      index++;
      if (index === nameText.length) {
        isDeleting = true;
        speed = 1000; 
      } else {
        speed = 150;
      }
    } else {
      typingElement.textContent = nameText.substring(0, index - 1);
      index--;
      if (index === 0) {
        isDeleting = false;
        speed = 600; 
      } else {
        speed = 100;
      }
    }
    setTimeout(type, speed);
  }

  type();
});

  //  SKILLS PROGRESS BAR ANIMATION WITH PERCENTAGES

const skillSpans = document.querySelectorAll(".progress-bar span");

function fillSkills() {
  skillSpans.forEach((span) => {
    const width = span.getAttribute("style"); 
    span.style.width = "0";
    setTimeout(() => {
      span.style.width = width;
      
      span.textContent = width;
      span.style.color = "#fff";
      span.style.fontSize = "12px";
      span.style.fontWeight = "600";
      span.style.textAlign = "right";
      span.style.paddingRight = "5px";
    }, 300);
  });
}

const skillsSection = document.getElementById("skill");
let skillsAnimated = false;

window.addEventListener("scroll", function () {
  const sectionTop = skillsSection.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;
  if (sectionTop < screenHeight - 100 && !skillsAnimated) {
    fillSkills();
    skillsAnimated = true;
  }

  // Animate skill bars on scroll
  const skillSpans = document.querySelectorAll(".progress-bar span");
  const skillsSection = document.querySelector(".skills");

  function animateSkills() {
    const sectionPos = skillsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight;

    if (sectionPos < screenPos - 100) {
      // 100px before fully in view
      skillSpans.forEach((span) => {
        const width = span.getAttribute("data-width");
        span.style.width = width;
      });
    }
  }

  window.addEventListener("scroll", animateSkills);
});


  //  PROJECTS NAVIGATION

document.addEventListener("DOMContentLoaded", () => {
  const carouselContainer = document.querySelector(
    "#project .carousel-container"
  );
  const slides = carouselContainer.querySelectorAll(
    ".carousel .slide, .carousel .slide-active"
  );
  let currentSlide = 0;

  // Hide all slides except current
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.display = i === index ? "block" : "none";
    });
  }
  showSlide(currentSlide);

  // Create arrows
  const leftArrow = document.createElement("button");
  leftArrow.innerHTML = "&#8592;";
  leftArrow.className = "carousel-arrow left-arrow";
  carouselContainer.appendChild(leftArrow);

  const rightArrow = document.createElement("button");
  rightArrow.innerHTML = "&#8594;";
  rightArrow.className = "carousel-arrow right-arrow";
  carouselContainer.appendChild(rightArrow);

  // Arrow click events
  leftArrow.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  });

  rightArrow.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  });
});

const carousel = document.querySelector("#project .carousel");
let autoIndex = 0;

function autoSlide() {
  const slides = carousel.querySelectorAll(".slide, .slide-active");
  autoIndex = (autoIndex + 1) % slides.length;
  slides.forEach(
    (slide, i) => (slide.style.display = i === autoIndex ? "block" : "none")
  );
}

setInterval(autoSlide, 5000); // changes slide every 5 seconds

// hamburger toggle

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
  });
});
