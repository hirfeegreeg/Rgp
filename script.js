const log = document.getElementById("log");
const cmd = document.getElementById("cmd");
const lore = document.getElementById("lore");
const freq = document.getElementById("freq");

const messages = [
  "Initializing secure channel...",
  "Decrypting last transmission...",
  "Connection unstable...",
  "Signal strength: 13%",
  "Reconstructing audio fragments...",
  "███ WARNING: cognitive interference detected ███",
  "Recovered message: 'It remembers you.'",
  "Type 'reveal' to access classified lore."
];

let i = 0;
function writeLine() {
  if (i < messages.length) {
    log.innerHTML += "> " + messages[i] + "\n";
    log.scrollTop = log.scrollHeight;
    i++;
    setTimeout(writeLine, 1500 + Math.random() * 800);
  }
}
writeLine();

cmd.addEventListener("keydown", e => {
  if (e.key === "Enter") {
    const input = cmd.value.trim().toLowerCase();
    log.innerHTML += "> " + input + "\n";
    if (input === "reveal") {
      lore.classList.add("visible");
      log.innerHTML += "> Access granted.\n";
      playGlitch();
    } else if (input === "help") {
      log.innerHTML += "> Commands: reveal, clear, freq\n";
    } else if (input === "clear") {
      log.textContent = "";
    } else if (input === "freq") {
      changeFreq();
    } else {
      log.innerHTML += "> Unknown command.\n";
    }
    cmd.value = "";
    log.scrollTop = log.scrollHeight;
  }
});

function changeFreq() {
  const newFreq = (400 + Math.random() * 50).toFixed(2);
  freq.textContent = newFreq;
}

function playGlitch() {
  let overlay = document.getElementById("overlay");
  overlay.style.animation = "staticNoise 0.05s infinite";
  setTimeout(() => overlay.style.animation = "staticNoise 0.1s infinite", 3000);
}
