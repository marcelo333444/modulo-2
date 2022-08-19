//let nombre = prompt("como te llamas?");
//alert("hola "+nombre)

window.onscroll = function() { // se ejecuta cada ves quese da scroll
    console.log("scrolling...");
};

/* Formulario de contacto */

const datos = {
      nombre: "",
      telefono: "",
      correo: "",
      mensaje: "",
}

const nombre = document.querySelector("#nombre");
const telefono = document.querySelector("#telefono");
const correo = document.querySelector("#correo");
const mensaje = document.querySelector("#mensaje");
const formulario = document.querySelector(".formulario");

nombre.addEventListener("input", leerTexto);
telefono.addEventListener("input", leerTexto);
correo.addEventListener("input", leerTexto);
mensaje.addEventListener("input", leerTexto);

function leerTexto(event) {
    console.log(event.target.value);
    datos[event.target.id] = event.target.value;
    console.log(datos);
};

formulario.addEventListener("submit", function(event) {
         event.preventDefault();
    const { nombre, telefono, correo, mensaje } = datos;

    if( nombre === "" || telefono === "" || correo === "" || mensaje === "" ) {
        mostrarError("Todos los campos son obligatorios");
        return;
    }
        mostrarMensaje("Mensaje Enviado Correctamente");
        console.log("Enviando Formulario");
});

/* funcion para mostrar el mensaje de que no se envio correctamente */

function mostrarError(mensaje) {
    const error = document.createElement("P");
          error.textContent = mensaje;
          error.classList.add("error");
          formulario.appendChild(error);

          /* funcion para que la alerta se remueva en tiempo seleccionado */

          setTimeout(() => {
            error.remove();
          }, 5000);
};

/* funcion para mostrar mensaje se envio correctamente */

function mostrarMensaje(mensaje) {
    const alerta = document.createElement("P");
    alerta.textContent = mensaje;
    alerta.classList.add("correcto");
    formulario.appendChild(alerta);

    /* funcion para que la alerta se remueva en tiempo seleccionado */

    setTimeout(() => {
        alerta.remove();
    }, 5000);
};






