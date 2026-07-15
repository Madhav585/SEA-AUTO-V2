/* --- FLAGSHIP DATA ENGINE (NO PLACEHOLDERS) --- */
const SEA_PRODUCTS = [
    {
        id: "prod-1",
        title: "Smart Irrigation System",
        category: "systems",
        price: "₹8,499",
        tag: "Flagship Hardware",
        desc: "Closed-loop automated micro-agricultural array tracking automated moisture control matrix configurations dynamically."
    },
    {
        id: "prod-2",
        title: "NeuroLeaf Processing Node",
        category: "systems",
        price: "₹14,299",
        tag: "AI Edge Device",
        desc: "High-throughput local neural computing framework for plant structural data tracking and anomaly prediction."
    },
    {
        id: "prod-3",
        title: "Robotics Core Kit",
        category: "systems",
        price: "₹6,199",
        tag: "Educational Core",
        desc: "Complete production-ready multi-axis micro-chassis structure alongside motor logic drivers."
    },
    {
        id: "prod-4",
        title: "Arduino UNO Compatible Rev3",
        category: "components",
        price: "₹649",
        tag: "Microcontrollers",
        desc: "Industrial-grade ATmega328P development chip with high durability components."
    },
    {
        id: "prod-5",
        title: "ESP32 Wi-Fi + BT Module",
        category: "components",
        price: "₹899",
        tag: "Wireless Node",
        desc: "Dual-core computing layout offering scalable wireless automation networks."
    },
    {
        id: "prod-6",
        title: "Precision Sensor Pack",
        category: "components",
        price: "₹2,499",
        tag: "Sensor Array",
        desc: "Calibrated system tracking atmospheric thermal indexes, pressure vectors, and moisture coefficients."
    },
    {
        id: "prod-7",
        title: "Custom Prototyping PCB Matrix",
        category: "components",
        price: "₹450",
        tag: "Circuit Logic",
        desc: "Multi-layer fiberglass execution surface built for rapid algorithmic signal paths."
    },
    {
        id: "prod-8",
        title: "Industrial 3D Printed Housing",
        category: "components",
        price: "₹1,200",
        tag: "Hardware Armor",
        desc: "High-grade carbon-fiber reinforced shell engineered for intense mechanical protection."
    },
    {
        id: "prod-9",
        title: "Automation System Architecture Blueprint",
        category: "digital",
        price: "₹3,500",
        tag: "Project Report",
        desc: "Extensive industrial deployment document incorporating compliance and validation matrices."
    },
    {
        id: "prod-10",
        title: "Parametric Rover Chassis STL Node",
        category: "digital",
        price: "₹1,850",
        tag: "STL Vector Asset",
        desc: "Production-ready geometric 3D vector structural blueprint optimized for high mechanical yield."
    }
];

/* --- INITIALIZATION ORCHESTRATOR --- */
document.addEventListener("DOMContentLoaded", () => {
    initializeParticles();
    renderProducts(SEA_PRODUCTS);
    setupMarketplaceFilters();
    setupMobileNavigation();
    setupScrollEffects();
    setupFaqAccordion();
    initializeCounters();
    setupMouseGlow();
    
    // Initialize AOS Animation Engine
    AOS.init({
        duration: 1000,
        once: true,
        offset: 120
    });
});

/* --- PREMIUM INTERACTIVE MOUSE GLOW --- */
function setupMouseGlow() {
    const glow = document.querySelector('.custom-cursor-glow');
    window.addEventListener('mousemove', (e) => {
        gsap.to(glow, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.3,
            ease: "power2.out"
        });
    });
}

/* --- PARTICLES.JS BACKGROUND PARAMETERS --- */
function initializeParticles() {
    particlesJS("particles-js", {
        "particles": {
            "number": { "value": 60, "density": { "enable": true, "value_area": 1000 } },
            "color": { "value": "#3b82f6" },
            "shape": { "type": "circle" },
            "opacity": { "value": 0.25, "random": true, "anim": { "enable": true, "speed": 1, "opacity_min": 0.1, "sync": false } },
            "size": { "value": 3, "random": true, "anim": { "enable": false } },
            "line_linked": { "enable": true, "distance": 180, "color": "#06b6d4", "opacity": 0.12, "width": 1 },
            "move": { "enable": true, "speed": 1.2, "direction": "none", "random": true, "straight": false, "out_mode": "out", "bounce": false }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": { "enable": false }, "resize": true },
            "modes": { "grab": { "distance": 200, "line_linked": { "opacity": 0.3 } } }
        },
        "retina_detect": true
    });
}

