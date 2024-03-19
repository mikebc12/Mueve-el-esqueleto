//Label que indica el nivel seleccionado en la barra de los forms
$(document).ready(() => {
    $('#lvlbaile').on('input', () => {
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
        let currentPageUrl = window.location.href;

        //Tenemos tres casos:
        if (document.title === "cursos_log" || document.title === "cursos_nolog") {
            //Caso 1: página de cursos. Al hacer div en columnas tenemos que buscar el id en el nodo hijo de h2.
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
            //Caso 2: el id lo obtenemos directamente del elemento h2
            let listItem = $('<li>').html(`<a href="${currentPageUrl}#${element.id}">${text}</a>`);
            $('aside ul').append(listItem);
        }
    });
});