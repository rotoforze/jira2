import { guardarTodasLasTarjetas } from "./gestorElementosLocalStorage.js";
export function eliminarTarjeta(tarjeta) {
    // eliminar la tarjeta del contenedor correspondiente
    const contenedor = tarjeta.parentElement.parentElement.parentElement;
    // eliminar la tarjeta del DOM
    contenedor.removeChild(tarjeta.parentElement.parentElement);
    // restar 1 al contador de tarjetas
    localStorage.setItem("contadorTarjetas", parseInt(localStorage.getItem("contadorTarjetas")) - 1);
    // guardar las tarjetas en localStorage
    guardarTodasLasTarjetas();
}