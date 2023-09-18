
//declaro variables globales
let nombre, disparo, gambeta, tecnica, posicionamiento,estadoFisico, temperaturaPectoral, quite, arquero, promedio;

// función promediar habilidad de un jugador

function promediarHabilidades(n1, n2, n3, n4, n5, n6, n7, n8){

  let promedio = (n1+n2+n3+n4+n5+n6+n7+n8)/8;
  return promedio.toFixed(1)

}
// creo array con la lista de jugadores
let listaJugadores = [];
//creo arrays para equipos
let equipo1 = [];
let equipo2 = [];

// creo función para agregar objeto "jugador" mediante un formulario
  function agregarJugador() {
      let nombreInput = document.getElementById("nombreInput");
      let disparoInput = document.getElementById("disparoInput");
      let gambetaInput = document.getElementById("gambetaInput");
      let tecnicaInput = document.getElementById("tecnicaInput");
      let posicionamientoInput = document.getElementById("posicionamientoInput");
      let estadoFisicoInput = document.getElementById("estadoFisicoInput");
      let temperaturaPectoralInput = document.getElementById("temperaturaPectoralInput");
      let quiteInput = document.getElementById("quiteInput");
      let arqueroInput = document.getElementById("arqueroInput");

      nombre = nombreInput.value;
      disparo = parseInt(disparoInput.value);
      gambeta = parseInt(gambetaInput.value);
      tecnica = parseInt(tecnicaInput.value);
      posicionamiento = parseInt(posicionamientoInput.value);
      estadoFisico = parseInt(estadoFisicoInput.value);
      temperaturaPectoral = parseInt(temperaturaPectoralInput.value);
      quite = parseInt(quiteInput.value);
      arquero = parseInt(arqueroInput.value);
      promedio = promediarHabilidades(disparo, gambeta, tecnica, posicionamiento, estadoFisico, temperaturaPectoral, quite, arquero);

        // Verificar si los valores están dentro del rango permitido
  if (
    disparo >= 1 && disparo <= 10 &&
    gambeta >= 1 && gambeta <= 10 &&
    tecnica >= 1 && tecnica <= 10 &&
    posicionamiento >= 1 && posicionamiento <= 10 &&
    estadoFisico >= 1 && estadoFisico <= 10 &&
    temperaturaPectoral >= 1 && temperaturaPectoral <= 10 &&
    quite >= 1 && quite <= 10 &&
    arquero >= 1 && arquero <= 10
  ) {
    let jugador = {
      nombre: nombre,
      disparo: disparo,
      gambeta: gambeta,
      tecnica: tecnica,
      posicionamiento: posicionamiento,
      estadoFisico: estadoFisico,
      temperaturaPectoral: temperaturaPectoral,
      quite: quite,
      arquero: arquero,
      promedio: promedio
    };

    listaJugadores.push(jugador);
    actualizarTabla();
    limpiarFormulario();
    console.log(listaJugadores);
  } else {
    // Mostrar un mensaje de error o realizar otra acción cuando los valores estén fuera de rango.
    alert("Los valores deben estar entre 1 y 10.");
  }
}

  //funcion para actualizar tabla jugadores
    function actualizarTabla() {
      let tablaJugadores = document.getElementById("tablaJugadores");
      
      // Limpiar la tabla para seguir agregando jugadores
      while (tablaJugadores.rows.length > 1) {
        tablaJugadores.deleteRow(1);
      }
      let fila = tablaJugadores.insertRow();

      // recorro array para agregar jugadores a la tabla de html
      for (let i = 0; i < listaJugadores.length; i++) {
        let fila = tablaJugadores.insertRow();
        
        let celdaNombre = fila.insertCell();
        celdaNombre.innerHTML = listaJugadores[i].nombre;

        let celdaGambeta = fila.insertCell();
        celdaGambeta.innerHTML = listaJugadores[i].gambeta;

        let celdaTecnica = fila.insertCell();
        celdaTecnica.innerHTML = listaJugadores[i].tecnica;

        let celdaDisparo = fila.insertCell();
        celdaDisparo.innerHTML = listaJugadores[i].disparo;

        let celdaEstadoFisico = fila.insertCell();
        celdaEstadoFisico.innerHTML = listaJugadores[i].estadoFisico;

        let celdaPosicionamiento = fila.insertCell();
        celdaPosicionamiento.innerHTML = listaJugadores[i].posicionamiento;

        let celdaTemperaturaPectoral = fila.insertCell();
        celdaTemperaturaPectoral.innerHTML = listaJugadores[i].temperaturaPectoral;

        let celdaQuite = fila.insertCell();
        celdaQuite.innerHTML = listaJugadores[i].quite;

        let celdaArquero = fila.insertCell();
        celdaArquero.innerHTML = listaJugadores[i].arquero;

        let celdaPromedioJugador = fila.insertCell();
        celdaPromedioJugador.innerHTML = listaJugadores[i].promedio;

        let celdaDropdown = fila.insertCell();
        let dropdownHTML = `
          <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton${i}" data-bs-toggle="dropdown" aria-expanded="false">
              Seleccionar Equipo
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton${i}">
              <li><a class="dropdown-item" href="#" onclick="moverAFila(${i}, 1)">Equipo 1</a></li>
              <li><a class="dropdown-item" href="#" onclick="moverAFila(${i}, 2)">Equipo 2</a></li>
            </ul>
          </div>
        `;
        celdaDropdown.innerHTML = dropdownHTML;
      }
      console.log()
      }
    // Funciones para actualizar las tablas de los equipos
