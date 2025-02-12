
var listaPeliculas = document.getElementById('listaPeliculasAvengers');

listaPeliculas.addEventListener('mouseover', accionSobrePoster);
listaPeliculas.addEventListener('mouseout', accionFueraPoster);

function accionSobrePoster (evento) {
    var target = evento.target;
    if (target.tagName !== 'IMG') return;

    var image = target;
    image.classList.toogle('hover');
}

function accionFueraPoster (evento) {
    var target = evento.target;
    if (target.tagName !== 'IMG') return;

    var image = target;
    image.classList.remove('hover');
}