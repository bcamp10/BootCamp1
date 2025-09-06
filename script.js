// Optional: Bei Bedarf kann man hier zusätzliche JS-Logik hinzufügen
// z.B. dynamisches Nachladen der SVG oder Anpassung bei Fenstergröße
window.addEventListener('resize', () => {
    const svgObject = document.getElementById('svg-object');
    svgObject.style.width = window.innerWidth + 'px';
    svgObject.style.height = window.innerHeight + 'px';
});
