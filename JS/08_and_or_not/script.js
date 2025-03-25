function verificacionAcceso(){  //ejercicio 6
    let edad = parseInt(prompt("Ingresa tu edad:"));
    let aceptaTerminos = true; 
    if (edad >= 18 && aceptaTerminos) {
        alert("Acceso permitido");
    } else {
        alert("Acceso denegado");
    }
}

function apliDescuento() { //ejercicio 7
    let edad = parseInt(prompt("Ingresa tu edad:"));
    let esEstudiante = false;
    if (edad >= 60 || esEstudiante) {
        alert("Descuento aplicado");
    } else {
        alert("No tienes descuento")
    }
}

function userPassword() { //ejercicio 8
    let usuario = prompt("Ingresa tu usuario:");
    let contraseña = prompt("Ingresa tu contraseña:");
    if (!usuario || !contraseña) {
        alert("Error: Debes ingresar usuario y contraseña");
    } else {
        alert("Inicio de sesión exitoso")
    }
}

function encender() { //ejercicio 9
    let energiaSuficiente = true;
    let interruptorEncendido = true;
    if (energiaSuficiente && interruptorEncendido) {
        alert("Máquina encendida");
    } else {
        alert("No se puede encender la máquina");
    }
}

function acceso() {
    let bloqueado = 
}