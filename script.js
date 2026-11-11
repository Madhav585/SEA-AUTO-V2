document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  // Responsive mobile navigation
  if (menuToggle && navLinks) {
    const closeMenu = () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
    };

    menuToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    });

    navLinks.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("click", event => {
      if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) {
        closeMenu();
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 820) closeMenu();
    });
  }

  // Current year in footer
  const year = document.getElementById("current-year");
  if (year) year.textContent = new Date().getFullYear();

  // Highlight current section in navigation
  const sections = document.querySelectorAll("main section[id]");
  const navItems = document.querySelectorAll('.nav-links a[href^="#"]');

  const updateActiveLink = () => {
    let current = "";
    const marker = window.scrollY + 160;
    sections.forEach(section => {
      if (marker >= section.offsetTop) current = section.id;
    });
    navItems.forEach(link => {
      link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
    });
  };

  window.addEventListener("scroll", updateActiveLink, { passive: true });
  updateActiveLink();

  // Validate form but allow FormSubmit's normal POST request.
  const form = document.getElementById("sea-inquiry-form");
  if (form) {
    form.addEventListener("submit", event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        form.reportValidity();
        return;
      }
      const button = form.querySelector('button[type="submit"]');
      if (button) {
        button.disabled = true;
        button.innerHTML = "Submitting...";
      }
      // Do not preventDefault: FormSubmit must receive the form submission.
    });
  }
});
