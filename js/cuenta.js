const mostrarRegistro = document.querySelector(".contenedor-inicio-sesion");
const noMostrarRegistro = document.querySelector(".contenedor-mensaje-no-registrado");
const btEnviar = document.querySelectorAll(".bt-enviar");


btEnviar[0].addEventListener("click", ()=>{
    mostrarRegistro.style.display = "none";
    noMostrarRegistro.style.display = "block"
});


btEnviar[1].addEventListener("click", ()=>{
    mostrarRegistro.style.display = "none";
    noMostrarRegistro.style.display = "block"
});

