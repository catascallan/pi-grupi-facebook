let recuperoStorage = localStorage.getItem('favoritos');
let favoritos = JSON.parse(recuperoStorage)
let section = document.querySelector('#portada-sec');
let pelisFav = '';

if (favoritos == null || favoritos.length == 0) {
    section.innerHTML = '<p class= "titulo"> No hay favoritos seleccionados </p>'
} else {
    
    for (let i = 0; i < favoritos.length; i++) {
        let acaVaLaAPIKey = "3fdc54d209865d0fa99ee5f520db7d2b";
        let url = `https://api.themoviedb.org/3/movie/${favoritos[i]}?api_key=${acaVaLaAPIKey}`

        fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);

            pelisFav += `<article class="portada">
                        <a href="./detalle-pelicula.html?idPelicula=${data.id}"> <img class="portada-img" src="https://image.tmdb.org/t/p/original${data.poster_path}"></a>
                        <h2 class="tituloPeli">Titulo: <a href="./detalle-pelicula.html?idPelicula=${data.id}">${data.title}</a> </h2>
                        <p class="estrenoPeli">Estreno: ${data.release_date}</p>
                        </article>`;

            section.innerHTML = pelisFav;
            
        })
        .catch(function(error) {
            console.log(error);
        });
        
    }
}