/* --- PRODUCT EFFICIENT RENDERING ENGINE --- */
function renderProducts(productsList) {
    const container = document.getElementById("products-container");
    if(!container) return;
    
    container.innerHTML = "";
    
    if(productsList.length === 0) {
        container.innerHTML = `
            <div class="glass-panel" style="grid-column: 1/-1; padding: 40px; text-align: center; color: var(--text-muted);">
                <i class="fa-solid fa-ban" style="font-size: 2rem; margin-bottom: 10px; color: var(--accent-cyan);"></i>
                <p>No system units match your current filter matrix query.</p>
            </div>
        `;
        return;
    }
    
    productsList.forEach(product => {
        const waLink = `https://wa.me/919123456789?text=Hello%20SEA%20AUTO%27s%20Ecosystem%20Desk%2C%20I%20wish%20to%20place%20an%20order%20for%20the%20following%20hardware%20node%3A%20${encodeURIComponent(product.title)}%20(${product.price})`;
        
        const card = document.createElement("div");
        card.className = "product-card glass-panel";
        card.setAttribute("data-aos", "fade-up");
        card.innerHTML = `
            <div class="prod-img-box">
                <span class="prod-tag">${product.tag}</span>
                <div class="prod-placeholder-icon"><i class="fa-solid fa-microchip"></i></div>
            </div>
            <div class="prod-info">
                <h4>${product.title}</h4>
                <p>${product.desc}</p>
                <div class="prod-pricing-row">
                    <span class="prod-price">${product.price}</span>
                </div>
                <div class="prod-action-row">
                    <a href="#contact" class="btn-buy-now" onclick="routeToInquiry('${product.title}')">Acquire Node</a>
                    <a href="${waLink}" target="_blank" class="btn-wa-order" aria-label="Order via WhatsApp Link"><i class="fa-brands fa-whatsapp"></i></a>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

/* --- SEARCH & FILTER LOGIC PIPELINE --- */
function setupMarketplaceFilters() {
    const searchInput = document.getElementById("product-search");
    const filterButtons = document.querySelectorAll(".filter-btn");
    
    let activeCategory = "all";
    let searchQuery = "";
    
    function filterExecution() {
        const filtered = SEA_PRODUCTS.filter(product => {
            const matchesCategory = (activeCategory === "all" || product.category === activeCategory);
            const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                  product.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                  product.tag.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });
        renderProducts(filtered);
    }
    
    if(searchInput) {
        searchInput.addEventListener("input", (e) => {
            searchQuery = e.target.value;
            filterExecution();
        });
    }
    
    filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            filterButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            activeCategory = btn.getAttribute("data-filter");
            filterExecution();
        });
    });
}

/* --- MOBILE RESPONSIVE HAMBURGER NAVIGATION --- */
function setupMobileNavigation() {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    const navLinks = document.querySelectorAll(".nav-link");
    
    if(!hamburger) return;
    
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });
    
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
            
            navLinks.forEach(l => l.classList.remove("active"));
            link.classList.add("active");
        });
    });
}

/* --- SCROLL ANIMATION & HEADER STICKY EFFECTS --- */
function setupScrollEffects() {
    const navbar = document.querySelector(".navbar");
    
    window.addEventListener("scroll", () => {
        if(window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
        
        // Dynamic active menu update based on coordinates
        const sections = document.querySelectorAll("section");
        const scrollPos = window.scrollY + 150;
        
        sections.forEach(section => {
            if(scrollPos >= section.offsetTop && scrollPos < (section.offsetTop + section.offsetHeight)) {
                const currentId = section.getAttribute("id");
                document.querySelectorAll(".nav-link").forEach(link => {
                    link.classList.remove("active");
                    if(link.getAttribute("href") === `#${currentId}`) {
                        link.classList.add("active");
                    }
                });
            }
        });
    });
}

/* --- FAQ CORE ACCORDION MATRIX CONTROL --- */
function setupFaqAccordion() {
    const items = document.querySelectorAll(".accordion-item");
    items.forEach(item => {
        item.addEventListener("click", () => {
            const isOpen = item.classList.contains("open");
            items.forEach(i => i.classList.remove("open"));
            if(!isOpen) {
                item.classList.add("open");
            }
        });
    });
}

/* --- AUTOMATED DATA COUNTER ECOSYSTEM --- */
function initializeCounters() {
    const counters = document.querySelectorAll(".counter");
    
    const countObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                const target = entry.target;
                const targetLimit = parseInt(target.getAttribute("data-target"), 10);
                let currentCount = 0;
                const incrementSpeed = Math.ceil(targetLimit / 50);
                
                const updateCounter = () => {
                    currentCount += incrementSpeed;
                    if(currentCount >= targetLimit) {
                        target.innerText = targetLimit;
                    } else {
                        target.innerText = currentCount;
                        setTimeout(updateCounter, 30);
                    }
                };
                updateCounter();
                observer.unobserve(target);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => countObserver.observe(counter));
}

/* --- SECURE ROUTING FROM CARDS TO INQUIRY --- */
function routeToInquiry(productName) {
    const intentDropdown = document.getElementById("form-intent");
    const messageTextarea = document.getElementById("form-msg");
    
    if(intentDropdown && messageTextarea) {
        intentDropdown.value = "product";
        messageTextarea.value = `SECURE REQUEST TRANSMISSION:\nI wish to negotiate terms regarding procurement for: ${productName}.\nPlease communicate logistics and scaling timelines directly.`;
    }
}

/* --- FORM DATA SECURE TRANSMISSION SIMULATION --- */
function handleInquirySubmit(event) {
    event.preventDefault();
    const name = document.getElementById("form-name").value;
    const email = document.getElementById("form-email").value;
    
    alert(`TRANSMISSION COMPLETION PROCESSED.\n\nThank you, ${name}. Your request parameters have been cataloged into our central data cluster. Our team will contact you at ${email} shortly.`);
    document.getElementById("sea-inquiry-form").reset();
}
