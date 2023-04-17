import { useState, useEffect } from "react"
import Movie from "./Movie";
import MovieCard from "../components/MovieCard";

const  moviesURL = import.meta.env.VITE_API;
const  apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
    const [topMovies, setTopMovies] = useState([]);

    const getTopRatedMovies = async (url) => {
        
        const res = await fetch(url)
        const data = await res.json()

        setTopMovies(data.results)
    }

    useEffect(() => {

        const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;

        getTopRatedMovies(topRatedUrl)
    }, [])
    return (
        <div className="container">
            <h2 className="title"> Indicados a 95° Premiação da Academy Awards Ver todos</h2>
            <div className="movies-container">
                {topMovies.length === 0 && <p>Carregando...</p>}
                {topMovies.length > 0 && topMovies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
            </div>
        </div>
    )
}

export default Home