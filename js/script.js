/* ================================================================
   SCRIPT.JS
   All JavaScript for the portfolio, written in plain (vanilla) ES6.
   No frameworks or libraries — just the browser's built-in APIs.

   Sections in this file:
   1. Sticky navbar on scroll
   2. Mobile hamburger menu
   3. Smooth scrolling for nav links
   4. Active nav link highlighting on scroll
   5. Scroll-to-top button
   6. Dark / light mode toggle (saved in Local Storage)
   7. Contact form validation
   8. Footer year (auto-updates)
================================================================ */

/* Wait for the HTML to fully load before running any JS that
   touches the DOM. This avoids "cannot read property of null" errors. */
document.addEventListener("DOMContentLoaded", () => {

  /* --------------------------------------------------------------
     1. STICKY NAVBAR
     Adds a "scrolled" class to the navbar once the user scrolls
     down a bit, so CSS can show a border/shadow (see style.css).
     -------------------------------------------------------------- */
  const navbar = document.getElementById("navbar");

  function handleNavbarScroll() {
    if (window.scrollY > 20) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }

  window.addEventListener("scroll", handleNavbarScroll);
  handleNavbarScroll(); // run once on load in case the page is refreshed mid-scroll


  /* --------------------------------------------------------------
     2. MOBILE HAMBURGER MENU
     Toggles the "open" class on both the hamburger icon (so it turns
     into an X, styled in responsive.css) and the nav links list.
     -------------------------------------------------------------- */
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    navLinks.classList.toggle("open");
  });

  // Close the mobile menu automatically when a link is tapped
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("open");
      navLinks.classList.remove("open");
    });
  });


  /* --------------------------------------------------------------
     3. SMOOTH SCROLLING
     Modern browsers already support smooth scrolling via the CSS
     rule `scroll-behavior: smooth` (see style.css). This extra JS
     is a small fallback/enhancement for older browsers and also
     accounts for the fixed navbar height so sections aren't hidden
     underneath it.
     -------------------------------------------------------------- */
  const NAVBAR_HEIGHT = 72; // must match the navbar height in style.css

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      const targetEl = document.querySelector(targetId);
      if (!targetEl) return;

      e.preventDefault();
      const targetPosition =
        targetEl.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    });
  });


  /* --------------------------------------------------------------
     4. ACTIVE NAV LINK ON SCROLL
     Highlights the nav link that matches the section currently in
     view, using the IntersectionObserver browser API.
     -------------------------------------------------------------- */
  const sections = document.querySelectorAll("section[id]");
  const navLinkEls = document.querySelectorAll(".nav-link");

  const observerOptions = {
    root: null,
    // Trigger when a section is roughly in the middle of the screen
    rootMargin: "-40% 0px -55% 0px",
    threshold: 0,
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");

        navLinkEls.forEach((link) => {
          link.classList.remove("active-link");
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active-link");
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach((section) => sectionObserver.observe(section));


  /* --------------------------------------------------------------
     5. SCROLL TO TOP BUTTON
     Button fades in after the user scrolls down past one screen
     height, and scrolls smoothly back to the top when clicked.
     -------------------------------------------------------------- */
  const scrollTopBtn = document.getElementById("scrollTopBtn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > window.innerHeight) {
      scrollTopBtn.classList.add("visible");
    } else {
      scrollTopBtn.classList.remove("visible");
    }
  });

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });


  /* --------------------------------------------------------------
     6. DARK / LIGHT MODE TOGGLE
     The chosen theme is saved in Local Storage under the key
     "theme" so it persists the next time the visitor opens the site.
     -------------------------------------------------------------- */
  const themeToggle = document.getElementById("themeToggle");
  const themeIcon = themeToggle.querySelector("i");
  const THEME_KEY = "theme"; // Local Storage key name

  function applyTheme(theme) {
    if (theme === "dark") {
      document.body.classList.add("dark-mode");
      themeIcon.classList.remove("fa-moon");
      themeIcon.classList.add("fa-sun");
    } else {
      document.body.classList.remove("dark-mode");
      themeIcon.classList.remove("fa-sun");
      themeIcon.classList.add("fa-moon");
    }
  }

  // On page load, check if the user already picked a theme before.
  // Otherwise, fall back to their operating system preference.
  const savedTheme = localStorage.getItem(THEME_KEY);
  const systemPrefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  applyTheme(savedTheme || (systemPrefersDark ? "dark" : "light"));

  themeToggle.addEventListener("click", () => {
    const isDark = document.body.classList.contains("dark-mode");
    const newTheme = isDark ? "light" : "dark";
    applyTheme(newTheme);
    localStorage.setItem(THEME_KEY, newTheme);
  });


  /* --------------------------------------------------------------
     7. CONTACT FORM VALIDATION
     Simple client-side validation — no backend is connected here.
     See README.md for how to hook this up to a real email service
     (like Formspree or EmailJS) so messages actually get delivered.
     -------------------------------------------------------------- */
  const contactForm = document.getElementById("contactForm");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");
  const formSuccess = document.getElementById("formSuccess");

  // Basic email pattern check (good enough for front-end validation)
  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function setFieldError(inputEl, errorEl, message) {
    inputEl.classList.add("input-error");
    errorEl.textContent = message;
  }

  function clearFieldError(inputEl, errorEl) {
    inputEl.classList.remove("input-error");
    errorEl.textContent = "";
  }

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault(); // stop the page from reloading

    let isValid = true;

    // Validate name
    if (nameInput.value.trim().length < 2) {
      setFieldError(nameInput, nameError, "Please enter your name.");
      isValid = false;
    } else {
      clearFieldError(nameInput, nameError);
    }

    // Validate email
    if (!EMAIL_REGEX.test(emailInput.value.trim())) {
      setFieldError(emailInput, emailError, "Please enter a valid email address.");
      isValid = false;
    } else {
      clearFieldError(emailInput, emailError);
    }

    // Validate message
    if (messageInput.value.trim().length < 10) {
      setFieldError(
        messageInput,
        messageError,
        "Message should be at least 10 characters."
      );
      isValid = false;
    } else {
      clearFieldError(messageInput, messageError);
    }

    if (!isValid) {
      formSuccess.classList.remove("visible");
      return;
    }

    // If everything is valid: show a success message and reset the form.
    // NOTE: This does NOT send a real email yet — see README.md.
    formSuccess.classList.add("visible");
    contactForm.reset();

    // Hide the success message again after a few seconds
    setTimeout(() => {
      formSuccess.classList.remove("visible");
    }, 5000);
  });


  /* --------------------------------------------------------------
     8. FOOTER YEAR
     Automatically fills in the current year so you never have to
     manually update the copyright notice.
     -------------------------------------------------------------- */
  document.getElementById("currentYear").textContent = new Date().getFullYear();

});
