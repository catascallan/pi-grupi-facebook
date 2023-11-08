let qs = location.search;
let qsObj = new URLSearchParams(qs);
let id_pelicula = qsObj.get("idPelicula");
let acaVaLaAPIKey = "3fdc54d209865d0fa99ee5f520db7d2b";
let urlDetallePeli = `https://api.themoviedb.org/3/movie/${id_pelicula}?api_key=${acaVaLaAPIKey}`

let h2 = document.querySelector(".h2")
let portadaImgDetalle = document.querySelector(".portada-img-detalle")
let rating = document.querySelector(".rating");
let estreno = document.querySelector(".estreno");
let duracion = document.querySelector(".duracion");
let sinopsis = document.querySelector(".sinopsis");
let genero = document.querySelector(".genero");

fetch(urlDetallePeli)
.then(function(response) {
    return response.json();
}) 
.then(function(data) {
    console.log(data);
    h2.innerText = data.title
    let urlBase = "https://image.tmdb.org/t/p/original";
    let rutaImagen = data.poster_path;
    let urlCompleta = urlBase + rutaImagen;
    portadaImgDetalle.src = urlCompleta
    rating.innerText = data.popularity
    estreno.innerText = data.release_date 
    duracion.innerText = data.runtime + " min"
    sinopsis.innerText = data.overview
    for (let i = 0; i < genero.length; i++) {
        genero.innerText = data.genres[i].name }
})
.catch(function(errors) {
    console.log(errors);
});