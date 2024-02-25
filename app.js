
//contenedor de todas las notas 
const contenedor_notas = document.querySelector(".flex-container");
const nueva_nota = document.getElementById("nueva-nota");

const crear_nota = () => {

    //contenedor de cada nota
    const contenedor_nota= document.createElement("div");

    const nota = document.createElement("textarea");
    const guardar = document.createElement("button");
    const eliminar = document.createElement("button");

    contenedor_nota.classList.add("contenedor_nota");
    guardar.classList.add("btn", "btn-dark");
    eliminar.classList.add("btn", "btn-danger");

    guardar.innerText = "guardar";
    eliminar.innerText = "eliminar";

    nota.classList.add("notas");

    contenedor_nota.appendChild(nota);
    contenedor_nota.appendChild(guardar);
    contenedor_nota.appendChild(eliminar);

    contenedor_notas.appendChild(contenedor_nota);

    guardar.addEventListener("click", guardar_nota); 
}

nueva_nota.addEventListener("click", crear_nota);

const guardar_nota = () => {
    alert("guardando la nota...");
}
