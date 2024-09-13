const numberOfFireflies = 60;
const fireflyContainers = document.querySelectorAll('.fireflies-container');

function createFirefly(fireflyContainer) {
    const firefly = document.createElement('div');
    firefly.className = 'firefly';
    fireflyContainer.appendChild(firefly);
    
    
    firefly.style.top = `${Math.random() * 100}vh`;
    firefly.style.left = `${Math.random() * 100}vw`;
    
   
    const duration = Math.random() * 10 + 5; 
    firefly.style.animation = `move ${duration}s linear infinite`;
    
 
    const keyframes = `
        @keyframes move {
            0% {
                transform: translate(${Math.random() * 100}vw, ${Math.random() * 100}vh);
            }
            100% {
                transform: translate(${Math.random() * 100}vw, ${Math.random() * 100}vh);
            }
        }
    `;
    const styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.innerText = keyframes;
    document.head.appendChild(styleSheet);
}
fireflyContainers.forEach(fireflyContainer => {
    for (let i = 0; i < numberOfFireflies; i++) {
        createFirefly(fireflyContainer);
    }
});
