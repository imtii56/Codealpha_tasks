// Card hidden information
function cardnumber(num) {
  let text = document.getElementById("text" + num);
  let button = document.getElementById("btn" + num);
  if (!text || !button) return;
  if (text.style.display === "none" || text.style.display === "") {
    text.style.display = "block";
    button.innerHTML = 'Read less <i class="fa-solid fa-chevron-up"></i>';
  } else {
    text.style.display = "none";
    button.innerHTML = 'Read more <i class="fa-solid fa-chevron-down"></i>';
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // Dynamically set scroll offset equal to header height
  function setHeaderOffset() {
    const header = document.querySelector("header.navbar");
    if (header) {
      document.documentElement.style.setProperty(
        "--header-height",
        header.offsetHeight + "px"
      );
    }
  }
  setHeaderOffset();
  window.addEventListener("resize", setHeaderOffset);
  // Typed.js initialization
  if (typeof Typed !== "undefined" && document.querySelector(".text")) {
    var typed = new Typed(".text", {
      strings: ["Frontend Developer", "Web Designer", "Digital Creator"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true
    });
  }
  // Hamburger menu
  document.addEventListener("click", (e) => {
    const toggleBtn = e.target.closest("#menuToggle");
    if (toggleBtn) {
      const nav = document.querySelector(".navbar nav");
      if (nav) nav.classList.toggle("open");
      return;
    }
    const navLink = e.target.closest(".navbar nav a");
    if (navLink) {
      const nav = document.querySelector(".navbar nav");
      if (nav) nav.classList.remove("open");
    }
  });
  // Digital clock
  let hrs = document.getElementById("hrs");
  let min = document.getElementById("min");
  let sec = document.getElementById("sec");

  function updateclock() {
    if (!hrs || !min || !sec) return;
    let now = new Date();
    hrs.textContent = String(now.getHours()).padStart(2, "0");
    min.textContent = String(now.getMinutes()).padStart(2, "0");
    sec.textContent = String(now.getSeconds()).padStart(2, "0");
  }
  updateclock();
  setInterval(updateclock, 1000);

  // Message submission
  const form = document.getElementById("contact-form");
  const submitBtn = document.getElementById("submit");

  if (form && submitBtn) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const nameInput = document.getElementById("name");
      const emailInput = document.getElementById("email");
      const messageInput = document.getElementById("message");
      const n = nameInput ? nameInput.value.trim() : "";
      const e = emailInput ? emailInput.value.trim() : "";
      const msg = messageInput ? messageInput.value.trim() : "";
      const nError = document.getElementById("namerror");
      const emailError = document.getElementById("emailerror");
      const messageError = document.getElementById("msgerror");
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      // Reset error messages
      if (nError) nError.innerText = "";
      if (emailError) emailError.innerText = "";
      if (messageError) messageError.innerText = "";

      // Validation Logic
      if (n === "") {
        if (nError) nError.innerText = "Please enter your name.";
        return;
      }
      if (e === "") {
        if (emailError) emailError.innerText = "Please enter your email.";
        return;
      }

      if (!emailRegex.test(e)) {
        if (emailError) emailError.innerText = "Please enter a valid email address.";
        return;
      }

      if (msg === "") {
        if (messageError) messageError.innerText = "Please enter your message before submitting.";
        return;
      }

      // Validation passed
      submitBtn.innerText = "Sending...";
      submitBtn.disabled = true;

      const formData = new FormData(form);

      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData,
        });

        const result = await response.json();

        if (result.success) {
          submitBtn.innerText = "Thank you!";
          submitBtn.style.backgroundColor = "#27ae60";

          form.reset();

          setTimeout(() => {
            submitBtn.innerText = "Submit";
            submitBtn.style.backgroundColor = "";
            submitBtn.disabled = false;
          }, 3000);
        } else {
          if (messageError) messageError.innerText = "Submission failed: " + result.message;
          submitBtn.innerText = "Submit";
          submitBtn.disabled = false;
        }
      } catch (error) {
        if (messageError) messageError.innerText = "Network error. Please try again.";
        submitBtn.innerText = "Submit";
        submitBtn.disabled = false;
      }
    });
  }
  // Reveal Animation
  const revealElements = document.querySelectorAll(".reveal");

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15
    }
  );

  revealElements.forEach((element) => {
    revealObserver.observe(element);
  })
  // Active navbar link based on current section
  const navLinks = document.querySelectorAll(".navbar nav a");
  const sections = document.querySelectorAll("section, footer");

  function updateActiveNav() {
    const scrollPosition = window.scrollY + 150;

    let currentSection = "home";

    sections.forEach((section) => {
      if (scrollPosition >= section.offsetTop) {
        currentSection = section.id;
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");

      if (link.getAttribute("href") === "#" + currentSection) {
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", updateActiveNav);
  updateActiveNav();

  // Scroll to contact section
  const talkBtn = document.getElementById("talk");
  if (talkBtn) {
    talkBtn.addEventListener("click", (event) => {
      event.preventDefault();
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({
          behavior: "smooth",
          block: "center"
        });
      }
    });
  }

  // Custom cursor movement

  const cursor = document.querySelector(".basic-cursor");

  if (cursor) {
    let mouseX = 0;
    let mouseY = 0;
    let isTicking = false;

    window.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (window.innerWidth > 768 && !isTicking) {
        requestAnimationFrame(() => {
          cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
          isTicking = false;
        });
        isTicking = true;
      }
    });
  }
});
