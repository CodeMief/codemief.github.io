export function typewriterAnimation() {
    const textDisplays = document.querySelectorAll(".typewriterAnimation");
  
    textDisplays.forEach((textDisplay) => {
      const phrases = textDisplay.dataset.phrases.split(",");
      const shouldLoop = textDisplay.classList.contains("loop");
  
      let i = 0;
      let j = 0;
      let currentPhrase = [];
      let isDeleting = false;
      let isEnd = false;
      let cursorVisible = true;
  
      function loop() {
        let isEnd = false;
      
        if (i < phrases.length) {
          if (!isDeleting && j < phrases[i].length) {
            currentPhrase.push(phrases[i][j]);
            textDisplay.innerHTML =
              currentPhrase.join("") +
              (cursorVisible ? "<span class='cursor'>_</span>" : "");
            j++;
          }
          if (isDeleting && j <= phrases[i].length) {
            currentPhrase.splice(j-1, 1);
            j--;
            textDisplay.innerHTML =
              currentPhrase.join("") +
              (cursorVisible ? "<span class='cursor'>_</span>" : "");
          }
          if (j == phrases[i].length) {
            isEnd = true;
            if (shouldLoop) {
              isDeleting = true;
            }
          }
          if (j === 0) {
            currentPhrase = [];
            isDeleting = false;
            i++;
            if (i === phrases.length) {
              if (shouldLoop) {
                i = 0;
              } else {
                return;
              }
            }
          }
        }
      
        const INCREASE_SPEED = Math.random() * (80 - 50) + 50;
        const NORMAL_SPEED = Math.random() * (300 - 200) + 200;
        const TIME = isEnd ? 2000 : isDeleting ? INCREASE_SPEED : NORMAL_SPEED;
        setTimeout(loop, TIME);
      }
      
      loop();
    });
  }
  