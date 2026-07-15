/* --- PREMIUM ARCHITECTURAL DESIGN SYSTEM & VARIABLES --- */
:root {
    --bg-space-dark: #030712;
    --bg-nebula-blue: #0b1528;
    --accent-electric: #2563eb;
    --accent-cyan: #06b6d4;
    --accent-neon-blue: #3b82f6;
    --accent-glow: rgba(59, 130, 246, 0.35);
    
    --glass-fill: rgba(15, 23, 42, 0.45);
    --glass-border: rgba(255, 255, 255, 0.08);
    --glass-highlight: rgba(255, 255, 255, 0.03);
    
    --text-primary: #f8fafc;
    --text-muted: #94a3b8;
    --text-dark: #64748b;
    
    --font-heading: 'Space Grotesk', sans-serif;
    --font-body: 'Plus Jakarta Sans', sans-serif;
    
    --transition-smooth: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
    --transition-bounce: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
}

/* --- BASE STYLING & RESET --- */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
}

body {
    background-color: var(--bg-space-dark);
    color: var(--text-primary);
    font-family: var(--font-body);
    overflow-x: hidden;
    line-height: 1.65;
}

/* --- ULTRA-PREMIUM PRELOADER MECHANIC --- */
#site-preloader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: var(--bg-space-dark);
    z-index: 99999;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: opacity 0.6s ease, transform 0.6s ease;
}

.preloader-matrix {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
}

.matrix-spinner {
    width: 60px;
    height: 60px;
    border: 3px solid rgba(59, 130, 246, 0.1);
    border-top: 3px solid var(--accent-cyan);
    border-bottom: 3px solid var(--accent-electric);
    border-radius: 50%;
    animation: spinMatrix 1s cubic-bezier(0.55, 0.055, 0.675, 0.19) infinite;
}

@keyframes spinMatrix {
    100% { transform: rotate(360deg); }
}

.matrix-loading-text {
    font-family: var(--font-heading);
    font-size: 0.8rem;
    font-weight: 700;
    color: var(--text-muted);
    letter-spacing: 3px;
}

/* --- FRAMEWORK INFRASTRUCTURE CONFIGURATIONS --- */
#particles-js {
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 1;
    top: 0;
    left: 0;
    pointer-events: none;
}

section {
    position: relative;
    padding: 120px 24px;
    z-index: 2;
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
}

.glass-panel {
    background: var(--glass-fill);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid var(--glass-border);
    border-top: 1px solid rgba(255, 255, 255, 0.14);
    border-radius: 20px;
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4);
    transition: var(--transition-smooth);
}

.text-gradient {
    background: linear-gradient(135deg, var(--text-primary) 20%, var(--accent-neon-blue), var(--accent-cyan));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.section-container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
}

.section-header {
    text-align: center;
    margin-bottom: 70px;
}

.section-tag {
    font-family: var(--font-heading);
    color: var(--accent-cyan);
    font-size: 0.85rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 4px;
    display: block;
    margin-bottom: 12px;
}

.section-header h2 {
    font-family: var(--font-heading);
    font-size: 2.75rem;
    font-weight: 700;
    letter-spacing: -0.5px;
}

.header-line {
    width: 70px;
    height: 4px;
    background: linear-gradient(90deg, var(--accent-electric), var(--accent-cyan));
    margin: 22px auto 0;
    border-radius: 4px;
}

blockquote {
    border-left: 4px solid var(--accent-cyan);
    padding: 18px 28px;
    margin: 35px 0 0;
    background: rgba(6, 182, 212, 0.04);
    border-radius: 0 16px 16px 0;
    font-style: italic;
    color: var(--text-muted);
}

.custom-cursor-glow {
    position: fixed;
    width: 450px;
    height: 450px;
    background: radial-gradient(circle, var(--accent-glow) 0%, rgba(0,0,0,0) 70%);
    top: 0;
    left: 0;
    transform: translate(-50%, -50%);
    pointer-events: none;
    z-index: 0;
    mix-blend-mode: screen;
    opacity: 0.5;
}

