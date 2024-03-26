/*Función con la que cargamos los elementos de miempresa.json a laempresa.html empleando fetch api*/
document.addEventListener("DOMContentLoaded", function() {
  fetch('/Datos/miempresa.json')
      .then(response => response.json())
      .then(data => {
        //Apartado de historia
        let historiaContainer = document.querySelector('.contenedor');
        historiaContainer.innerHTML = data.historia;
        
        //Apartado de profesores
        //Cada profesor tendrá su contenedor particular
        //Obtenemos el encabezado de la sección, generamos los contenedores y los poblamos
        const profesoresContainer = document.querySelector('#profesores');
        //Para cada profesor en el json file
        data.profesores.forEach(profesor => {
            //Su div y clase contprofe para el estilo del css
            const divProfesor = document.createElement('div');
            divProfesor.classList.add('contprofe');
            //Su imagen
            const imgProfesor = document.createElement('img');
            imgProfesor.src = profesor.imagen;
            imgProfesor.alt = profesor.nombre;
            imgProfesor.width = "259";
            imgProfesor.height = "194";
            imgProfesor.style.breakAfter = 'column';
            //Su nombre como título
            const h3Profesor = document.createElement('h3');
            h3Profesor.textContent = profesor.nombre;
            h3Profesor.style.fontSize = '1em';
            //Su edad, especialidad y descripción
            const edadProfesor = document.createElement('p');
            edadProfesor.textContent = `Edad: ${profesor.edad} años`;
            edadProfesor.style.fontSize = '0.75em'; 
            edadProfesor.style.fontWeight = 'normal';
        
            const especialidadProfesor = document.createElement('p');
            especialidadProfesor.textContent = `Especialidad: ${profesor.especialidad}`;
            especialidadProfesor.style.fontSize = '0.75em'; 
            especialidadProfesor.style.fontWeight = 'normal';
        
            const descripcionProfesor = document.createElement('p');
            descripcionProfesor.textContent = profesor.descripcion;
            descripcionProfesor.style.fontSize = '0.75em'; 
            descripcionProfesor.style.fontWeight = 'normal';
            //Agregamos los elementos al div
            divProfesor.appendChild(imgProfesor);
            divProfesor.appendChild(h3Profesor);
            divProfesor.appendChild(edadProfesor);
            divProfesor.appendChild(especialidadProfesor);
            divProfesor.appendChild(descripcionProfesor);
            //Y agregamos el div a la sección de profesores
            profesoresContainer.appendChild(divProfesor);
        });
            // Apartado de instalaciones
            const instalacionesContainer = document.querySelector('#instalaciones');
            //Al contrario que en profesores, todas las instalaciones están en el mismo contenedor
            let instalacionesDiv = document.createElement('div');
            instalacionesDiv.classList.add('continstalas'); //Le aplicamos la clase para el estilo del css
            //Recorremos todas las instalaciones encontradas en el .json
            data.instalaciones.forEach(instalacion => {
                //Creamos su caja particular e insertamos la imagen asociada
                const divInstalacion = document.createElement('div');
                const imgInstalacion = document.createElement('img');
                imgInstalacion.src = instalacion.imagen;
                imgInstalacion.alt = instalacion.nombre;
                imgInstalacion.width = "259";
                imgInstalacion.height = "194";
                imgInstalacion.style.breakBefore = instalacion.nombre === "Aula A4" ? 'column' : 'none';
                //Insertamos el nombre de la instalación y sus atributos/descripción
                const h3Instalacion = document.createElement('h3');
                h3Instalacion.textContent = instalacion.nombre;
                h3Instalacion.style.fontSize = '1em';
                const capacidadInstalacion = document.createElement('p');
                //Realizamos esta comprobación lógica para el textContent porque no todas las instalaciones tienen exactamente los mismos atributos
                //Las aulas tienen capacidad y tamaño, los vestuarios capacidad y detalles y el almacén solo detalles
                capacidadInstalacion.textContent = instalacion.capacidad ? `Capacidad: ${instalacion.capacidad} personas` : '';
                capacidadInstalacion.style.fontSize = '0.75em'; 
                capacidadInstalacion.style.fontWeight = 'normal';
                const tamañoInstalacion = document.createElement('p');
                tamañoInstalacion.textContent = instalacion.tamaño ? `Tamaño: ${instalacion.tamaño}` : '';
                tamañoInstalacion.style.fontSize = '0.75em'; 
                tamañoInstalacion.style.fontWeight = 'normal';
                const detallesInstalacion = document.createElement('p');
                detallesInstalacion.textContent = instalacion.detalles ? instalacion.detalles : '';
                detallesInstalacion.style.fontSize = '0.75em'; 
                detallesInstalacion.style.fontWeight = 'normal';
                //Agregamos todos los elementos al bloque
                divInstalacion.appendChild(imgInstalacion);
                divInstalacion.appendChild(h3Instalacion);
                divInstalacion.appendChild(capacidadInstalacion);
                divInstalacion.appendChild(tamañoInstalacion);
                divInstalacion.appendChild(detallesInstalacion);
                instalacionesDiv.appendChild(divInstalacion);
            });
            //Y lo insertamos en el general de instalaciones
            instalacionesContainer.appendChild(instalacionesDiv);
        })
});
