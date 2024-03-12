//Label que indica el nivel seleccionado en la barra de los forms
$(document).ready(function() {
    $('#lvlbaile').on('input', function() {
        switch (parseInt($(this).val())) {
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
});