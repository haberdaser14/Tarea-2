//TAREA: En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!

// const button = document.querySelector("#ingresar");


//     let h1 = document.querySelector("h1")
//     h1.innerText = `¡Bienvenido ${nombreUsuario}!`
const mostrarDatosDelUsuario = function(){
    const nombreUsuario = document.querySelector("#nombre_usuario").value;
    const segundoNombreUsuario = document.querySelector("#segundo_nombre_usuario").value;
    const apellidoUsuario = document.querySelector("#apellido_usuario").value;
    const edadUsuario = document.querySelector("#edad_usuario")
    return (`${nombreUsuario} ${segundoNombreUsuario} ${apellidoUsuario} ${edadUsuario}`)
}

const botonMostrarDatos = document.querySelector("#ingresar");
botonMostrarDatos.onclick = function(){
    document.querySelector('#mostrar_datos_usuario').value = mostrarDatosDelUsuario();
    return false;
}


