import './App.css';
import { useEffect, useState } from 'react';
import Movie from './movie'

function App() {

  const [popular, setPopular] = useState([]);

  useEffect(() => {
    fetchPopular();
  },[]);

  const fetchPopular = async () => {
    const data  = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=43d18fba9655b83f394c1f6635de671e&language=en=US&page=1"
    );
    const movies = await data.json();
    console.log(movies)
    setPopular(movies.results);
  };
  
  return (
    <div className="App">
      <div className="popular-movies">
        {popular.map(movie => {
          return <Movie key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
}

export default App;
