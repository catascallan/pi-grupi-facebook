let qs = location.search;
let qsObj = new URLSearchParams(qs);
let buscar = qsObj.get("buscar");
let acaVaLaAPIKey = "3fdc54d209865d0fa99ee5f520db7d2b"
let urlBusqueda = `https://api.themoviedb.org/3/search/movie?api_key=${acaVaLaAPIKey}&query=${buscar}`

fetch(urlBusqueda)
.then(function(res) {
    return res.json();
})
.then(function(data) {
    console.log(data.results);
    let peliculas = data.results; 
    let seccion = document.querySelector("#portada-sec");
    let miPelicula = document.querySelector(".miPelicula");
    let allMovies = "";

    if (data.results.length == 0) {
        miPelicula.innerText = "No hay resultados para la búsqueda ingresada"

    } else {
        for (let i = 0; i < peliculas.length; i++) {
            if (peliculas[i].poster_path != null) {
                allMovies += `<article class="portada">
                                <a href="./detalle-pelicula.html?idPelicula=${peliculas[i].id}"> <img class="portada-img" src="https://image.tmdb.org/t/p/original${peliculas[i].poster_path}"></a>
                                <h2 class="h2">Película: <a href="./detalle-pelicula.html?idPelicula=${peliculas[i].id}">${peliculas[i].title}</a></h2>
                            </article>`;
            }}
            seccion.innerHTML = allMovies;
            miPelicula.innerText = `Resultados de búsqueda para: ${buscar}`; 
    }
 
})
.catch(function(error) {
    console.log(error);
});