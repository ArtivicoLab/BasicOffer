// DOM Elements
const progressBar = document.getElementById('progressBar');
const nav = document.querySelector('.nav');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const heroCTA = document.getElementById('heroCTA');
const mascot = document.getElementById('mascot');
const mascotSpeech = document.getElementById('mascotSpeech');
const speechText = document.getElementById('speechText');
const backToTop = document.getElementById('backToTop');
const accessibilityToggle = document.getElementById('accessibilityToggle');
const accessibilityMenu = document.getElementById('accessibilityMenu');
const contrastToggle = document.getElementById('contrastToggle');
const fontSizeToggle = document.getElementById('fontSizeToggle');
const animationsToggle = document.getElementById('animationsToggle');
const focusToggle = document.getElementById('focusToggle');
const welcomePopup = document.getElementById('welcomePopup');
const welcomeClose = document.getElementById('welcomeClose');

// State
let ticking = false;
let isNavOpen = false;

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Progress Bar Animation
function updateProgressBar() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    progressBar.style.width = scrolled + '%';
}

// Navigation Scroll Effect
function updateNavOnScroll() {
    const scrollY = window.scrollY;
    if (scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
}

// Scroll Event Handler
function handleScroll() {
    if (!ticking) {
        requestAnimationFrame(() => {
            updateProgressBar();
            updateNavOnScroll();
            handleScrollAnimations();
            updateBackToTopButton();
            updateMascotMessages();
            ticking = false;
        });
        ticking = true;
    }
}

// Back to Top Button
function updateBackToTopButton() {
    const scrollTop = window.pageYOffset;
    if (scrollTop > 300) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Mascot Messages based on scroll position
function updateMascotMessages() {
    const scrollTop = window.pageYOffset;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;
    
    let message = "Welcome to ArtivicoLab! 👋";
    
    if (scrollPercent > 90) {
        message = "Ready to launch? Email us! 🚀";
    } else if (scrollPercent > 70) {
        message = "See our amazing pricing! 💰";
    } else if (scrollPercent > 50) {
        message = "We're better than agencies! ⭐";
    } else if (scrollPercent > 25) {
        message = "Check out our solutions! ✨";
    } else if (scrollPercent > 10) {
        message = "Scroll to learn more! 📖";
    }
    
    if (speechText.textContent !== message) {
        speechText.textContent = message;
        showMascotSpeech();
    }
}

function showMascotSpeech() {
    mascotSpeech.classList.add('show');
    setTimeout(() => {
        mascotSpeech.classList.remove('show');
    }, 3000);
}

function handleMascotClick() {
    const messages = [
        "Need help? Email contact@artivocolab.com! 📧",
        "FREE hosting forever! 🎉",
        "Only $1,500 one-time payment! 💎",
        "Your website is ready to launch! 🚀",
        "Get your GitHub account ready! 🔗"
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    speechText.textContent = randomMessage;
    showMascotSpeech();
}

// Accessibility Functions
function toggleAccessibilityMenu() {
    const isExpanded = accessibilityToggle.getAttribute('aria-expanded') === 'true';
    
    if (isExpanded) {
        accessibilityMenu.classList.remove('show');
        accessibilityMenu.setAttribute('aria-hidden', 'true');
        accessibilityToggle.setAttribute('aria-expanded', 'false');
    } else {
        accessibilityMenu.classList.add('show');
        accessibilityMenu.setAttribute('aria-hidden', 'false');
        accessibilityToggle.setAttribute('aria-expanded', 'true');
    }
}

function toggleHighContrast() {
    const isActive = document.body.classList.contains('high-contrast');
    
    if (isActive) {
        document.body.classList.remove('high-contrast');
        contrastToggle.setAttribute('aria-pressed', 'false');
        localStorage.setItem('high-contrast', 'false');
    } else {
        document.body.classList.add('high-contrast');
        contrastToggle.setAttribute('aria-pressed', 'true');
        localStorage.setItem('high-contrast', 'true');
    }
}

function toggleLargeText() {
    const isActive = document.body.classList.contains('large-text');
    
    if (isActive) {
        document.body.classList.remove('large-text');
        fontSizeToggle.setAttribute('aria-pressed', 'false');
        localStorage.setItem('large-text', 'false');
    } else {
        document.body.classList.add('large-text');
        fontSizeToggle.setAttribute('aria-pressed', 'true');
        localStorage.setItem('large-text', 'true');
    }
}

function toggleReducedMotion() {
    const isActive = document.body.classList.contains('reduced-motion');
    
    if (isActive) {
        document.body.classList.remove('reduced-motion');
        animationsToggle.setAttribute('aria-pressed', 'false');
        localStorage.setItem('reduced-motion', 'false');
    } else {
        document.body.classList.add('reduced-motion');
        animationsToggle.setAttribute('aria-pressed', 'true');
        localStorage.setItem('reduced-motion', 'true');
    }
}

function toggleEnhancedFocus() {
    const isActive = document.body.classList.contains('enhanced-focus');
    
    if (isActive) {
        document.body.classList.remove('enhanced-focus');
        focusToggle.setAttribute('aria-pressed', 'false');
        localStorage.setItem('enhanced-focus', 'false');
    } else {
        document.body.classList.add('enhanced-focus');
        focusToggle.setAttribute('aria-pressed', 'true');
        localStorage.setItem('enhanced-focus', 'true');
    }
}

function loadAccessibilitySettings() {
    // Load saved accessibility preferences
    if (localStorage.getItem('high-contrast') === 'true') {
        document.body.classList.add('high-contrast');
        contrastToggle.setAttribute('aria-pressed', 'true');
    }
    
    if (localStorage.getItem('large-text') === 'true') {
        document.body.classList.add('large-text');
        fontSizeToggle.setAttribute('aria-pressed', 'true');
    }
    
    if (localStorage.getItem('reduced-motion') === 'true') {
        document.body.classList.add('reduced-motion');
        animationsToggle.setAttribute('aria-pressed', 'true');
    }
    
    if (localStorage.getItem('enhanced-focus') === 'true') {
        document.body.classList.add('enhanced-focus');
        focusToggle.setAttribute('aria-pressed', 'true');
    }
}

// Mobile Navigation Toggle
function toggleMobileNav() {
    isNavOpen = !isNavOpen;
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.style.overflow = isNavOpen ? 'hidden' : '';
}

// Smooth Scroll to Sections
function smoothScrollTo(targetId) {
    const target = document.getElementById(targetId);
    if (target) {
        const offsetTop = target.offsetTop - 80; // Account for fixed header
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// Ripple Effect for Buttons
function createRipple(event) {
    const button = event.currentTarget;
    const ripple = button.querySelector('.cta-ripple');
    
    if (!ripple) return;
    
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    
    ripple.classList.remove('active');
    ripple.classList.add('active');
    
    setTimeout(() => {
        ripple.classList.remove('active');
    }, 600);
}

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const element = entry.target;
            const delay = element.dataset.aosDelay || 0;
            
            setTimeout(() => {
                element.classList.add('aos-animate');
            }, delay);
            
            observer.unobserve(element);
        }
    });
}, observerOptions);

