
var miSubtitulo = document.getElementById('subtitulo');

miSubtitulo.addEventListener('click', function(){
    console.log('haz hecho click');
});

var heroesAvengers = document.querySelectorAll('.listAvenger'); // 6 elementos
for (i = 0; i < heroesAvengers.length; i++) {
    heroesAvengers[i].addEventListener('click', colorRojo);
};

function colorRojo () {
    avengerSeleccionado = this.classList.toggle('red');
};