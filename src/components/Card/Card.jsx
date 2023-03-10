import style from "./Card.module.css";
import { Link } from "react-router-dom";
export default function Card({ id, name, species, gender, image, close }) {
  return (
    <div className={style.container}>
      <div className={style.card}>
        <div className={style.image}>
          <img className={style.img} src={image} alt="" />
        </div>
        <div className={style.content}>
          <button
            className={style.button}
            onClick={() => {
              close(id);
            }}
          >
            X
          </button>
          <Link to={`/detail/${id}`}>
            <h2 className={style.name}>~ NAME: {name}</h2>
          </Link>
          <h2 className={style.description}>~ SPECIE: {species}</h2>
          <h2 className={style.description}>~ GENDER: {gender}</h2>
        </div>
      </div>
    </div>
  );
}
