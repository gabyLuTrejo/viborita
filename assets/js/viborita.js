console.log("hola");

var limites = document.getElementById("limites");
var viborita = document.getElementById("viborita");

document.addEventListener("keydown", movimiento);
var posicionX = 200;
var posicionY = 200;
// Movimiento sólo con teclado
function movimiento(event){
  var flecha = event.keyCode;
  switch (flecha) {
    case 37: // Mover izquierda
      posicionX -= 100;
      viborita.style.marginLeft = posicionX + "px";
      break;
    case 38: // Mover arriba
      posicionY -= 100;
      viborita.style.marginTop = posicionY + "px";
      break;
    case 39: // Mover derecha
      posicionX += 100;
      viborita.style.marginLeft = posicionX + "px";
      break;
    case 40: // Mover abajo
      posicionY += 100;
      viborita.style.marginTop = posicionY + "px";
      break;
    default:

  }
}
