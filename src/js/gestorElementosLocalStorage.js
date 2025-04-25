export function guardarTodasLasTarjetas() {
    const contenedorPorEmpezar = document.querySelector("#por-empezar");
    const contenedorEnProgreso = document.querySelector("#en-progreso");
    const contenedorFinalizado = document.querySelector("#finalizado");

    // Guardar las tarjetas de cada contenedor en localStorage
    localStorage.setItem("por-empezar", contenedorPorEmpezar.outerHTML);
    localStorage.setItem("en-progreso", contenedorEnProgreso.outerHTML);
    localStorage.setItem("finalizado", contenedorFinalizado.outerHTML);
}

export function cargarElementosGuardados() {
    const contenedorPorEmpezar = document.querySelector("#por-empezar");
    const contenedorEnProgreso = document.querySelector("#en-progreso");
    const contenedorFinalizado = document.querySelector("#finalizado");

    // Cargar las tarjetas de cada contenedor desde localStorage
    if (localStorage.getItem("por-empezar") !== null) {
        contenedorPorEmpezar.innerHTML = localStorage.getItem("por-empezar");
    }
    if (localStorage.getItem("en-progreso") !== null) {
        contenedorEnProgreso.innerHTML = localStorage.getItem("en-progreso");
    }
    if (localStorage.getItem("finalizado") !== null) {
        contenedorFinalizado.innerHTML = localStorage.getItem("finalizado");
    }

    ponerEventosEnLosBotones();
}

import { eliminarTarjeta } from "./eliminarElementos.js";
import { moverALaDerecha, moverALaIzquierda } from "./moverElementos.js";

function ponerEventosEnLosBotones() {
    for (const boton of document.querySelectorAll(".btnMoverDerecha")) {
        boton.addEventListener("click", moverALaDerecha );
    }
    for (const boton of document.querySelectorAll(".btnMoverIzquierda")) {
        boton.addEventListener("click", moverALaIzquierda);
    }
    for (const boton of document.querySelectorAll(".btnEliminar")) {
        boton.addEventListener("click", () => { eliminarTarjeta(boton); });
    }
}