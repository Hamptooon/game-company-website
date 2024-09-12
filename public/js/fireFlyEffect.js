// Количество светлячков
const numberOfFireflies = 60;
const container = document.querySelector('.fireflies-container');

function createFirefly() {
    const firefly = document.createElement('div');
    firefly.className = 'firefly';
    container.appendChild(firefly);
    
    // Устанавливаем случайные начальные позиции
    firefly.style.top = `${Math.random() * 100}vh`;
    firefly.style.left = `${Math.random() * 100}vw`;
    
    // Анимация перемещения светлячков
    const duration = Math.random() * 10 + 5; // случайная продолжительность движения
    firefly.style.animation = `move ${duration}s linear infinite`;
    
    // Анимация для случайного движения
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

// Создаем светлячков
for (let i = 0; i < numberOfFireflies; i++) {
    createFirefly();
}
