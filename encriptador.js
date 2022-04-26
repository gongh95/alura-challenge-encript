// Declaración de inputs, btns e img
const textoInicio = document.getElementById("texto-inicio"),
    textoFinal = document.getElementById("texto-final"),
    encriptarBtn = document.getElementById("encriptador"),
    desencriptarBtn = document.getElementById("desencriptador"),
    copiarBtn = document.getElementById("copiar-texto"),
    modalTextoCopiado = document.getElementById("texto-copiado");

let msjAEncriptar;
let msjEncriptado;

// Se consologea todo lo del primer input
textoInicio.addEventListener("input", function () {
    msjAEncriptar = textoInicio.value;
});

// Listener de boton para encriptar
encriptarBtn.addEventListener('click', function () {
    textoFinal.value = ""; // limpiar segundo textarea siempre al principio
    msjAEncriptar = msjAEncriptar.toLowerCase(); // se convierte todo a minúscula para no tener errores
    //let msjAEncriptar = textoInicio.value; 
    console.log(`Mensaje a encriptar: "${msjAEncriptar}"`); // consologea lo que se escribio en input (textarea)
    textoInicio.value = ""; // limpia el text area
    encriptador();
    textoFinal.value = msjEncriptado; // pasar el texto codificado al segundo textarea
    console.log(`Mensaje encriptado: "${msjEncriptado}"`);
});

// mediaquerty para evitar un focus en boton copiar
const mediaQuery = window.matchMedia("(max-width: 375px)");

// Listener de boton copiar
copiarBtn.addEventListener('click', function (e) {
    e.preventDefault();
    textoFinal.focus();
    textoFinal.select();
    document.execCommand("copy"); // EN DESUSO!!
    if (!textoFinal.value == "") {
        modalTextoCopiado.classList.add("texto-copiado")
        setTimeout(() => {
            modalTextoCopiado.classList.remove("texto-copiado");
        }, 1250);
    }
    if (!mediaQuery.matches) { //evita el foco en textoInicio en version movil
        textoInicio.focus();
    }
})

let arrayDeMensaje = [];

function encriptador() {
    for (let i = 0; i < msjAEncriptar.length; i++) {
        arrayDeMensaje.push(msjAEncriptar[i]);
    }
    codificar();
    msjAEncriptar="";
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

// Funciones y declaraciones para decodificar
let msjDesencriptado;
let contieneImes = false;
// expresiones regulares para hacer match, search o test en decodificar
const imes = new RegExp("imes","g","i"),
    ai = new RegExp("ai","g","i"),
    enter = new RegExp("enter","g","i"),
    ober = new RegExp("ober","g","i"),
    ufat = new RegExp("ufat","g","i");

desencriptarBtn.addEventListener('click', function () {
    textoFinal.value = ""; // limpiar segundo textarea siempre al principio
    msjAEncriptar = textoInicio.value;
    console.log(`Mensaje a desencriptar: "${msjAEncriptar}"`); // consologea lo que se escribio en input (textarea)
    msjAEncriptar = msjAEncriptar.toLowerCase(); // se convierte todo a minúscula para no tener errores
    //textoInicio.value = ""; // limpia el text area
    decodificar();
    msjEncriptado = textoInicio.value;
    textoFinal.value = msjDesencriptado; // pasar el texto codificado al segundo textarea
    console.log(`Mensaje desencriptado: "${msjDesencriptado}"`);
});

function reemplazar(aReemplazar, reemplazo, cadena) {
    let lugarDondeReemplazar; // declaracion de variable local
    lugarDondeReemplazar = cadena.search(aReemplazar); // indice del primer match de "aReemplazar"
    msjDesencriptado = cadena.replace(aReemplazar,reemplazo);
}

function decodificar() {
    // Crédito a su autora https://github.com/maittee/sistema-de-encriptacion
    //
    msjDesencriptado = msjAEncriptar.replace(ai, "a");
    msjDesencriptado = msjDesencriptado.replace(enter,"e");
    msjDesencriptado = msjDesencriptado.replace(imes, "i");
    msjDesencriptado = msjDesencriptado.replace(ober, "o");
    msjDesencriptado = msjDesencriptado.replace(ufat, "u");
    // 
    // Crédito a su autora https://github.com/maittee/sistema-de-encriptacion

    if (msjAEncriptar.search(ai) == -1) { // si no hay nada para decodificar se copia el texto tal cual
        msjDesencriptado = msjAEncriptar;
    }
    // NO FUNCIONA COMPLETAMENTE
    // if (msjAEncriptar.search(ai) != -1) {
    //     reemplazar(ai, "a", msjAEncriptar);
    // }
    // if (msjAEncriptar.search(enter) != -1) {
    //     reemplazar(enter, "e", msjAEncriptar);
    // }
    // if (msjAEncriptar.search(imes) != -1) {
    //     reemplazar(imes, "i", msjAEncriptar);
    // }
    // if (msjAEncriptar.search(ober) != -1) {
    //     reemplazar(ober, "o", msjAEncriptar);
    // }
    // if (msjAEncriptar.search(ufat) != -1) {
    //     reemplazar(ufat, "u", msjAEncriptar);
    // }
}