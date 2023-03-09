import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css";
export default function Nav({ onSearch }) {
  return (
    <div className={style.nav}>
      <SearchBar onSearch={onSearch}></SearchBar>
    </div>
  );
}
