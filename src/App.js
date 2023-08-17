import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

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
      <h1>Hello</h1>
    </div>
  );
}

export default App;
