let acaVaLaAPIKey = "3fdc54d209865d0fa99ee5f520db7d2b";

let urlGenerosPelis = `https://api.themoviedb.org/3/genre/movie/list?api_key=${acaVaLaAPIKey}`;

let urlGenerosSeries = `https://api.themoviedb.org/3/genre/tv/list?api_key=${acaVaLaAPIKey}`;

let listaPelis = document.querySelector(".listaPelis");

let listaSeries = document.querySelector(".listaSeries");

fetch(urlGenerosPelis)
.then(function(miRespuesta) {
    return miRespuesta.json();
})
.then(function(miRespuesta) {
    let generos = miRespuesta.genres;
    console.log(generos);

    let contenido = "";
    for (let i = 0; i < generos.length; i++) {
          contenido += ` <li><a href="./detalle-pelicula.html?id_provincia=${generos[i].id}">${generos[i].name}</a></li>`
    }

    listaPelis.innerHTML = contenido;

})
.catch(function(miError) {
    console.log(miError);
});

fetch(urlGenerosSeries)
.then(function(miRespuesta) {
    return miRespuesta.json();
})
.then(function(miRespuesta) {
    let generos = miRespuesta.genres;
    console.log(generos);

    let contenido = "";
    for (let i = 0; i < generos.length; i++) {
          contenido += ` <li><a href="./detalle-pelicula.html?id_provincia=${generos[i].id}">${generos[i].name}</a></li>`
    }
    
    listaSeries.innerHTML = contenido;

})
.catch(function(miError) {
    console.log(miError);
});