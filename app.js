const Mensaje = document.querySelector("#mensaje")
const btnEncriptar = document.querySelector("#encriptar")
const btnDesencriptar = document.querySelector("#desencriptar")
const Resultado = document.querySelector("#resultado")
const btnCopiar = document.querySelector("#copiar")
const btnEscuchar = document.querySelector("#escuchar")


const encriptar = () =>{
    var mensaje = Mensaje.value;
    var mensajeEncriptado = mensaje
     .replaceAll("e" , "enter")
     .replaceAll("i" , "imes")
      .replaceAll("o" , "ober")
     .replaceAll("a" , "ai")
     .replaceAll("u" , "ufat")

     Resultado.value = mensajeEncriptado;
}

const Desencriptar = () =>{
    var mensajeEncriptado = Mensaje.value;
    var mensaje = mensajeEncriptado
    .replaceAll("enter" , "e")
     .replaceAll("imes" , "i")
      .replaceAll("ober" , "o")
     .replaceAll("ai" , "a")
     .replaceAll("ufat" , "u")

     Resultado.value = mensajeEncriptado;
}

const copiar = () =>{
    mensajeEncriptado = Resultado.value;
    navigator.clipboard.writeText(mensajeEncriptado);
}

btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = Desencriptar;
btnCopiar.onclick = copiar;