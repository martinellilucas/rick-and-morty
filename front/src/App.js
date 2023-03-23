import styles from "./App.module.css";
import Cards from "./components/Cards/Cards.jsx";
import Portal from "./components/Portal/Portal";
import Titulo from "./components/Titulo/Titulo";
import Nav from "./components/Nav/Nav";
import { useEffect, useState } from "react";
import { useNavigate, useLocation, Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Index from "./components/Index/Index";
import Footer from "./components/Footer/Footer";
import Error from "./components/Error/Error";
import Favorites from "./components/Favorites/Favorites";
import Portfolio from "./components/Portfolio/Portfolio";

function App() {
  const [access, setAccess] = useState(false);
  const username = "martinellilucas8@gmail.com";
  const password = "pass1234";
  const navigate = useNavigate();

  const login = (userData) => {
    if (userData.password === password && userData.email === username) {
      setAccess(true);
      navigate("/home");
    }
  };

  const logOut = () => {
    setAccess(false);
    navigate("/");
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  const [characters, setCharacters] = useState([]);

  const onSearch = (character) => {
    const url_base = "https://localhost:3001/rickandmorty";

    fetch(`${url_base}/onsearch${character}`)
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

  const { pathname } = useLocation();
  return (
    <div className={styles.App}>
      <Portal />
      <Titulo />
      {pathname !== "/" && <Nav onSearch={onSearch} logOut={logOut} />}
      <Routes>
        <Route path="" element={<Index login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} close={close} />}
        ></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/detail/:detailId" element={<Detail />}></Route>
        <Route path="*" element={<Error />}></Route>
        <Route path="/favorites" element={<Favorites />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