/* --- NAVIGATION ENVIRONMENT --- */
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    background: rgba(3, 7, 18, 0.4);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    border-bottom: 1px solid var(--glass-border);
    padding: 24px 0;
    transition: var(--transition-smooth);
}

.navbar.scrolled {
    padding: 14px 0;
    background: rgba(3, 7, 18, 0.85);
}

.nav-container {
    max-width: 1250px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 24px;
}

.nav-logo {
    display: flex;
    align-items: center;
    gap: 14px;
    text-decoration: none;
}

.logo-img {
    height: 42px;
    width: auto;
    object-fit: contain;
}

.logo-text {
    font-family: var(--font-heading);
    font-size: 1.6rem;
    font-weight: 700;
    color: var(--text-primary);
    letter-spacing: 0.5px;
}

.nav-logo .accent { color: var(--accent-cyan); }
.nav-menu { display: flex; align-items: center; list-style: none; gap: 28px; }

.nav-link {
    color: var(--text-muted);
    text-decoration: none;
    font-size: 0.95rem;
    font-weight: 500;
    transition: var(--transition-smooth);
    position: relative;
}

.nav-link:hover, .nav-link.active { color: var(--text-primary); }

.nav-link::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -6px;
    left: 0;
    background-color: var(--accent-cyan);
    transition: var(--transition-smooth);
}

.nav-link:hover::after, .nav-link.active::after { width: 100%; }

.btn-primary-nav {
    background: linear-gradient(135deg, var(--accent-electric), #1e40af);
    color: var(--text-primary);
    padding: 12px 26px;
    border-radius: 10px;
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: 600;
    box-shadow: 0 4px 14px rgba(37, 99, 235, 0.3);
    transition: var(--transition-smooth);
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.btn-primary-nav:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px var(--accent-glow);
}

/* --- 1. HERO MATRICES --- */
.hero-section {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-top: 140px;
}

.badge-msme {
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.08);
    padding: 8px 18px;
    border-radius: 100px;
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    color: var(--text-muted);
    margin-bottom: 35px;
}

.badge-msme i { color: var(--accent-cyan); }

.hero-content h1 {
    font-family: var(--font-heading);
    font-size: 5rem;
    font-weight: 800;
    line-height: 1.1;
    letter-spacing: -2.5px;
    margin-bottom: 25px;
}

.hero-subtitle {
    font-size: 1.3rem;
    color: var(--text-muted);
    max-width: 720px;
    margin: 0 auto 45px;
}

.hero-cta-group { display: flex; gap: 24px; justify-content: center; }

