function calcularPromedio() { //ejercicio 3
    let notas = [];
    let promedio = 0;
    for (let i = 0; i < 5; i++) {
        let nota = parseFloat(prompt(`Ingresa la nota ${i + 1}:`));
        notas.push(nota);
        promedio += nota / 5; 
    }
    if (promedio <= 4.0) {
        alert("Tu promedio es:"+ " " + promedio + "\nReprobado");
    } else {
        alert("Tu promedio es:" + " " + promedio + "\nAprobado");
    }
}

function pares() {
    let numeros = [];
    let pares = [];
    let impares = [];
    for (let i = 0; i < 6; i++) {
        let num = parseInt(prompt(`Ingresa un número ${i + 1}:`));
        numeros.push(num);
        
        if (num % 2 === 0) {
            pares.push(num);
        } else {
            impares.push(num);
        }
    }
    alert(`Números ingresados: ${numeros.join(", ")}\nPares: ${pares.join(", ")}\nImpares: ${impares.join(", ")}`);
}


