export function startBlinking(blinkClassName = 'blink') {
    const elements = document.querySelectorAll('.neonText-blue, .neonText-red, .neonIcon-red, .neonIcon-blue');

    elements.forEach((element) => {
        function blink() {
            element.classList.toggle(blinkClassName);
            setTimeout(blink, Math.random() * 1800 + 500);
        }
        blink();
    });
}