.btn-primary {
    background: linear-gradient(135deg, var(--accent-electric), #1e40af);
    color: var(--text-primary);
    padding: 16px 36px;
    border-radius: 12px;
    text-decoration: none;
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    gap: 12px;
    box-shadow: 0 10px 25px rgba(37, 99, 235, 0.35);
    transition: var(--transition-smooth);
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.btn-primary:hover {
    transform: translateY(-4px);
    box-shadow: 0 15px 35px rgba(37, 99, 235, 0.5);
}

.btn-secondary {
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid var(--glass-border);
    color: var(--text-primary);
    padding: 16px 36px;
    border-radius: 12px;
    text-decoration: none;
    font-weight: 600;
    backdrop-filter: blur(10px);
    transition: var(--transition-smooth);
}

.btn-secondary:hover {
    background: rgba(255, 255, 255, 0.07);
    transform: translateY(-4px);
}

.scroll-indicator { position: absolute; bottom: 45px; left: 50%; transform: translateX(-50%); }
.mouse { width: 28px; height: 46px; border: 2px solid var(--text-dark); border-radius: 20px; display: flex; justify-content: center; padding-top: 10px; }
.wheel { width: 4px; height: 8px; background-color: var(--accent-cyan); border-radius: 2px; animation: scrollMouse 1.6s infinite; }

@keyframes scrollMouse {
    0% { opacity: 1; transform: translateY(0); }
    100% { opacity: 0; transform: translateY(14px); }
}

/* --- 2. ABOUT STRUCUTURAL PILLARS --- */
.about-grid-primary {
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: 35px;
    margin-bottom: 35px;
}

.about-main-card, .about-categories-card { padding: 45px; }
.about-main-card h3, .about-categories-card h3 { font-family: var(--font-heading); font-size: 1.75rem; margin-bottom: 20px; }

.category-tags-container { display: flex; flex-wrap: wrap; gap: 12px; }

.core-tag {
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid var(--glass-border);
    padding: 8px 16px;
    border-radius: 100px;
    font-size: 0.85rem;
    font-weight: 500;
    color: var(--text-muted);
    transition: var(--transition-smooth);
}

.core-tag:hover {
    border-color: var(--accent-cyan);
    color: var(--text-primary);
    background: rgba(6, 182, 212, 0.05);
}

.stats-counter-row {
    display: flex;
    justify-content: space-around;
    padding: 40px;
    text-align: center;
}

.stat-node { font-family: var(--font-heading); }
.stat-node .counter { font-size: 2.5rem; font-weight: 700; }
.stat-node .stat-plus { font-size: 1.8rem; font-weight: 700; color: var(--accent-cyan); }
.stat-node p { color: var(--text-muted); font-size: 0.95rem; margin-top: 2px; }

/* --- 3. PRODUCTS GRID --- */
.static-products-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
}

.static-prod-card {
    padding: 45px 35px;
    display: flex;
    flex-direction: column;
}

.static-prod-card:hover {
    transform: translateY(-8px);
    border-color: rgba(6, 182, 212, 0.3);
    box-shadow: 0 25px 50px rgba(6, 182, 212, 0.08);
}

.prod-icon-wrapper {
    width: 65px;
    height: 65px;
    background: rgba(6, 182, 212, 0.06);
    border: 1px solid rgba(6, 182, 212, 0.15);
    border-radius: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.6rem;
    color: var(--accent-cyan);
    margin-bottom: 30px;
}

.static-prod-card h3 { font-family: var(--font-heading); font-size: 1.6rem; margin-bottom: 4px; }
.prod-subhead { font-size: 0.85rem; color: var(--accent-neon-blue); font-weight: 600; display: block; margin-bottom: 18px; text-transform: uppercase; letter-spacing: 0.5px; }
.static-prod-card p { color: var(--text-muted); font-size: 0.95rem; }

/* --- 4. SERVICES FRAMEWORKS --- */
.services-matrix-layout {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
}

.service-node { padding: 40px 25px; text-align: center; }

.service-node:hover {
    transform: translateY(-6px);
    border-color: rgba(59, 130, 246, 0.3);
}

.s-icon { font-size: 2.2rem; color: var(--accent-neon-blue); margin-bottom: 25px; display: block; }
.service-node h4 { font-family: var(--font-heading); font-size: 1.25rem; margin-bottom: 12px; }
.service-node p { color: var(--text-muted); font-size: 0.9rem; }

/* --- 5. SOLUTIONS ECOSYSTEM --- */
.solutions-showcase-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
}

.solution-card { padding: 45px 35px; }

.solution-card i { font-size: 2.5rem; color: var(--accent-cyan); margin-bottom: 25px; display: block; }
.solution-card h4 { font-family: var(--font-heading); font-size: 1.4rem; margin-bottom: 15px; }
.solution-card p { color: var(--text-muted); font-size: 0.95rem; }

/* --- 6. RESEARCH TIMELINE MATRIX --- */
.timeline-container {
    display: flex;
    flex-direction: column;
    gap: 30px;
    max-width: 850px;
    margin: 0 auto;
    position: relative;
}

