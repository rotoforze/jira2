const elemento = [
    '<div class=\"tarjeta-header\"></div>',
    '<div class=\"tarjeta-body\"></div>',
    '<div class=\"tarjeta-footer\"></div>',
];

import { guardarTodasLasTarjetas } from "./gestorElementosLocalStorage.js";

export function crearElemento() {
    const porEmpezar = document.querySelector("#por-empezar");
    const enProgreso = document.querySelector("#en-progreso");
    const finalizado = document.querySelector("#finalizado");

    const div = document.createElement("div");
    div.className = "tarjeta";
    div.draggable = false;
    div.id = "tarjeta"+localStorage.getItem("contadorTarjetas");

    for (let i = 0; i < elemento.length; i++) {
        div.innerHTML += elemento[i];
        if (i === 0) {
            const tA = document.createElement("div");
            tA.setAttribute("contenteditable", "true");
            tA.className = "tarjeta-textarea textarea-header";
            tA.innerHTML = "Tarea " + localStorage.getItem("contadorTarjetas");
            tA.setAttribute("style", "background-color: transparent; color: #000; font-size: 1.2rem; font-family: 'Poppins', sans-serif;");
            div.querySelector(".tarjeta-header").innerHTML = tA.outerHTML;
        }
        if (i === 1) {
            const tA = document.createElement("div");
            tA.setAttribute("contenteditable", "true");
            tA.className = "tarjeta-textarea";
            tA.innerHTML = "Escribe aquí la tarea...";
            tA.setAttribute("style", "resize: none; width: 100%; height: 100%; border: none; outline: none; background-color: transparent; color: #000; font-size: 1.2rem; font-family: 'Poppins', sans-serif;");
            div.querySelector(".tarjeta-body").innerHTML = tA.outerHTML;
        }
        if (i === 2) {
            div.querySelector(".tarjeta-footer").innerHTML = new Date().getFullYear() + "-" + new Date().getMonth() + "-" + new Date().getDate()+" " + new Date().getHours() + ":" + new Date().getMinutes();
            
            crearBotones(div);
        }
    }

    // añadir la tarjeta al contenedor correspondiente
    porEmpezar.appendChild(div);
    localStorage.setItem("contadorTarjetas", parseInt(localStorage.getItem("contadorTarjetas")) + 1);
    guardarTodasLasTarjetas();
}

import { eliminarTarjeta } from "./eliminarElementos.js";
import { moverALaDerecha } from "./moverElementos.js";
// añadir evento al botón de eliminar
function crearBotones(div) {
    // añadir 3 botones
    const contenedorBotones = document.createElement("div");
    contenedorBotones.className = "contenedor-botones";
    contenedorBotones.setAttribute("style", "display: flex; justify-content: space-between; align-items: center; width: 100%; padding: 0 10px;");
    div.querySelector(".tarjeta-footer").appendChild(contenedorBotones);
    var botones = [];
    // btnMoverIzquierda
    const btnMoverIzquierda = document.createElement("button");
    btnMoverIzquierda.className = "btnMoverIzquierda";
    btnMoverIzquierda.innerHTML = "<i class=\"bi bi-arrow-left-square\"></i>";
    botones[0] = btnMoverIzquierda;

    // btnEliminar
    const btnEliminar = document.createElement("button");
    btnEliminar.className = "btnEliminar";
    btnEliminar.innerHTML = "<i class=\"bi bi-trash\"></i>";
    botones[1] = btnEliminar;

    // añadir evento al botón de eliminar
    btnEliminar.addEventListener("click", function() { eliminarTarjeta(div); });

    // btnMoverDerecha
    const btnMoverDerecha = document.createElement("button");
    btnMoverDerecha.className = "btnMoverDerecha";
    btnMoverDerecha.innerHTML = "<i class=\"bi bi-arrow-right-square\"></i>";
    botones[2] = btnMoverDerecha;
    btnMoverDerecha.addEventListener("click", moverALaDerecha );
    // añadir los botones al footer
    for (let i = 0; i < botones.length; i++) {
        botones[i].setAttribute("style", "border: none; color: #00000; font-size: 1.5rem; cursor: pointer; margin: 0 5px;height:33%; max-height: fit-content;width: 33%; max-width: fit-content;background-color: white;");
        div.querySelector(".tarjeta-footer").appendChild(botones[i]);
    }
}