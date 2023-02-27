export function valida(element) {
    const tipoDeelement = element.dataset.tipo;
    
    if(element.validity.valid){
        element.parentElement.classList.remove("element-container--invalid");
        element.parentElement.querySelector(".element-message-error").innerHTML = "";
    }else{
        element.parentElement.classList.add("element-container--invalid");
        element.parentElement.querySelector(".element-message-error").innerHTML = mostrarMensajeDeError(tipoDeelement, element);
    }
    
}

const tipoErrores = [
    "valueMissing",
    "typeMismatch",
];

const mensajesDeError = {
    nombre: {
        valueMissing: "El campo nombre no puede estar vacio"
    },
    email: {
        valueMissing: "El campo correo no puede estar vacio",
        typeMismatch: "El correo no es válido"
    },
    asunto: {
        valueMissing: "El campo asunto no puede estar vacio",
    },
    mensaje:{
        valueMissing: "El campo mensaje no puede estar vacio",
    }
    
}

function mostrarMensajeDeError(tipoDeInput, input){
    let mensaje = "";
    tipoErrores.forEach(error =>{
        if(input.validity[error]){
            mensaje = mensajesDeError[tipoDeInput][error];
        }
    })

    return mensaje;
}






