import "./App.css";
import Card from "./components/Card/Card.jsx";
import Cards from "./components/Cards/Cards.jsx";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import Portal from "./components/Portal/Portal";
import Separador from "./components/Separador/Separador";
import Titulo from "./components/Titulo/Titulo";
import characters, { Rick } from "./data.js";

function App() {
  return (
    <div className="App" style={{ padding: "25px" }}>
      <Portal />
      <Titulo />
      <SearchBar onSearch={(characterID) => window.alert(characterID)} />
      <Separador />
      <Card
        name={Rick.name}
        species={Rick.species}
        gender={Rick.gender}
        image={Rick.image}
        onClose={() => window.alert("Emulamos que se cierra la card")}
      />
      <Separador />
      <Cards characters={characters} />
    </div>
  );
}

export default App;
