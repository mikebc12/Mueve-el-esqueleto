/*Función con la que cargamos los elementos de faqs.xml en el apartado FAQs de asistencia.html mediante XMLHttpRequest()*/
document.addEventListener("DOMContentLoaded", function() {
    let x = new XMLHttpRequest();
    x.open("GET", "/Datos/faqs.xml", true);
    x.onreadystatechange = function() {
        if (x.readyState === 4) {
            if (x.status === 200) {
                //Se obtuvo la conexión al .xml
                let xmlDoc = x.responseXML;
                let faqs = xmlDoc.getElementsByTagName("faq");
                let faqsContainer = document.getElementById("faqs-container");
                //Se agregan las preguntas y respuestas po orden de aparición
                for (let i = 0; i < faqs.length; i++) {
                    let pregunta = faqs[i].getElementsByTagName("pregunta")[0].childNodes[0].nodeValue;
                    let respuesta = faqs[i].getElementsByTagName("respuesta")[0].childNodes[0].nodeValue;
                    let faqItem = document.createElement("div");
                    //Etiquetamos correctamente los elementos
                    faqItem.innerHTML = `
                        <h3>${pregunta}</h3>
                        <p>${respuesta}</p>
                    `;
                    //E insertamos en el contendor de faqs del .html
                    faqsContainer.appendChild(faqItem);
                }
            }
        }
    };
    //Enviamos la solicitud
    x.send();
});