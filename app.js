// Seleccion de inputs, btns y la img
const textoInicio = document.getElementById("texto-inicio");
const textoFinal = document.getElementById("texto-final");
const encriptarBtn = document.getElementById("encriptador");
const desencriptarBtn = document.getElementById("desencriptador");
const copiarBtn = document.getElementById("copiar-texto");
const imgCuandoInputVacio = document.getElementById("img-cuando-no-hay-input");
// Declarar e inicializar variables
let stringAEncriptar = "";
let stringEncriptado = "";
let arrayStringAEncriptar = [];
let letraSacada = ""

function stringAMinuscula() {
    stringAEncriptar = stringAEncriptar.toLowerCase();
}

function extraerString() {
    stringAEncriptar = textoInicio.value;
    stringAMinuscula();
}



function pruebaPasoDos() {
    extraerString();
    textoInicio.value = ""; // Limpia textarea
    console.log("Tiene a: " + stringAEncriptar.includes("a"));
    console.log("Tiene e: " + stringAEncriptar.includes("e"));
    console.log("Tiene i: " + stringAEncriptar.includes("i"));
    console.log("Tiene o: " + stringAEncriptar.includes("o"));
    console.log("Tiene u: " + stringAEncriptar.includes("u"));
    encriptarPrueba();
}



function encriptarPrueba() {
    console.log("String entregado: " + stringAEncriptar);
    //if (stringAEncriptar.includes("a")) {
    //    stringEncriptado = stringAEncriptar.replace("a","ai");
    //}
    
    for (let i = 0; i < stringAEncriptar.length; i++) {
        
        // if (stringAEncriptar.charAt(i) == "a") {
        //     stringAEncriptar.substring(i,i+1);
        //     console.log(stringAEncriptar);
        //     stringEncriptado = stringAEncriptar.replaceAll("a", "ai");}
        // else if (stringAEncriptar.charAt(i) == "e") {
        //     stringEncriptado = stringAEncriptar.replaceAll("e", "enter");}
        // else if (stringAEncriptar.charAt(i) == "i") {
        //     stringEncriptado = stringAEncriptar.replaceAll("i", "imes");}
        // else if (stringAEncriptar.charAt(i) == "o") {
        //     stringEncriptado = stringAEncriptar.replaceAll("o", "ober");}
        // else if (stringAEncriptar.charAt(i) == "u") {
        //     stringEncriptado = stringAEncriptar.replaceAll("u", "ufat");}    
        // }
        

        // if ((stringAEncriptar.includes("u")) ||
        //     (stringAEncriptar.includes("o")) ||
        //     (stringAEncriptar.includes("i")) ||
        //     (stringAEncriptar.includes("e")) ||
        //     (stringAEncriptar.includes("a"))) {
        //     stringEncriptado = stringAEncriptar.replaceAll("u", "ufat");
        //     if (stringAEncriptar.charAt(i) == "o") {
        //         stringEncriptado = stringAEncriptar.replaceAll("o", "ober");
        //         if (stringAEncriptar.charAt(i) == "i") {
        //             stringEncriptado = stringAEncriptar.replaceAll("i", "imes");
        //             if (stringAEncriptar.charAt(i) == "e") {
        //                 stringEncriptado = stringAEncriptar.replaceAll("e", "enter");
        //                 if (stringAEncriptar.charAt(i) == "a") {
        //                     stringEncriptado = stringAEncriptar.replaceAll("a", "ai");
        //                 }
        //             }
        //         }
        //     }
        // }


        // CON SWITCH CASE = FUNCIONA SOLO CON LA ULTIMA ESCRITA
        switch (stringAEncriptar.charAt(i)) {
            case "a":
                stringEncriptado = stringAEncriptar.replaceAll("a", "ai");
                break;
            case "e":
                stringEncriptado = stringAEncriptar.replaceAll("e", "enter");
                break;
            case "i":
                stringEncriptado = stringAEncriptar.replaceAll("i", "imes");
                break;
            case "o":
                stringEncriptado = stringAEncriptar.replaceAll("o", "ober");
                break;
            case "u":
                stringEncriptado = stringAEncriptar.replaceAll("u", "ufat");
                break;
            default:
                console.log("(Consonante o caracter especial) caso default de switch");
                break;
        }

        // CON SWITCH CASE = FUNCIONA SOLO CON LA ULTIMA ESCRITA
        // switch (stringAEncriptar.charAt(i)) {
        //     case "a": {
        //         stringEncriptado = stringAEncriptar.replaceAll("a", "ai");
        //         continue;
        //     }
        //     case "e": {
        //         stringEncriptado = stringAEncriptar.replaceAll("e", "enter");
        //         break;
        //     }
        //     case "i": {
        //         stringEncriptado = stringAEncriptar.replaceAll("i", "imes");
        //         break;
        //     }
        //     case "o": {
        //         stringEncriptado = stringAEncriptar.replaceAll("o", "ober");
        //         break;
        //     }
        //     case "u": {
        //         stringEncriptado = stringAEncriptar.replaceAll("u", "ufat");
        //         break;
        //     }
        //     default: {
        //         console.log("Consonante o caracter inválido");
        //         break;
        //     }
        // }


        // CON IF Y ELSE IF = FUNCIONA CON LA MAS CERCANA A LA PRIMERA ("a")
        // if (stringAEncriptar.charAt(i) == "a") {
        //     stringEncriptado = stringAEncriptar.replaceAll("a", "ai");
        // }
        // else if (stringAEncriptar.charAt(i) == "e") {
        //     stringEncriptado = stringAEncriptar.replaceAll("e", "enter");
        // }
        // else if (stringAEncriptar.charAt(i) == "i") {
        //     stringEncriptado = stringAEncriptar.replaceAll("i", "imes");
        // }
        // else if (stringAEncriptar.charAt(i) == "o") {
        //     stringEncriptado = stringAEncriptar.replaceAll("o", "ober");
        // }
        // else if (stringAEncriptar.charAt(i) == "u") {
        //     stringEncriptado = stringAEncriptar.replaceAll("u", "ufat");
        // }
    }
    console.log("String encriptado: " + stringEncriptado);
    //stringEncriptado = "";
    textoFinal.value = stringEncriptado;
    //return console.log("String encriptado: " + stringEncriptado);
}

function copiarTexto() {
    textoFinal.focus();
    textoFinal.select();
    document.execCommand("copy"); // EN DESUSO!!
    textoInicio.focus();
}

//encriptarBtn.onclick = alertarTextoInicio;

encriptarBtn.onclick = pruebaPasoDos;
copiarBtn.onclick = copiarTexto;