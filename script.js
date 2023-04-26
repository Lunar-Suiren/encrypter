const btnEncriptar = document.getElementById("botonEncriptar");
const btnDesencriptar = document.getElementById("botonDesencriptar");
const copyButton = document.getElementById('copyButton');
const input = document.getElementById("inputText");
const output = document.getElementById("outputText");
const character = document.querySelector(".character");


// funcion para encriptar el texto
function encriptarTexto(texto) {
  return texto.replace(/e/g, "enter")
              .replace(/i/g, "imes")
              .replace(/a/g, "ai")
              .replace(/o/g, "ober")
              .replace(/u/g, "ufat");
}

// funcion para desencriptar el texto
function desencriptarTexto(texto) {
  return texto.replace(/enter/g, "e")
              .replace(/imes/g, "i")
              .replace(/ai/g, "a")
              .replace(/ober/g, "o")
              .replace(/ufat/g, "u");
}

// funcion para mostrar texto en la pantalla
function mostrarTexto(texto) {
  output.value = texto;
  output.style.display = "inline-block";
  character.style.display = "none";
}

// boton de encriptar
btnEncriptar.addEventListener("click", () => {
  const texto = input.value.toLowerCase();
  const textoEncriptado = encriptarTexto(texto);
  mostrarTexto(textoEncriptado);
});

// boton de desencriptar
btnDesencriptar.addEventListener("click", () => {
  const textoEncriptado = input.value.toLowerCase();
  const textoDesencriptado = desencriptarTexto(textoEncriptado);
  mostrarTexto(textoDesencriptado);
});

// evento para ocultar la imagen 
btnEncriptar.addEventListener("click", () => {
    character.style.display = "none";
    outputText.style.display = "inline-block";
    copyButton.style.display = "inline-block";
});

// evento para el botón copiar
copyButton.addEventListener('click', () => {
  output.select();
  document.execCommand('copy');
  alert('¡Texto copiado!');
});