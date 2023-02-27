//Haz tú validación en javascript acá
var mySpan = document.getElementsByTagName('span')[0];
var myInput = document.getElementsByTagName('input')[0];
var cierre = document.getElementsByTagName('span')[1];
myInput.addEventListener('focus', subirSpan);
myInput.addEventListener('blur', bajarSpan);
myInput.addEventListener('keyup', mostrarX);
cierre.addEventListener('click', borrar_campo);
function subirSpan() {
    if (myInput.value == "") {
        mySpan.className += " foco";
    } else {
        mySpan.className = "foco";
    }
}
function bajarSpan() {
    if (myInput.value == "") {
        mySpan.className = "";
    } else {
        mySpan.className += " relleno";
    }
}
function mostrarX() {
    if (!myInput.value == "") {
        cierre.className += " cierre_visible"
    } else {
        cierre.className = "cierre"
    }
}
function borrar_campo() {
    myInput.value = "";
    mostrarX();
    bajarSpan();
}