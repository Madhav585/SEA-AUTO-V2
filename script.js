
document.addEventListener("DOMContentLoaded", function () {

  // Mobile Navigation
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {
      const isOpen = navLinks.classList.toggle("open");

      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
      );
    });

    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation");
      });
    });

    document.addEventListener("click", function (event) {
      const clickedInsideMenu =
        navLinks.contains(event.target) ||
        menuToggle.contains(event.target);

      if (!clickedInsideMenu) {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
      }
    });
  }


  // Current Year
  const yearElement = document.getElementById("current-year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }


  // Active Navigation Link
  const sections = document.querySelectorAll("main section[id]");
  const navItems = document.querySelectorAll(".nav-links a");

  function updateActiveNavigation() {

    let currentSection = "";

    sections.forEach(function (section) {
      const sectionTop = section.offsetTop - 150;

      if (window.scrollY >= sectionTop) {
        currentSection = section.getAttribute("id");
      }
    });

    navItems.forEach(function (link) {
      link.classList.remove("active");

      if (link.getAttribute("href") === "#" + currentSection) {
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", updateActiveNavigation, {
    passive: true
  });

  updateActiveNavigation();


  // Contact Form Validation and Submission
  const contactForm = document.getElementById("sea-inquiry-form");

  if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

      if (!contactForm.checkValidity()) {
        event.preventDefault();
        contactForm.reportValidity();
        return;
      }

      const submitButton = contactForm.querySelector(
        'button[type="submit"]'
      );

      if (submitButton) {
        submitButton.disabled = true;
        submitButton.innerHTML = "Submitting...";
      }

      // Native form submission is intentionally allowed.
      // FormSubmit processes the enquiry.
    });
  }

});
