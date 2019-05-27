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