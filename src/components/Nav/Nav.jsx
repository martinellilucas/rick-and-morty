import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css";
import { NavLink } from "react-router-dom";
import unnamed from "../../components/assets/images/logo.png";
export default function Nav({ onSearch }) {
  return (
    <div className={style.nav}>
      <div className={style.menu}>
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <img className={style.logo} src={unnamed} alt="Logo" />
        </NavLink>
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <span className={style.menuText}>Index</span>
        </NavLink>
        <hr className={style.separador} />
        <NavLink to="/home" style={{ textDecoration: "none" }}>
          <span className={style.menuText}>Home</span>
        </NavLink>
        <hr className={style.separador} />
        <NavLink to="/about" style={{ textDecoration: "none" }}>
          <span className={style.menuText}>About</span>
        </NavLink>
      </div>
      <SearchBar onSearch={onSearch}></SearchBar>
    </div>
  );
}
