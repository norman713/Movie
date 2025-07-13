import MovieCard from "../components/MovieCard"
import {useState, useEffect} from "react"; 
import "../css/Home.css";
import { getPopularMovies, searchMovies } from "../services/api";
function Home(){
    const [search, setSearch] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const loadPopularMovies = async () => {
            try{
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            } catch (error) {
                setError("Failed to load popular movies.");
            }
            finally{
                setLoading(false);
            }
        }
        loadPopularMovies();
    }, []);

    const handleSearch = async(e)=>{
        e.preventDefault(); 
        if(!search.trim()) return
        if(loading) return; 
        setLoading(true);
        try{
            const serchResults = await searchMovies(search);
            setMovies(serchResults);
            setError(null); 

        } catch(error){
            setError("Failed to search for movies.");

        } finally{
            setLoading(false);
        }

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
        {loading ? (
            <div className="loading">Loading... </div>
        ) : (
            <div className="movies-grid">
                {movies.map(
                    (movie) => (<MovieCard movie={movie} key={movie.id} />)
                )}
            </div>
        )}

    
    </div>
}
export default Home;