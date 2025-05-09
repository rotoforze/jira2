// guardar todas las tarjetas en localStorage
import { guardarTodasLasTarjetas } from "./gestorElementosLocalStorage.js";

// Esta función elimina una tarjeta del contenedor correspondiente y actualiza el contador de tarjetas en localStorage
// y el DOM. Se utiliza en el evento click del botón de eliminar tarjeta.
// Se le pasa como parámetro la tarjeta a eliminar, que es el elemento del boton eliminar.
export function eliminarTarjeta(tarjeta) {

    // eliminar la tarjeta del contenedor correspondiente
    // se obtiene el contenedor padre^2 de la tarjeta, que es el elemento padre del boton eliminar
    const contenedor = tarjeta.parentElement.parentElement.parentElement;

    // eliminar la tarjeta del DOM
    contenedor.removeChild(tarjeta.parentElement.parentElement);

    // restar 1 al contador de tarjetas
    // esto se hace para que el contador de tarjetas en localStorage se actualice
    // y se guarde en localStorage
    localStorage.setItem("contadorTarjetas", parseInt(localStorage.getItem("contadorTarjetas")) - 1);
    
    // guardar las tarjetas en localStorage
    guardarTodasLasTarjetas();
}