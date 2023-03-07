import style from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  return (
    <div className={style.searchContainer}>
      <input className={style.input} type="search" />
      <button
        className={style.button}
        onClick={(id) => {
          onSearch(id);
        }}
      >
        ADD
      </button>
    </div>
  );
}
