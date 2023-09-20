//declaro variables globales
let nombre, disparo, gambeta, tecnica, posicionamiento,estadoFisico, temperaturaPectoral, quite, arquero, promedio;
// creo array para la lista de jugadores
let listaJugadores = [];
//creo arrays para equipos
let equipo1 = [];
let equipo2 = [];
// función promediar habilidad de un jugador
function promediarHabilidades(n1, n2, n3, n4, n5, n6, n7, n8){

  let promedio = (n1+n2+n3+n4+n5+n6+n7+n8)/8;
  return promedio.toFixed(1)

}
//declaro funcion actualizar equipos
function actualizarTablaEquipos() {
  let tablaEquipo1 = document.getElementById("tablaEquipo1");
  let tablaEquipo2 = document.getElementById("tablaEquipo2");

  // Limpiar las tablas de los equipos
  while (tablaEquipo1.rows.length > 1) {
    tablaEquipo1.deleteRow(1);
  }
  while (tablaEquipo2.rows.length > 1) {
    tablaEquipo2.deleteRow(1);
  }

  // Actualizar tabla del equipo 1
  for (let i = 0; i < equipo1.length; i++) {
    let fila = tablaEquipo1.insertRow();

    let celdaNombre = fila.insertCell();
    celdaNombre.innerHTML = equipo1[i].nombre;
    
    let celdaGambeta = fila.insertCell();
    celdaGambeta.innerHTML = equipo1[i].gambeta

    let celdaTecnica = fila.insertCell();
        celdaTecnica.innerHTML = equipo1[i].tecnica;

    let celdaDisparo = fila.insertCell();
    celdaDisparo.innerHTML = equipo1[i].disparo;

    let celdaEstadoFisico = fila.insertCell();
    celdaEstadoFisico.innerHTML = equipo1[i].estadoFisico;

    let celdaPosicionamiento = fila.insertCell();
    celdaPosicionamiento.innerHTML = equipo1[i].posicionamiento;

    let celdaTemperaturaPectoral = fila.insertCell();
    celdaTemperaturaPectoral.innerHTML = equipo1[i].temperaturaPectoral;

    let celdaQuite = fila.insertCell();
    celdaQuite.innerHTML = equipo1[i].quite;

    let celdaArquero = fila.insertCell();
    celdaArquero.innerHTML = equipo1[i].arquero;

    let celdaPromedioJugador = fila.insertCell();
    celdaPromedioJugador.innerHTML = equipo1[i].promedio;
  }

  // Actualizar tabla del equipo 2
  for (let i = 0; i < equipo2.length; i++) {
    let fila = tablaEquipo2.insertRow();

    let celdaNombre = fila.insertCell();
    celdaNombre.innerHTML = equipo2[i].nombre;

    let celdaGambeta = fila.insertCell();
    celdaGambeta.innerHTML = equipo2[i].gambeta
   
    let celdaTecnica = fila.insertCell();
    celdaTecnica.innerHTML = equipo2[i].tecnica;

    let celdaDisparo = fila.insertCell();
    celdaDisparo.innerHTML = equipo2[i].disparo;

    let celdaEstadoFisico = fila.insertCell();
    celdaEstadoFisico.innerHTML = equipo2[i].estadoFisico;

    let celdaPosicionamiento = fila.insertCell();
    celdaPosicionamiento.innerHTML = equipo2[i].posicionamiento;

    let celdaTemperaturaPectoral = fila.insertCell();
    celdaTemperaturaPectoral.innerHTML = equipo2[i].temperaturaPectoral;

    let celdaQuite = fila.insertCell();
    celdaQuite.innerHTML = equipo2[i].quite;

    let celdaArquero = fila.insertCell();
    celdaArquero.innerHTML = equipo2[i].arquero;

    let celdaPromedioJugador = fila.insertCell();
  celdaPromedioJugador.innerHTML = equipo2[i].promedio;

  }
}

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

// Verifica si los valores seleccionados están dentro del rango permitido
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
// Agrego el objeto jugador al array lista de jugadores
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
        let celdaSelEquipo= fila.insertCell();
        let selEquipo = `
  <div class="selEquipo">
    <select id="equipo-${i}">
      <option selected="true" value="1">Equipo 1</option>
      <option value="2">Equipo 2</option>
    </select>
  </div>
`;
        celdaSelEquipo.innerHTML = selEquipo;
        let celdaBtn = fila.insertCell();
        let btnAgregar = `<button id="agregar-${i}">Agregar al equipo</button>`;
        celdaBtn.innerHTML = btnAgregar;
        const boton = document.getElementById(`agregar-${i}`);
		  // Agrego evento al botón capturado.
      boton.addEventListener("click", () => {
        const equipo = document.getElementById(`equipo-${i}`).value;
        agregarAlEquipo({ ...listaJugadores[i], equipo: equipo });
		});
      }
      console.log()
      }

