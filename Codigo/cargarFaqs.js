document.addEventListener("DOMContentLoaded", function() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "/Datos/faqs.xml", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                let xmlDoc = xhr.responseXML;
                let faqs = xmlDoc.getElementsByTagName("faq");
                let faqsContainer = document.getElementById("faqs-container");

                // Agregar el encabezado <h2>FAQs</h2>
                let faqsHeader = document.createElement("h2");
                faqsHeader.textContent = "FAQs";
                faqsContainer.appendChild(faqsHeader);
                // Agregar las preguntas y respuestas
                for (let i = 0; i < faqs.length; i++) {
                    let pregunta = faqs[i].getElementsByTagName("pregunta")[0].childNodes[0].nodeValue;
                    let respuesta = faqs[i].getElementsByTagName("respuesta")[0].childNodes[0].nodeValue;

                    let faqItem = document.createElement("div");
                    faqItem.classList.add("faq-item");
                    faqItem.innerHTML = `
                        <h3>${pregunta}</h3>
                        <p>${respuesta}</p>
                    `;
                    faqsContainer.appendChild(faqItem);
                }
            } else {
                alert('Error al cargar el xml: '+xhr.status); // Muestra un mensaje de alerta si hay campos vacíos
            }
        }
    };
    xhr.send();
});
