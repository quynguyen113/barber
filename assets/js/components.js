// ===== REUSABLE UI COMPONENTS =====

import { siteConfig, navigation, services } from './data.js';

/**
 * Generate header HTML
 */
export function generateHeader() {
    const navLinks = navigation.map(item => 
        `<li><a href="${item.href}" data-page="${item.id}">${item.name}</a></li>`
    ).join('');

    return `
        <header class="header">
            <nav class="nav container">
                <a href="index.html" class="logo">${siteConfig.name}</a>
                <div class="menu-toggle" id="menuToggle">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul class="nav-links" id="navLinks">
                    ${navLinks}
                </ul>
            </nav>
        </header>
    `;
}

/**
 * Generate footer HTML
 */
export function generateFooter() {
    return `
        <footer id="contact" class="footer">
            <div class="footer-content container">
                <h2>LIÊN HỆ VỚI CHÚNG TÔI</h2>
                <div class="contact-info">
                    <p>📍 ${siteConfig.contact.address}</p>
                    <p>📞 <a href="tel:${siteConfig.contact.phone.replace(/\s/g, '')}" style="color: white; text-decoration: none;">${siteConfig.contact.phone}</a></p>
                    <p>✉️ <a href="mailto:${siteConfig.contact.email}" style="color: white; text-decoration: none;">${siteConfig.contact.email}</a></p>
                    <p>🕒 ${siteConfig.contact.hours}</p>
                </div>
                <div class="social-links">
                    <a href="${siteConfig.social.facebook}" title="Facebook" target="_blank" rel="noopener">📘</a>
                    <a href="${siteConfig.social.instagram}" title="Instagram" target="_blank" rel="noopener">📷</a>
                    <a href="${siteConfig.social.youtube}" title="YouTube" target="_blank" rel="noopener">📺</a>
                    <a href="${siteConfig.social.zalo}" title="Zalo" target="_blank" rel="noopener">💬</a>
                </div>
                <p style="margin-top: 2rem; opacity: 0.7;">
                    © ${new Date().getFullYear()} ${siteConfig.name}. All rights reserved.
                </p>
            </div>
        </footer>
    `;
}

/**
 * Generate service card HTML
 */
export function generateServiceCard(service) {
    return `
        <div class="service-card card" data-service="${service.id}">
            <span class="service-icon">${service.icon}</span>
            <h3>${service.title}</h3>
            <p>${service.description}</p>
            ${service.price ? `<p style="color: var(--primary-gold); font-weight: bold; margin-top: 1rem;">${service.price}</p>` : ''}
        </div>
    `;
}

/**
 * Generate all service cards
 */
export function generateServicesGrid() {
    return `
        <div class="services-grid grid grid-3">
            ${services.map(service => generateServiceCard(service)).join('')}
        </div>
    `;
}

/**
 * Generate hero section
 */
export function generateHero(title = siteConfig.name, subtitle = siteConfig.tagline, ctaText = 'KHÁM PHÁ NGAY', ctaLink = '#training') {
    return `
        <section id="home" class="hero">
            <div class="hero-content">
                <h1>${title}</h1>
                <p>${subtitle}</p>
                <a href="${ctaLink}" class="btn btn-large">${ctaText}</a>
            </div>
        </section>
    `;
}

/**
 * Generate breadcrumb navigation
 */
export function generateBreadcrumb(items) {
    return `
        <nav class="breadcrumb" style="padding: 1rem 0; margin-top: 80px;">
            <div class="container">
                ${items.map((item, index) => {
                    if (index === items.length - 1) {
                        return `<span style="color: var(--primary-gold);">${item.name}</span>`;
                    }
                    return `<a href="${item.href}" style="color: var(--text-dark); text-decoration: none;">${item.name}</a> <span style="margin: 0 0.5rem;">/</span> `;
                }).join('')}
            </div>
        </nav>
    `;
}

/**
 * Generate testimonial card
 */
export function generateTestimonialCard(testimonial) {
    const stars = '⭐'.repeat(testimonial.rating);
    return `
        <div class="testimonial-card card">
            <div class="stars" style="color: var(--primary-gold); margin-bottom: 1rem;">${stars}</div>
            <p style="font-style: italic; margin-bottom: 1rem;">"${testimonial.content}"</p>
            <div style="font-weight: bold; color: var(--primary-gold);">${testimonial.name}</div>
            <div style="font-size: 0.9rem; color: #666;">${testimonial.role}</div>
        </div>
    `;
}

/**
 * Generate stats section
 */
export function generateStats(stats) {
    return `
        <div class="stats-grid grid grid-4" style="text-align: center; margin: 3rem 0;">
            ${stats.map(stat => `
                <div class="stat-item">
                    <div style="font-size: 3rem; font-weight: bold; color: var(--primary-gold);">${stat.number}</div>
                    <div style="font-size: 1.1rem; color: var(--text-dark); margin-top: 0.5rem;">${stat.label}</div>
                </div>
            `).join('')}
        </div>
    `;
}

/**
 * Generate loading spinner
 */
export function generateLoader() {
    return `
        <div class="loader" style="
            display: inline-block;
            width: 40px;
            height: 40px;
            border: 4px solid var(--light-bg);
            border-top-color: var(--primary-gold);
            border-radius: 50%;
            animation: spin 0.8s linear infinite;
        "></div>
    `;
}

/**
 * Generate contact form
 */
export function generateContactForm() {
    return `
        <form class="contact-form" id="contactForm" style="max-width: 600px; margin: 0 auto;">
            <div class="form-group" style="margin-bottom: 1.5rem;">
                <label for="name" style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Họ và tên</label>
                <input type="text" id="name" name="name" required 
                    style="width: 100%; padding: 0.8rem; border: 1px solid #ddd; border-radius: 5px; font-size: 1rem;">
            </div>
            <div class="form-group" style="margin-bottom: 1.5rem;">
                <label for="phone" style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Số điện thoại</label>
                <input type="tel" id="phone" name="phone" required 
                    style="width: 100%; padding: 0.8rem; border: 1px solid #ddd; border-radius: 5px; font-size: 1rem;">
            </div>
            <div class="form-group" style="margin-bottom: 1.5rem;">
                <label for="email" style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Email</label>
                <input type="email" id="email" name="email" required 
                    style="width: 100%; padding: 0.8rem; border: 1px solid #ddd; border-radius: 5px; font-size: 1rem;">
            </div>
            <div class="form-group" style="margin-bottom: 1.5rem;">
                <label for="message" style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Nội dung</label>
                <textarea id="message" name="message" rows="5" required 
                    style="width: 100%; padding: 0.8rem; border: 1px solid #ddd; border-radius: 5px; font-size: 1rem; resize: vertical;"></textarea>
            </div>
            <button type="submit" class="btn btn-large" style="width: 100%;">GỬI THÔNG TIN</button>
        </form>
    `;
}