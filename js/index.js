
let apiKey = '74fa5f666f80e0a07da9241346d3088b'
let urlMovies = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
let urlSeries = `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}`



fetch(urlMovies)
    .then(function (response) {
        return response.json();
    })

    .then(function (data) {

        
        let container1 = document.querySelector(".popularmovies");
        let allMovies = "";
        for (let i=0; i< 5 ; i ++) {
            console.log(data.results[i]);
            allMovies +=    `<article>
                                <h2>Titulo:${data.results[i].title}</h2>
                                <h3>${data.results[i].title}</h3>
                                <img src="https://image.tmdb.org/t/p/w185/${data.results[i].poster_path}" alt="">
                                <p>${data.results[i].title}</p>
                                <a href="./genres.html?idgenerospeliculas=${data.results[i].id}"></a>
                                <a href="./movie_detail.html?idpelicula=${data.results[i].id}">
                                    <button>
                                        Ver mas
                                    </button>
                                </a>
                            </article>`
        
            
        }
        container1.innerHTML = allMovies;

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

    .then(function (data1) {

        
        let container2 = document.querySelector(".popularseries");
        let allSeries = "";
        for (let i=0; i< 5 ; i ++) {
            console.log(data1.results[i]);
            allSeries +=    `<article>
                                <h2>${data1.results[i]}</h2>
                                <ul class="padre_series">
                                    <li>
                                        <h3>${data1.results[i]}</h3>
                                        <a href="./genres.html?idgeneroserie=${data1.results[i].id}"></a>
                                        <a href="./series_detail.html?idgeneroseries=${data1.results[i].id}">
                                        <form>
                                                <button>
                                                    Agregar a favoritos
                                                </button>                                     
                                        </form>
                                    </li>    
                                </ul>
                            </article>`
        
            
        }
        container2.innerHTML = allSeries;

        return data1;

    })
    .catch(function (error) {
        console.log(error);
        return error;
    })
