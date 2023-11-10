let qs = location.search;
let qsObj = new URLSearchParams(qs);
let id_serie = qsObj.get("idSerie");
let acaVaLaAPIKey = "3fdc54d209865d0fa99ee5f520db7d2b";
let urlDetalleSerie = `https://api.themoviedb.org/3/tv/${id_serie}?api_key=${acaVaLaAPIKey}`

let h2 = document.querySelector(".h2")
let portadaImgDetalle = document.querySelector(".portada-img-detalle")
let rating = document.querySelector(".rating");
let estreno = document.querySelector(".estreno");
let sinopsis = document.querySelector(".sinopsis");
let genero = document.querySelector(".genero");

fetch(urlDetalleSerie)
.then(function(response) {
    return response.json();
}) 
.then(function(data) {
    console.log(data);
    h2.innerText = data.name
    let urlBase = "https://image.tmdb.org/t/p/original";
    let rutaImagen = data.poster_path;
    let urlCompleta = urlBase + rutaImagen;
    portadaImgDetalle.src = urlCompleta
    rating.innerText = data.popularity
    estreno.innerText = data.first_air_date
    sinopsis.innerText = data.overview
    
    let arrayGeneros = data.genres;
    let contenido = "";
    for (let i = 0; i < arrayGeneros.length; i++) {
        console.log(arrayGeneros[i].name);
        contenido += `<li> <a href="./detalle-genero.html" class="genero">${arrayGeneros[i].name}</a></li>`
    }
    genero.innerHTML = contenido;
})
.catch(function(errors) {
    console.log(errors);
});

