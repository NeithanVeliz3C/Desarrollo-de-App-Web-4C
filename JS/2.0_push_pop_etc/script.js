/*
🧠 Ejercicio 1: Agregar elementos
Crea un arreglo vacío llamado compras.
Usa push() para agregar los siguientes elementos:
"pan", "leche" y "huevos".
Muestra el arreglo resultante  en html.
*/
// referencia ul
const resultado = document.getElementById("resultado");
function agregarElementoCompra(){
     //valor input
    let elemento = document.getElementById("lista").value;
    //Crear elemento HTML --> CreateElement
    let item = document.createElement("li");
    item.innerText = elemento; //<li>--InnerText--</li>
    //appendChild inserta valor hijo en Padre
    // resultado(<ul>(item(<li></li>))</ul>)
    resultado.appendChild(item);
}
let carrito = []; //ejercicio 2
function mostrarListaCompra(){
    const lista = document.getElementById("resultado2");
    lista.innerHTML = ""; // Limpiar la lista antes de mostrar los elementos
    for (let i = 0; i < carrito.length; i++) {
        const item = document.createElement("li");
        item.innerText = ${carrito[i]};
        lista.appendChild(item);
    }
    const input = document.getElementById("lista2");
    const valor = input.value.trim(); //trim elimina espacios en blanco al inicio y al final / guardo valor sin espacios extras
    if (valor === "") return; // Si el valor está vacío, no hacemos nada
    carrito.push(valor); // Agrego el valor al final

    input.value = ""; // Limpio el campo de entrada
    input.focus(); // Agregamos foco hacia el input
}

function eliminarUltimoElemento() {
    if (carrito.length > 0) {
        carrito.pop(); // Elimina el último elemento del arreglo
    }
}

/*
let colores=["rojo","azul"]; //ejercicio 3
colores.unshift("amarillo");

const botonTres = document.getElementById("botonTres");
botonTres.addEventListener("click", () => {
    console.log(colores); 
}); */