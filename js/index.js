let acaVaLaAPIKey = "3fdc54d209865d0fa99ee5f520db7d2b"

let urlMasVisto = `https://api.themoviedb.org/3/movie/top_rated?api_key=${acaVaLaAPIKey}`

let urlPelisPopulares = `https://api.themoviedb.org/3/movie/popular?api_key=${acaVaLaAPIKey}`

let urlSeriesPopulares = `https://api.themoviedb.org/3/tv/popular?api_key=${acaVaLaAPIKey}`

let portada = document.querySelector(".portada-img");

fetch(urlMasVisto)
.then(function(miRespuesta) {
    return miRespuesta.json();
})
.then(data => {
    let peliculas = data.results.slice(0, 5);
    peliculas.forEach((pelicula, index) => {
        let article = document.getElementsByClassName('portada')[index];
        article.getElementsByTagName('img')[0].src = `https://image.tmdb.org/t/p/original${pelicula.poster_path}`;
        article.getElementsByClassName('tituloPeli')[0].innerText = pelicula.title;
        article.getElementsByClassName('estrenoPeli')[0].innerText = `Fecha de estreno: ${pelicula.release_date}`;
    });
})
.catch(function(miError) {
    console.log(miError);
});




