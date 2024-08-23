// Función para encriptar el texto
function encriptar(texto) {
    let encriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    return encriptado;
}

// Función para desencriptar el texto
function desencriptar(texto) {
    let desencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    return desencriptado;
}

// Función para copiar el texto al portapapeles
function copiarAlPortapapeles() {
    const texto = document.getElementById("resultado").innerText;
    navigator.clipboard.writeText(texto).then(() => {
        alert("Texto copiado al portapapeles");
    });
}

// Manejador de eventos para el botón de encriptar
document.getElementById("encriptar").addEventListener("click", function() {
    const texto = document.getElementById("input-entrada").value;
    const resultado = encriptar(texto);
    document.getElementById("resultado").innerText = resultado;
    document.getElementById("sin-mensaje").style.display = "none";
    document.getElementById("muneco").style.display = "none";
});

// Manejador de eventos para el botón de desencriptar
document.getElementById("desencriptar").addEventListener("click", function() {
    const texto = document.getElementById("input-entrada").value;
    const resultado = desencriptar(texto);
    document.getElementById("resultado").innerText = resultado;
    document.getElementById("sin-mensaje").style.display = "none";
});

// Manejador de eventos para el botón de copiar
document.getElementById("copiar").addEventListener("click", function() {
    copiarAlPortapapeles();
});