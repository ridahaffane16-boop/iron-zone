
/* ===== MOBILE MENU ===== */

const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuButton && navLinks) {
    menuButton.addEventListener("click", () => {
        navLinks.classList.toggle("active");

        const isOpen = navLinks.classList.contains("active");

        menuButton.textContent = isOpen ? "✕" : "☰";
        menuButton.setAttribute("aria-expanded", isOpen);
    });
}

// Close menu when clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");

        if (menuButton) {
            menuButton.textContent = "☰";
            menuButton.setAttribute("aria-expanded", "false");
        }
    });
});

/* ===== SCROLL ANIMATION ===== */


const animatedSections = document.querySelectorAll(
    ".about, .programs, .gallery, .pricing, .registration, .motivation, .contact"
);

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.1
});

animatedSections.forEach(section => {
    section.classList.add("reveal");
    observer.observe(section);
});

/* ===== CURRENT YEAR ===== */

const yearElement = document.querySelector(".current-year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

/* ===== WHATSAPP REGISTRATION ===== */

const registrationForm = document.querySelector("#registration-form");

if (registrationForm) {
    registrationForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.querySelector("#full-name").value.trim();
        const membership = document.querySelector("#membership").value;
        const message = document.querySelector("#message").value.trim();

        // Replace this example number with the real gym number
        const gymNumber = "212600000000";

        const whatsappMessage =
            `Hello IRON ZONE!\n\n` +
            `My name is ${name}.\n` +
            `Membership: ${membership}\n` +
            `Message: ${message || "I would like more information."}`;

        const whatsappURL =
            `https://wa.me/${gymNumber}?text=${encodeURIComponent(whatsappMessage)}`;

        window.location.href = whatsappURL;
    });
}
