const sentences = [
    "The quick brown fox jumps over the lazy dog.",
    "Typing games are a fun way to improve speed.",
    "JavaScript makes websites interactive and dynamic.",
    "Practice typing daily to boost accuracy.",
    "Coding is like solving puzzles with logic."
  ];
  
  const sentenceElem = document.getElementById("sentence");
  const input = document.getElementById("input");
  const startBtn = document.getElementById("startBtn");
  const result = document.getElementById("result");
  
  let startTime;
  let currentSentence;
  
  startBtn.addEventListener("click", () => {
    currentSentence = sentences[Math.floor(Math.random() * sentences.length)];
    sentenceElem.textContent = currentSentence;
    input.value = "";
    input.disabled = false;
    input.focus();
    result.textContent = "";
    startTime = new Date().getTime();
  });
  
  input.addEventListener("input", () => {
    if (input.value === currentSentence) {
      const endTime = new Date().getTime();
      const totalTime = ((endTime - startTime) / 1000).toFixed(2);
      const words = currentSentence.split(" ").length;
      const speed = ((words / totalTime) * 60).toFixed(2);
      result.textContent = `Great job! ⏱ Time: ${totalTime}s | Speed: ${speed} WPM`;
      input.disabled = true;
    }
  });