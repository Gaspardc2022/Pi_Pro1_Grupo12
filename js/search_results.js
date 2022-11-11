let form = document.querySelector(".buscador")
let campoBuscar= document.querySelector(".cartel")
form.addEventListener (submit, function (event){
    event.preventDefault();
    if (campoBuscar.value == ""){
        alert("No se introdujo palabras")
    } else if (campoBuscar.value.length <= 3)
    alert("debes escribir mas de 3 caracteres");
    else {this.submit()}


})

let apiKey = '74fa5f666f80e0a07da9241346d3088b'
let url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}`

fetch(url)
.then(function (respuesta) {
    return respuesta.json();})

.then(function (data) {
return data;
})
.catch(function (error) {
    console.log(error);
    return error;
})
    
let urlSeries = `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}`

fetch(url)
.then(function (respuesta) {
    return respuesta.json();})

.then(function (data) {
return data;
})
.catch(function (error) {
    console.log(error);
    return error;
})