/**
 * EJERCICIO 1 - Calculadora Básica
 */
console.log("--- EJERCICIO 1 ---");
function calculadora(num1, num2, operador) {
    if (operador === "/" && num2 === 0) {
        return "Error: No se puede dividir por cero.";
    }
    
    switch (operador) {
        case "+": return num1 + num2;
        case "-": return num1 - num2;
        case "*": return num1 * num2;
        case "/": return num1 / num2;
        default: return "Operador no válido.";
    }
}

console.log('Suma (10 + 5):', calculadora(10, 5, "+"));
console.log('Resta (10 - 5):', calculadora(10, 5, "-"));
console.log('Multiplicación (10 * 5):', calculadora(10, 5, "*"));
console.log('División (10 / 5):', calculadora(10, 5, "/"));
console.log('División por cero (10 / 0):', calculadora(10, 0, "/"));
console.log("\n");


/**
 * EJERCICIO 2 - Tabla de Multiplicar
 */
console.log("--- EJERCICIO 2 ---");
function tablaMultiplicar(numero, limite) {
    console.log(`Tabla de Multiplicar del ${numero} al ${limite}:`);
    for (let i = 1; i <= limite; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}
tablaMultiplicar(2, 15);
console.log("\n");


/**
 * EJERCICIO 3 - Gestión de Producto
 */
console.log("--- EJERCICIO 3 ---");
const productos = ["Laptop", "Mouse", "Teclado"];
productos.push("Monitor");        // Agrega al final
productos.unshift("Audífonos");   // Agrega al inicio
productos.pop();                  // Elimina el último elemento (Monitor)
console.log("Arreglo final de productos:", productos);
console.log("\n");


/**
 * EJERCICIO 4 - Inventario de Estudiantes
 */
console.log("--- EJERCICIO 4 ---");
const estudiante = {
    nombre: "Laura",
    edad: 20,
    carrera: "Ingeniería",
    materias: ["Matemáticas", "Programación"]
};

estudiante.edad = 21; // Cambiar edad
estudiante.materias.push("Bases de Datos"); // Agregar materia

console.log("Propiedades del estudiante usando Object.entries():");
Object.entries(estudiante).forEach(([clave, valor]) => {
    console.log(`${clave}: ${valor}`);
});
console.log("\n");


/**
 * EJERCICIO 5 - Filtrar Empleados
 */
console.log("--- EJERCICIO 5 ---");
const empleados = [
    { nombre: "Ana", salario: 3000 },
    { nombre: "Luis", salario: 5000 },
    { nombre: "Pedro", salario: 2500 },
    { nombre: "Sara", salario: 7000 }
];

const empleadosBienPagados = empleados.filter(emp => emp.salario >= 4000);
console.log("Empleados con salario >= 4000:", empleadosBienPagados);
console.log("\n");