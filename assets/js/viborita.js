console.log("hola");

var limites = document.getElementById("limites");
var viborita = document.getElementById("viborita");

document.addEventListener("keydown", movimiento);
var movimientoContinuo = window.setInterval(viboritaMoviendose, 500);

// Posiciones Iniciales
var posicionX = 250;
var posicionY = 250;
var direccion = "alto";

// Movimiento sólo con teclado
function movimiento(event){
  var flecha = event.keyCode;
  switch (flecha) {
    case 37: // Mover izquierda      posicionX -= 10;
      return direccion = "izquierda";
      break;
    case 38: // Mover arriba
      return direccion = "arriba";
      break;
    case 39: // Mover derecha
      return direccion = "derecha";
      break;
    case 40: // Mover abajo
      return direccion = "abajo";
      break;
    default:
  }
}


// Movimiento cada 500 ms
function viboritaMoviendose(){
  switch (direccion) {
    case "izquierda":
      posicionX -= 10;
      if (posicionX < 0) {
        alert("Perdiste");
        sinMovimiento();
      } else {
        viborita.style.marginLeft = posicionX + "px";
      }
      break;
    case "arriba":
      posicionY -= 10;if (posicionY < 0) {
        alert("Perdiste");
        sinMovimiento();
      } else {
        viborita.style.marginTop = posicionY + "px";
      }
      break;
    case "derecha":
      posicionX += 10;
      if (posicionX > 490) {
        alert("Perdiste");
        sinMovimiento();
      } else {
        viborita.style.marginLeft = posicionX + "px";
      }
      break;
    case "abajo":
      posicionY += 10;
      if (posicionY > 490) {
        alert("Perdiste");
        sinMovimiento();
      } else {
        viborita.style.marginTop = posicionY + "px";
      }
      break;
    default:

  }
}

// Desabilitando Movimiento
function sinMovimiento(){
  document.removeEventListener("keydown", movimiento);
  clearInterval(movimientoContinuo);
}
