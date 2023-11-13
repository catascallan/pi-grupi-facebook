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
let genero = document.querySelector(".generoLista");

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
    let arrayGeneros = data.genres;

    let contenido = "";
    for (let i = 0; i < arrayGeneros.length; i++) {
          contenido += ` <li><a href="./detalle-genero.html?id_genero=${arrayGeneros[i].id}&nombre=${arrayGeneros[i].name}">${arrayGeneros[i].name}</a></li>`
    }
    
    genero.innerHTML = contenido    
    
})
.catch(function(errors) {
    console.log(errors);
});

let favoritos = [];
let recuperoStorage = localStorage.getItem('favoritos');

if (recuperoStorage != null) {
    favoritos = JSON.parse(recuperoStorage);
}

let fav = document.querySelector('#fav');

if (favoritos.includes(id_pelicula)) {
    fav.innerText = 'QUITAR DE FAVORITOS'
}

fav.addEventListener('click', function() {
    if (favoritos.includes(id_pelicula)) {
        let indice = favoritos.indexOf(id_pelicula)
        favoritos.splice(indice, 1);
        fav.innerText = 'AGREGAR A FAVORITOS'
    } else {
        favoritos.push(id_pelicula);
        fav.innerText = 'QUITAR DE FAVORITOS'
    }

    let favoritosToString = JSON.stringify(favoritos);
    localStorage.setItem('favoritos', favoritosToString)
} )