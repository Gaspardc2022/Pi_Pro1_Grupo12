let qs = location.search
let qslo = new URLSearchParams(qs);

let id = qslo.get ('id');

let genero = qslo.get ('genre_ids');

let url = `https://api.themoviedb.org/3/discover/tv?api_key=18244799e13812364e948bca9d25aff1&with_genres=${id}`
fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
        
        document.querySelector('h2').innerHTML = genero
        
        let info = data.results
        let detalle_generos = ""
        
        for (let i = 0; i < info.length; i++) {
			console.log(info[i]);
			detalle_generos +=
                                `
                                <article class= "unaserie">
                                        <a href="./series_detail.html?idserie=${data.results[i].id}">
                                            <h2>${data.results[i].name}</h2>
                                        </a>
                                        <a href="./series_detail.html?idserie=${data.results[i].id}">
                                            <img class="imgserie"  src="https://image.tmdb.org/t/p/w185/${data.results[i].poster_path}" alt="">
                                            <li class="subtitulosp">${info[i].name}</li>
                                        </a>
                                        <a href="./series_detail.html?idserie=${data.results[i].id}">
                                            <li class="subtitulos">${info[i].first_air_date}</li>
                                            <li class= "subtitulos">Rating: ${info[i].vote_average}</li>
                                        </a>
                                </article>
                                `
        }
        
        document.querySelector('.generos_series1').innerHTML = detalle_generos

    })
    .catch(function(error){
		console.log('El error fue: ' + error);
    }) 