// Load Animation
window.onload = function() {
    setTimeout(function() {
        document.body.style.opacity = 1;
    }, 100);
};

//Display time on the home page
function updateDateTime() {
    let now = new Date();
    document.getElementById("datetime").innerText = now.toLocaleString();
}

updateDateTime();

setInterval(updateDateTime, 1000);

// Detects the current page to highlight the active page
const navLinks = document.querySelectorAll("nav ul li a");
const underline = document.querySelector(".nav-underline");

function moveUnderline(el) {
    underline.style.width = el.offsetWidth + "px";
    underline.style.left = el.offsetLeft + "px";
}

// Move on hover
navLinks.forEach(link => {
    link.addEventListener("mouseenter", (e) => {
        moveUnderline(e.target);
    });
});

// Return to active page when mouse leaves nav
const nav = document.querySelector("nav");

nav.addEventListener("mouseleave", () => {
    const activeLink = document.querySelector("nav ul li a.active");
    if (activeLink) moveUnderline(activeLink);
});

// Set initial position after load
window.addEventListener("load", () => {
    const activeLink = document.querySelector("nav ul li a.active");
    if (activeLink) moveUnderline(activeLink);
});