let apikey              = "74fa5f666f80e0a07da9241346d3088b"
let form            = document.querySelector("form");
let barrabuscador   = document.querySelector("[name=busqueda]");


console.log(barrabuscador.value);

form.addEventListener("submit", function(e) {
    
        e.preventDefault();
        console.log(barrabuscador.value);
    
        if(barrabuscador.value == ""){
            alert("Debe ingresar texto");
        } else if(barrabuscador.value.length < 3){
            alert("Ingresar como mínimo 3 caracteres");
        } else {
            this.submit();
        }
    
    })


let qs              = location.search;
let qsobject        = new URLSearchParams(qs);
let caracter        = qsobject.get("busqueda");
console.log(caracter);

let h1          = document.querySelector("h1");
h1.innerText    = `Resultados de búsqueda para: ${caracter}`



//Fetch resultados de búsqueda series
const resultadoseries  = `https://api.themoviedb.org/3/search/tv?api_key=${apikey}&language=en-US&page=1&query=${qs}&include_adult=false`
fetch(resultadoseries)
    .then(function (response) {
        return response.json();
    })

    .then(function (data) {

        let container1      = document.querySelector(".container");
        let allSeries       = "";
        for (let i=0; i< 5 ; i ++) {
            allSeries        +=    `<article class= "unapeli">
                                        <h2>Titulo:${data.results[i].title}</h2>
                                        <h3>${data.results[i].first_air_date}</h3>
                                        <img src="https://image.tmdb.org/t/p/w185/${data.results[i].poster_path}" alt="">
                                    </article>`
                  
        
        container1.innerHTML += allSeries;
        }
        console.log(data);
        return data;

    })
    .catch(function (error) {
        console.log(error);
        return error;
    })


const busquedapelis  = `https://api.themoviedb.org/3/search/tv?api_key=${apikey}&language=en-US&page=1&query=${qs}include_adult=false`
fetch(busquedapelis)
    .then(function (response) {
        return response.json();
    })

    .then(function (data) {

        let container2      = document.querySelector(".container");
        let allMovies       = "";
        for (let i=0; i< 5 ; i ++) {
            allMovies +=    `<article class= "unapeli">
  
                                <h2>Titulo:${data.results[i].title}</h2>

                                <h3>${data.results[i].release_date}</h3>
                                <img src="https://image.tmdb.org/t/p/w185/${data.results[i].poster_path}" alt="">
                            
                            </article>`
        
            
        
        container2.innerHTML += allMovies;
        }
        return data;

    })
    .catch(function (error) {
        console.log(error);
        return error;
    })

    window.addEventListener("load",function(){
        document.getElementById("loader").classList.toggle("loader2")
    
    })
