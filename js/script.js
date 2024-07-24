// Variables
let nombreUsuario = prompt("Ingrese su nombre:");
let edadUsuario = parseInt(prompt("Ingrese su edad:"), 10);

// Constantes
const maxEdad = 65;
const minEdad = 18;

// Arrays
let usuarios = ["Juan", "Ana", "Luis", "Marta"];
let edades = [25, 30, 22, 35];

// Función para agregar un nuevo usuario
function agregarUsuario(nombre, edad) {
    if (edad >= minEdad && edad <= maxEdad) {
        usuarios.push(nombre);
        edades.push(edad);
        console.log(`Usuario ${nombre} agregado con éxito.`);
        alert(`Usuario ${nombre} agregado con éxito.`);
    } else {
        console.log("Edad no válida. El usuario debe tener entre 18 y 65 años.");
        alert("Edad no válida. El usuario debe tener entre 18 y 65 años.");
    }
}

// Función para mostrar los usuarios
function mostrarUsuarios() {
    console.log("Lista de usuarios:");
    let listaUsuarios = "Lista de usuarios:\n";
    for (let i = 0; i < usuarios.length; i++) {
        console.log(`${usuarios[i]} - ${edades[i]} años`);
        listaUsuarios += `${usuarios[i]} - ${edades[i]} años\n`;
    }
    alert(listaUsuarios);
}

// Función para verificar mayores de edad
function verificarMayoresDeEdad() {
    console.log("Usuarios mayores de edad:");
    let mayoresDeEdad = "Usuarios mayores de edad:\n";
    for (let i = 0; i < edades.length; i++) {
        if (edades[i] >= 18) {
            console.log(`${usuarios[i]} es mayor de edad.`);
            mayoresDeEdad += `${usuarios[i]} es mayor de edad.\n`;
        } else {
            console.log(`${usuarios[i]} no es mayor de edad.`);
            mayoresDeEdad += `${usuarios[i]} no es mayor de edad.\n`;
        }
    }
    alert(mayoresDeEdad);
}

// Función para iniciar la interacción
function iniciarInteraccion() {
    mostrarUsuarios();
    if (confirm("¿Desea agregar un nuevo usuario?")) {
        let nuevoNombre = prompt("Ingrese el nombre del nuevo usuario:");
        let nuevaEdad = parseInt(prompt("Ingrese la edad del nuevo usuario:"), 10);
        agregarUsuario(nuevoNombre, nuevaEdad);
    }
    mostrarUsuarios();
    verificarMayoresDeEdad();
}