//Crear el arreglo que almacenará la lista de amigos
let listaAmigos = [];
//Crear la variable que es el objeto que se ve como "Escribe un nombre", el id está en html
let amigoAgregado = document.getElementById('amigo');
//Crear la variable que permite que muestre la lista de amigos en pantalla
let verlistaAmigos = document.getElementById('listaAmigos');
//Crear la variable que es el objeto que dice "El amigo secreto es ...". el id está en el html
let mostrarResultado = document.getElementById('resultado');

//En el html hay un código dsobre el botón Añadir que se activa con la funcion agregarAmigo
function agregarAmigo () {
    if (amigoAgregado.value === ""){
        alert("Por favor, inserte un nombre");
    } else {
        if(listaAmigos.includes(amigoAgregado.value)){
            alert("El nombre ya se encuentra en la lista");
        }else {
            listaAmigos.push(amigoAgregado.value)  //Agregar a la lista el nombre que coloco al darle Añadir
            verlistaAmigos.innerHTML="";
            for(let i = 0; i <= listaAmigos.length; i++){
                let elemento = document.createElement("li");
                elemento.textContent = listaAmigos[i];
                verlistaAmigos.appendChild(elemento);
                limpiarNombre();
            }
        }
    }
}  
//En el html hay un código sobre el botón Sortear Amigo que se activa con la funcion sortearAmigo
function sortearAmigo(){
    if(listaAmigos.length==="") {
        alert("Por favor, agregar nombres");
    } else {
        let cantidadAmigos = Math.floor(Math.random()*listaAmigos.length);  //Tomo un número random (0 al 1) y se multiplicará por la cantidad de nombres que se guardó en listaAmigos
        let amigoSecreto = listaAmigos[cantidadAmigos];
        mostrarResultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`
        document.querySelector('#acabarJuego').setAttribute('disabled',true); //Se creó un id para el botón
        document.querySelector('#amigo').setAttribute('disabled',true);
        document.querySelector('#noAgregar').setAttribute('disabled',true); //Se creó un id para el botón
    }
}

function limpiarNombre(){
    let valorNombre = document.querySelector('#amigo').value = '';
}
