let tablaVehiculos = document.getElementById('tabla-vehiculos');
  tablaVehiculos.innerHTML = '';

  datosjs.forEach(vehiculo => {
    let fila = tablaVehiculos.insertRow();
    let celdaMatricula = fila.insertCell();
    let celdaModelo = fila.insertCell();
    let celdaColor = fila.insertCell();
    let celdaFechaMatri = fila.insertCell();

    celdaMatricula.textContent = vehiculo.matricula;
    celdaModelo.textContent = vehiculo.modelo;
    celdaColor.textContent = vehiculo.color;
    celdaFechaMatri.textContent = vehiculo.fechaMatriculacion;
    });
