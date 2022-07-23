
function reemplazoFastFast(string,a,b) {



if (string.indexOf(a) != -1) 
return(string.replace(a,b));

}

console.log(reemplazoFastFast("algo para redactar y reemplazar", "redactar", "tirar"));

function menciona(texto,palabra) {
    if (texto.indexOf(palabra) != -1)
    return true;
}

console.log(menciona("alguna palabra para probar","probar"));


let frase = 'Hola!, soy Carli';

var licenciada = (frase.slice(11,16));

console.log(licenciada);