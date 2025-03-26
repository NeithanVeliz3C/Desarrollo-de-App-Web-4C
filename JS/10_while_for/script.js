function bucleWhile() { //ejercicio de prueba 
    let count = 10; 
    let array = [];
    while(count >= 1) {
        array.push(count);
        count--;
    }
    alert(`Los números son: ${array.join(" - ")}`);
}

function bucleFor() { //ejercicio de prueba
    let count = 10;
    let array = [];
    for (let count = 10; count >= 1; count-- ){
        array.push(count);
    }
    alert(`Los números son: ${array.join(" - ")}`);
}

function bucleUno() { //ejercicio 1 
    let count = 1; 
    let array = [];
    while(count <= 30) {
        array.push(count);
        count++;
    }
    console.log(`Los números son: ${array.join(" - ")}`);
}

function bucleDos() { //ejercicio 2 100 al 1
    let count = 100;
    let array = [];
    for (let count = 100; count >= 1; count-- ){
        array.push(count);
    }
    alert(`Los números son: ${array.join(" - ")}`);
}

function contarNumeros() {
    let n = parseInt(prompt("Ingrese un número entero:"));
    let count = 1;
    let array = [];
    while(count <= n){
        array.push(count)
    }
}

function sumaNumeros() {
    let suma = 0;
    let array = [];
    for(let i = 1; i <= 5; i++){
        suma += i; //sumar i en cada iteración 
        array.push(i);
    }
    alert(suma)
}

