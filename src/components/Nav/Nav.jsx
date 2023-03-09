import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css";
import { NavLink } from "react-router-dom";

export default function Nav({ onSearch }) {
  return (
    <div className={style.nav}>
      <div className={style.menu}>
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