// Initialize Scroll Animations
function initScrollAnimations() {
    const elements = document.querySelectorAll('[data-aos]');
    elements.forEach(element => {
        observer.observe(element);
    });
}

// Handle Title Reveal Animation
function handleTitleReveal() {
    const titleLines = document.querySelectorAll('.title-line[data-aos="reveal"]');
    titleLines.forEach((line, index) => {
        setTimeout(() => {
            line.classList.add('aos-animate');
        }, index * 200);
    });
}

// Handle Scroll Animations (for elements that need scroll-based timing)
function handleScrollAnimations() {
    const scrollTop = window.pageYOffset;
    const windowHeight = window.innerHeight;
    
    // Parallax effect for hero shapes
    const heroShapes = document.querySelectorAll('.hero-shape');
    heroShapes.forEach((shape, index) => {
        const speed = 0.5 + (index * 0.1);
        const yPos = -(scrollTop * speed);
        shape.style.transform = `translateY(${yPos}px) rotate(${scrollTop * 0.02}deg)`;
    });
    
    // Update active navigation link
    updateActiveNavLink();
}

// Update Active Navigation Link
function updateActiveNavLink() {
    const sections = ['hero', 'solution', 'pricing', 'demo'];
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
                current = sectionId;
            }
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Form Validation
function validateForm(formData) {
    const errors = {};
    
    if (!formData.businessName.trim()) {
        errors.businessName = 'Business name is required';
    }
    
    if (!formData.email.trim()) {
        errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        errors.email = 'Please enter a valid email address';
    }
    
    if (!formData.phone.trim()) {
        errors.phone = 'Phone number is required';
    } else if (!/^[\+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/[\s\-\(\)]/g, ''))) {
        errors.phone = 'Please enter a valid phone number';
    }
    
    if (!formData.businessType) {
        errors.businessType = 'Please select your business type';
    }
    
    return errors;
}

// Show Form Errors
function showFormErrors(errors) {
    // Clear previous errors
    const errorElements = document.querySelectorAll('.form-error');
    errorElements.forEach(el => el.remove());
    
    // Add new errors
    Object.keys(errors).forEach(fieldName => {
        const field = document.querySelector(`[name="${fieldName}"]`);
        if (field) {
            const error = document.createElement('div');
            error.className = 'form-error';
            error.textContent = errors[fieldName];
            error.style.color = 'hsl(var(--hot-pink))';
            error.style.fontSize = 'var(--font-size-sm)';
            error.style.marginTop = 'var(--space-1)';
            field.parentNode.appendChild(error);
            
            field.style.borderColor = 'hsl(var(--hot-pink))';
        }
    });
}

