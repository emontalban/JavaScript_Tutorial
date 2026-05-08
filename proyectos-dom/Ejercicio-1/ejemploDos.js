
const imagenes = document.querySelectorAll('.site-img');
    imagenes.forEach(img => {
        img.addEventListener('mouseover', (event) => {
        const captionElement = event.target.parentElement.children[1];
        captionElement.className = 'show-img-overlay';
        });
    });
    imagenes.forEach(img => {
        img.addEventListener('mouseout', (event) => {
        const captionElement = event.target.parentElement.children[1];
        captionElement.className = 'hide-img-overlay';
        });
    });