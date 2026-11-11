
/* =========================================
   SEA AUTO - Main JavaScript
   Vision Towards Automation
========================================= */

"use strict";

/* Website Configuration */
const SEA_CONFIG = {
  email: "contact.seaauto23@gmail.com",
  phone: "+918298355455",
  whatsapp: "https://wa.me/918298355455",
  location: "Begusarai, Bihar, India"
};

/* =========================================
   MOBILE NAVIGATION
========================================= */

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

if (hamburger && navMenu) {
  hamburger.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");

    hamburger.setAttribute("aria-expanded", String(isOpen));
    hamburger.classList.toggle("active", isOpen);
  });

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
      hamburger.classList.remove("active");
      hamburger.setAttribute("aria-expanded", "false");
    });
  });

  document.addEventListener("click", event => {
    const clickedInsideMenu = navMenu.contains(event.target);
    const clickedHamburger = hamburger.contains(event.target);

    if (!clickedInsideMenu && !clickedHamburger) {
      navMenu.classList.remove("open");
      hamburger.classList.remove("active");
      hamburger.setAttribute("aria-expanded", "false");
    }
  });
}

/* =========================================
   SOLUTIONS FILTER
========================================= */

const filterButtons = document.querySelectorAll(".filter-btn");
const productCards = document.querySelectorAll(".product-card");
const productsContainer = document.getElementById("products-container");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const selectedFilter = button.dataset.filter;

    filterButtons.forEach(item => {
      item.classList.remove("active");
    });

    button.classList.add("active");

    let visibleCount = 0;

    productCards.forEach(card => {
      const category = card.dataset.category;
      const shouldShow =
        selectedFilter === "all" || category === selectedFilter;

      card.hidden = !shouldShow;

      if (shouldShow) {
        visibleCount++;
      }
    });

    const existingMessage = document.querySelector(".filter-empty");

    if (existingMessage) {
      existingMessage.remove();
    }

    if (visibleCount === 0 && productsContainer) {
      const message = document.createElement("p");
      message.className = "filter-empty";
      message.textContent = "No solutions found in this category.";
      productsContainer.appendChild(message);
    }
  });
});

/* =========================================
   CURRENT YEAR
========================================= */

const yearElement = document.getElementById("current-year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

/* =========================================
   BACKGROUND PARTICLES
========================================= */

const particleContainer = document.getElementById("particles");

if (
  particleContainer &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches
) {
  const particleCount = window.innerWidth < 600 ? 12 : 25;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("span");

    particle.className = "particle";
    particle.style.left = Math.random() * 100 + "%";
    particle.style.animationDuration =
      (12 + Math.random() * 20) + "s";
    particle.style.animationDelay =
      (-Math.random() * 25) + "s";
    particle.style.opacity =
      (0.15 + Math.random() * 0.35).toFixed(2);

    particleContainer.appendChild(particle);
  }
}

/* =========================================
   ACTIVE NAVIGATION ON SCROLL
========================================= */

const sections = document.querySelectorAll("main section[id]");

if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const activeId = entry.target.id;

          navLinks.forEach(link => {
            const isActive =
              link.getAttribute("href") === "#" + activeId;

            link.classList.toggle("active", isActive);
          });
        }
      });
    },
    {
      rootMargin: "-30% 0px -60% 0px"
    }
  );

  sections.forEach(section => {
    sectionObserver.observe(section);
  });
}

/* =========================================
   CONTACT DETAILS CONFIGURATION
========================================= */

document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
  link.href = "mailto:" + SEA_CONFIG.email;
});

document.querySelectorAll('a[href^="tel:"]').forEach(link => {
  link.href = "tel:" + SEA_CONFIG.phone;
});

document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
  link.href = SEA_CONFIG.whatsapp;
});

/* =========================================
   CONTACT FORM

   IMPORTANT:
   Do not add a custom submit handler here.
   FormSubmit handles the form submission
   through the HTML form action and method.
========================================= */

const contactForm = document.getElementById("sea-inquiry-form");

if (contactForm) {
  contactForm.addEventListener("submit", event => {
    const submitButton = contactForm.querySelector(
      'button[type="submit"]'
    );

    if (!contactForm.checkValidity()) {
      event.preventDefault();
      contactForm.reportValidity();
      return;
    }

    if (submitButton) {
      submitButton.textContent = "Submitting...";
      submitButton.disabled = true;
    }

    // Do not call preventDefault().
    // The browser submits the form to FormSubmit.
  });
}

/* =========================================
   FAQ - Native details elements are used.
   No extra JavaScript is required.
========================================= */

/* =========================================
   CONSOLE MESSAGE
========================================= */

console.info(
  "%cSEA AUTO",
  "color:#20d6d2;font-size:24px;font-weight:bold;"
);

console.info(
  "Vision Towards Automation | Begusarai, Bihar"
);