.timeline-event { padding: 35px 40px; position: relative; }
.time-marker { font-family: var(--font-heading); color: var(--accent-cyan); font-weight: 700; font-size: 0.8rem; letter-spacing: 2px; margin-bottom: 8px; }
.timeline-event h4 { font-family: var(--font-heading); font-size: 1.4rem; margin-bottom: 10px; }
.timeline-event p { color: var(--text-muted); font-size: 0.95rem; }

/* --- 7. INNOVATION SPACE --- */
.innovation-accent-card { padding: 60px; text-align: center; max-width: 1000px; margin: 0 auto; }
.innovation-accent-card h3 { font-family: var(--font-heading); font-size: 2.2rem; margin: 12px 0 20px; }
.innovation-accent-card p { color: var(--text-muted); max-width: 750px; margin: 0 auto 35px; font-size: 1.1rem; }

.innovation-tags-grid { display: flex; justify-content: center; gap: 30px; flex-wrap: wrap; }
.innovation-tags-grid span { font-family: var(--font-heading); font-weight: 600; color: var(--text-primary); font-size: 0.95rem; display: inline-flex; align-items: center; gap: 10px; }
.innovation-tags-grid span i { color: var(--accent-cyan); }

/* --- 8. DYNAMIC MARKETPLACE SYSTEM --- */
.filter-bar { display: flex; justify-content: space-between; align-items: center; padding: 16px 28px; margin-bottom: 45px; gap: 24px; }
.search-box { position: relative; flex: 1; max-width: 420px; }
.search-box i { position: absolute; left: 16px; top: 50%; transform: translateY(-50%); color: var(--text-dark); }

.search-box input {
    width: 100%;
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid var(--glass-border);
    padding: 14px 16px 14px 48px;
    border-radius: 10px;
    color: var(--text-primary);
    font-family: var(--font-body);
    font-size: 0.95rem;
    transition: var(--transition-smooth);
}

.search-box input:focus { outline: none; border-color: var(--accent-cyan); box-shadow: 0 0 14px rgba(6, 182, 212, 0.2); }
.filter-tags { display: flex; gap: 12px; flex-wrap: wrap; }

.filter-btn {
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid var(--glass-border);
    color: var(--text-muted);
    padding: 10px 22px;
    border-radius: 8px;
    cursor: pointer;
    font-family: var(--font-body);
    font-size: 0.9rem;
    font-weight: 500;
    transition: var(--transition-smooth);
}

.filter-btn:hover, .filter-btn.active { background: var(--accent-cyan); color: var(--text-primary); border-color: var(--accent-cyan); }
.products-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(340px, 1fr)); gap: 30px; }
.product-card { overflow: hidden; display: flex; flex-direction: column; }
.product-card:hover { transform: translateY(-6px); border-color: rgba(59, 130, 246, 0.3); }

.prod-img-box {
    width: 100%;
    height: 230px;
    background: linear-gradient(135deg, #091122, #13213c);
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid var(--glass-border);
}

.prod-placeholder-icon { font-size: 4rem; color: rgba(255, 255, 255, 0.05); }

.prod-tag {
    position: absolute;
    top: 18px;
    right: 18px;
    background: rgba(3, 7, 18, 0.65);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border: 1px solid var(--glass-border);
    padding: 5px 14px;
    border-radius: 100px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: var(--accent-cyan);
}

.prod-info { padding: 30px; display: flex; flex-direction: column; flex: 1; }
.prod-info h4 { font-family: var(--font-heading); font-size: 1.4rem; margin-bottom: 12px; }
.prod-info p { color: var(--text-muted); font-size: 0.95rem; margin-bottom: 25px; flex: 1; }
.prod-pricing-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; }
.prod-price { font-family: var(--font-heading); font-size: 1.5rem; font-weight: 700; }
.prod-action-row { display: grid; grid-template-columns: 1fr auto; gap: 12px; }

