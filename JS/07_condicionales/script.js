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
}