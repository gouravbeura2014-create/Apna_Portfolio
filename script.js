// ==========================================
// LOADING SCREEN
// ==========================================

const loader = document.getElementById("loader");
const progressBar = document.getElementById("progressBar");
const percentage = document.getElementById("percentage");
const loadingText = document.getElementById("loadingText");

const loadingMessages = [
    "Loading Curiosity Engine...",
    "Connecting To Knowledge Network...",
    "Scanning Universe...",
    "Activating Innovation Protocol...",
    "Preparing Future Scientist..."
];

let progress = 0;
let messageIndex = 0;

const loadingInterval = setInterval(() => {

    progress += 1;

    progressBar.style.width = progress + "%";
    percentage.textContent = progress + "%";

    if (progress % 20 === 0 && messageIndex < loadingMessages.length - 1) {

        messageIndex++;
        loadingText.textContent = loadingMessages[messageIndex];

    }

    if (progress >= 100) {

        clearInterval(loadingInterval);

        setTimeout(() => {

            loader.style.opacity = "0";

            setTimeout(() => {

                loader.style.display = "none";

            }, 1000);

        }, 500);

    }

}, 40);

// ==========================================
// TYPING EFFECT
// ==========================================

const typingText = document.getElementById("typing-text");

const words = [

    "Future Scientist",
    "AI Explorer",
    "Space Enthusiast",
    "Technology Learner",
    "Knowledge Seeker"

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingText.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingText.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, deleting ? 50 : 120);
}

typeEffect();

// ==========================================
// MOBILE MENU
// ==========================================

const hamburger =
document.getElementById("hamburger");

const navLinks =
document.getElementById("navLinks");

hamburger.addEventListener("click", () => {

    navLinks.classList.toggle("show");

});

// ==========================================
// BACK TO TOP
// ==========================================

const backToTop =
document.getElementById("backToTop");

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// ==========================================
// REVEAL ON SCROLL
// ==========================================

const revealElements = document.querySelectorAll(
    ".glass-card, .timeline-item, .contact-card"
);

function revealOnScroll() {

    revealElements.forEach((element) => {

        const windowHeight =
        window.innerHeight;

        const elementTop =
        element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {

            element.classList.add("active");

        }

    });

}

window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();

// ==========================================
// ADD REVEAL CLASS
// ==========================================

revealElements.forEach((element) => {

    element.classList.add("reveal");

});

// ==========================================
// SHOOTING STARS
// ==========================================

function createShootingStar() {

    const star =
    document.createElement("div");

    star.classList.add("shooting-star");

    star.style.top =
        Math.random() * window.innerHeight + "px";

    star.style.left =
        Math.random() * window.innerWidth + "px";

    document.body.appendChild(star);

    setTimeout(() => {

        star.remove();

    }, 3000);

}

setInterval(createShootingStar, 4000);

// ==========================================
// NAVBAR GLOW ON SCROLL
// ==========================================

window.addEventListener("scroll", () => {

    const header =
    document.querySelector("header");

    if (window.scrollY > 50) {

        header.style.background =
            "rgba(0,0,0,0.7)";

    } else {

        header.style.background =
            "rgba(0,0,0,0.15)";

    }

});

// ==========================================
// RANDOM TITLE EFFECT
// ==========================================

const originalTitle =
document.title;

window.addEventListener("blur", () => {

    document.title =
    "Come Back Explorer 🚀";

});

window.addEventListener("focus", () => {

    document.title =
    originalTitle;

});

// ==========================================
// FUTURE FEATURES READY
// ==========================================

console.log(
"Portfolio Successfully Loaded 🚀"
);
// ==========================================
// 3D CARD TILT EFFECT
// ==========================================

const cards = document.querySelectorAll(
    ".glass-card, .contact-card, .timeline-content"
);

cards.forEach((card) => {

    card.addEventListener("mousemove", (e) => {

        const rect =
        card.getBoundingClientRect();

        const x =
        e.clientX - rect.left;

        const y =
        e.clientY - rect.top;

        const centerX =
        rect.width / 2;

        const centerY =
        rect.height / 2;

        const rotateX =
        ((y - centerY) / 20);

        const rotateY =
        ((centerX - x) / 20);

        card.style.transform =
        `
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale(1.03)
        `;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg)";

    });

});

// ==========================================
// CUSTOM CURSOR GLOW
// ==========================================

const cursor =
document.createElement("div");

cursor.style.width = "20px";
cursor.style.height = "20px";

cursor.style.position = "fixed";

cursor.style.borderRadius = "50%";

cursor.style.background =
"rgba(0,247,255,.7)";

cursor.style.pointerEvents =
"none";

cursor.style.zIndex = "99999";

cursor.style.boxShadow =
"0 0 25px #00f7ff";

document.body.appendChild(cursor);

document.addEventListener("mousemove",
(e) => {

    cursor.style.left =
    e.clientX - 10 + "px";

    cursor.style.top =
    e.clientY - 10 + "px";

});

// ==========================================
// EASTER EGGS
// ==========================================

let secretWord = "";

document.addEventListener("keydown",
(e) => {

    secretWord += e.key.toLowerCase();

    if(secretWord.length > 25){

        secretWord =
        secretWord.slice(-25);

    }

    if(secretWord.includes("science")){

        alert(
        "🔬 Science Mode Activated!"
        );

        secretWord = "";

    }

    if(secretWord.includes("space")){

        alert(
        "🚀 Space Explorer Unlocked!"
        );

        secretWord = "";

    }

    if(secretWord.includes("future")){

        alert(
        "🌟 Future Scientist Detected!"
        );

        secretWord = "";

    }

});

// ==========================================
// RANDOM GLOW EFFECT
// ==========================================

setInterval(() => {

    document.body.style.filter =
    "brightness(1.02)";

    setTimeout(() => {

        document.body.style.filter =
        "brightness(1)";

    },200);

},7000);

// ==========================================
// HERO TITLE FLOATING EFFECT
// ==========================================

const heroTitle =
document.querySelector(".hero-title");

let floatDirection = 1;

setInterval(() => {

    heroTitle.style.transform =
    `translateY(${floatDirection * 5}px)`;

    floatDirection *= -1;

},1500);

// ==========================================
// WELCOME MESSAGE
// ==========================================

setTimeout(() => {

    console.log(
    "Welcome Gourav Beura 🚀"
    );

},3000);
