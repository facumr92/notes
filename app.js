// Contenedor de todas las notas
const contenedor_todas_las_notas = document.querySelector(".flex-container");

// Botón para agregar una nueva nota
const nueva_nota = document.getElementById("nueva-nota");

// Arreglo donde guardar las notas
let listaNotas = [];

// Función para guardar la nota en el local storage
function guardar_nota() {
  // Obtener el texto de la nota del textarea
  const texto_nota = document.querySelector("#texto").value.trim();

  // Verificar si el texto de la nota no está vacío
  if (texto_nota === "") {
    alert("La nota debe tener un texto.");
    return;
  }

  // Crear un objeto para la nueva nota
  const nuevaNota = {
    id: Date.now(),
    texto_nota,
  };

  // Agregar la nueva nota al array de listaNotas
  listaNotas.push(nuevaNota);

  // Limpiar el contenedor de notas
  limpiar();

  // Mostrar todas las notas nuevamente
  devolver_notas();

  // Sincronizar el array actualizado con el almacenamiento local
  sinc_local_storage();

  // Mostrar un mensaje de confirmación
  alert("Nota guardada correctamente.");

  // Limpiar el área de entrada
  document.querySelector("#texto").value = "";
}

// Función para mostrar las notas en el contenedor
function devolver_notas() {

  
  listaNotas.forEach((nota) => {
    // Crear un div para contener la nota
    const contenedor_nota = document.createElement("div");
    contenedor_nota.classList.add("notas");

    // Crear un párrafo para mostrar el texto de la nota
    const texto_nota = document.createElement("p");
    texto_nota.classList.add("nota");
    texto_nota.textContent = nota.texto_nota;

    // Crear un botón para eliminar la nota
    const eliminar = document.createElement("button");
    eliminar.innerHTML = "Eliminar ";
    eliminar.classList.add("btn", "btn-danger");

    // Asignar evento de clic para eliminar la nota
    eliminar.addEventListener("click", () => eliminar_nota(nota.id));

    // Agregar elementos al contenedor de la nota 
    contenedor_nota.appendChild(texto_nota);
    contenedor_nota.appendChild(eliminar);

    // Agregar el contenedor de la nota al contenedor de todas las notas
    contenedor_todas_las_notas.appendChild(contenedor_nota);
  });
}

// Función para eliminar una nota
function eliminar_nota(id) {
  // Filtrar la lista de notas para obtener todas excepto la que tiene el ID proporcionado

  let respuesta= confirm("Está seguro que desea eliminar? esta acción será definitiva");

  if(respuesta){
  listaNotas = listaNotas.filter((nota) => nota.id !== id);

  // Limpiar el contenedor de notas
  limpiar();

  // Mostrar todas las notas nuevamente (actualizadas)
  devolver_notas();

  // Sincronizar el array actualizado con el almacenamiento local
  sinc_local_storage();
  } else
  return;
}

// Función para limpiar el contenedor de notas
function limpiar() {
  contenedor_todas_las_notas.innerHTML = "";
}

// Función para leer las notas almacenadas en el almacenamiento local al cargar la página
function leer_storage() {
  listaNotas = JSON.parse(localStorage.getItem("listado_notas")) || [];
  devolver_notas();
}

// Función para sincronizar el array de notas con el almacenamiento local
function sinc_local_storage() {
  localStorage.setItem("listado_notas", JSON.stringify(listaNotas));
}

// Agregar evento de clic al botón para guardar una nueva nota
nueva_nota.addEventListener("click", guardar_nota);

// Cargar las notas almacenadas al cargar la página
document.addEventListener("DOMContentLoaded", leer_storage);
