// ==========================================
// Initialize AOS (Animate On Scroll)
// ==========================================
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    offset: 100
});

// ==========================================
// Progress Bar
// ==========================================
window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById('progress-bar').style.width = scrolled + '%';
});

// ==========================================
// Number Counter Animation
// ==========================================
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16); // 60fps
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target.toLocaleString();
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current).toLocaleString();
        }
    }, 16);
}

// Observer for counter animation
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            const target = parseInt(entry.target.getAttribute('data-target'));
            animateCounter(entry.target, target);
            entry.target.classList.add('animated');
        }
    });
}, observerOptions);

// Observe all counter elements
document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.stat-number[data-target]');
    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
});

// ==========================================
// Chart.js - Survey Results Pie Chart
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('impactChart');

    if (ctx) {
        const impactChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: [
                    'No Impact on Contracts',
                    'Impact on Current Clients',
                    'Impact on Prospective Clients'
                ],
                datasets: [{
                    label: 'NAR Member Survey',
                    data: [75, 11, 11],
                    backgroundColor: [
                        '#10b981', // Success Green
                        '#f59e0b', // Warning Orange
                        '#ef4444'  // Alert Red
                    ],
                    borderColor: [
                        '#ffffff',
                        '#ffffff',
                        '#ffffff'
                    ],
                    borderWidth: 3,
                    hoverOffset: 15
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            padding: 20,
                            font: {
                                family: 'Inter',
                                size: 14
                            },
                            usePointStyle: true,
                            pointStyle: 'circle'
                        }
                    },
                    tooltip: {
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        padding: 12,
                        titleFont: {
                            size: 16,
                            family: 'Montserrat'
                        },
                        bodyFont: {
                            size: 14,
                            family: 'Inter'
                        },
                        callbacks: {
                            label: function(context) {
                                return context.label + ': ' + context.parsed + '%';
                            }
                        }
                    }
                },
                animation: {
                    animateRotate: true,
                    animateScale: true,
                    duration: 1500,
                    easing: 'easeInOutQuart'
                }
            }
        });

        // Animate chart on scroll
        const chartObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    impactChart.update();
                }
            });
        }, observerOptions);

        chartObserver.observe(ctx.parentElement);
    }
});

// ==========================================
// Smooth Scroll for Navigation Links
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.offsetTop - navHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ==========================================
// Navbar Background on Scroll
// ==========================================
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
    } else {
        navbar.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
    }

    lastScroll = currentScroll;
});

// ==========================================
// Add hover effects for cards
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.impact-card, .takeaway-card, .stat-box, .implication-card');

    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        });
    });
});

// ==========================================
// Parallax Effect for Hero
// ==========================================
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const scrolled = window.pageYOffset;

    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.querySelector('.hero-content').style.opacity = 1 - (scrolled / 500);
    }
});

// ==========================================
// Lazy Loading Images
// ==========================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ==========================================
// Add animation to timeline on scroll
// ==========================================
const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const timelineLine = entry.target.querySelector('.timeline-line');
            if (timelineLine) {
                timelineLine.style.animation = 'growLine 1.5s ease-in-out forwards';
            }
        }
    });
}, observerOptions);

const timeline = document.querySelector('.timeline');
if (timeline) {
    timelineObserver.observe(timeline);
}

// Add CSS animation dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes growLine {
        from {
            transform: translateY(-50%) scaleX(0);
        }
        to {
            transform: translateY(-50%) scaleX(1);
        }
    }

    @keyframes pulse {
        0%, 100% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.05);
        }
    }

    .timeline-line {
        transform-origin: left center;
    }

    .stat-card:hover .stat-number {
        animation: pulse 0.6s ease-in-out;
    }
`;
document.head.appendChild(style);

// ==========================================
// Print functionality
// ==========================================
window.addEventListener('beforeprint', () => {
    // Expand all sections for print
    document.querySelectorAll('[data-aos]').forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'none';
    });
});

// ==========================================
// Mobile Menu Toggle
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking on a link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!menuToggle.contains(e.target) && !navMenu.contains(e.target)) {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
});

// ==========================================
// Console Easter Egg
// ==========================================
console.log('%c2025 Government Shutdown Analysis', 'color: #1e3a8a; font-size: 20px; font-weight: bold;');
console.log('%cSource: National Association of REALTORS®', 'color: #fbbf24; font-size: 14px;');
console.log('%cBuilt with ❤️ for informed real estate professionals', 'color: #6b7280; font-size: 12px;');