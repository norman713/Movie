import "../css/MovieCard.css"
function MovieCard({movie}){
    function onFavoriteClock(){   
        alert("cliecked")
    }
    return <div className="movie-card">
        <div className="movie-poster">
            <img src= {`https://image.tmdb.org/t/p/w500${movie.poster_path}` } alt ={movie.title} />
            <div className="movie-overlay">
                <button className="favorite-btn" onClick={onFavoriteClock} >🤍</button>
            </div>
        </div>
        <div className="movie-info">
            <h3> {movie.title} </h3>
            <p>{movie.release_date?.split("-")[0] } </p>

        </div>
    </div>

}
export default MovieCard;