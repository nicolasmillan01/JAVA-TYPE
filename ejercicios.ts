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


/**
 * EJERCICIO 6 - Enums
 */
console.log("--- EJERCICIO 6 ---");
enum EstadoPedido {
    Pendiente = "Pendiente",
    EnProceso = "En Proceso",
    Enviado = "Enviado",
    Entregado = "Entregado"
}

let miPedido: EstadoPedido = EstadoPedido.Enviado;
console.log("Estado de mi pedido:", miPedido);
console.log("\n");

/**
 * ==========================================================
 */

/**
 * EJERCICIO 7 - Clases
 */
console.log("--- EJERCICIO 7 ---");
class Vehiculo {
    marca: string;
    modelo: string;

    constructor(marca: string, modelo: string) {
        this.marca = marca;
        this.modelo = modelo;
    }

    mostrarInformacion(): void {
        console.log(`Vehículo: ${this.marca} - Modelo: ${this.modelo}`);
    }
}

const auto1 = new Vehiculo("Toyota", "Corolla");
const auto2 = new Vehiculo("Ford", "Fiesta");

auto1.mostrarInformacion();
auto2.mostrarInformacion();
console.log("\n");

/**
 * EJERCICIO 8 - Herencia
 */
console.log("--- EJERCICIO 8 ---");
class Persona {
    nombre: string;
    edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }
}

class Estudiante extends Persona {
    carrera: string;

    constructor(nombre: string, edad: number, carrera: string) {
        super(nombre, edad); // super() llama al constructor de la clase padre
        this.carrera = carrera;
    }

    mostrarInfoCompleta(): void {
        console.log(`Estudiante: ${this.nombre}, Edad: ${this.edad}, Carrera: ${this.carrera}`);
    }
}

const estudiante1 = new Estudiante("Laura", 21, "Ingeniería de Software");
estudiante1.mostrarInfoCompleta();
console.log("\n");

/**
 * EJERCICIO 9 - Generics
 */
console.log("--- EJERCICIO 9 ---");
function obtenerPrimero<T>(arreglo: T[]): T | undefined {
    return arreglo[0];
}

console.log("Primer número:", obtenerPrimero([100, 200, 300]));
console.log("Primer string:", obtenerPrimero(["A", "B", "C"]));
console.log("Primer booleano:", obtenerPrimero([true, false]));
console.log("\n");

/**
 * EJERCICIO 10 - Sistema de Usuarios
 */
console.log("--- EJERCICIO 10 ---");
// 1. Crear Type
type Usuario = {
    id: number;
    nombre: string;
    edad: number;
    activo: boolean;
};

// 2. Arreglo tipado
const usuarios: Usuario[] = [];

// 3. Función agregar
function agregarUsuario(usuario: Usuario): void {
    usuarios.push(usuario);
}

// 4. Función buscar por ID
function buscarUsuario(id: number): Usuario | undefined {
    return usuarios.find(u => u.id === id);
}

// 5. Función filtrar activos
function obtenerUsuariosActivos(): Usuario[] {
    return usuarios.filter(u => u.activo);
}

// Pruebas del sistema
agregarUsuario({ id: 1, nombre: "Carlos", edad: 30, activo: true });
agregarUsuario({ id: 2, nombre: "María", edad: 25, activo: false });
agregarUsuario({ id: 3, nombre: "Pedro", edad: 28, activo: true });

console.log("Usuario encontrado (ID 2):", buscarUsuario(2));
console.log("Usuarios activos:", obtenerUsuariosActivos());

// 6. Mostrar el arreglo final
console.log("Arreglo final de usuarios:", usuarios);

export {};