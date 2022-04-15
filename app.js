// Seleccion de inputs, btns y la img
const textoInicio = document.getElementById("texto-inicio");
const textoFinal = document.getElementById("texto-final");
const encriptarBtn = document.getElementById("encriptador");
const desencriptarBtn = document.getElementById("desencriptador");
const imgCuandoInputVacio = document.getElementById("img-cuando-no-hay-input");
// Declarar e inicializar variables
let stringAEncriptar = "";
let stringEncriptado = "";


function prueba() {
    stringAEncriptar = textoInicio.value;
}
function pruebaPasoDos() {
    prueba();
    textoInicio.value = ""; // Limpia textarea
    console.log(stringAEncriptar.includes("a"));
    console.log(stringAEncriptar.includes("e"));
    console.log(stringAEncriptar.includes("i"));
    console.log(stringAEncriptar.includes("o"));
    console.log(stringAEncriptar.includes("u"));
}

function encriptar() {
    switch (stringAEncriptar.includes()) {
        case "a":
            stringEncriptado = stringAEncriptar.replace("a", "ai");
            console.log(stringEncriptado);
            break;
        case "e":
            stringEncriptado = stringAEncriptar.replace("e", "enter");
            break;
        case "i":
            stringEncriptado = stringAEncriptar.replace("i", "imes");
            break;
        case "o":
            stringEncriptado = stringAEncriptar.replace("o", "ober");
            break;
        case "u":
            stringEncriptado = stringAEncriptar.replace("u", "ufat");
            break;
        default:
            break;
    }
}
//function encriptar() {}

// Funcion de prueba
function alertarTextoInicio() {
    console.log(textoInicio.value); // Consologea valor de texto ingresado en primer textarea
    textoInicio.value = "" // Limpia textarea
}

//encriptarBtn.onclick = alertarTextoInicio;
encriptarBtn.onclick = pruebaPasoDos;