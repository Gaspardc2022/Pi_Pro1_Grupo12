let qs      = location.search;
let qsObj   = new URLSearchParams(qs);  
let movies  = qsObj.get('busqueda'); 

let api_key = '74fa5f666f80e0a07da9241346d3088b'
let url     = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}`;

fetch(url)
    .then(function(response) {
    return response.json();
})
    .then(function(data) {
    
        let arraymovies = data.results;

        let seccion = document.querySelector('.busquedapeliculas');
        let allmovies = [];

        for(let i=0; i< 3; i++){
            allmovies += `  <article>
                                <a href="./movie_detail.html?buscadordepeliculas=${arraymovies[i].id}">
                                
                                    <img src="https://image.tmdb.org/t/p/w185/${arraymovies[i].poster_path}" alt='${arraymovies[i].name}' />
                                    <p>Titulo: ${arraymovies[i].name} </p>
                                    <p>Fecha de estreno: ${arraymovies[i].release_date} </p>
                                </a>
                            </article>`
        }
        seccion.innerHTML = allmovies;
        return data;
})
    .catch(function(error) {
        console.log(error);
        return error;
});
