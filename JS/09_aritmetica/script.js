function pares() { //ejercicio 14
    let numeros = parseInt(prompt("Ingrese número:"));
    if(numeros %2 ==0){
        alert("El número es par");
    }else{
        alert("El número es impar");
    }
}

function imc() { //ejercicio 15
    let peso = prompt("Ingresa tu peso:");
    let altura = prompt("Ingresa tu altura:");
    let imc = peso / (altura * altura);
    if (imc < 18.5) {
        alert("Bajo peso");
    } else if (imc >= 18.5 && imc <=  25) {
        alert("Peso normal");
    } else  if (imc >= 25) {
        alert("Sobrepeso");
    }
}

function promedio() { //ejercicio 16
    let nota1 = prompt("Ingresa tu nota:");
    let nota2 = prompt("Ingresa tu segunda nota:");
    let nota3 = prompt("Ingresa tu tercera nota:");
    let promedio = (nota1 + nota2 + nota3) / 3;
    if (promedio <= 4.0) {
        alert("Reprobado");
    } else {
        alert("Aprobado");
    }
}
