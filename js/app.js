// Theme button

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        themeBtn.textContent = "☀️";
    } else {
        themeBtn.textContent = "🌙";
    }

});


// Start button

const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", function () {

    alert("Welcome to Stackly! 🚀");

});


// Simple terminal animation

const messages = [
    "✓ AWS infrastructure ready",
    "✓ Docker container running",
    "✓ CI/CD pipeline active",
    "✓ Deployment successful"
];

let messageIndex = 0;

setInterval(function () {

    const terminal = document.querySelector(".terminal");

    const message = document.createElement("p");

    message.className = "success";
    message.textContent = messages[messageIndex];

    terminal.appendChild(message);

    messageIndex++;

    if (messageIndex >= messages.length) {
        messageIndex = 0;
    }

}, 4000);
