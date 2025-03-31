function tablaMultiplicar() {
    let numero = parseInt(prompt("Ingresa un número para generar su tabla de multiplicar:"));
    let resultado = "Tabla de multiplicar del " + numero + ":\n";
    for (let i = 1; i <= 10; i++) {
        resultado += `${numero} x ${i} = ${numero * i}\n`;
    }
    alert(`Tabla de multiplicar:${numero} x ${i} = ${numero * i}\n`);
}