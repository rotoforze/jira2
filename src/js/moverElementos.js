// Mover elementos entre contenedores
// Importar funciones para guardar las tarjetas en localStorage
import { guardarTodasLasTarjetas } from "./gestorElementosLocalStorage.js";

// Funciones para mover tarjetas entre contenedores
// moverALaDerecha: mueve la tarjeta a la derecha (de por-empezar a en-progreso, de en-progreso a finalizado, de finalizado a por-empezar)
export function moverALaDerecha() {
    if (this.parentElement.parentElement.parentElement.id === "por-empezar") {
        moverAEnProgreso(this);
    }else if (this.parentElement.parentElement.parentElement.id === "en-progreso") {
        moverAFinalizado(this);
    }else if (this.parentElement.parentElement.parentElement.id === "finalizado") {
        moverAPorEmpezar(this);
    }
    // guardar las tarjetas en localStorage
    guardarTodasLasTarjetas();
}

// moverALaIzquierda: mueve la tarjeta a la izquierda (de en-progreso a por-empezar, de finalizado a en-progreso, de por-empezar a finalizado)
export function moverALaIzquierda() {
    if (this.parentElement.parentElement.parentElement.id === "en-progreso") {
        moverAPorEmpezar(this);
    }else if (this.parentElement.parentElement.parentElement.id === "finalizado") {
        moverAEnProgreso(this);
    }else if (this.parentElement.parentElement.parentElement.id === "por-empezar") {
        moverAFinalizado(this);
    }
    // guardar las tarjetas en localStorage
    guardarTodasLasTarjetas();
}

// Mueve la tarjeta al bloque por-empezar
function moverAPorEmpezar(tarjeta) {
    const contenedorPorEmpezar = document.querySelector("#por-empezar");
    contenedorPorEmpezar.appendChild(tarjeta.parentElement.parentElement);
}
// Mueve la tarjeta al bloque en-progreso
function moverAEnProgreso(tarjeta) {
    const contenedorEnProgreso = document.querySelector("#en-progreso");
    contenedorEnProgreso.appendChild(tarjeta.parentElement.parentElement);
}
// Mueve la tarjeta al bloque finalizado
function moverAFinalizado(tarjeta) {
    const contenedorFinalizado = document.querySelector("#finalizado");
    contenedorFinalizado.appendChild(tarjeta.parentElement.parentElement);
}