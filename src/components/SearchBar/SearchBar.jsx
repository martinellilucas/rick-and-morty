import { useState } from "react";
import style from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("");
  const handleChange = (event) => {
    setId(event.target.value);
  };
  return (
    <div className={style.searchContainer}>
      <button
        onClick={() => {
          onSearch(Math.floor(Math.random() * 826));
        }}
        className={style.buttonLeft}
      >
        Random
      </button>
      <input
        onChange={handleChange}
        placeholder="Ingrese un ID"
        className={style.input}
      />
      <button
        onClick={() => {
          onSearch(id);
        }}
        className={style.buttonRight}
      >
        Search
      </button>
    </div>
  );
}
