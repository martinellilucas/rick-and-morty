import style from "./Card.module.css";
import { Link } from "react-router-dom";
export default function Card({ id, name, species, gender, image, close }) {
  return (
    <div className={style.container}>
      <div className={style.card}>
        <div className={style.image}>
          <Link
            to={id ? `/detail/${id}` : `https://github.com/martinellilucas`}
          >
            <img className={style.img} src={image} alt="" />
          </Link>
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

          <h2 className={style.name}>~ NAME: {name}</h2>

          <h2 className={style.description}>~ SPECIE: {species}</h2>
          <h2 className={style.description}>~ GENDER: {gender}</h2>
        </div>
      </div>
    </div>
  );
}
