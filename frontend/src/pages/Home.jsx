import MovieCard from "../components/MovieCard"
import {useState} from "react"; 
import "../css/Home.css";
function Home(){
    const [search, setSearch] = useState("");
    const movies=[
        {id: 1, title:"Inception", release_date:"2010"},
        {id: 2, title:"Interstellar", release_date:"2014"},
        {id: 3, title:"Dunkirk", release_date:"2017"}, 
        {id: 4, title:"Tenet", release_date:"2020"},
    ]
    const handleSearch =(e)=>{
        e.preventDefault(); 
        alert(`Searching for: ${search}`);
    }
    return <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input 
            type="text" 
            placeholder="Search for a movie..."  
            className="search-input"
            value={search} 
            onChange={(e) => setSearch(e.target.value)}
           
            />
            <button type="submit" className="search-button">Search</button>
        </form>

        {/* list of movies */}
        <div className="movies-grid">
            {movies.map (
                (movie)=>(<MovieCard movie={movie} key={movie.id} />)  
            )}
        </div>
    </div>
}
export default Home;