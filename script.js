// Typing Effect
const textArray = [
  "B.Tech CSE Student",
  "Web Developer",
  "AI & ML Enthusiast",
  "Always Learning 🚀"
];

let index = 0;
let charIndex = 0;
let currentText = "";
let typingSpeed = 100;

function typeEffect() {
  if (charIndex < textArray[index].length) {
    currentText += textArray[index].charAt(charIndex);
    document.querySelector(".typing-text").textContent = currentText;
    charIndex++;
    setTimeout(typeEffect, typingSpeed);
  } else {
    setTimeout(eraseEffect, 1500);
  }
}

function eraseEffect() {
  if (charIndex > 0) {
    currentText = currentText.slice(0, -1);
    document.querySelector(".typing-text").textContent = currentText;
    charIndex--;
    setTimeout(eraseEffect, 50);
  } else {
    index = (index + 1) % textArray.length;
    setTimeout(typeEffect, 200);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  typeEffect();
});

// Contact Button Message
function showMessage() {
  document.getElementById("contact-msg").innerText = 
    "Thank you for visiting! You can reach me via LinkedIn or GitHub.";
}
