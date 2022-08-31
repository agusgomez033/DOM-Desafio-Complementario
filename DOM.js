
let usuario_registrado = "Agustin";

function validar(){

    let nombre = document.getElementById("nombre_usuario");
    let mensaje = document.getElementById("mensaje");

    if(nombre.value == usuario_registrado){
        let parrafo = document.createElement("p");
        parrafo.innerText = "Bienvenido/a al Sistema";
        mensaje.append(parrafo);
    
    }
    else{
        document.body.innerHTML = `<h2>ERROR, USUARIO INCORRECTO</h2>
                                   <p>El usuario: ${nombre.value} no se encuentra</p>`;
        
    }
}
