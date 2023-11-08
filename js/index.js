let acaVaLaAPIKey = "3fdc54d209865d0fa99ee5f520db7d2b"

let urlMasVisto = `https://api.themoviedb.org/3/movie/top_rated?api_key=${acaVaLaAPIKey}`

let urlPelisPopulares = `https://api.themoviedb.org/3/movie/popular?api_key=${acaVaLaAPIKey}`

let urlSeriesPopulares = `https://api.themoviedb.org/3/tv/popular?api_key=${acaVaLaAPIKey}`

fetch(urlMasVisto)
.then(function(res) {
    return res.json();
})
.then(function(data) {
    console.log(data.results);
    let peliculas = data.results;
    let seccion = document.querySelector(".loMasVisto");
    let allMovies = "";
    for (let i = 0; i < 5; i++) {
        allMovies += `<article class="portada">
                            <a href="./detalle-pelicula.html?idPelicula=${peliculas[i].id}"> <img class="portada-img" src="https://image.tmdb.org/t/p/original${peliculas[i].poster_path}"></a>
                            <h2 class="tituloPeli">Titulo: <a href="./detalle-pelicula.html?idPelicula=${peliculas[i].id}"> ${peliculas[i].title}</a> </h2>
                            <p class="estrenoPeli">Estreno: ${peliculas[i].release_date}</p>
                        </article>`;
    }
    seccion.innerHTML = allMovies;
})
.catch(function(error) {
    console.log(error);
});

fetch(urlPelisPopulares)
.then(function(res) {
    return res.json();
})
.then(function(data) {
    console.log(data.results);
    let peliculas = data.results;
    let seccion = document.querySelector(".peliculasPopu");
    let allMovies = "";
    for (let i = 0; i < 5; i++) {
        allMovies += `<article class="portada">
                            <a href="./detalle-pelicula.html?idPelicula=${peliculas[i].id}"> <img class="portada-img" src="https://image.tmdb.org/t/p/original${peliculas[i].poster_path}"></a>
                            <h2 class="tituloPeli">Titulo: <a href="./detalle-pelicula.html?idPelicula=${peliculas[i].id}"> ${peliculas[i].title}</a> </h2>
                            <p class="estrenoPeli">Estreno: ${peliculas[i].release_date}</p>
                        </article>`;
    }
    seccion.innerHTML = allMovies;
})
.catch(function(error) {
    console.log(error);
});

fetch(urlSeriesPopulares)
.then(function(res) {
    return res.json();
})
.then(function(data) {
    console.log(data.results);
    let series = data.results; 
    let seccion = document.querySelector(".seriesPopu");
    let allseries = "";
    for (let i = 0; i < 5; i++) {
        allseries += `<article class="portada">
                            <a href="./detalle-serie.html?idSerie=${series[i].id}"> <img class="portada-img" src="https://image.tmdb.org/t/p/original${series[i].poster_path}"></a>
                            <h2 class="tituloPeli">Titulo: <a href="./detalle-serie.html?idSerie=${series[i].id}"> ${series[i].name}</a> </h2>
                            <p class="estrenoPeli">Estreno: ${series[i].first_air_date}</p>
                        </article>`;
    }
    seccion.innerHTML = allseries;
})
.catch(function(error) {
    console.log(error);
});



