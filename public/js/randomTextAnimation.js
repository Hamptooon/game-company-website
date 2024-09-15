function randomTextAnimation(text) {
    const specialSymbols = [ '@', '#', '$', '%', '&', '*', '+', '-', '=', '?', 'T', 'R'];

    let isOriginalText = true;
    let currentIndex = 0;
    let originalText = text.innerText;
    console.log("wadad");
    setInterval(() => {
        if (isOriginalText) {
            const randomSymbol = specialSymbols[Math.floor(Math.random() * specialSymbols.length)];
            const newText = originalText.replace(originalText[currentIndex], randomSymbol);
            text.innerText = newText;
            currentIndex++;

            if (currentIndex === originalText.length) {
                currentIndex = 0;
                isOriginalText = false;
            }
        } else {
            text.innerText = originalText;
            isOriginalText = true;
        }
    }, 180);
}

let textToAnimation = document.querySelectorAll(".animation-text");
textToAnimation.forEach(text => {
    randomTextAnimation(text);
});