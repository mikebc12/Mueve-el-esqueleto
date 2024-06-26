/*Funcionalidades de acceso al DOM, aplicadas sobre micuenta.html*/

//1. getElementbyid y setattribute para colocar un enlace a la página de inicio en el logo
const enlace = document.getElementById("logo");
enlace.setAttribute("href", "../../index-logged.html");

//2. getelementbyid y removechild para eliminar el primer hijo
const list = document.getElementById("listaremove");
list.removeChild(list.firstElementChild);

//3. queryselector para que la primera coincidencia de la página se coloree de color firebrick
document.querySelector(".botones.subbotones li a").style.backgroundColor = "firebrick";

//4. queryselectorall para que el texto de todas las coincidencias sea de color negro
const collection = document.querySelectorAll(".subbotones li a");
collection.forEach(element => {
    element.style.color = "black";
});
