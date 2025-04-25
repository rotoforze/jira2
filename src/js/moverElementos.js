import { guardarTodasLasTarjetas } from "./gestorElementosLocalStorage.js";
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

function moverAPorEmpezar(tarjeta) {
    const contenedorPorEmpezar = document.querySelector("#por-empezar");
    contenedorPorEmpezar.appendChild(tarjeta.parentElement.parentElement);
}
function moverAEnProgreso(tarjeta) {
    const contenedorEnProgreso = document.querySelector("#en-progreso");
    contenedorEnProgreso.appendChild(tarjeta.parentElement.parentElement);
}
function moverAFinalizado(tarjeta) {
    const contenedorFinalizado = document.querySelector("#finalizado");
    contenedorFinalizado.appendChild(tarjeta.parentElement.parentElement);
}