function actualizarTablaDestino1() {
  let tablaEquipo1 = document.getElementById("equipo1").getElementsByTagName("tbody");
  while (tablaEquipo1.rows.length > 0) {
    tablaEquipo1.deleteRow(0);
  }
  let fila = tablaEquipo1.insertRow();

  for (let i = 0; i < equipo1.length; i++) {
    
    let fila = tablaEquipo1.insertRow();

    let celdaNombre = fila.insertCell();
    celdaNombre.innerHTML = tablaEquipo1[i].nombre;

    let celdaGambeta = fila.insertCell();
    celdaGambeta.innerHTML = tablaEquipo1[i].gambeta;

    let celdaTecnica = fila.insertCell();
    celdaTecnica.innerHTML = tablaEquipo1[i].tecnica;

    let celdaDisparo = fila.insertCell();
    celdaDisparo.innerHTML = tablaEquipo1[i].disparo;

    let celdaEstadoFisico = fila.insertCell();
    celdaEstadoFisico.innerHTML = tablaEquipo1[i].estadoFisico;

    let celdaPosicionamiento = fila.insertCell();
    celdaPosicionamiento.innerHTML = tablaEquipo1[i].posicionamiento;

    let celdaTemperaturaPectoral = fila.insertCell();
    celdaTemperaturaPectoral.innerHTML = tablaEquipo1[i].temperaturaPectoral;

    let celdaQuite = fila.insertCell();
    celdaQuite.innerHTML = tablaEquipo1[i].quite;

    let celdaArquero = fila.insertCell();
    celdaArquero.innerHTML = tablaEquipo1[i].arquero;

    let celdaPromedioJugador = fila.insertCell();
    celdaPromedioJugador.innerHTML = tablaEquipo1[i].promedio;

    // Crea y agrega las celdas con los datos del jugador a la tabla del equipo 1
    // Puedes hacerlo de manera similar a como lo hiciste en actualizarTabla()
  }
}

function actualizarTablaDestino2() {
  let tablaEquipo2 = document.getElementById("equipo2").getElementsByTagName("tbody")[0];
  // while (tablaEquipo2.rows.length > 0) {
  //   tablaEquipo2.deleteRow(0);
  // }
  for (let i = 0; i < equipo2.length; i++) { 
    let fila = tablaEquipo2.insertRow();

    let celdaNombre = fila.insertCell();
    celdaNombre.innerHTML = tablaEquipo2[i].nombre;

    let celdaGambeta = fila.insertCell();
    celdaGambeta.innerHTML = tablaEquipo2[i].gambeta;

    let celdaTecnica = fila.insertCell();
    celdaTecnica.innerHTML = tablaEquipo2[i].tecnica;

    let celdaDisparo = fila.insertCell();
    celdaDisparo.innerHTML = tablaEquipo2[i].disparo;

    let celdaEstadoFisico = fila.insertCell();
    celdaEstadoFisico.innerHTML = tablaEquipo2[i].estadoFisico;

    let celdaPosicionamiento = fila.insertCell();
    celdaPosicionamiento.innerHTML = tablaEquipo2[i].posicionamiento;

    let celdaTemperaturaPectoral = fila.insertCell();
    celdaTemperaturaPectoral.innerHTML = tablaEquipo2[i].temperaturaPectoral;

    let celdaQuite = fila.insertCell();
    celdaQuite.innerHTML = tablaEquipo2[i].quite;

    let celdaArquero = fila.insertCell();
    celdaArquero.innerHTML = tablaEquipo2[i].arquero;

    let celdaPromedioJugador = fila.insertCell();
    celdaPromedioJugador.innerHTML = tablaEquipo2[i].promedio;

  }
}
   
    //funcion limpiar formulario para reutilizar el formulario
    function limpiarFormulario() {
      document.getElementById("formularioJugador").reset();
    }

    //escucho el evento click en boton crear jugador 
    document.getElementById("crearJugador").addEventListener("click", agregarJugador);


//funcion para asignar jugadores a equipos
function moverAFila(index, tablaDestino) {
  let jugador = listaJugadores[index];
  
  if (tablaDestino === 1) {
    equipo1.push(jugador);
    actualizarTablaDestino1();
  } else if (tablaDestino === 2) {
    equipo2.push(jugador);
    actualizarTablaDestino2();
  }

  // Eliminar la fila de la tabla original
  listaJugadores.splice(index, 1);

  // Actualizar todas las tablas
  actualizarTabla();
}

// Modifica la función moverAFila
function moverAFila(index, tablaDestino) {
  let jugador = listaJugadores[index];

  if (tablaDestino === 1) {
    equipo1.push(jugador); // Agrega el objeto jugador completo a equipo1
    actualizarTablaDestino1(); // Actualiza la tabla del equipo 1
  } else if (tablaDestino === 2) {
    equipo2.push(jugador); // Agrega el objeto jugador completo a equipo2
    actualizarTablaDestino2(); // Actualiza la tabla del equipo 2
  }

  // Elimina la fila de la tabla original
  listaJugadores.splice(index, 1);

  // Actualiza la tabla de jugadores
  actualizarTabla();
}