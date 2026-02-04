const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const response = document.getElementById("response");
const question = document.getElementById("question");

let noCount = 0;

/* NO button escapes */
noBtn.addEventListener("mouseover", () => {
    noCount++;

    const x = Math.random() * 250;
    const y = Math.random() * 60;

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

    if (noCount === 3) {
        question.innerText = "Come on 😢 Please?";
    }
    if (noCount === 6) {
        question.innerText = "You can’t escape destiny 😏";
    }
    if (noCount >= 9) {
        question.innerText = "Just say YES already 💍";
    }
});

/* YES button action */
yesBtn.addEventListener("click", () => {
    question.innerText = "You just made this special 💖";
    response.innerHTML =
        "Arohi, I knew it 😍<br>" +
        "Lets make it spcl Babes 💕";

    noBtn.style.display = "none";
    yesBtn.style.display = "none";

    confettiEffect();
});


/* Celebration effect */
function confettiEffect() {
    for (let i = 0; i < 30; i++) {
        const heart = document.createElement("div");
        heart.innerText = "💖";
        heart.style.position = "absolute";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = "100vh";
        heart.style.fontSize = "30px";
        heart.style.animation = "floatUp 3s linear";
        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 3000);
    }
}

/* Extra animation */
const style = document.createElement("style");
style.innerHTML = `
@keyframes floatUp {
    from { transform: translateY(0); opacity: 1; }
    to { transform: translateY(-100vh); opacity: 0; }
}`;
document.head.appendChild(style);
