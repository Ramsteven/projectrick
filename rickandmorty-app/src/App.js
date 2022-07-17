
import './App.css';
import {useEffect, useState} from 'react';

function App() {
  const url = "https://rickandmortyapi.com/api/character";
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        return response.json()
      })
      .then((personajes) => {
        setPersonajes(personajes.results)
      })
  }, [])

  return (
    <div className="App">
        {personajes.map(personaje => 
        <div key={personaje.id}>
          <img src= {personaje.image} alt={personaje.name}/>
          <h6> {personaje.name} </h6>
        </div>
        )}
    </div>
  );
}

export default App;
