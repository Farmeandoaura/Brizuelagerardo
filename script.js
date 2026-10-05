// Seleccionamos todos los botones con la clase .btn-toggle

const botones = document.querySelectorAll('.btn-toggle');



// Función para mostrar/ocultar información adicional

function alternarInformacion(event) {

    const boton = event.target;

    // previousElementSibling toma el elemento que está justo arriba del botón (el párrafo oculto)

    const textoOculto = boton.previousElementSibling;



    if (textoOculto && textoOculto.classList.contains('info-adicional')) {

        textoOculto.classList.toggle('oculta');



        if (textoOculto.classList.contains('oculta')) {

            boton.textContent = "Ver más";

        } else {

            boton.textContent = "Ver menos";

        }

    }

}



// Le asignamos el evento click a cada botón "Ver más"

botones.forEach(function(boton) {

    boton.addEventListener('click', alternarInformacion);

});