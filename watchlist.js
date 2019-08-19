function renderMovies(movieArray) {
    let movieHTML = movieArray.map(function(currentMovie){
        // console.log(currentMovie.Title)

        return `
            <div class="card movie">
                <img class="card-img-top" src="${currentMovie.Poster}" alt="${currentMovie.Title} poster">
                <div class="movie-card-body">
                    <div><h3 class="movie-title">${currentMovie.Title}</h3> </div>
                    <div><span class="release-date">${currentMovie.Year}</span></div>
                </div>
            </div>
            `
    })
    
    return movieHTML.join('')

}

function init () {
    var watchlistJSON = localStorage.getItem('watchlist')
    var watchlist = JSON.parse(watchlistJSON)
    let finalHTML = document.getElementById('movies-container') 
    finalHTML.innerHTML = renderMovies(watchlist)
}

document.addEventListener('DOMContentLoaded', init)