.btn-buy-now { background: var(--text-primary); color: var(--bg-space-dark); text-align: center; padding: 14px; border-radius: 10px; text-decoration: none; font-weight: 600; font-size: 0.95rem; transition: var(--transition-smooth); }
.btn-buy-now:hover { background: #e2e8f0; }

.btn-wa-order { background: #25d366; color: #fff; width: 50px; height: 50px; border-radius: 10px; display: flex; justify-content: center; align-items: center; text-decoration: none; font-size: 1.3rem; transition: var(--transition-smooth); }
.btn-wa-order:hover { background: #22c35e; transform: scale(1.05); }

/* --- 9. PRODUCTION RECORD GALLERY --- */
.gallery-masonry { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; }
.gallery-item { padding: 18px; }

.gallery-img-container {
    width: 100%;
    height: 250px;
    background: linear-gradient(45deg, #070e1b, #12203a);
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.gallery-fallback-icon { font-size: 3.5rem; color: rgba(255, 255, 255, 0.04); transition: var(--transition-smooth); }
.gallery-item:hover .gallery-fallback-icon { transform: scale(1.1); color: var(--accent-cyan); }
.gallery-meta { padding: 22px 6px 6px; }
.gallery-meta h4 { font-family: var(--font-heading); font-size: 1.2rem; margin-bottom: 6px; }
.gallery-meta p { color: var(--text-muted); font-size: 0.85rem; }

/* --- 10 & 11. INCUBATION CLUSTER --- */
.internship-wrapper { padding: 70px; text-align: center; max-width: 950px; margin: 0 auto; }
.internship-content h2 { font-family: var(--font-heading); font-size: 2.5rem; margin: 12px 0 20px; }
.internship-content p { color: var(--text-muted); max-width: 700px; margin: 0 auto 35px; }
.hiring-perks { display: flex; justify-content: center; gap: 40px; margin-bottom: 40px; flex-wrap: wrap; }
.hiring-perks span { font-size: 0.95rem; color: var(--text-primary); display: inline-flex; align-items: center; gap: 10px; font-weight: 500; }
.hiring-perks span i { color: var(--accent-cyan); }

/* --- 12. CORPORATE EXECUTIVE TEAM --- */
.team-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 45px; max-width: 950px; margin: 0 auto; }
.team-card { padding: 45px; text-align: center; display: flex; flex-direction: column; align-items: center; }
.member-avatar-box { width: 140px; height: 140px; border-radius: 50%; background: linear-gradient(135deg, var(--accent-electric), var(--accent-cyan)); padding: 4px; margin-bottom: 30px; overflow: hidden; display: flex; justify-content: center; align-items: center; }

.member-avatar { width: 100%; height: 100%; object-fit: cover; border-radius: 50%; background-color: var(--bg-nebula-blue); }
.member-info h3 { font-family: var(--font-heading); font-size: 1.6rem; margin-bottom: 6px; }
.member-info .role { color: var(--accent-cyan); font-size: 0.85rem; text-transform: uppercase; letter-spacing: 2px; font-weight: 600; display: block; margin-bottom: 18px; }
.member-info p { color: var(--text-muted); font-size: 0.95rem; margin-bottom: 30px; }
.member-socials { display: flex; gap: 24px; justify-content: center; }
.member-socials a { color: var(--text-dark); font-size: 1.3rem; transition: var(--transition-smooth); }
.member-socials a:hover { color: var(--text-primary); }

/* --- 13. SECURE PIPELINE CONTACT --- */
.contact-grid-layout { display: grid; grid-template-columns: 0.9fr 1.1fr; gap: 45px; }
.contact-telemetry { padding: 55px 45px; }
.contact-telemetry h3 { font-family: var(--font-heading); font-size: 1.9rem; margin-bottom: 18px; }
.contact-telemetry p { color: var(--text-muted); margin-bottom: 45px; }

.telemetry-node { display: flex; gap: 24px; margin-bottom: 35px; align-items: center; }

.telemetry-node i {
    width: 55px;
    height: 55px;
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid var(--glass-border);
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--accent-cyan);
    font-size: 1.3rem;
}

.telemetry-node h5 { font-family: var(--font-heading); font-size: 1.1rem; margin-bottom: 4px; }
.telemetry-node p { margin-bottom: 0; font-size: 0.95rem; }

.contact-form-node { padding: 55px 45px; }
.input-twin-row { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
.input-group { margin-bottom: 28px; display: flex; flex-direction: column; gap: 10px; }
.input-group label { font-size: 0.85rem; font-weight: 600; color: var(--text-muted); letter-spacing: 0.5px; }

.input-group input, .input-group select, .input-group textarea {
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid var(--glass-border);
    padding: 16px;
    border-radius: 10px;
    color: var(--text-primary);
    font-family: var(--font-body);
    font-size: 0.95rem;
    transition: var(--transition-smooth);
}

.input-group input:focus, .input-group select:focus, .input-group textarea:focus { outline: none; border-color: var(--accent-electric); box-shadow: 0 0 14px rgba(37, 99, 235, 0.25); }
.input-group select option { background: var(--bg-space-dark); color: var(--text-primary); }

.btn-primary-form {
    width: 100%;
    background: linear-gradient(135deg, var(--accent-electric), #1e40af);
    color: var(--text-primary);
    padding: 18px;
    border-radius: 10px;
    border: 1px solid rgba(255,255,255,0.1);
    font-family: var(--font-body);
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    box-shadow: 0 5px 15px rgba(37, 99, 235, 0.35);
    transition: var(--transition-smooth);
}

.btn-primary-form:hover { transform: translateY(-3px); box-shadow: 0 10px 25px rgba(37, 99, 235, 0.5); }

/* --- GLOBAL CORE INTERFACES HUB --- */
.whatsapp-floating { position: fixed; bottom: 45px; right: 45px; width: 65px; height: 65px; background-color: #25d366; color: #fff; border-radius: 50%; display: flex; justify-content: center; align-items: center; font-size: 2.2rem; box-shadow: 0 12px 30px rgba(37, 211, 102, 0.35); z-index: 999; text-decoration: none; transition: var(--transition-bounce); }
.whatsapp-floating:hover { transform: scale(1.12) rotate(8deg); }

.tooltip-text { position: absolute; right: 80px; background: rgba(15, 23, 42, 0.95); border: 1px solid var(--glass-border); padding: 8px 16px; border-radius: 8px; font-size: 0.8rem; font-weight: 600; white-space: nowrap; opacity: 0; visibility: hidden; transition: var(--transition-smooth); color: var(--text-primary); }
.whatsapp-floating:hover .tooltip-text { opacity: 1; visibility: visible; }

#scroll-to-top { position: fixed; bottom: 45px; left: 45px; width: 55px; height: 55px; background: var(--glass-fill); border: 1px solid var(--glass-border); backdrop-filter: blur(10px); color: var(--text-primary); border-radius: 50%; display: flex; justify-content: center; align-items: center; font-size: 1.2rem; cursor: pointer; opacity: 0; visibility: hidden; z-index: 999; transition: var(--transition-smooth); }
#scroll-to-top.visible { opacity: 1; visibility: visible; }
#scroll-to-top:hover { background: var(--accent-cyan); border-color: var(--accent-cyan); transform: translateY(-4px); }

/* --- INFRASTRUCTURE FOOTER SYSTEM --- */
.footer { border-top: 1px solid var(--glass-border); background: rgba(3, 7, 18, 0.9); padding: 90px 24px 40px; position: relative; z-index: 2; }
.footer-grid { display: grid; grid-template-columns: 1.4fr 0.9fr 1.7fr; gap: 60px; margin-bottom: 60px; }
.footer-logo { font-family: var(--font-heading); font-size: 1.9rem; font-weight: 700; letter-spacing: 0.5px; }
.footer-logo .accent { color: var(--accent-cyan); }
.footer-brand-block .tagline { color: var(--accent-neon-blue); font-size: 0.9rem; font-weight: 600; margin-bottom: 18px; text-transform: uppercase; letter-spacing: 2px; }
.disclaimer { color: var(--text-dark); font-size: 0.85rem; max-width: 340px; }
.footer-links-block h4, .footer-newsletter-block h4 { font-family: var(--font-heading); font-size: 1.15rem; margin-bottom: 24px; letter-spacing: 0.5px; }
.footer-links-block ul { list-style: none; display: flex; flex-direction: column; gap: 14px; }
.footer-links-block ul a { color: var(--text-muted); text-decoration: none; font-size: 0.95rem; transition: var(--transition-smooth); }
.footer-links-block ul a:hover { color: var(--text-primary); padding-left: 6px; }
.footer-newsletter-block p { color: var(--text-muted); font-size: 0.95rem; margin-bottom: 24px; }

.newsletter-input-box { display: flex; background: rgba(0,0,0,0.4); border: 1px solid var(--glass-border); border-radius: 10px; padding: 6px; overflow: hidden; }
.newsletter-input-box input { flex: 1; background: transparent; border: none; padding: 12px; color: var(--text-primary); font-family: var(--font-body); font-size: 0.95rem; }
.newsletter-input-box input:focus { outline: none; }
.newsletter-input-box button { background: var(--accent-cyan); color: var(--text-primary); border: none; width: 45px; height: 45px; border-radius: 8px; cursor: pointer; transition: var(--transition-smooth); }
.newsletter-input-box button:hover { background: #0891b2; }
.footer-bottom { text-align: center; border-top: 1px solid rgba(255,255,255,0.06); padding-top: 35px; color: var(--text-dark); font-size: 0.85rem; }

/* --- RESPONSIVE MEDIA BREAKPOINTS MATRIX --- */
@media(max-width: 1200px) {
    .services-matrix-layout { grid-template-columns: repeat(2, 1fr); }
}

@media(max-width: 1024px) {
    .hero-content h1 { font-size: 3.8rem; }
    .about-grid-primary, .gallery-masonry, .solutions-showcase-grid { grid-template-columns: 1fr; }
    .static-products-grid { grid-template-columns: 1fr; }
    .footer-grid { grid-template-columns: 1fr 1fr; gap: 40px; }
    .footer-newsletter-block { grid-column: span 2; }
}

@media(max-width: 768px) {
    .hamburger { display: block; cursor: pointer; }
    .hamburger.active .bar:nth-child(2) { opacity: 0; }
    .hamburger.active .bar:nth-child(1) { transform: translateY(8px) rotate(45deg); }
    .hamburger.active .bar:nth-child(3) { transform: translateY(-8px) rotate(-45deg); }
    
    .hamburger .bar { display: block; width: 25px; height: 3px; margin: 5px auto; transition: all 0.3s ease-in-out; background-color: var(--text-primary); }
    
    .nav-menu {
        position: fixed;
        left: -100%;
        top: 86px;
        flex-direction: column;
        background: rgba(3, 7, 18, 0.96);
        backdrop-filter: blur(30px);
        -webkit-backdrop-filter: blur(30px);
        width: 100%;
        height: calc(100vh - 86px);
        text-align: center;
        transition: 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        gap: 30px;
        padding-top: 50px;
        border-top: 1px solid var(--glass-border);
        overflow-y: auto;
    }
    
    .nav-menu.active { left: 0; }
    .filter-bar { flex-direction: column; align-items: stretch; }
    .services-matrix-layout, .team-grid, .contact-grid-layout { grid-template-columns: 1fr; }
    .input-twin-row { grid-template-columns: 1fr; gap: 0; }
    .hero-content h1 { font-size: 3rem; }
    .footer-grid { grid-template-columns: 1fr; }
    .footer-newsletter-block { grid-column: span 1; }
    
    section { padding: 80px 16px; }
    .whatsapp-floating { bottom: 30px; right: 20px; }
    #scroll-to-top { bottom: 30px; left: 20px; }
}
