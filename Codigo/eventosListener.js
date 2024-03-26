/*Funciones con las que controlamos diferentes eventos*/

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
    if (radioButtons.length > 0) {//Hay botón de radio en el form. Se tiene que comprobar.
        var algunaSeleccionada = false;
        //Comprobamos uno a uno
        radioButtons.forEach(function(radioButton) {
            if (radioButton.checked) {//Se seleccionó uno. Ponemos el check a true.
                algunaSeleccionada = true;
            }
        });
    }
    if (camposCompletados && algunaSeleccionada) { //Todos los campos fueros seleccionados y en caso de haber radio se marcó alguna opción. Aceptamos el formulario
        var redirectURL = form.querySelector('[type="submit"]').getAttribute('href'); 
        window.location.href = redirectURL; //Redireccionamos a la página indicada en html del botón específico
    } else {
        alert('Complete los campos para continuar.'); // Muestra un mensaje de alerta si hay campos vacíos
    }
});


//2. MOUSEOVER, MOUSEOUT Y CLICK PARA SELECCIONAR UNA DE LAS RESERVAS PENDIENTES DEL USUARIO ACTUAL
document.addEventListener("DOMContentLoaded", function() {
    if (document.title === "micuenta_log") {
        var filasTabla = document.querySelectorAll("table tr"); //Seleccionamos todas las filas de la tabla de reservas
    
        //Comenzamos a aplicar los eventos desde la segunda fila, porque la primera es la cabecera
        for (let i = 1; i < filasTabla.length; i++) {
            let fila = filasTabla[i];
            fila.addEventListener("mouseover", function() { //Cambiar el color al pasar el ratón
                fila.style.backgroundColor = "#a595fc"; 
            });

            fila.addEventListener("mouseout", function() { //Devolver al color original al sacar el ratón
                fila.style.backgroundColor = ""; 
            });

            fila.addEventListener("click", function() { //Cambiar de color al hacer click
                //Solo se puede seleccionar una fila a la vez. Hay que restaurar las demás a su color y estilo originales 
                filasTabla.forEach(function(otraFila) { //Vamos fila a fila
                    var celdasOtraFila = otraFila.querySelectorAll("td"); //Seleccionamos y recorremos sus celdas 
                    celdasOtraFila.forEach(function(celdaOtraFila) { 
                        if (otraFila === fila) {//Si la fila que estamos recorriendo es la fila sobre la que se hizo click, cambia su estilo
                            celdaOtraFila.style.color = "blue";
                            celdaOtraFila.style.backgroundColor="#d9b8fc";
                        }else{//Si no, se restablece su estilo al por defecto
                            celdaOtraFila.style.color = "";
                            celdaOtraFila.style.backgroundColor="";
                        }
                    });
                });
            });
        };
    }
});