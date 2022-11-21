let url = `
https://api.themoviedb.org/3/search/multi?api_key=74fa5f666f80e0a07da9241346d3088b&language=en-US&query=busqueda&page=1&include_adult=false&region=es`;

fetch(url)
    .then(function (response) {
        return response.json();
    })

    .then(function (data) {

        
        let container1  = document.querySelector(".container");
        let allMovies   = "";
        for (let i=0; i< 3 ; i ++) {
            console.log(data.results[i]);
            allMovies +=    `<article class= "unapeli">
                                <a href="./search_results.html?idbusqueda=${data.results[i].id}">
                                    <h2>Titulo:${data.results[i].title}</h2>
                                </a>

                                <a href="./movie_detail.html?idimagen=${data.results[i].id}">
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