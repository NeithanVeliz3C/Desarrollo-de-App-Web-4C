console.log("Vinculado correctamente...")
// Ejercicio 1: Declaración de variables
// Instrucciones: Declara dos variables numéricas llamadas 'ahora' y 'fecha_nac'.
// Luego, calcula y muestra en un mensaje la edad actual basada en el año de nacimiento.

function declararVariables() {
    alert(ahora - fecha_nac);
}
let ahora = 2025;
let fecha_nac = 1998;
    
    // Ejercicio 2: Asignación de valores
    // Instrucciones: Completa la función para asignar el valor de 'var1' a 'var2' y luego muestra el valor de 'var2'.
    function asignarValores() {
        alert (var2);
    };
    let var1 = 32;
    let var2= 50;
    
    // Ejercicio 3: Operaciones matemáticas
    // Instrucciones: Completa la función para realizar las siguientes operaciones:
    // Suma 'num1','num2' y 'num3', resta 'num1' de 'num3', multiplica 'num2' por 'num3', y divide 'num1' entre '120'.
    // Muestra los resultados en un mensaje.
    function realizarOperaciones() {
        alert ([[num1 + num2 + num3], [num3 - num1], [num2 * num3], [num1 / 120]]);
    };
    let num1 = 4;
    let num2 = 3;
    let num3 = 5;

    // Ejercicio 4: Manipulación de cadenas
    // Instrucciones: Completa la función para construir un mensaje utilizando las variables 'direccion' y 'n_casa'.
    // Luego, muestra la longitud del mensaje y el antepenultimo en el mensaje. (.length)
    function manipularCadenas() {
    let mensaje = "Esta es la dirección: " + direccion + "\nNúmero de casa: " + n_casa;
    alert(mensaje);
    alert("Longitud del mensaje: " + mensaje.length);

    if (mensaje.length >= 3) {
        alert("Antepenúltimo carácter: " + mensaje[mensaje.length - 3]);
    } else {
        alert("El mensaje es muy corto.");
    }
}

let direccion = "doñihue";
let n_casa = 2030;

manipularCadenas();
