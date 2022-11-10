let queryselector = location.search;
let objectqueryselector = new URLSearchParams(queryselector)
let idmovie = objectqueryselector.get(".detailmov")

let title = document.querySelector(".subtitle")
let image = document.querySelector("#image")
let synopsis = document.querySelector(".sinopsis")
let favorite = document.querySelector(".añadirfavorito")
let button = document.querySelector(".button")


const url = `https://api.themoviedb.org/3/movie/550?api_key`


fetch(url)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
    title.innerText= data.name;
    image.src= data.image;
    synopsis = data.sinopsis


    return data;
})
.catch(function(error) {
    return error;
})

let favorites = null
let storagerecovery = localStorage.getItem("favorites")

if(storagerecovery != null) {
    favorites = JSON.parse(storagerecovery)
}

else if(favorites.includes(idmovie)) {
    favorite.innerText = "Quitar de mis favoritos";
}

button.addEventListener("click", function(e) {
    e.preventDefault();

    if(favorites.includes(idmovie)) {
        let index = favorites.indexOf(idmovie);
        favorites.splice(index, 1);
        favorite.innerText = "Agregar a Favoritos";}

    else{
        favorites.push(idmovie)
        favorite.innerText = "Quitar de Favoritos";

    }

    let favoritestoSTR = JSON.stringify(favorites);
    localStorage.setItem("favoritos", favoritestoSTR);


})