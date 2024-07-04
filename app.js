// Función para encriptar el texto utilizando el cifrado César
function encryptText(text) {
    const shift = 3; // Desplazamiento para el cifrado César
    return shiftText(text, shift);
}

// Función para desencriptar el texto utilizando el cifrado César
function decryptText(text) {
    const shift = 3; // Desplazamiento para el cifrado César
    return shiftText(text, -shift); // Llamada a la función shiftText con desplazamiento negativo para desencriptar
}

// Función auxiliar para aplicar el desplazamiento de caracteres
function shiftText(text, shift) {
    return text.split('').map(char => {
        const code = char.charCodeAt(0); // Obtener el código ASCII del carácter
        if (code >= 65 && code <= 90) { // Si es una letra mayúscula
            return String.fromCharCode(((code - 65 + shift) % 26 + 26) % 26 + 65); // Aplicar el cifrado César para letras mayúsculas
        } else if (code >= 97 && code <= 122) { // Si es una letra minúscula
            return String.fromCharCode(((code - 97 + shift) % 26 + 26) % 26 + 97); // Aplicar el cifrado César para letras minúsculas
        } else {
            return char; // Mantener el carácter sin cambios si no es una letra
        }
    }).join(''); // Unir el arreglo de caracteres en un string nuevamente
}

// Función principal para manejar el evento de encriptación o desencriptación
function handleProcess(isEncrypt) {
    const inputText = document.getElementById('input-text').value.trim(); // Obtener el texto de entrada del textarea y eliminar espacios en blanco al inicio y final
    if (inputText !== '') { // Verificar que haya texto ingresado
        const processedText = isEncrypt ? encryptText(inputText) : decryptText(inputText); // Encriptar o desencriptar el texto según el valor de isEncrypt
        // Construir la URL con los parámetros de texto original y texto procesado
        const url = isEncrypt ? `results.html?textoIngresado=${inputText}&textoEncriptado=${processedText}` : `results.html?textoIngresado=${processedText}&textoEncriptado=${inputText}`;
        window.location.href = url; // Redireccionar a la página de resultados con los parámetros en la URL
    } else {
        alert('Por favor, ingresa algún texto para procesar.'); // Alerta si no se ingresa texto
    }
}

// Eventos para los botones de encriptar y desencriptar
document.getElementById('encrypt-button').addEventListener('click', function() {
    handleProcess(true); // Llamar a handleProcess con true para indicar encriptación
});

document.getElementById('decrypt-button').addEventListener('click', function() {
    handleProcess(false); // Llamar a handleProcess con false para indicar desencriptación
});
