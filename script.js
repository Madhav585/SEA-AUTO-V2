
/* ==========================================
   SEA AUTO - MAIN JAVASCRIPT
   Vision Towards Automation
   ========================================== */

const SEA_CONFIG = {
    email: "contact.seaauto23@gmail.com",
    phone: "918298355455",
    whatsapp: "https://wa.me/918298355455"
};

/* PRODUCT & SERVICE CATALOG */
const SEA_PRODUCTS = [
    {
        id: "product-1",
        title: "AutoFarm - Smart Irrigation System",
        category: "systems",
        tag: "AgriTech",
        desc: "Smart irrigation solution using soil moisture sensing and automated water control."
    },
    {
        id: "product-2",
        title: "NeuroLeaf - Plant Interaction Device",
        category: "systems",
        tag: "Research Project",
        desc: "An experimental electronics project exploring plant-related sensor data and interactive feedback."
    },
    {
        id: "product-3",
        title: "Robotics & STEM Projects",
        category: "systems",
        tag: "STEM Education",
        desc: "Hands-on robotics, electronics and automation projects for students and learning institutions."
    },
    {
        id: "product-4",
        title: "IoT & Automation Solutions",
        category: "systems",
        tag: "IoT",
        desc: "Custom electronics and connected-device prototypes for practical automation requirements."
    },
    {
        id: "product-5",
        title: "Electronics Components",
        category: "components",
        tag: "Electronics",
        desc: "Enquire about microcontrollers, sensors, modules and other electronics components."
    },
    {
        id: "product-6",
        title: "3D Printing & Prototyping",
        category: "digital",
        tag: "3D Design",
        desc: "Discuss 3D design, printed enclosures and prototype development requirements."
    },
    {
        id: "product-7",
        title: "Student Project Development",
        category: "systems",
        tag: "Project Support",
        desc: "Practical guidance and development support for electronics, IoT and robotics projects."
    },
    {
        id: "product-8",
        title: "Custom Electronics Solutions",
        category: "components",
        tag: "Custom Development",
        desc: "Discuss your electronics design, circuit development and hardware requirements."
    }
];

/* INITIALIZATION */
document.addEventListener("DOMContentLoaded", () => {
    initializeParticles();
    renderProducts(SEA_PRODUCTS);
    setupMarketplaceFilters();
    setupMobileNavigation();
    setupScrollEffects();
    setupFaqAccordion();
    initializeCounters();
    setupMouseGlow();
    setupInquiryForm();
    setupCurrentYear();

    if (typeof AOS !== "undefined") {
        AOS.init({
            duration: 900,
            once: true,
            offset: 100
        });
    }
});

/* PARTICLE BACKGROUND */
function initializeParticles() {
    if (typeof particlesJS === "undefined") return;

    const particleElement = document.getElementById("particles-js");
    if (!particleElement) return;

    particlesJS("particles-js", {
        particles: {
            number: {
                value: 45,
                density: {
                    enable: true,
                    value_area: 1000
                }
            },
            color: {
                value: "#3b82f6"
            },
            shape: {
                type: "circle"
            },
            opacity: {
                value: 0.25,
                random: true
            },
            size: {
                value: 3,
                random: true
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#06b6d4",
                opacity: 0.15,
                width: 1
            },
            move: {
                enable: true,
                speed: 1.2,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out"
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: true,
                    mode: "grab"
                },
                onclick: {
                    enable: false
                },
                resize: true
            }
        },
        retina_detect: true
    });
}

/* MOUSE GLOW EFFECT */
function setupMouseGlow() {
    const glow = document.querySelector(".custom-cursor-glow");

    if (!glow || window.matchMedia("(max-width: 768px)").matches) {
        return;
    }

    window.addEventListener("mousemove", (event) => {
        if (typeof gsap !== "undefined") {
            gsap.to(glow, {
                x: event.clientX,
                y: event.clientY,
                duration: 0.3,
                ease: "power2.out"
            });
        } else {
            glow.style.left = event.clientX + "px";
            glow.style.top = event.clientY + "px";
        }
    });
}

