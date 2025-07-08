const resultado = document.getElementById("resultado");

function agregarElementoCompra() { //ejercicio 1
    let elemento = document.getElementById("lista").value;
    let item = document.createElement("li");
    item.innerText = elemento ;
    resultado.appendChild(item);

}


let compras2=["pan","leche", "huevos"]; //ejercicio 2
let eliminado = compras2.pop();

const botonDos = document.getElementById("botonDos");
botonDos.addEventListener("click", () => {
    console.log(eliminado); 
});

let colores=["rojo","azul"]; //ejercicio 3
colores.unshift("amarillo");

const botonTres = document.getElementById("botonTres");
botonTres.addEventListener("click", () => {
    console.log(colores); 
});