let queryselector       = location.search;
let objectqueryselector = new URLSearchParams(queryselector)
let idmovie             = objectqueryselector.get("idseries")
console.log(idmovie)
let title               = document.querySelector(".subtitle")
let image               = document.querySelector("#image")
let synopsis            = document.querySelector(".sinopsis")
let favorite            = document.querySelector(".añadirfavorito")
let button              = document.querySelector(".button")
let apiKey              = '74fa5f666f80e0a07da9241346d3088b'

const url           = `https://api.themoviedb.org/3/tv/${idmovie}?api_key=${apiKey}`
const urlwatch      = `https://api.themoviedb.org/3/tv/${idmovie}/watch/providers?api_key=${apiKey}`
let articulo        = document.querySelector(".articuloseries1")
urlRecomendaciones  = `https://api.themoviedb.org/3/tv/${idmovie}/recommendations?api_key=${apiKey}`

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
    let generos = ""
    for (let i = 0; i< data.genres.length;i++) {
        generos +=          `
                            <a href="./detail_genres_series.html?id=${data.genres[i].title}"> | ${data.genres[i].name} | </a>`
    }


        articulo.innerHTML=`<h3 class="subtitle">${data.name}</h3>
                            <div class="box">
                                <img class="RyF5" src="https://image.tmdb.org/t/p/w185/${data.poster_path}" alt="${data.name}">
                                <p class="sinopsis"> <strong>Calificacion:</strong> IMDb ${data.vote_average}<br> <strong>Fecha de estreno:</strong> ${data.first_air_date
                                } 
                                <br> <strong>Sinopsis: </strong>${data.overview}</p>
                                <br> <strong>Generos: </strong>${generos}</p>
                                <form class="añadirfavorito" action="favoritos.html" method="get">
                                    <div>
                                        <button type="submit" class="button">Añadir a favoritos</button>
                                    </div>
                                </form>
                            </div>
                            
                            `


    })

fetch(urlwatch)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);

    let buy     = ""
    let flat    = ""
    if (data.results.US)
    {
        for (let i = 0; i<data.results.US.buy?.length;i++){
            buy += `<li class = "lista">
                    <img class="logowatch" src="https://image.tmdb.org/t/p/w185/${data.results.US.buy[i].logo_path}" alt="${data.results.US.buy[i].provider_name}">
                    <p> ${data.results.US.buy[i].provider_name} </p></li>
                    `
        }
        for (let i = 0; i<data.results.US.flatrate?.length;i++){
            flat += `<li class="lista">
                    <img class="logowatch" src="https://image.tmdb.org/t/p/w185/${data.results.US.flatrate[i].logo_path}" alt="${data.results.US.flatrate[i].provider_name}">
                    <p> ${data.results.US.flatrate[i].provider_name} </p></li>
                    `
        }
    }
    else if(data.results.FR)

    {console.log("entre")
        for (let i = 0; i<data.results.FR.buy?.length;i++){
            buy += `<li class = "lista">
                    <img class="logowatch" src="https://image.tmdb.org/t/p/w185/${data.results.FR.buy[i].logo_path}" alt="${data.results.FR.buy[i].provider_name}">
                    <p> ${data.results.FR.buy[i].provider_name} </p></li>
                    `
        }
        for (let i = 0; i<data.results.FR.flatrate?.length;i++){
            flat += `<li class="lista">
                    <img class="logowatch" src="https://image.tmdb.org/t/p/w185/${data.results.FR.flatrate[i].logo_path}" alt="${data.results.FR.flatrate[i].provider_name}">
                    <p> ${data.results.FR.flatrate[i].provider_name} </p></li>
                    `
        }
    }
    else {
        for (let i = 0; i<data.results.CH.buy?.length;i++){
            buy += `<li class = "lista">
                    <img class="logowatch" src="https://image.tmdb.org/t/p/w185/${data.results.CH.buy[i].logo_path}" alt="${data.results.CH.buy[i].provider_name}">
                    <p> ${data.results.CH.buy[i].provider_name} </p></li>
                    `
        }
        for (let i = 0; i<data.results.CH.flatrate?.length;i++){
            flat += `<li class="lista">
                    <img class="logowatch" src="https://image.tmdb.org/t/p/w185/${data.results.CH.flatrate[i].logo_path}" alt="${data.results.CH.flatrate[i].provider_name}">
                    <p> ${data.results.CH.flatrate[i].provider_name} </p></li>
                    `
        }
    }


    articulo.innerHTML+=    `<br> <strong>Alquilar: </strong><ul>${flat}</ul>
                            <br> <strong>Comprar: </strong><ul>${buy}</ul>
                            `
    }) 

fetch(urlRecomendaciones)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        let allMovies = ""
        for (let i=0; i< 5 ; i ++) {
            console.log(data.results[i]);
            allMovies +=    `<article class= "unapeli">
                                <a href="./series_detail.html?idseries=${data.results[i].id}">
                                    <h2>Titulo:${data.results[i].name}</h2>
                                </a>

                                <a href="./series_detail.html?idseries=${data.results[i].id}">
                                    <h3>${data.results[i].first_air_date}</h3>
                                </a>

                                <a href="./series_detail.html?idseries=${data.results[i].id}">
                                        <img src="https://image.tmdb.org/t/p/w185/${data.results[i].poster_path}" alt="">
                                </a>

                            </article>`
        
            
        }
        articulo.innerHTML+=`<br> <strong> Recomendaciones: </strong>${allMovies}`

        let favorites = []
        
        let boton = document.querySelector(".button")
        if(localStorage.getItem("favoritesseries") != null && localStorage.getItem("favoritesseries")) {
            favorites = JSON.parse(localStorage.getItem("favoritesseries"))
        }
        
        if(favorites.includes(idmovie)) {
            boton.innerText = "Quitar de mis favoritos";
        }
        
        boton.addEventListener("click", function(e) {
            e.preventDefault();
        
            if(favorites.includes(idmovie)) {
                let index = favorites.indexOf(idmovie);
                favorites.splice(index, 1);
                boton.innerText = "Agregar a Favoritos";}
        
            else{
                favorites.push(idmovie)
                boton.innerText = "Quitar de Favoritos";
        
            }
        
            let favoritestoSTR = JSON.stringify(favorites);
            localStorage.setItem("favoritesseries", favoritestoSTR);
        console.log(localStorage)
        
        })


    })

    .catch(function(error) {
        return error;
    })

