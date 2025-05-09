// Mapa de usuarios y contraseñas
// Este mapa contiene los usuarios y contraseñas de la aplicación
// En este caso, solo hay dos usuarios: admin y user, ambos con la contraseña "admin" o "user" respectivamente
// En una aplicación real, esto debería ser una base de datos
const listaUsuarios = new Map([
    ["admin", "admin"],
    ["user", "user"]
])

// Función para cargar la app al iniciar sesión
// Esta función se ejecuta al iniciar sesión y oculta el formulario de inicio de sesión y el mensaje de error
function cargarApp(user) {
    console.log("Cargando la app");
    const errorLogeo = document.querySelector(".error-inicio-sesion");
    const iniciarSesion = document.querySelector(".inicioSesion");
    const app = document.querySelector(".app");
    const nombreUser = document.querySelector("#nombreUsuario");
    
    nombreUser.innerHTML = user;

    app.className = "app";
    iniciarSesion.className = "iniciarSesion centrar oculto";
    errorLogeo.className = "error-inicio-sesion oculto";

    // Si el usuario es admin, muestra el botón de crear proyecto
    // Si el usuario es user, oculta el botón de crear proyecto
    if (user === "admin") {
        document.querySelector("#crearProyecto").setAttribute("style", "display: block;");
    } else document.querySelector("#crearProyecto").setAttribute("style", "display: none;");
}

// Función para iniciar sesión al pulsar el botón o la tecla Enter
// Comprueba si el usuario y la contraseña son correctos
// Si son correctos, carga la app y oculta el formulario de inicio de sesión y el mensaje de error
// Si no son correctos, muestra el mensaje de error
export function iniciarSesion() {
    const nombreUsuario = document.querySelector("#usuario").value;
    const contrasenia = document.querySelector("#contrasena").value;

    // Comprobar si el usuario y la contraseña son correctos
    // Si son correctos, cargar la app y ocultar el formulario de inicio de sesión
    // Si no son correctos, mostrar el mensaje de error
    if (listaUsuarios.get(nombreUsuario) === contrasenia) {
        console.log("LOGEADO");
        cargarApp(nombreUsuario);
    }else {
        document.querySelector(".error-inicio-sesion").className = "error-inicio-sesion";
    }
}
