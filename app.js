import { valida } from "./validacion.js";


const elements = document.querySelectorAll("input, textarea");

elements.forEach( element => {
    element.addEventListener("blur", (element) => {
        valida(element.target);
    });
});