/* PRODUCT DISPLAY */
function renderProducts(productsList) {
    const container = document.getElementById("products-container");

    if (!container) return;

    container.innerHTML = "";

    if (!productsList.length) {
        container.innerHTML = `
            <div class="glass-panel"
                 style="grid-column:1/-1;padding:35px;text-align:center;">
                <p>No matching products or services found.</p>
            </div>
        `;
        return;
    }

    productsList.forEach((product) => {
        const message = `Hello SEA AUTO, I would like to enquire about ${product.title}. Please share the details.`;

        const whatsappLink =
            `${SEA_CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;

        const card = document.createElement("div");

        card.className = "product-card glass-panel";
        card.setAttribute("data-aos", "fade-up");

        card.innerHTML = `
            <div class="prod-img-box">
                <span class="prod-tag">${product.tag}</span>
                <div class="prod-placeholder-icon">
                    <i class="fa-solid fa-microchip"></i>
                </div>
            </div>

            <div class="prod-info">
                <h4>${product.title}</h4>

                <p>${product.desc}</p>

                <div class="prod-pricing-row">
                    <span class="prod-price">Contact for Details</span>
                </div>

                <div class="prod-action-row">
                    <a href="#inquiry"
                       class="btn-buy-now"
                       onclick="routeToInquiry('${product.id}')">
                       Enquire Now
                    </a>

                    <a href="${whatsappLink}"
                       target="_blank"
                       rel="noopener noreferrer"
                       class="btn-wa-order"
                       aria-label="Enquire on WhatsApp">
                       <i class="fa-brands fa-whatsapp"></i>
                    </a>
                </div>
            </div>
        `;

        container.appendChild(card);
    });
}

/* SEARCH AND FILTER */
function setupMarketplaceFilters() {
    const searchInput = document.getElementById("product-search");
    const filterButtons = document.querySelectorAll(".filter-btn");

    let activeCategory = "all";
    let searchQuery = "";

    function filterProducts() {
        const filteredProducts = SEA_PRODUCTS.filter((product) => {
            const matchesCategory =
                activeCategory === "all" ||
                product.category === activeCategory;

            const searchableText =
                `${product.title} ${product.desc} ${product.tag}`.toLowerCase();

            const matchesSearch =
                searchableText.includes(searchQuery.toLowerCase());

            return matchesCategory && matchesSearch;
        });

        renderProducts(filteredProducts);
    }

    if (searchInput) {
        searchInput.addEventListener("input", (event) => {
            searchQuery = event.target.value.trim();
            filterProducts();
        });
    }

    filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            filterButtons.forEach((item) => {
                item.classList.remove("active");
            });

            button.classList.add("active");

            activeCategory = button.getAttribute("data-filter");
            filterProducts();
        });
    });
}

/* MOBILE NAVIGATION */
function setupMobileNavigation() {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    const navLinks = document.querySelectorAll(".nav-link");

    if (!hamburger || !navMenu) return;

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");

            navLinks.forEach((item) => {
                item.classList.remove("active");
            });

            link.classList.add("active");
        });
    });
}

/* SCROLL EFFECTS */
function setupScrollEffects() {
    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {
        if (navbar) {
            navbar.classList.toggle("scrolled", window.scrollY > 50);
        }

        const sections = document.querySelectorAll("section");
        const scrollPosition = window.scrollY + 150;

        sections.forEach((section) => {
            if (
                scrollPosition >= section.offsetTop &&
                scrollPosition < section.offsetTop + section.offsetHeight
            ) {
                const currentId = section.getAttribute("id");

                document.querySelectorAll(".nav-link").forEach((link) => {
                    link.classList.toggle(
                        "active",
                        link.getAttribute("href") === `#${currentId}`
                    );
                });
            }
        });
    });
}

/* FAQ ACCORDION */
function setupFaqAccordion() {
    const accordionItems = document.querySelectorAll(".accordion-item");

    accordionItems.forEach((item) => {
        const title = item.querySelector(".accordion-title");

        if (!title) return;

        title.addEventListener("click", () => {
            const wasOpen = item.classList.contains("open");

            accordionItems.forEach((otherItem) => {
                otherItem.classList.remove("open");
            });

            if (!wasOpen) {
                item.classList.add("open");
            }
        });
    });
}

/* ANIMATED COUNTERS */
function initializeCounters() {
    const counters = document.querySelectorAll(".counter");

    if (!counters.length || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            const counter = entry.target;
            const target = Number(counter.getAttribute("data-target")) || 0;

            // Only animate counters with a valid, confirmed target.
            let current = 0;
            const step = Math.max(1, Math.ceil(target / 50));

            function updateCounter() {
                current = Math.min(current + step, target);
                counter.textContent = current;

                if (current < target) {
                    setTimeout(updateCounter, 30);
                }
            }

            updateCounter();
            observer.unobserve(counter);
        });
    }, {
        threshold: 0.5
    });

    counters.forEach((counter) => observer.observe(counter));
}

/* PRODUCT TO INQUIRY FORM */
function routeToInquiry(productId) {
    const product = SEA_PRODUCTS.find((item) => item.id === productId);

    const intentDropdown = document.getElementById("form-intent");
    const messageTextarea = document.getElementById("form-msg");

    if (intentDropdown) {
        intentDropdown.value = "product";
    }

    if (messageTextarea && product) {
        messageTextarea.value =
            `Hello SEA AUTO,\n\nI am interested in: ${product.title}.\nPlease share more details.`;
    }
}

/* INQUIRY FORM - EMAIL DRAFT */
function setupInquiryForm() {
    const form = document.getElementById("sea-inquiry-form");

    if (!form) return;

    form.addEventListener("submit", handleInquirySubmit);
}

function handleInquirySubmit(event) {
    event.preventDefault();

    const name = document.getElementById("form-name")?.value.trim();
    const email = document.getElementById("form-email")?.value.trim();
    const intent = document.getElementById("form-intent")?.value;
    const message = document.getElementById("form-msg")?.value.trim();

    if (!name || !email || !intent || !message) {
        alert("Please complete all required fields.");
        return;
    }

    const subject = `SEA AUTO Website Inquiry - ${intent}`;

    const body = `
Name: ${name}
Email: ${email}
Inquiry Type: ${intent}

Message:
${message}

Sent through SEA AUTO website.
    `.trim();

    const mailtoLink =
        `mailto:${SEA_CONFIG.email}` +
        `?subject=${encodeURIComponent(subject)}` +
        `&body=${encodeURIComponent(body)}`;

    alert(
        "Your email application will open with your inquiry details. Please send the email to complete your enquiry."
    );

    window.location.href = mailtoLink;
}

/* FOOTER YEAR */
function setupCurrentYear() {
    const yearElement = document.getElementById("current-year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}
