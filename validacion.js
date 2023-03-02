
const boton = document.querySelector(".contactform__boton");
const elements = document.querySelectorAll("input, textarea");
const form = document.getElementById("contactform");


elements.forEach(element => {
    element.addEventListener("blur", (element) => {
        valida(element.target);
        activarDesactivarBtnEnviar();
    });
});
boton.addEventListener("click", (event) => {
    event.preventDefault();
    Swal.fire({
        icon: 'success',
        title: 'Su formulario ha sido enviado',
        showConfirmButton: false,
        timer: 1500
    })
    form.reset();
});

function valida(element) {
    const tipoDeElement = element.dataset.tipo;
    const esValido = element.validity.valid;

    if (esValido) {
        element.parentElement.classList.remove("element-container--invalid");
        element.parentElement.querySelector(".element-message-error").innerHTML = "";
    } else {
        element.parentElement.classList.add("element-container--invalid");
        element.parentElement.querySelector(".element-message-error").innerHTML = mostrarMensajeDeError(tipoDeElement, element);
    }
}

function activarDesactivarBtnEnviar() {
    let activarBoton = true;

    elements.forEach(element => {
        activarBoton = element.validity.valid;
        if (!activarBoton) {
            return;
        }
    });

    if (activarBoton) {
        activarBtnEnviar(boton);
    } else {
        desactivarBtnEnviar(boton);
    }
}

const tipoErrores = [
    "valueMissing",
    "patternMismatch",
    "typeMismatch",
];

const mensajesDeError = {
    nombre: {
        valueMissing: "El campo nombre no puede estar vacio",
        patternMismatch: "Debe contener máximo 50 caracteres"
    },
    email: {
        valueMissing: "El campo correo no puede estar vacio",
        typeMismatch: "El correo no es válido"
    },
    asunto: {
        valueMissing: "El campo asunto no puede estar vacio",
        patternMismatch: "Debe contener máximo 50 caracteres"
    },
    mensaje: {
        valueMissing: "El campo mensaje no puede estar vacio"
    },

}

function mostrarMensajeDeError(tipoDeInput, input) {
    let mensaje = "";
    tipoErrores.forEach(error => {
        if (input.validity[error]) {
            mensaje = mensajesDeError[tipoDeInput][error];
        }
    });
    return mensaje;
}

function activarBtnEnviar(boton) {
    boton.removeAttribute('disabled');
}
function desactivarBtnEnviar(boton) {
    boton.setAttribute("disabled", "");
}