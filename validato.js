document.querySelector('.Formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario si la validación falla

    const nombre = document.querySelector('input[name="nombre"]').value;
    const apellido = document.querySelector('input[name="apellido"]').value;
    const email = document.querySelector('input[name="mail"]').value;
    const fechaNacimiento = document.querySelector('input[name="fecha_nacimiento"]').value;
    const pais = document.querySelector('input[name="text"]').value;

 // Validación de nombre y apellido
    const nombreRegex = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/;
    if (!nombreRegex.test(nombre)) {
            alert("El nombre solo debe contener letras y no debe incluir espacios en blanco.");
            return;
        }
    
    if (!nombreRegex.test(apellido)) {
            alert("El apellido solo debe contener letras y no debe incluir espacios en blanco.");
            return;
        }

    // Validación de fecha de nacimiento (mínimo 18 años)
    const hoy = new Date();
    const fechaNac = new Date(fechaNacimiento);
    const edad = hoy.getFullYear() - fechaNac.getFullYear();
    const diferenciaMeses = hoy.getMonth() - fechaNac.getMonth();
    const diferenciaDias = hoy.getDate() - fechaNac.getDate();

    if (diferenciaMeses < 0 || (diferenciaMeses === 0 && diferenciaDias < 0)) {
        edad--;
    }

    if (edad < 18) {
        alert("Debes tener al menos 18 años para registrarte.");
        return;
    }

    // Validación del correo electrónico
    if (!validateEmail(email)) {
        alert("Por favor, ingresa un correo electrónico válido.");
        return;
    }

    // Si todas las validaciones pasan
    alert("Formulario enviado correctamente.");
    this.submit(); // Enviar el formulario
});

function validateEmail(email) {
    // Expresión regular básica para validar el formato del correo electrónico
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
}