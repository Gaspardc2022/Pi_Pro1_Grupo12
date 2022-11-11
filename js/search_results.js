let form = document.querySelector(".buscador")
let campoBuscar= document.querySelector(".cartel")
form.addEventListener (submit, function (event){
    event.preventDefault();
    if (campoBuscar.value == ""){
        alert("No se introdujo palabras")
    }
    else {this.submit()}


})
        
    