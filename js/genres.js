fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=74fa5f666f80e0a07da9241346d3088b`)
	.then(function(response) {
		return response.json();
	})
	.then(function(data) {
		console.log(data);

		let info 	= data.genres
		let lista 	= document.querySelector("#peliculas")
		let generos = ""

		for (let i = 0; i < info.length; i++) {
			console.log(info[i]);
			generos += `
						<li class="genero">
							<a href="detail_genres_movie.html?id=${info[i].id}"> ${info[i].name} </a>
						</li>`
		};

		console.log(generos)
		lista.innerHTML += generos;

	})
	.catch(function(error) {
		console.log('El error fue: ' + error);
	})

fetch(`https://api.themoviedb.org/3/genre/tv/list?api_key=74fa5f666f80e0a07da9241346d3088b`)

	.then(function(response) {
		return response.json();
	})
	.then(function(data) {
		console.log(data);

		let info 	= data.genres
		let lista 	= document.querySelector("#series")
		let generos = ""

		for (let i = 0; i < info.length; i++) {
			console.log(info[i]);
			generos += `
						<li class="genero">
							<a href="detail_genres_series.html?id=${info[i].id}&genre_ids=${info[i].name}"> ${info[i].name} </a>
						</li>`
		};

		console.log(generos)
		lista.innerHTML += generos;

	})
	.catch(function(error) {
		console.log('El error fue: ' + error);
	})

	window.addEventListener("load",function(){
		document.getElementById("loader").classList.toggle("loader2")
	
	})