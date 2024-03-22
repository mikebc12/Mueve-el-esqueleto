document.addEventListener("DOMContentLoaded", function() {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        console.log(xhr.readyState);
        if (xhr.readyState === 4) {
            console.log(xhr.readyState);
            if (xhr.status === 200) {
                // Obtener la respuesta como texto
                let xmlText = xhr.responseText;
                // Crear un nuevo objeto DOMParser
                let parser = new DOMParser();
                // Parsear el texto como un documento XML
                let xmlDoc = parser.parseFromString(xmlText, "text/xml");
                // Obtener los datos del usuario del XML
                let nombre = xmlDoc.getElementsByTagName("nombre")[0].childNodes[0].nodeValue;
                let fechaNacimiento = xmlDoc.getElementsByTagName("fecha_nacimiento")[0].childNodes[0].nodeValue;
                let correo = xmlDoc.getElementsByTagName("correo")[0].childNodes[0].nodeValue;
                let telefono = xmlDoc.getElementsByTagName("telefono")[0].childNodes[0].nodeValue;
                let nivelBaile = xmlDoc.getElementsByTagName("nivel_baile")[0].childNodes[0].nodeValue;
                let nombreUsuario = xmlDoc.getElementsByTagName("nombre_usuario")[0].childNodes[0].nodeValue;
                // Actualizar el contenido del HTML con los datos del usuario
                document.getElementById("nombre").value = nombre;
                document.getElementById("fecha_nacimiento").value = fechaNacimiento;
                document.getElementById("correo").value = correo;
                document.getElementById("telefono").value = telefono;
                document.getElementById("nivel_baile").value = nivelBaile;
                document.getElementById("username").value = nombreUsuario;
            } else {
                console.error("Error al cargar el archivo XML");
                console.log(xhr.status);
            }
        }
    };
    xhr.open("GET", "localhost/miperfil.xml", true);
    xhr.send();
});
