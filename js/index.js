let acaVaLaAPIKey = "3fdc54d209865d0fa99ee5f520db7d2b"

let urlMasVisto = `https://api.themoviedb.org/3/movie/top_rated?api_key=${acaVaLaAPIKey}`

let urlPelisPopulares = `https://api.themoviedb.org/3/movie/popular?api_key=${acaVaLaAPIKey}`

let urlSeriesPopulares = `https://api.themoviedb.org/3/tv/popular?api_key=${acaVaLaAPIKey}`

let urlBusqueda = `https://api.themoviedb.org/3/search/movie?api_key=${acaVaLaAPIKey}&query=${busqueda}`

let portada = document.querySelector(".portada-img");

fetch(urlMasVisto)
.then(function(response) {
    return response.json();
})
.then(function(data) {
    let results = data.results
    console.log(results);
    /*portada.src = results.poster_path
    tenemos que armar un for para que la info se modifique según el index en el diccionario*/
})
.catch(function(errors) {
    console.log(errors);
});
