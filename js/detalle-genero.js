let qs = location.search;
let qsObj = new URLSearchParams(qs);
let id_genero = qsObj.get("id_genero");
let nombre = qsObj.get("nombre");
let acaVaLaAPIKey = "3fdc54d209865d0fa99ee5f520db7d2b"
let urlGenero = `https://api.themoviedb.org/3/discover/movie?api_key=${acaVaLaAPIKey}&with_genres=${id_genero}`
let urlGeneroTV = `https://api.themoviedb.org/3/discover/tv?api_key=${acaVaLaAPIKey}&with_genres=${id_genero}`

fetch(urlGenero)
.then(function(res) {
    return res.json();
})
.then(function(data) {
    console.log(data.results);
    let peliculas = data.results; 
    let seccion = document.querySelector("#portada-sec");
    let miGenero = document.querySelector(".miGenero");
    let allMovies = "";

    for (let i = 0; i < peliculas.length; i++) {
        allMovies += `<article class="portada">
                            <a href="./detalle-pelicula.html?idPelicula=${peliculas[i].id}"><img class="portada-img" src="https://image.tmdb.org/t/p/original${peliculas[i].poster_path}"></a>
                            <h2 class="h2">Película: <a href="./detalle-pelicula.html?idPelicula=${peliculas[i].id}">${peliculas[i].title}</a></h2>
                        </article>`;
    }
    seccion.innerHTML = allMovies;
    miGenero.innerText = nombre;

})
.catch(function(error) {
    console.log(error);
});

fetch(urlGeneroTV)
.then(function(res) {
    return res.json();
})
.then(function(data) {
    console.log(data.results);
    let peliculas = data.results; 
    let seccion = document.querySelector("#portada-sec");
    let miGenero = document.querySelector(".miGenero");
    let allMovies = "";

    for (let i = 0; i < peliculas.length; i++) {
        allMovies += `<article class="portada">
                            <a href="./detalle-pelicula.html?idPelicula=${peliculas[i].id}"><img class="portada-img" src="https://image.tmdb.org/t/p/original${peliculas[i].poster_path}"></a>
                            <h2 class="h2">Serie: <a href="./detalle-pelicula.html?idPelicula=${peliculas[i].id}">${peliculas[i].original_name}</a></h2>
                        </article>`;
    }
    seccion.innerHTML = allMovies;
    miGenero.innerText = nombre;

})
.catch(function(error) {
    console.log(error);
});
