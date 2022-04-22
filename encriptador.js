// Declaración de inputs, btns e img
const textoInicio = document.getElementById("texto-inicio");
const textoFinal = document.getElementById("texto-final");
const encriptarBtn = document.getElementById("encriptador");
const desencriptarBtn = document.getElementById("desencriptador");
const copiarBtn = document.getElementById("copiar-texto");
const modalTextoCopiado = document.getElementById("texto-copiado");

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
    console.log(msjAEncriptar); // consologea lo que se escribio en input (textarea)
    textoInicio.value = ""; // limpia el text area
    encriptador();
    textoFinal.value = msjEncriptado; // pasar el texto codificado al segundo textarea
    console.log(msjEncriptado);
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

let msjDesencriptado;

desencriptarBtn.addEventListener('click', function () {
    textoFinal.value = ""; // limpiar segundo textarea siempre al principio
    msjAEncriptar = textoInicio.value;
    msjAEncriptar = msjAEncriptar.toLowerCase(); // se convierte todo a minúscula para no tener errores
    //textoInicio.value = ""; // limpia el text area
    decodificar();
    textoFinal.value = msjDesencriptado; // pasar el texto codificado al segundo textarea
});


function decodificar() {
    if (msjAEncriptar.includes("ai")) {
        console.log("Esta frase incluye `ai`");
        let quePasa = msjAEncriptar.replaceAll("ai", "a");
        console.log(quePasa);
    }
    if (msjAEncriptar.includes("enter")) {
        console.log("Esta frase incluye `enter`");
        let quePasa1 = msjAEncriptar.replaceAll("enter", "e");
        console.log(quePasa1);
    }
}


// _________________________________________

// let arrayDeMensajeDesencriptar = [];

// function desencriptador() {
//     for (let i = 0; i < msjADesencriptar.length; i++) {
//         arrayDeMensajeDesencriptar.push(msjADesencriptar[i]);
//     }
//     decodificar();
// }

// function decodificar() {
//     for (let i = 0; i < arrayDeMensajeDesencriptar.length; i++) {
//         if (arrayDeMensajeDesencriptar[i] == "ai") {
//             let cambioEnArray = arrayDeMensajeDesencriptar.splice(i, 2, "a");
//         }
//         if (arrayDeMensajeDesencriptar[i] == "enter") {
//             let cambioEnArray = arrayDeMensajeDesencriptar.splice(i, 5, "e");
//         }
//         if (arrayDeMensajeDesencriptar[i] == "imes") {
//             let cambioEnArray = arrayDeMensajeDesencriptar.splice(i, 4, "i");
//         }
//         if (arrayDeMensajeDesencriptar[i] == "ober") {
//             let cambioEnArray = arrayDeMensajeDesencriptar.splice(i, 4, "o");
//         }
//         if (arrayDeMensajeDesencriptar[i] == "ufat") {
//             let cambioEnArray = arrayDeMensajeDesencriptar.splice(i, 4, "u");
//         }
//     }
//     console.log(arrayDeMensajeDesencriptar);

//     msjDesencriptado = arrayDeMensajeDesencriptar.join("");
//     arrayDeMensajeDesencriptar = [];
// };