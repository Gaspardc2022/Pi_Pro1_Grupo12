
let apiKey              = `9910df916aaffe1a3e4e6497e8df6064`
let urlMovies           = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
let urlMoviesnow        = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`
let urlMoviesupcoming   = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`
let urlSeries           = `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=en-US&page=1`
let urlSeriesnow        = `https://api.themoviedb.org/3/tv/on_the_air?api_key=${apiKey}&language=en-US&page=1`
let urlSeriestop        = `https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}&language=en-US&page=1`




fetch(urlMovies)
    .then(function (response1) {
        return response1.json();
    })

    .then(function (data1) {

        
        let container1 = document.querySelector(".popularmovies");
        let allMovies = "";
        for (let i=0; i< 3 ; i ++) {
            console.log(data1.results[i]);
            allMovies +=    `
                                <h2></h2>
                                <h3>${data1.results[i].title}</h3>
                                <img src="https://image.tmdb.org/t/p/w185/${data1.results[i].poster_path}" alt="">
                                <p>${data1.results[i].title}</p>
                                <a href="./genres.html?idgenerospeliculas=${data1.results[i].id}"></a>
                                <a href="./movie_detail.html?idpelicula=${data1.results[i].id}">
                                    <button>
                                        Ver mas
                                    </button>
                                </a>
                                `
        
            
        }
        container1.innerHTML = allMovies;

        return data1;

    })
    .catch(function (error) {
        console.log(error);
        return error;
    })


fetch(urlMoviesnow)
    .then(function (response2) {
        return response2.json();
    })

    .then(function (data2) {

        
        let container2 = document.querySelector(".Peliculas_masvistas");
        let allMoviesnow = "";
        for (let i=0; i< 3 ; i ++) {
            console.log(data2.results[i]);
            allMoviesnow +=    `<h2><br><br></h2>
                                <h3>${data2.results[i].title}</h3>
            
                                <img src="https://image.tmdb.org/t/p/w185/${data2.results[i].poster_path}" alt="The Truman show">
                                <p>${data2.results[i].title}</p>
                                <a href="./genres.html?idgenerospeliculas=${data2.results[i].id}">
                                    <button>
                                        Ver género
                                    </button>
                                </a>`
        
            
        }
        container2.innerHTML = allMoviesnow;

        return data2;

    })
    .catch(function (error) {
        console.log(error);
        return error;
    })
    
    
fetch(urlMoviesupcoming)
    .then(function (response3) {
        return response3.json();
    })

    .then(function (data3) {

        
        let container3 = document.querySelector(".Peliculas_encamino");
        let allMoviescoming = "";
        for (let i=0; i< 1 ; i ++) {
            console.log(data3.results[i]);
            allMoviescoming +=    `<h2>${data3.results[i].title}<br> Próximas Películas <br></h2>

                                
                                    <img class="Trumanshow" src="https://image.tmdb.org/t/p/w185/${data3.results[i].poster_path}" alt="The Truman show">
                                    <p>1998 ‧ <a href="./genres.html" class="a3">Ciencia Ficción</a> ‧ 1h 43m </p>`
        
            
        }
        container3.innerHTML = allMoviescoming;

        return data3;

    })
    .catch(function (error) {
        console.log(error);
        return error;
    })



fetch(urlSeries)
    .then(function (respuesta) {
        return respuesta.json();
    })

    .then(function (data4) {

        
        let container4 = document.querySelector(".popularseries");
        let allSeries = "";
        for (let i=0; i< 1 ; i ++) {
            console.log(data4.results[i]);
            allSeries +=    `<h2>${data4.results[i].title}<br> Series populares <br></h2>

                <a href="./series_detail.html"><img class="Simuladores" src="./img/Los_simuladores.jpeg" alt="Los simuladores"></a>
                <p>2002 ‧ <a href="./genres.html" class="a3">Comedia</a> ‧ 2 temporadas</p>
                <form class="buscardetalle" action="series_detail.html" method="get">
                    <div>
                        <button type="submit" class="button1">Detalle</button>
                    </div>
                </form>`
        
            
        }
        container4.innerHTML = allSeries;

        return data4;

    })
    .catch(function (error) {
        console.log(error);
        return error;
    })


fetch(urlSeriesnow)
    .then(function (respuesta2) {
        return respuesta2.json();
    })

    .then(function (data5) {

        
        let container5 = document.querySelector(".Series_ahora");
        let allSeriesnow = "";
        for (let i=0; i< 1 ; i ++) {
            console.log(data5.results[i]);
            allSeriesnow +=    `<h2>${data5.results[i].title}<br> Series actuales <br></h2>


            <a href="./series_detail.html"><img class="Simuladores" src="./img/Los_simuladores.jpeg" alt="Los simuladores"></a>
            <p>2002 ‧ <a href="./genres.html" class="a3">Comedia</a> ‧ 2 temporadas</p>
            <form class="buscardetalle" action="series_detail.html" method="get">
                <div>
                    <button type="submit" class="button1">Detalle</button>
                </div>
            </form>`
        
            
        }
        container5.innerHTML = allSeriesnow;

        return data5;

    })
    .catch(function (error) {
        console.log(error);
        return error;
    })

fetch(urlSeriestop)
    .then(function (respuesta3) {
        return respuesta3.json();
    })

    .then(function (data6) {

        
        let container6 = document.querySelector("Series_toprated");
        let allSeriestop = "";
        for (let i=0; i< 1 ; i ++) {
            console.log(data6.results[i]);
            allSeriestop +=    `<h2>${data6.results[i].title}<br> Series mejor valoradas <br></h2>
                                <a href="./series_detail.html"><img class="Simuladores" src="./img/Los_simuladores.jpeg" alt="Los simuladores"></a>
                                <p>2002 ‧ <a href="./genres.html" class="a3">Comedia</a> ‧ 2 temporadas</p>
                                <form class="buscardetalle" action="series_detail.html" method="get">
                                    <div>
                                        <button type="submit" class="button1">Detalle</button>
                                    </div>
                                </form>`
        
            
        }
        container6.innerHTML = allSeriestop;

        return data6;

    })
    .catch(function (error) {
        console.log(error);
        return error;
    })