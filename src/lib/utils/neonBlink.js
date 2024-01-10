
export function startBlinking(blinkClassName = 'blink') {
    function blink() {
        const elements = document.querySelectorAll('.neonText-blue, .neonText-red');
        elements.forEach((element) => {
            element.classList.toggle(blinkClassName);
        });
        setTimeout(blink, Math.random() * 1800 + 500);
    }
    blink();
}
