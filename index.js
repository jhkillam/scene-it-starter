document.addEventListener('DOMContentLoaded', function() {
   
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
                        <button class="add-btn">Add</button>
                    </div>
                </div>
                `
        })

        return movieHTML.join('')

    }

       
    // finalHTML.innerHTML = renderMovies(movieData)

    document.getElementById('search-form').addEventListener('submit', function(e){
        
        e.preventDefault();
        
        let finalHTML = document.getElementById('movies-container') 
        finalHTML.innerHTML = renderMovies(movieData)

    })

})