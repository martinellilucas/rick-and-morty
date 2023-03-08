import { useState } from "react";
import style from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("");
  const handleChange = (event) => {
    setId(event.target.value);
  };
  return (
    <div className={style.searchContainer}>
      <input
        onChange={handleChange}
        placeholder="Ingrese un ID"
        className={style.input}
      />
      <button
        onClick={() => {
          onSearch(id);
        }}
        className={style.button}
      >
        Search
      </button>
    </div>
  );
}
