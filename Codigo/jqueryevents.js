/*Funciones con las que incluímos código JES6 y objetos jQuery*/

$(document).ready(() => {
    $('#lvlbaile').on('input', () => {//Label que indica el nivel seleccionado en la barra de los forms
        switch (parseInt($('#lvlbaile').val())) {
            case 0:
                $('#nivelTextoSpan').text("Básico");
                break;
            case 1:
                $('#nivelTextoSpan').text("Medio");
                break;
            case 2:
                $('#nivelTextoSpan').text("Avanzado");
                break;
            default:
                $('#nivelTextoSpan').text("Desconocido");
                break;
        }
    });

    //Obtenemos el título de cada artículo y rellenamos el menú de navegación de la página con ello 
    $('article h2').each((index, element) => { //Miramos cada h2 de cada article
        //obtenemos el texto sin formato
        let text = $(element).text();
        //Y la url actual para poder generar el href de cada subapartado.
        //Cortamos tras # porque hay casos en los que accedemos a la página via hiperenlaces y no funcionaría correctamente los botones
        let currentPageUrl = window.location.href.split('#')[0];
        //Tenemos tres casos:
        if (document.title === "cursos_log" || document.title === "cursos_nolog" || document.title === "asistencia_log" || document.title === "asistencia_sinlog" ) {
            //Caso 1: página de cursos y asistencia. 
            //En el primer caso al hacer div en columnas tenemos que buscar el id en el nodo hijo de h2.
            //En el segundo caso, como hacemos XMLHttpRequest para obtener la información que mostrar nos encontramos con el mismo caso.
            //Obtenemos el hijo e insertamos su id para el href
            let child = element.firstChild;
            let listItem = $('<li>').html(`<a href="${currentPageUrl}#${child.id}">${text}</a>`);
            $('aside ul').append(listItem);
        } else if (document.title === "usolibre_log" || document.title === "usolibre_nolog") {
            //Caso 2: pagina de uso libre. Al implementar bootstrap tenemos que generar los elementos de una forma distinta.
            let child = element.firstChild;
            let listItem = $('<a>').attr('href', `${currentPageUrl}#${child.id}`).addClass('list-group-item list-group-item-action').text(text);
            $('aside').append(listItem);         
        }else {
            //Caso 3: el id lo obtenemos directamente del elemento h2
            let listItem = $('<li>').html(`<a href="${currentPageUrl}#${element.id}">${text}</a>`);
            $('aside ul').append(listItem);
        }
    });

    // Al hacer hover con el ratón sobre cualquier botón este se resalta
    document.querySelectorAll(".botones li a, .nolistboton").forEach(button => {
        //Hay botones con el texto de color negro y otros de color blanco
        //Controlamos cada caso para resaltar con el color opuesto
        if (button.style.color === "black") { //El texto es negro
            //Al hacer mouseenter resaltamos en blanco
            button.addEventListener("mouseenter", () => {
                button.style.color = "white";
            });
            //Al sacar el cursor vuelve a negro
            button.addEventListener("mouseleave", () => {
                button.style.color = "black";
            });
        } else { //El texto es blanco
            //Al hacer mouseenter resaltamos en negro
            button.addEventListener("mouseenter", () => {
                button.style.color = "black";
            });
            //Al sacar el cursor vuelve a blanco
            button.addEventListener("mouseleave", () => {
                button.style.color = "";
            });
        }
    });
});