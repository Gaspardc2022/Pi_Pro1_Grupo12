
let apiKey      = '74fa5f666f80e0a07da9241346d3088b'
let urlMovies   = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
let urlSeries   = `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}`
let urlTopRated = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`




fetch(urlMovies)
    .then(function (response) {
        return response.json();
    })

    .then(function (data) {

        
        let container1 = document.querySelector(".popularmovies");
        let allMovies = "";
        for (let i=0; i< 5 ; i ++) {
            console.log(data.results[i]);
            allMovies +=    `<article class= "unapeli">
                                <a href="./movie_detail.html?idpelicula=${data.results[i].id}">
                                    <h2>Titulo:${data.results[i].title}</h2>
                                </a>

                                <a href="./movie_detail.html?idpelicula=${data.results[i].id}">
                                    <h3>${data.results[i].release_date}</h3>
                                </a>
                                
                                <a href="./movie_detail.html?idpelicula=${data.results[i].id}">
                                    <img src="https://image.tmdb.org/t/p/w185/${data.results[i].poster_path}" alt="">
                                </a>

                                <a href="./favoritos.html?idmisfavoritos=${data.results[i].id}">
                                    <button class="bj">
                                        Añadir a mis favoritos
                                    </button>
                                </a>
                               
                            </article>`
        
            
        }
        container1.innerHTML += allMovies;

        return data;

    })
    .catch(function (error) {
        console.log(error);
        return error;
    })



fetch(urlSeries)
    .then(function (respuesta) {
        return respuesta.json();
    })

    .then(function (data) {

        
        let container2 = document.querySelector(".popularseries");
        let allSeries = "";
        for (let i=0; i< 5 ; i ++) {
            console.log(data.results[i]);
            allSeries +=    `<article class= "unapeli">
                            <a href="./series_detail.html?idseries=${data.results[i].id}">
                                <h2>Titulo:${data.results[i].name}</h2>
                            </a>

                            <a href="./series_detail.html?idseries=${data.results[i].id}">
                                <h3>${data.results[i].first_air_date}</h3>
                            </a>

                            <a href="./series_detail.html?idseries=${data.results[i].id}">
                                    <img src="https://image.tmdb.org/t/p/w185/${data.results[i].poster_path}" alt="">
                            </a>

                            <a href="./favoritos.html?idmisfavoritos=${data.results[i].poster_path}">
                                    <button class="bj">
                                        Añadir a mis favoritos
                                    </button>
                                </a>
           
                            </article>`
        
            
        }
        container2.innerHTML += allSeries;


    })
    .catch(function (error) {
        console.log(error);
        return error;
    })



fetch(urlTopRated)
    .then(function (response) {
        return response.json();
    })

    .then(function (data) {

        
        let container1 = document.querySelector(".trendingmovies");
        let allTrending = "";
        for (let i=0; i< 5 ; i ++) {
            console.log(data.results[i]);
            allTrending +=    `<article class= "unapeli">
                                <a href="./movie_detail.html?idpelicula=${data.results[i].id}">
                                    <h2>Titulo:${data.results[i].title}</h2>
                                </a>

                                <a href="./movie_detail.html?idpelicula=${data.results[i].id}">
                                    <h3>${data.results[i].release_date}</h3>
                                </a>
                                
                                <a href="./movie_detail.html?idpelicula=${data.results[i].id}">
                                    <img src="https://image.tmdb.org/t/p/w185/${data.results[i].poster_path}" alt="">
                                </a>

                                <a href="./favoritos.html?idmisfavoritos=${data.results[i].id}">
                                    <button class="bj">
                                        Añadir a mis favoritos
                                    </button>
                                </a>
                               
                            </article>`
        
            
        }
        container1.innerHTML += allTrending;

        return data;

    })
    .catch(function (error) {
        console.log(error);
        return error;
    })

let formulario = document.querySelector('form');
let inputBusqueda = document.querySelector('#busqueda');
    
    formulario.addEventListener('submit', function(e) {
        e.preventDefault();
    
        console.log(inputBusqueda.value);
    
        if (inputBusqueda.value == '') {
            alert('¡Debe ingresar texto!');
        }else if(inputBusqueda.value.length < 3){
            alert('El termino ingresado debe tener 3 caracteres como minimo')
        }else {
            this.submit();
        }
    } );
