import styles from "./App.module.css";
import Cards from "./components/Cards/Cards.jsx";
import Portal from "./components/Portal/Portal";
import Titulo from "./components/Titulo/Titulo";
import Nav from "./components/Nav/Nav";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Index from "./components/Index/Index";
import Footer from "./components/Footer/Footer";
import Error from "./components/Error/Error";

function App() {
  const [characters, setCharacters] = useState([]);
  const onSearch = (character) => {
    const url_base = "https://be-a-rym.up.railway.app/api";
    const key = "a4323caea686.b6efbb9249e0d434a6e8";
    fetch(`${url_base}/character/${character}?key=${key}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.name) {
          if (!characters.find((char) => char.id === data.id)) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            window.alert("Ese personaje ya fue agregado antes");
          }
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  };

  const close = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  };

  return (
    <div className={styles.App}>
      <Portal />
      <Titulo />
      <Nav onSearch={onSearch} />
      <Routes>
        <Route path="" element={<Index />} />
        <Route
          path="/home"
          element={<Cards characters={characters} close={close} />}
        ></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/detail/:detailId" element={<Detail />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
