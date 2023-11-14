let qs = location.search;
let qsObj = new URLSearchParams(qs);
let id_serie = qsObj.get("idSerie");
let acaVaLaAPIKey = "3fdc54d209865d0fa99ee5f520db7d2b";
let urlDetalleSerie = `https://api.themoviedb.org/3/tv/${id_serie}?api_key=${acaVaLaAPIKey}`
let botonRecomend = `https://api.themoviedb.org/3/tv/${id_serie}/recommendations?api_key=${acaVaLaAPIKey}`

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
          contenido += ` <li><a href="./detalle-genero.html?id_genero=${arrayGeneros[i].id}&nombre=${arrayGeneros[i].name}">${arrayGeneros[i].name}</a></li>`
    }
    genero.innerHTML = contenido 
})
.catch(function(errors) {
    console.log(errors);
});

let botonrecom = document.querySelector(".botonrecom")
let series_recomendacion = document.querySelector(".series_recomendacion")

series_recomendacion.style.display = 'none';
botonrecom.addEventListener('click', function() {

    if(series_recomendacion.style.display == "none"){
        series_recomendacion.style.display = 'flex';
        botonrecom.innerText = "OCULTAR RECOMENDACIONES"
    }  
    else{
        series_recomendacion.style.display = "none";
        botonrecom.innerText = "VER RECOMENDACIONES"
    }
})
fetch(botonRecomend)
.then(function(res) {
    return res.json();
})
.then(function(data) {
    console.log(data.results);
    let series = data.results;
    let seccion = document.querySelector(".series_recomendacion");
    let allMovies = " ";
    if (series.length != 0) {
            for (let i = 0; i < series.length; i++) {
                allMovies += `<article class="portada">
                                    <a href="./detalle-serie.html?idSerie=${series[i].id}"> <img class="portada-img" src="https://image.tmdb.org/t/p/original${series[i].poster_path}"></a>
                                    <h2 class="tituloPeli">Titulo: <a href="./detalle-serie.html?idSerie=${series[i].id}"> ${series[i].original_name}</a> </h2>
                                    <p class="estrenoPeli">Estreno: ${series[i].first_air_date}</p>
                               </article>`;
    }
    seccion.innerHTML = allMovies;
}   else {
        let seccion = document.querySelector(".series_recomendacion");
        allMovies += `<p>No hay recomendaciones disponibles para este titulo.</p>`
} 
seccion.innerHTML = allMovies

.catch(function(errors) {
    console.log(errors);
});
})



