function registroParticipantes() { //ejercicio 1
    let participantes = [];
    let nombre = prompt("Ingresa el nombre del participante (o 'salir' para terminar):");
    let cantidad = 0;
    while (nombre !== 'salir') {
        participantes.push(nombre);
        cantidad++;
        nombre = prompt("Ingresa el nombre del participante (o 'salir' para terminar):");
    }
    if (cantidad <= 5) {
        alert(`Participantes registrados: ${participantes.join(", ")}\nCantidad de participantes: ${cantidad}`);
    }
}

function cajaRegistradora() { //ejercicio 2
    let productos = [frutilla, carne, leche, pan];
    for (let )
}