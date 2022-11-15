"use strict";
window.addEventListener('DOMContentLoaded', () => {
    const circle = document.querySelector('#circle');
    let xPos = 0;

    function animate() {
        xPos += 10;

        circle.style.transform = `translateX(${xPos}px)`;

        if(Math.abs(xPos) >= 900) {
            xPos = -200;
        }

        requestAnimationFrame(animate);
    }
    animate();
});