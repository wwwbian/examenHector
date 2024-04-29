let botonRojo = document.getElementById('rojo')
let botonVerde = document.getElementById('verde')
let botonAzul = document.getElementById('azul')
let botonVioleta = document.getElementById('violeta')
let opacity = 1;
const box = document.getElementById("box");

botonRojo.addEventListener('click', function() {
    alert('tocaste el boton rojo');
});

botonVerde.addEventListener('click', function() {
    alert('tocaste el boton verde');
});
botonAzul.addEventListener('click', function() {
    alert('tocaste el boton azul');
});
botonVioleta.addEventListener('click', function() {
    alert('tocaste el boton violeta');
});
