/**
 * EJERCICIO 1 - Tipos Básicos
 */
console.log("--- EJERCICIO 1 ---");
let nombre: string = "Carlos";
let edad: number = 25;
let salario: number = 1500.50;
let estaActivo: boolean = true;
let ciudad: string = "Bogotá";

console.log(nombre, typeof nombre);
console.log(edad, typeof edad);
console.log(salario, typeof salario);
console.log(estaActivo, typeof estaActivo);
console.log(ciudad, typeof ciudad);
console.log("\n");

/**
 * EJERCICIO 2 - Arrays Tipados
 */
console.log("--- EJERCICIO 2 ---");
let numeros: number[] = [10, 20, 30];
let textos: string[] = ["Hola", "Mundo"];
let booleanos: boolean[] = [true, false, true];

// Agregar elementos
numeros.push(40);
textos.push("TS");
booleanos.push(false);

// Eliminar el último
numeros.pop();
textos.pop();
booleanos.pop();

console.log("Recorriendo números:");
for (let num of numeros) {
    console.log(num);
}

console.log("Recorriendo textos:");
for (let txt of textos) {
    console.log(txt);
}

console.log("Recorriendo booleanos:");
for (let bool of booleanos) {
    console.log(bool);
}
console.log("\n");

/**
 * EJERCICIO 3 - Crear un Type
 */
console.log("--- EJERCICIO 3 ---");
type Producto = {
    id: number;
    nombre: string;
    precio: number;
    disponible: boolean;
};

const producto1: Producto = { id: 1, nombre: "Laptop", precio: 1200, disponible: true };
const producto2: Producto = { id: 2, nombre: "Mouse", precio: 25, disponible: false };

console.log("Producto 1:", producto1);
console.log("Producto 2:", producto2);
console.log("\n");

/**
 * EJERCICIO 4 - Interfaces
 */
console.log("--- EJERCICIO 4 ---");
interface Empleado {
    nombre: string;
    cargo: string;
    salario: number;
}

const empleado1: Empleado = { nombre: "Ana", cargo: "Desarrolladora", salario: 3000 };
const empleado2: Empleado = { nombre: "Luis", cargo: "Diseñador", salario: 2500 };

console.log("Empleado 1:", empleado1);
console.log("Empleado 2:", empleado2);
console.log("\n");

/**
 * EJERCICIO 5 - Union Types
 */
console.log("--- EJERCICIO 5 ---");
function mostrarDato(dato: string | number): void {
    if (typeof dato === "string") {
        console.log("String en mayúsculas:", dato.toUpperCase());
    } else if (typeof dato === "number") {
        console.log("Número con dos decimales:", dato.toFixed(2));
    }
}

mostrarDato("typescript");
mostrarDato(3.14159);
console.log("\n");