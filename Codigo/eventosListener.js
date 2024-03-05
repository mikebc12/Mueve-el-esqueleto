////1. EVENTO SUBMIT: COMPROBACIÓN DE CAMPOS COMPLETOS EN FORMULARIOS

window.addEventListener('submit', function(event) { //Si el usuario envía el form de registro
    event.preventDefault(); //Evitar que el formulario se envíe automáticamente
        
    //Vemos si se completaron los campos
    var form = event.target;
    var inputs = form.querySelectorAll('input'); //los inputs son todos los campos del form de estos estilos
    var camposCompletados = true;

    inputs.forEach(function(input) { //Recorremos los inputs
        if (!input.readOnly && input.value.trim() === '') {//Si al menos un campo rellenable está vacío no se permite el acceso
            camposCompletados = false;
        }
    });
    
    //Caso específico de botón de radio
    //Obtenemos todos los botones y miramos si alguno fue seleccionado
    var radioButtons = form.querySelectorAll('input[type="radio"]');
    var algunaSeleccionada=true; //Ponemos esto a falso si no hay nada seleccionado
    if (radioButtons.length > 0) {//Hay botón de radio. Se tiene que comprobar.
        var algunaSeleccionada = false;
        //Comprobamos uno a uno
        radioButtons.forEach(function(radioButton) {
            if (radioButton.checked) {
                algunaSeleccionada = true;
            }
        });
    }
    if (camposCompletados && algunaSeleccionada) { //Todos los campos fueros seleccionados y en caso de haber radio se marcó alguna opción
        var redirectURL = form.querySelector('[type="submit"]').getAttribute('href'); 
        window.location.href = redirectURL; //Redireccionamos a la página indicada en html del botón específico
    } else {
        alert('Por favor, complete todos los campos.'); // Muestra un mensaje de alerta si hay campos vacíos
    }
});


// MOUSEOVER, MOUSEOUT Y CLICK PARA SELECCIONAR UNA DE LAS RESERVAS PENDIENTES DEL USUARIO ACTUAL
document.addEventListener("DOMContentLoaded", function() {
    if (document.title === "micuenta_log") {
        var filasTabla = document.querySelectorAll("table tr");

        filasTabla.forEach(function(fila) { //Añadimos los eventos a cada fila
            fila.addEventListener("mouseover", function() { //Cambiar el color al pasar el ratón
                fila.style.backgroundColor = "#a595fc"; 
            });

            fila.addEventListener("mouseout", function() { //Devolver al color original
                fila.style.backgroundColor = ""; 
            });

            fila.addEventListener("click", function() {
                filasTabla.forEach(function(otraFila) {
                    var celdasOtraFila = otraFila.querySelectorAll("td");
                    celdasOtraFila.forEach(function(celdaOtraFila) { //Restauramos el resto de filas para poder seleccionar solo una a la vez
                        celdaOtraFila.style.color = "";
                        celdaOtraFila.style.backgroundColor="";
                    });
                });
                //Cambiamos el color de texto y fondo en la fila seleccionada
                var celdasFilaSeleccionada = fila.querySelectorAll("td");
                celdasFilaSeleccionada.forEach(function(celdaSeleccionada) {
                    celdaSeleccionada.style.color = "blue";
                    celdaSeleccionada.style.backgroundColor="#d9b8fc";
                });
            });
        });
    }
});



