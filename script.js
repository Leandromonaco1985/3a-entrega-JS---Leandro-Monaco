//declaro objeto jugador
let jugador;
//declaro variables globales
let nombre, disparo, gambeta, tecnica, posicionamiento,estadoFisico, temperaturaPectoral, quite, arquero, promedio;
// creo array para la lista de jugadores
let listaJugadores = [];
//lo guardo en local storage
const listaJugadoresLocalStorage = localStorage.getItem("lista de jugadores");

if (listaJugadoresLocalStorage) {
  listaJugadores = JSON.parse(listaJugadoresLocalStorage);
} 
 // Cargo listaJugadores desde el Local Storage
actualizarTabla();

//creo arrays para equipos
let equipo1 = [];
let equipo2 = [];
// función promediar habilidad de un jugador
function promediarHabilidades(n1, n2, n3, n4, n5, n6, n7, n8){

  let promedio = (n1+n2+n3+n4+n5+n6+n7+n8)/8;
  return promedio.toFixed(1)

}
//promediar sumas, se usará en comparación de equipos
function promediarSumas(n1, n2){
  let mediaHabilidad = (n1 + n2)/equipo1[i].length
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
    celdaGambeta.innerHTML = equipo2[i].gambeta;

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
/// Agrego el objeto jugador al array lista de jugadores
listaJugadores.push(jugador);

// Guardo la lista de jugadores en el Local Storage
const listaJugadoresJSON = JSON.stringify(listaJugadores);
localStorage.setItem("lista de jugadores", listaJugadoresJSON);
  //actualizo
  actualizarTabla();
  limpiarFormulario();

  } else {
    // Mostrar un mensaje de error cuando los valores estén fuera de rango.
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

// Función para agregar jugador del array jugadores al equipo seleccionado
function agregarAlEquipo(jugador){
// Primero  verificio que no este en uno de los 2 equipos y luego lo agrego al equipo seleccionado
const buscoJugadorEquipo1 = equipo1.some(objeto => objeto.nombre == jugador.nombre);
const buscoJugadorEquipo2 = equipo2.some(objeto => objeto.nombre == jugador.nombre);
  if (buscoJugadorEquipo1 || buscoJugadorEquipo2) {
     alert("El jugador ya forma parte de un equipo")
     }
      else if (jugador.equipo === "1") {
        equipo1.push(jugador);
        actualizarTablaEquipos();
        console.log("equipo 1 es: " + equipo1),
        console.log("equipo2 es :" + equipo2),
        console.log("la variable busco jugador equipo 1 es: " + buscoJugadorEquipo1),
        console.log("la variable busco jugador equipo 2 es: " + buscoJugadorEquipo2)
      }
       else if (jugador.equipo === "2") { 
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



/*------------------------------lógica para comparación de equipos---------------------------*/

// TRABAJO EN PROCESO, A TERMINAR PARA EL FINAL, LO MISMO QUE EL BOTON PARA ELIMINAR JUGADORES DE CADA EQUIPO

//capturo botón de html para procesar datos y crear informe
let btnCompara = document.getElementById("btnCompara").addEventListener("click", comparacionEquipos);

// declaro variables que almacenaran la suma de habilidades totales de los jugadores
//primero para equipo 1
let sumaGambetaE1 = 0;
let sumaDisparoE1 = 0;
let sumaTecnicaE1= 0;
let sumaPosicionamientoE1 = 0;
let sumaQuiteE1 = 0;
let sumaArqueroE1 = 0;
let sumaTemperaturaE1 = 0;
let sumaEstadoFE1 = 0;
let sumaPromedioE1 = 0;
//ahora para el equipo2
let sumaGambetaE2 = 0;
let sumaDisparoE2 = 0;
let sumaTecnicaE2= 0;
let sumaPosicionamientoE2 = 0;
let sumaQuiteE2 = 0;
let sumaArqueroE2 = 0;
let sumaTemperaturaE2 = 0;
let sumaEstadoFE2 = 0;
let sumaPromedioE2 = 0;
//recorro los arrays de los equipos para sumar cada habilidad total por equipo 
function comparacionEquipos(){
  alert("// TRABAJO EN PROCESO, A TERMINAR PARA EL FINAL, LO MISMO QUE EL BOTON PARA ELIMINAR JUGADORES DE CADA EQUIPO")
  // //me aseguro que los equipos tengan la misma cantidad de jugadores
  // if(equipo1.length != equipo2.length){
  //   alert("Los equipos no tienen la misma cantidad de jugadores")
  // }
  // else if (equipo1.length == equipo2.length){
    

  for (let i=0; i < equipo1.length; i++){
    sumaGambetaE1 += equipo1[i].gambeta;
  }
  for (let i=0; i < equipo2.length; i++){
    sumaGambetaE2 += equipo2[i].gambeta;
  }
  for (let i=0; i < equipo1.length; i++){
    sumaDisparoE1 += equipo1[i].disparo;
  }
  for (let i=0; i < equipo2.length; i++){
    sumaDisparoE2 += equipo2[i].disparo;
  }
  for (let i=0; i < equipo1.length; i++){
    sumaTecnicaE1 += equipo1[i].tecnica;
  }
  for (let i=0; i < equipo2.length; i++){
    sumaTecnicaE2 += equipo2[i].tecnica;
  }
  for (let i=0; i < equipo1.length; i++){
    sumaEstadoFE1 += equipo1[i].estadoFisico;
  }
  for (let i=0; i < equipo2.length; i++){
    sumaEstadoFE2 += equipo2[i].estadoFisico;
  }
  for (let i=0; i < equipo1.length; i++){
    sumaPosicionamientoE1 += equipo1[i].posicionamiento;
  }
  for (let i=0; i < equipo2.length; i++){
    sumaPosicionamientoE2 += equipo2[i].posicionamiento;
  }
  for (let i=0; i < equipo1.length; i++){
    sumaTemperaturaE1 += equipo1[i].temperaturaPectoral;
  }
  for (let i=0; i < equipo2.length; i++){
    sumaTemperaturaE2 += equipo2[i].temperaturaPectoral;
  }
  for (let i=0; i < equipo1.length; i++){
    sumaQuiteE1 += equipo1[i].quite;
  }
  for (let i=0; i < equipo2.length; i++){
    sumaQuiteE2 += equipo2[i].quite;
  }
  for (let i=0; i < equipo1.length; i++){
    sumaArqueroE1 += equipo1[i].arquero;
  }
  for (let i=0; i < equipo2.length; i++){
    sumaArqueroE2 += equipo2[i].arquero;
  }
  for (let i=0; i < equipo1.length; i++){
    sumaPromedioE1 += equipo1[i].promedio;
  }
  for (let i=0; i < equipo2.length; i++){
    sumaPromedioE2 += equipo2[i].promedio;
  }

//creo variables para englobar tipos de atributos y establecer comparaciones

  let atrOfensivosE1 = (sumaDisparoE1 + sumaGambetaE1)/equipo1.length;
 let atrTecnicosE1 = sumaTecnicaE1 + sumaGambetaE1;
 let atrDefensivosE1 = sumaQuiteE1 + sumaArqueroE1;
 let atrFisicosyMentalesE1 = sumaTemperaturaE1 + sumaEstadoFE1; 
 let atrOfensivosE2 = sumaDisparoE2 + sumaGambetaE2;
 let atrTecnicosE2 = sumaTecnicaE2 + sumaGambetaE2;
 let atrDefensivosE2 = sumaQuiteE2 + sumaArqueroE2;
 let atrFisicosyMentalesE2 = sumaTemperaturaE2 + sumaEstadoFE2; 

 console.log("atrOfensivosE1", atrOfensivosE1);
 console.log("sumaPromedioE1", sumaPromedioE1);
 //, sumaDisparo, sumaTecnica, sumaPosicionamiento, sumaQuite, sumaArquero, sumaTemperatura, sumaEstadoF;

}
