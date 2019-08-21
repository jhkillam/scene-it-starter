
function saveToWatchlist(movieID) {

    var watchlistJSON = localStorage.getItem('watchlist')
    var watchlist = JSON.parse(watchlistJSON)

    if (watchlist == null) {
        watchlist = []
        console.log("watchlist set to empty array")
    }

    console.log("Clicked add on: " + movieID)

    const movieToSave = movieData.find(function(movie){
        return movie.imdbID === movieID
    })

    console.log("found: " + movieToSave.Title)  
    
    // this block works to save to localstorage on every add click, even if duplicate
    watchlist.push(movieToSave)
    watchlistJSON = JSON.stringify(watchlist)
    localStorage.setItem('watchlist', watchlistJSON)
    console.log(movieToSave.Title + " added to watchlist")
    console.log(watchlist)
    
    // trying to figure out how to check if movie is already on watchlist. Need to map through the watchlist
    // if (movieToSave.Title in localStorage) {
    //     console.log(movieToSave.Title + " is already on the watchlist")
    //     return;
    // } else {
    //     watchlist.push(movieToSave)
    //     watchlistJSON = JSON.stringify(watchlist)
    //     localStorage.setItem('watchlist', watchlistJSON)
    //     console.log(movieToSave.Title + " added to watchlist")
    // }
}

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
                <div class="add-btn-container">
                    <button onclick="saveToWatchlist('${currentMovie.imdbID}')" class="add-btn">Add</button>
                </div>
            </div>
            `
    })

    return movieHTML.join('')

}

function init () {
    document.getElementById('search-form').addEventListener('submit', function(e){
        
        e.preventDefault();
        
        let finalHTML = document.getElementById('movies-container') 
        finalHTML.innerHTML = renderMovies(movieData)

    })
}

document.addEventListener('DOMContentLoaded', init)
   