// Handle Form Submission
function handleFormSubmit(event) {
    event.preventDefault();
    
    const formData = new FormData(demoForm);
    const data = Object.fromEntries(formData.entries());
    
    const errors = validateForm(data);
    
    if (Object.keys(errors).length > 0) {
        showFormErrors(errors);
        return;
    }
    
    // Clear any existing errors
    showFormErrors({});
    
    // Show loading state
    const submitButton = demoForm.querySelector('button[type="submit"]');
    const originalText = submitButton.querySelector('.cta-text').textContent;
    submitButton.querySelector('.cta-text').textContent = 'Submitting...';
    submitButton.disabled = true;
    
    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
        alert('Thank you! We\'ll be in touch within 24 hours to discuss your demo website.');
        demoForm.reset();
        submitButton.querySelector('.cta-text').textContent = originalText;
        submitButton.disabled = false;
        
        // Clear field styles
        const inputs = demoForm.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.style.borderColor = 'hsl(var(--gray-200))';
        });
    }, 2000);
}

// Animate Statistics on Scroll
function animateStats() {
    const stats = document.querySelectorAll('.stat-number');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const stat = entry.target;
                const finalValue = stat.textContent;
                
                if (finalValue.includes('$')) {
                    animateValue(stat, 0, 1500, 2000, '$');
                } else if (finalValue.includes('-')) {
                    const [start, end] = finalValue.split('-');
                    stat.textContent = `${start}-${end}`;
                } else {
                    animateValue(stat, 0, parseInt(finalValue), 2000);
                }
                
                observer.unobserve(stat);
            }
        });
    }, { threshold: 0.5 });
    
    stats.forEach(stat => observer.observe(stat));
}

// Animate Number Values
function animateValue(element, start, end, duration, prefix = '') {
    const startTime = performance.now();
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const current = Math.round(start + (end - start) * easeOutQuart);
        
        element.textContent = prefix + current;
        
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    
    requestAnimationFrame(update);
}

// Add Hover Effects to Interactive Elements
function initInteractiveEffects() {
    // Card hover effects
    const cards = document.querySelectorAll('.problem-card, .solution-card, .usp-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Pricing table row hover effects
    const pricingRows = document.querySelectorAll('.pricing-row');
    pricingRows.forEach(row => {
        row.addEventListener('mouseenter', () => {
            row.style.backgroundColor = 'hsla(var(--primary-yellow) / 0.05)';
        });
        
        row.addEventListener('mouseleave', () => {
            row.style.backgroundColor = 'transparent';
        });
    });
}

// Keyboard Navigation Support
function initKeyboardNavigation() {
    document.addEventListener('keydown', (event) => {
        // Close mobile menu with Escape key
        if (event.key === 'Escape' && isNavOpen) {
            toggleMobileNav();
        }
        
        // Navigate sections with arrow keys (when focused on nav)
        if (event.target.classList.contains('nav-link')) {
            const navLinks = Array.from(document.querySelectorAll('.nav-link'));
            const currentIndex = navLinks.indexOf(event.target);
            
            if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
                event.preventDefault();
                const nextIndex = (currentIndex + 1) % navLinks.length;
                navLinks[nextIndex].focus();
            } else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
                event.preventDefault();
                const prevIndex = (currentIndex - 1 + navLinks.length) % navLinks.length;
                navLinks[prevIndex].focus();
            }
        }
    });
}

// Touch Gesture Support for Mobile
function initTouchGestures() {
    let touchStartY = 0;
    let touchEndY = 0;
    
    document.addEventListener('touchstart', (event) => {
        touchStartY = event.changedTouches[0].screenY;
    }, { passive: true });
    
    document.addEventListener('touchend', (event) => {
        touchEndY = event.changedTouches[0].screenY;
        handleSwipeGesture();
    }, { passive: true });
    
    function handleSwipeGesture() {
        const swipeThreshold = 50;
        const swipeDistance = touchStartY - touchEndY;
        
        if (Math.abs(swipeDistance) > swipeThreshold) {
            if (swipeDistance > 0) {
                // Swipe up - scroll to next section
                scrollToNextSection();
            } else {
                // Swipe down - scroll to previous section
                scrollToPreviousSection();
            }
        }
    }
}

// Section Navigation
function scrollToNextSection() {
    const sections = ['hero', 'solution', 'pricing', 'demo'];
    const currentSection = getCurrentSection();
    const currentIndex = sections.indexOf(currentSection);
    
    if (currentIndex < sections.length - 1) {
        smoothScrollTo(sections[currentIndex + 1]);
    }
}

