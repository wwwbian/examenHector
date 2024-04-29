let botonRojo = document.getElementById('rojo')
let botonVerde = document.getElementById('verde')
let botonAzul = document.getElementById('azul')
let botonVioleta = document.getElementById('violeta')
let opacity = 1;

botonRojo.addEventListener('click', function() {
    if (opacity > 0) {
        opacity -= 0.1; 
        botonRojo.style.backgroundColor = `rgba(240, 0, 0, ${opacity})`; 
      }
  
});

botonVerde.addEventListener('click', function() {
    if (opacity > 0) {
        opacity -= 0.1; 
        botonVerde.style.backgroundColor =  `rgba(149, 213, 178, ${opacity})`; 
      }
  
});
botonAzul.addEventListener('click', function() {
    if (opacity > 0) {
        opacity -= 0.1; 
        botonAzul.style.backgroundColor = `rgba(0, 0, 220, ${opacity})`; 
      }
});
botonVioleta.addEventListener('click', function() {
    if (opacity > 0) {
        opacity -= 0.1;
        botonVioleta.style.backgroundColor = `rgba(240, 0, 240, ${opacity})`; 
      }
})

