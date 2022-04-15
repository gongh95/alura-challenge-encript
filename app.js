// Seleccion de inputs, btns y la img
const textoInicio = document.getElementById("texto-inicio");
const textoFinal = document.getElementById("texto-final");
const encriptarBtn = document.getElementById("encriptador");
const desencriptarBtn = document.getElementById("desencriptador");
const imgCuandoInputVacio = document.getElementById("img-cuando-no-hay-input");
// Declarar e inicializar variables
let stringAEncriptar = "";



function ingresarString(textoInicio) {
    return textoInicio.includes("a","e","i","o","u");
    textoInicio.value = "" // Limpia textarea
}
//function encriptar() {}

// Funcion de prueba
function alertarTextoInicio() {
    console.log(textoInicio.value); // Consologea valor de texto ingresado en primer textarea
    textoInicio.value = "" // Limpia textarea
}

encriptarBtn.onclick = alertarTextoInicio;
desencriptarBtn.onclick = ingresarString(textoInicio.value);