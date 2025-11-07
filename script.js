// Optimized JavaScript for Portfolio Website

document.addEventListener("DOMContentLoaded", function () {
	initNavigation();
	initScrollAnimations();
	initContactForm();
	initSmoothScrolling();
	addScrollToTop();
});

// Navigation functionality
function initNavigation() {
	const hamburger = document.querySelector(".hamburger");
	const navMenu = document.querySelector(".nav-menu");
	const navLinks = document.querySelectorAll(".nav-link");

	// Mobile menu toggle
	hamburger.addEventListener("click", function () {
		hamburger.classList.toggle("active");
		navMenu.classList.toggle("active");
	});

	// Close mobile menu when clicking on a link
	navLinks.forEach((link) => {
		link.addEventListener("click", function () {
			hamburger.classList.remove("active");
			navMenu.classList.remove("active");
		});
	});

	// Navbar scroll effect
	window.addEventListener("scroll", function () {
		const navbar = document.querySelector(".navbar");
		if (window.scrollY > 100) {
			navbar.style.background = "rgba(255, 255, 255, 0.98)";
			navbar.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)";
		} else {
			navbar.style.background = "rgba(255, 255, 255, 0.95)";
			navbar.style.boxShadow = "none";
		}
	});

	// Active navigation link highlighting
	window.addEventListener("scroll", function () {
		const sections = document.querySelectorAll("section[id]");
		const scrollPos = window.scrollY + 100;

		sections.forEach((section) => {
			const sectionTop = section.offsetTop;
			const sectionHeight = section.offsetHeight;
			const sectionId = section.getAttribute("id");

			if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
				navLinks.forEach((link) => {
					link.classList.remove("active");
					if (link.getAttribute("href") === `#${sectionId}`) {
						link.classList.add("active");
					}
				});
			}
		});
	});
}

// Scroll animations
function initScrollAnimations() {
	const observerOptions = {
		threshold: 0.1,
		rootMargin: "0px 0px -50px 0px",
	};

	const observer = new IntersectionObserver(function (entries) {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add("loaded");
			}
		});
	}, observerOptions);

	// Observe all sections
	const sections = document.querySelectorAll(".section");
	sections.forEach((section) => {
		section.classList.add("loading");
		observer.observe(section);
	});

	// Observe project cards
	const projectCards = document.querySelectorAll(".project-card");
	projectCards.forEach((card, index) => {
		card.style.animationDelay = `${index * 0.1}s`;
		observer.observe(card);
	});
}

// Contact form functionality
function initContactForm() {
	const contactForm = document.getElementById("contactForm");

	if (contactForm) {
		contactForm.addEventListener("submit", function (e) {
			e.preventDefault();

			// Get form data
			const formData = new FormData(contactForm);
			const name = formData.get("name");
			const email = formData.get("email");
			const subject = formData.get("subject");
			const message = formData.get("message");

			// Simple validation
			if (!name || !email || !subject || !message) {
				showNotification("Please fill in all fields", "error");
				return;
			}

			if (!isValidEmail(email)) {
				showNotification("Please enter a valid email address", "error");
				return;
			}

			// Simulate form submission
			const submitBtn = contactForm.querySelector('button[type="submit"]');
			const originalText = submitBtn.innerHTML;

			submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
			submitBtn.disabled = true;

			setTimeout(() => {
				showNotification("Thank you! Your message has been sent successfully.", "success");
				contactForm.reset();
				submitBtn.innerHTML = originalText;
				submitBtn.disabled = false;
			}, 2000);
		});
	}
}

// Email validation
function isValidEmail(email) {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = "info") {
	// Remove existing notifications
	const existingNotifications = document.querySelectorAll(".notification");
	existingNotifications.forEach((notification) => notification.remove());

	// Create notification element
	const notification = document.createElement("div");
	notification.className = `notification notification-${type}`;
	notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === "success" ? "fa-check-circle" : type === "error" ? "fa-exclamation-circle" : "fa-info-circle"}"></i>
            <span>${message}</span>
            <button class="notification-close">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;

	// Add styles
	notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === "success" ? "#10b981" : type === "error" ? "#ef4444" : "#3b82f6"};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 400px;
    `;

	// Add to page
	document.body.appendChild(notification);

	// Animate in
	setTimeout(() => {
		notification.style.transform = "translateX(0)";
	}, 100);

	// Close button functionality
	const closeBtn = notification.querySelector(".notification-close");
	closeBtn.addEventListener("click", () => {
		notification.style.transform = "translateX(100%)";
		setTimeout(() => notification.remove(), 300);
	});

	// Auto remove after 5 seconds
	setTimeout(() => {
		if (notification.parentNode) {
			notification.style.transform = "translateX(100%)";
			setTimeout(() => notification.remove(), 300);
		}
	}, 5000);
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
	const links = document.querySelectorAll('a[href^="#"]');

	links.forEach((link) => {
		link.addEventListener("click", function (e) {
			e.preventDefault();

			const targetId = this.getAttribute("href");
			const targetElement = document.querySelector(targetId);

			if (targetElement) {
				const offsetTop = targetElement.offsetTop - 70; // Account for fixed navbar

				window.scrollTo({
					top: offsetTop,
					behavior: "smooth",
				});
			}
		});
	});
}

// Add CSS for animations
const style = document.createElement("style");
style.textContent = `
    .notification-content {
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        padding: 0.25rem;
        border-radius: 0.25rem;
        transition: background-color 0.2s ease;
    }
    
    .notification-close:hover {
        background-color: rgba(255, 255, 255, 0.2);
    }
    
    .nav-link.active {
        color: var(--primary-color);
    }
    
    .nav-link.active::after {
        width: 100%;
    }
    
    .hamburger.active .bar:nth-child(2) {
        opacity: 0;
    }
    
    .hamburger.active .bar:nth-child(1) {
        transform: translateY(8px) rotate(45deg);
    }
    
    .hamburger.active .bar:nth-child(3) {
        transform: translateY(-8px) rotate(-45deg);
    }
`;
document.head.appendChild(style);

// Scroll to top functionality
function addScrollToTop() {
	const scrollToTopBtn = document.createElement("button");
	scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
	scrollToTopBtn.className = "scroll-to-top";
	scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        width: 50px;
        height: 50px;
        background: var(--primary-color);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: var(--shadow-lg);
    `;

	document.body.appendChild(scrollToTopBtn);

	window.addEventListener("scroll", function () {
		if (window.scrollY > 300) {
			scrollToTopBtn.style.opacity = "1";
			scrollToTopBtn.style.visibility = "visible";
		} else {
			scrollToTopBtn.style.opacity = "0";
			scrollToTopBtn.style.visibility = "hidden";
		}
	});

	scrollToTopBtn.addEventListener("click", function () {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	});
}
