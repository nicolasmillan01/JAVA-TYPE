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


/**
 * EJERCICIO 6 - Estadísticas de Ventas
 */
console.log("--- EJERCICIO 6 ---");
const ventas = [250, 400, 150, 600, 800];

const totalVendido = ventas.reduce((acc, current) => acc + current, 0);
const ventaMasAlta = Math.max(...ventas);
const promedioVentas = totalVendido / ventas.length;

console.log("Total vendido:", totalVendido);
console.log("Venta más alta:", ventaMasAlta);
console.log("Promedio de ventas:", promedioVentas);
console.log("\n");


/**
 * EJERCICIO 7 - Catálogo de Libros
 */
console.log("--- EJERCICIO 7 ---");
const libros = [
    { id: 1, titulo: "JavaScript", disponible: true },
    { id: 2, titulo: "Python", disponible: false },
    { id: 3, titulo: "Java", disponible: true }
];

const libroId2 = libros.find(libro => libro.id === 2);
const librosDisponibles = libros.filter(libro => libro.disponible);
const titulosLibros = libros.map(libro => libro.titulo);

console.log("Libro con ID 2:", libroId2);
console.log("Libros disponibles:", librosDisponibles);
console.log("Arreglo solo con títulos:", titulosLibros);
console.log("\n");


/**
 * EJERCICIO 8 - Copias y Referencias
 */
console.log("--- EJERCICIO 8 ---");
const usuario = { nombre: "Carlos", edad: 30 };

// 1. Copia con asignación (=)
const copiaReferencia = usuario;
copiaReferencia.nombre = "Andrés";

console.log("Original modificado por referencia:", usuario.nombre);
console.log("Copia por referencia:", copiaReferencia.nombre);

// 2. Copia con Spread (...)
const copiaSpread = { ...usuario };
copiaSpread.nombre = "Felipe";

console.log("Original intacto ante Spread:", usuario.nombre);
console.log("Copia por Spread:", copiaSpread.nombre);

/* 
 * EXPLICACIÓN:
 * Al usar '=', solo se copia la "referencia" (la dirección en memoria). 
 * Si modificas la copia, el objeto original también cambia porque ambos apuntan al mismo lugar.
 * Al usar Spread (...), se crea un objeto completamente nuevo en memoria (copia superficial). 
 * Modificar la copia Spread no afecta al objeto original.
 */
console.log("\n");


/**
 * EJERCICIO 9 - Desestructuración
 */
console.log("--- EJERCICIO 9 ---");
const computador = {
    marca: "Lenovo",
    procesador: "Intel i7",
    ram: 16,
    almacenamiento: 512
};

// Extracción, renombre (almacenamiento -> ssd) y valor por defecto (tarjetaGrafica)
const { marca, ram, almacenamiento: ssd, tarjetaGrafica = "Integrada" } = computador;

console.log(`Marca: ${marca}`);
console.log(`RAM: ${ram}GB`);
console.log(`SSD (Almacenamiento renombrado): ${ssd}GB`);
console.log(`Tarjeta Gráfica (Por defecto): ${tarjetaGrafica}`);
console.log("\n");


/**
 * EJERCICIO 10 - Sistema de Gestión de Estudiantes
 */
console.log("--- EJERCICIO 10 ---");
const estudiantes2 = [
    { id: 1, nombre: "Ana", nota: 4.5, edad: 20 },
    { id: 2, nombre: "Luis", nota: 3.8, edad: 18 },
    { id: 3, nombre: "Carlos", nota: 4.9, edad: 22 },
    { id: 4, nombre: "Laura", nota: 2.9, edad: 19 }
];

// Mostrar aprobados (nota >= 3.0)
const aprobados = estudiantes2.filter(est => est.nota >= 3.0);
console.log("Aprobados:", aprobados);

// Mostrar mayores de edad
const mayoresEdad = estudiantes2.filter(est => est.edad >= 18);
console.log("Mayores de edad:", mayoresEdad);

// Arreglo únicamente con los nombres
const nombresEstudiantes = estudiantes2.map(est => est.nombre);
console.log("Nombres:", nombresEstudiantes);

// Buscar estudiante con id 3
const estudianteId3 = estudiantes2.find(est => est.id === 3);
console.log("Estudiante con ID 3:", estudianteId3);

// Calcular el promedio de todas las notas
const promedioNotas = estudiantes2.reduce((acc, est) => acc + est.nota, 0) / estudiantes2.length;
console.log("Promedio de notas:", promedioNotas.toFixed(2));

// Encontrar el estudiante con la nota más alta
const estudianteNotaAlta = estudiantes2.reduce((max, est) => (est.nota > max.nota ? est : max), estudiantes2[0]);
console.log("Estudiante con la nota más alta:", estudianteNotaAlta);

// Nuevo arreglo con propiedad "estado"
const estudiantesConEstado = estudiantes2.map(est => ({
    ...est,
    estado: est.nota >= 3.0 ? "Aprobó" : "Reprobó"
}));
console.log("Estudiantes con estado:", estudiantesConEstado);

// Copia del arreglo con Spread operator
const copiaEstudiantes2 = [...estudiantes2];
console.log("Copia del arreglo con Spread:", copiaEstudiantes2);