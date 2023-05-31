function verificarEdad() {
  var edad = parseInt(prompt("Por favor, ingresa tu edad"));

  if (edad >= 18) {
    alert("Bienvenid@!");
  } else {
    alert("No cumplis con la edad mínima requerida. Entras al sitio bajo tu responsabilidad.");
  }
}

verificarEdad();

let sosdesannicolas = confirm ("Hola! Si sos del partido de San Nicolás, tengo un regalo para vos!");

if (sosdesannicolas == true){
  alert ("Por haber visitado nuestra página, tenés un 20% de descuento en tu diseño! :)")
} else {
  alert ("Muchas gracias por haber visitado nuestra página web! Esperamos tu mensaje! :)")
}