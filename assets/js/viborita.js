console.log("hola");

var limites = document.getElementById("limites");
var viborita = document.getElementById("viborita");

document.addEventListener("keydown", movimiento);

// Movimiento sólo con teclado
function movimiento(event){
  var flecha = event.keyCode;
  console.log(flecha);
  switch (flecha) {
    case 37: // Mover izquierda
      console.log("izq");
      break;
    case 38: // Mover arriba
      console.log("arriba");
      break;
    case 39: // Mover derecha
      console.log("der");
      break;
    case 40: // Mover abajo
      console.log("abajo");
      break;
    default:

  }
}
