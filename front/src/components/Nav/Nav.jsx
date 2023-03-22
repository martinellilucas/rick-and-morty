import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css";
import { NavLink } from "react-router-dom";
import unnamed from "../../components/assets/images/logo.png";

export default function Nav({ onSearch, logOut }) {
  return (
    <div className={style.nav}>
      <div className={style.menu}>
        <NavLink
          to="/home"
          className={({ isActive }) =>
            isActive ? style.active : style.disable
          }
        >
          <img className={style.logo} src={unnamed} alt="Logo" />
        </NavLink>
        <NavLink
          to="/home"
          className={({ isActive }) =>
            isActive ? style.active : style.disable
          }
        >
          <span className={style.menuText}>Home</span>
        </NavLink>
        <hr className={style.separador} />
        <NavLink
          to="/favorites"
          className={({ isActive }) =>
            isActive ? style.active : style.disable
          }
        >
          <span className={style.menuText}>Favorites</span>
        </NavLink>
        <hr className={style.separador} />
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? style.active : style.disable
          }
        >
          <span className={style.menuText}>About</span>
        </NavLink>
        <hr className={style.separador} />
        <NavLink
          to="/portfolio"
          className={({ isActive }) =>
            isActive ? style.active : style.disable
          }
        >
          <span className={style.menuText}>Portfolio</span>
        </NavLink>
        <hr className={style.separador} />
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <span className={style.menuText} onClick={logOut}>
            Logout
          </span>
        </NavLink>
      </div>
      <SearchBar onSearch={onSearch}></SearchBar>
    </div>
  );
}
