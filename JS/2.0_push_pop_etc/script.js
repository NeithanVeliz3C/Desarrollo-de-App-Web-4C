let compras=[];
compras.push("pan","leche", "huevos");

const boton = document.getElementById("botonUno");
boton.addEventListener("click", () => {
    console.log(compras); 
});

let compras2=["pan","leche", "huevos"];
let eliminado = compras2.pop();

const botonDos = document.getElementById("botonDos");
botonDos.addEventListener("click", () => {
    console.log(eliminado); 
});

let colores=["rojo","azul"];
colores.unshift("amarillo");

const botonTres = document.getElementById("botonTres");
botonTres.addEventListener("click", () => {
    console.log(colores); 
});