function borrar() {
    
    var lista = document.querySelector(".listado");
    var ultimo = lista.lastChild
    console.log(lista);
    console.log(ultimo);
    lista.removeChild(ultimo);
}

function test() {
    
    var lista = document.querySelector(".listado");
    var ultimo = document.createElement("a");
    var att = document.createAttribute("class");
    att.value = "list-group-item list-group-item-action";
    ultimo.setAttributeNode(att);
    ultimo.innerHTML ="Nuevo Parametro";
    lista.appendChild(ultimo);
}

function mostrarBusqueda(){
    var Busqueda = "Se han encontrado 2 coincidencias \nPrimera coincidencia Página 10, Posicion 592\nSegunda coincidencia Página 34, Posición 34";
    alert(Busqueda);
}

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var btnSi = document.getElementById("myBtnSi");
var btnNo = document.getElementById("myBtnNo");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Get the button that opens the modal
var mensaje = document.getElementById("myMensaje");

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
    mensaje.textContent  = "¿Desea guardar los resultados?";
    btnSi.style.display = "block";
    btnNo.style.display = "block";
}

btnSi.onclick = function() {
    mensaje.textContent  = "Resultados Guardados";
    btnSi.style.display = "none";
    btnNo.style.display = "none";
}

btnNo.onclick = function() {
    modal.style.display = "none"
    btnSi.style.display = "none";
    btnNo.style.display = "none";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}