// Declaración de inputs, btns e img
const textoInicio = document.getElementById("texto-inicio");
const textoFinal = document.getElementById("texto-final");
const encriptarBtn = document.getElementById("encriptador");
const desencriptarBtn = document.getElementById("desencriptador");
const copiarBtn = document.getElementById("copiar-texto");
const modalTextoCopiado = document.getElementById("texto-copiado");

let msjEncriptado;
//const msjAEncriptar = textoInicio.value;

// Se consologea todo lo del primer input
textoInicio.addEventListener("input", function () {
    msjAEncriptar = textoInicio.value;
});

// Listener de boton para encriptar
encriptarBtn.addEventListener('click', function () {
    textoFinal.value = ""; // limpiar segundo textarea siempre al principio
    msjAEncriptar = msjAEncriptar.toLowerCase(); // se convierte todo a minúscula para no tener errores
    //let msjAEncriptar = textoInicio.value; 
    console.log(msjAEncriptar); // consologea lo que se escribio en input (textarea)
    textoInicio.value = ""; // limpia el text area
    encriptador();
    textoFinal.value = msjEncriptado; // pasar el texto codificado al segundo textarea

});

// Listener de boton copiar
copiarBtn.addEventListener('click', function () {
    textoFinal.focus();
    textoFinal.select();
    document.execCommand("copy"); // EN DESUSO!!
    modalTextoCopiado.classList.add("texto-copiado")
    setTimeout(() => {
        modalTextoCopiado.classList.remove("texto-copiado");
    }, 1250);
    textoInicio.focus();
})

let arrayDeMensaje = [];

function encriptador() {
    for (let i = 0; i < msjAEncriptar.length; i++) {
        arrayDeMensaje.push(msjAEncriptar[i]);
    }
    codificar();
}

function codificar() {
    for (let i = 0; i < arrayDeMensaje.length; i++) {
        if (arrayDeMensaje[i] == "a") {
            let cambioEnArray = arrayDeMensaje.splice(i, 1, "ai");
        }
        if (arrayDeMensaje[i] == "e") {
            let cambioEnArray = arrayDeMensaje.splice(i, 1, "enter");
        }
        if (arrayDeMensaje[i] == "i") {
            let cambioEnArray = arrayDeMensaje.splice(i, 1, "imes");
        }
        if (arrayDeMensaje[i] == "o") {
            let cambioEnArray = arrayDeMensaje.splice(i, 1, "ober");
        }
        if (arrayDeMensaje[i] == "u") {
            let cambioEnArray = arrayDeMensaje.splice(i, 1, "ufat");
        }
    }

    msjEncriptado = arrayDeMensaje.join("");
    arrayDeMensaje = [];
};