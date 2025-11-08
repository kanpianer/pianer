// stars.js
function createStars(count = 100) {
    for (let i = 0; i < count; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.top = `${Math.random() * 100}vh`;
        star.style.left = `${Math.random() * 100}vw`;
        star.style.animationDuration = `${1 + Math.random() * 2}s`;
        star.style.opacity = `${0.3 + Math.random() * 0.7}`;
        document.body.appendChild(star);
    }
}
createStars();
