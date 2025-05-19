document.addEventListener('DOMContentLoaded', function() {
    //cargarDatosVehiculos('vehiculos.json');
    mostrarDatosVehiculos(datosjs)
});

async function cargarDatosVehiculos(urlArchivoJson) {
  try {
        let respuesta = await fetch(urlArchivoJson);
        if (!respuesta.ok) {
            throw new Error("Error al cargar archivo: "+respuesta.status);
        }
        let datos = await respuesta.json();
        mostrarDatosVehiculos(datos);
    } catch (error) {
        console.error('Error al cargar los datos:', error);
        document.getElementById('tabla-vehiculos').innerHTML = '<tr><td colspan="4">Error al cargar los datos.</td></tr>';
    }
}

function mostrarDatosVehiculos(vehiculos) {
    let tablaVehiculos = document.getElementById('tabla-vehiculos');
    tablaVehiculos.innerHTML = '';

    vehiculos.forEach(vehiculo => {
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
}

let datosjs = [
  {
    "matricula": "DEF5678",
    "color": "Azul",
    "modelo": "Toyota Corolla",
    "fechaMatriculacion": "2023-03-20"
  },
  {
    "matricula": "GHI9012",
    "color": "Blanco",
    "modelo": "Honda Civic",
    "fechaMatriculacion": "2021-11-01"
  },
  {
    "matricula": "JKL3456",
    "color": "Negro",
    "modelo": "BMW X5",
    "fechaMatriculacion": "2024-05-01"
  },
  {
    "matricula": "MNO7890",
    "color": "Gris",
    "modelo": "Audi A4",
    "fechaMatriculacion": "2022-08-10"
  },
  {
    "matricula": "PQR1234",
    "color": "Verde",
    "modelo": "Volkswagen Golf",
    "fechaMatriculacion": "2023-06-25"
  },
  {
    "matricula": "STU5678",
    "color": "Amarillo",
    "modelo": "Peugeot 208",
    "fechaMatriculacion": "2020-12-05"
  },
  {
    "matricula": "VWX9012",
    "color": "Naranja",
    "modelo": "Seat León",
    "fechaMatriculacion": "2024-02-14"
  },
  {
    "matricula": "YZA2345",
    "color": "Blanco",
    "modelo": "Renault Clio",
    "fechaMatriculacion": "2021-07-01"
  },
  {
    "matricula": "BCD6789",
    "color": "Rojo",
    "modelo": "Fiat 500",
    "fechaMatriculacion": "2023-09-30"
  },
  {
    "matricula": "ABC1234",
    "color": "Azul",
    "modelo": "Ford Fiesta",
    "fechaMatriculacion": "2022-01-15"
  }
];