function scrollToPreviousSection() {
    const sections = ['hero', 'solution', 'pricing', 'demo'];
    const currentSection = getCurrentSection();
    const currentIndex = sections.indexOf(currentSection);
    
    if (currentIndex > 0) {
        smoothScrollTo(sections[currentIndex - 1]);
    }
}

function getCurrentSection() {
    const sections = ['hero', 'solution', 'pricing', 'demo'];
    
    for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
                return sectionId;
            }
        }
    }
    
    return 'hero';
}

// Initialize Performance Optimizations
function initPerformanceOptimizations() {
    // Lazy load images (if any are added later)
    if ('IntersectionObserver' in window) {
        const lazyImages = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('loading');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => imageObserver.observe(img));
    }
    
    // Optimize scroll performance
    window.addEventListener('scroll', throttle(handleScroll, 16), { passive: true });
    
    // Optimize resize performance
    window.addEventListener('resize', debounce(() => {
        // Recalculate animations on resize
        handleScrollAnimations();
    }, 250));
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all features
    initScrollAnimations();
    initInteractiveEffects();
    initKeyboardNavigation();
    initTouchGestures();
    initPerformanceOptimizations();
    
    // Start title reveal animation
    setTimeout(handleTitleReveal, 500);
    
    // Start stats animation
    setTimeout(animateStats, 1000);
    
    // Navigation toggle
    navToggle.addEventListener('click', toggleMobileNav);
    
    // Back to top button
    backToTop.addEventListener('click', scrollToTop);
    
    // Mascot interactions
    mascot.addEventListener('click', handleMascotClick);
    
    // Accessibility controls
    accessibilityToggle.addEventListener('click', toggleAccessibilityMenu);
    contrastToggle.addEventListener('click', toggleHighContrast);
    fontSizeToggle.addEventListener('click', toggleLargeText);
    animationsToggle.addEventListener('click', toggleReducedMotion);
    focusToggle.addEventListener('click', toggleEnhancedFocus);
    
    // Load accessibility settings
    loadAccessibilitySettings();
    
    // Welcome popup
    welcomeClose.addEventListener('click', () => {
        welcomePopup.classList.add('hidden');
    });
    
    // Close popup when clicking outside content
    welcomePopup.addEventListener('click', (event) => {
        if (event.target === welcomePopup) {
            welcomePopup.classList.add('hidden');
        }
    });
    
    // Close accessibility menu when clicking outside
    document.addEventListener('click', (event) => {
        if (!event.target.closest('.accessibility-controls')) {
            accessibilityMenu.classList.remove('show');
            accessibilityMenu.setAttribute('aria-hidden', 'true');
            accessibilityToggle.setAttribute('aria-expanded', 'false');
        }
    });
    
    // Navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            smoothScrollTo(targetId);
            
            // Close mobile menu if open
            if (isNavOpen) {
                toggleMobileNav();
            }
        });
    });
    
    // CTA buttons
    document.querySelectorAll('.cta-button').forEach(button => {
        button.addEventListener('click', createRipple);
    });
    
    // Hero CTA scroll to demo
    heroCTA.addEventListener('click', () => {
        smoothScrollTo('demo');
    });
    
    // Form submission
    demoForm.addEventListener('submit', handleFormSubmit);
    
    // Form field interactions
    const formInputs = demoForm.querySelectorAll('input, select, textarea');
    formInputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.style.borderColor = 'hsl(var(--hot-pink))';
        });
        
        input.addEventListener('blur', () => {
            if (!input.value.trim()) {
                input.style.borderColor = 'hsl(var(--gray-200))';
            }
        });
        
        input.addEventListener('input', () => {
            // Clear errors on input
            const error = input.parentNode.querySelector('.form-error');
            if (error) {
                error.remove();
                input.style.borderColor = 'hsl(var(--hot-pink))';
            }
        });
    });
    
    // Initial scroll handler call
    handleScroll();
});

// Handle page visibility changes for performance
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Pause animations when page is not visible
        document.body.style.animationPlayState = 'paused';
    } else {
        // Resume animations when page becomes visible
        document.body.style.animationPlayState = 'running';
    }
});

// Handle reduced motion preferences
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    // Disable or reduce animations for users who prefer reduced motion
    const style = document.createElement('style');
    style.textContent = `
        *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
        }
    `;
    document.head.appendChild(style);
}

// Error handling for any missed errors
window.addEventListener('error', (event) => {
    console.error('JavaScript error occurred:', event.error);
    // In production, you might want to send this to an error reporting service
});

// Service Worker registration for future PWA features
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Uncomment when you have a service worker file
        // navigator.serviceWorker.register('/sw.js')
        //     .then(registration => console.log('SW registered'))
        //     .catch(error => console.log('SW registration failed'));
    });
}