// Función para agregar jugador del array jugadores dispin al equipo seleccionado
function agregarAlEquipo(jugador, equipo){
// Primero  verificio que no este en uno de los 2 equipos y luego lo agrego al equipo seleccionado
const buscoJugadorEquipo1 = equipo1.find(objeto => objeto.nombre == jugador.nombre);
const buscoJugadorEquipo2 = equipo2.find(objeto => objeto.nombre == jugador.nombre);
    if (buscoJugadorEquipo1 || buscoJugadorEquipo2 === true)  {
      console.log("la variable busco jugador equipo 1 es: " + buscoJugadorEquipo1),
      console.log("la variable busco jugador equipo 2 es: " + buscoJugadorEquipo2),
     alert("El jugador ya forma parte de un equipo"),
     console.log("Después de las comprobaciones, buscoJugadorEquipo1:", equipo2),
     console.log("Después de las comprobaciones, buscoJugadorEquipo2:", equipo1)
      }
      else if (jugador.equipo === "1") {
        equipo1.push(jugador);
        actualizarTablaEquipos();
        console.log("equipo 1 es: " + equipo1),
        console.log("equipo2 es :" + equipo2),
        console.log("la variable busco jugador equipo 1 es: " + buscoJugadorEquipo1),
        console.log("la variable busco jugador equipo 2 es: " + buscoJugadorEquipo2)
      } else if (jugador.equipo === "2") { 
        equipo2.push(jugador);
        actualizarTablaEquipos();
        console.log("equipo 1 es: " + equipo1),
        console.log("equipo2 es :" + equipo2),
        console.log("la variable busco jugador equipo 1 es: " + buscoJugadorEquipo1),
        console.log("la variable busco jugador equipo 2 es: " + buscoJugadorEquipo2)
      }
      actualizarTablaEquipos();
  }
  //actualizo la tabla de equipos
actualizarTablaEquipos();
//declaro funcion actualizar equipos
function actualizarTablaEquipos() {
  let tablaEquipo1 = document.getElementById("tablaEquipo1");
  let tablaEquipo2 = document.getElementById("tablaEquipo2");

  // Limpiar las tablas de los equipos
  while (tablaEquipo1.rows.length > 1) {
    tablaEquipo1.deleteRow(1);
  }
  while (tablaEquipo2.rows.length > 1) {
    tablaEquipo2.deleteRow(1);
  }

  // Actualizar tabla del equipo 1
  for (let i = 0; i < equipo1.length; i++) {
    let fila = tablaEquipo1.insertRow();

    let celdaNombre = fila.insertCell();
    celdaNombre.innerHTML = equipo1[i].nombre;
    
    let celdaGambeta = fila.insertCell();
    celdaGambeta.innerHTML = equipo1[i].gambeta

    let celdaTecnica = fila.insertCell();
        celdaTecnica.innerHTML = equipo1[i].tecnica;

    let celdaDisparo = fila.insertCell();
    celdaDisparo.innerHTML = equipo1[i].disparo;

    let celdaEstadoFisico = fila.insertCell();
    celdaEstadoFisico.innerHTML = equipo1[i].estadoFisico;

    let celdaPosicionamiento = fila.insertCell();
    celdaPosicionamiento.innerHTML = equipo1[i].posicionamiento;

    let celdaTemperaturaPectoral = fila.insertCell();
    celdaTemperaturaPectoral.innerHTML = equipo1[i].temperaturaPectoral;

    let celdaQuite = fila.insertCell();
    celdaQuite.innerHTML = equipo1[i].quite;

    let celdaArquero = fila.insertCell();
    celdaArquero.innerHTML = equipo1[i].arquero;

    let celdaPromedioJugador = fila.insertCell();
    celdaPromedioJugador.innerHTML = equipo1[i].promedio;
  }

  // Actualizar tabla del equipo 2
  for (let i = 0; i < equipo2.length; i++) {
    let fila = tablaEquipo2.insertRow();

    let celdaNombre = fila.insertCell();
    celdaNombre.innerHTML = equipo2[i].nombre;

    let celdaGambeta = fila.insertCell();
    celdaGambeta.innerHTML = equipo2[i].gambeta
   
    let celdaTecnica = fila.insertCell();
    celdaTecnica.innerHTML = equipo2[i].tecnica;

    let celdaDisparo = fila.insertCell();
    celdaDisparo.innerHTML = equipo2[i].disparo;

    let celdaEstadoFisico = fila.insertCell();
    celdaEstadoFisico.innerHTML = equipo2[i].estadoFisico;

    let celdaPosicionamiento = fila.insertCell();
    celdaPosicionamiento.innerHTML = equipo2[i].posicionamiento;

    let celdaTemperaturaPectoral = fila.insertCell();
    celdaTemperaturaPectoral.innerHTML = equipo2[i].temperaturaPectoral;

    let celdaQuite = fila.insertCell();
    celdaQuite.innerHTML = equipo2[i].quite;

    let celdaArquero = fila.insertCell();
    celdaArquero.innerHTML = equipo2[i].arquero;

    let celdaPromedioJugador = fila.insertCell();
  celdaPromedioJugador.innerHTML = equipo2[i].promedio;

  }
}

    //funcion limpiar formulario para reutilizar el formulario
    function limpiarFormulario() {
      document.getElementById("formularioJugador").reset();
    }

    //escucho el evento click en boton crear jugador 
    document.getElementById("crearJugador").addEventListener("click", agregarJugador);


  // Actualizar todas las tablas
  actualizarTabla();


  // Actualiza la tabla de jugadores
  actualizarTabla();
