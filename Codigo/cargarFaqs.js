document.addEventListener("DOMContentLoaded", function() {
    let x = new XMLHttpRequest();
    x.open("GET", "/Datos/faqs.xml", true);
    x.onreadystatechange = function() {
        if (x.readyState === 4) {
            if (x.status === 200) {
                //Se aceptó la conexión al .xml
                let xmlDoc = x.responseXML;
                let faqs = xmlDoc.getElementsByTagName("faq");
                let faqsContainer = document.getElementById("faqs-container");
                //Se agregan las preguntas y respuestas po orden de aparición
                for (let i = 0; i < faqs.length; i++) {
                    let pregunta = faqs[i].getElementsByTagName("pregunta")[0].childNodes[0].nodeValue;
                    let respuesta = faqs[i].getElementsByTagName("respuesta")[0].childNodes[0].nodeValue;
                    let faqItem = document.createElement("div");
                    //Le damos formato
                    faqItem.innerHTML = `
                        <h3>${pregunta}</h3>
                        <p>${respuesta}</p>
                    `;
                    faqsContainer.appendChild(faqItem);
                }
            }
        }
    };
    x.send();
});