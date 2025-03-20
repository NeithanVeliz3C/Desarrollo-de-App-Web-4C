//ejercicio 2
function clima() {
    let temperatura = parseInt(prompt("Ingresa la temperatura actual:"));
    if (temperatura <= 0) {
        alert("Hace frío.");
    } else if (temperatura >= 0 && temperatura <=25 ) {
        alert("La temperatura es agradable");
    } else if (temperatura >=25) {
        alert("Hace calor");
    }
}

//ejercicio 3
function verificacionUsuario() {
    let nombreUsuario = prompt("Ingresa el nombre de usuario:");
    let contraseña = prompt("Ingresa la contraseña:");
    if (nombreUsuario === "usuario123" && contraseña === "secreto") {
        alert("Acceso concedido");
    } else {
        alert("Acceso denegado");
    }
}

//ejercicio 4
function determinarSigno(){
    let numero = parseInt(prompt("Ingresa un número:"));
    if (numero >= 0 ){
        alert("El número es positivo");
    } else if (numero <= 0) {
        alert("El número es negativo");
    } else if (numero == 0 ){
        alert("El número e scero");
    }
}

//ejercicio 5
function puntuacionJuego() {
    let puntuacion = parseInt(prompt("Ingresa la puntuación total del juego:"));
    if (puntuacion >= 90) {
        alert("Excelente");
    } else if (puntuacion <= 89 && puntuacion >=70){
        alert("Buen trabajo");
    } else if (puntuacion <= 70 ) {
        alert("Necesitas mejorar");
    }
}