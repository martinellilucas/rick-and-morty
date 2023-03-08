import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Portal from "./components/Portal/Portal";
import Titulo from "./components/Titulo/Titulo";
import Nav from "./components/Nav/Nav";
import { useState } from "react";

function App() {
  const [oldChars, setCharacters] = useState([]);
  const searchChar = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.id) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  };

  const close = (id) => {
    setCharacters(oldChars.filter((char) => char.id !== id));
  };
  return (
    <div className="App" style={{ padding: "25px" }}>
      <Portal />
      <Titulo />
      <Nav onSearch={searchChar} />
      <Cards characters={oldChars} close={close} />
    </div>
  );
}

export default App;
