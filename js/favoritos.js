
let apiKey          = '74fa5f666f80e0a07da9241346d3088b'

if(localStorage.getItem("favoritesmovie") != null && localStorage.getItem("favoritesmovie")) {
    favoritesmovie  = JSON.parse(localStorage.getItem("favoritesmovie"))
} 
if(localStorage.getItem("favoritesseries") != null && localStorage.getItem("favoritesseries")) {
    favoritesseries = JSON.parse(localStorage.getItem("favoritesseries"))
}

console.log(favoritesmovie); 
console.log(favoritesseries); 

let listapeliculas  = document.querySelector(".peliculas")
let listaseries     = document.querySelector(".series")

if(favoritesmovie == null && favoritesmovie.length == 0) {    
    listapeliculas.innerHTML='<p>No hay favoritos seleccionados</p>'
} else {
    for (let i=0; i<favoritesmovie.length; i++){

fetch(`https://api.themoviedb.org/3/movie/${favoritesmovie[i]}?api_key=${apiKey}`)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
    listapeliculas.innerHTML +=`
                                <article class="articulofavoritos">
                                <a href="./movie_detail.html?idpelicula=${data.id}"><h3>${data.title}</h3></a>
                                <a href="./movie_detail.html?idpelicula=${data.id}"><img class="RyF5" src="https://image.tmdb.org/t/p/w185/${data.poster_path}" alt="${data.title}"></a>
                                </article>
                                `


    })
    .catch(function(error) {
        return error;
    })
        }
    }
    if(favoritesseries == null && favoritesseries.length == 0) {    
        listaseries.innerHTML='<p>No hay favoritos seleccionados</p>'
    } else {
        for (let i=0; i<favoritesseries.length; i++){
            
fetch(`https://api.themoviedb.org/3/tv/${favoritesseries[i]}?api_key=${apiKey}`)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
    listaseries.innerHTML +=`
                            <article class="articulofavoritos">
                            <a href="./series_detail.html?idseries=${data.id}"><h3>${data.name}</h3></a>
                            <a href="./series_detail.html?idseries=${data.id}"><img class="RyF5" src="https://image.tmdb.org/t/p/w185/${data.poster_path}" alt="${data.name}"></a>



                            </article>
                            `


    })
    .catch(function(error) {
        return error;
    })
        }
    }
