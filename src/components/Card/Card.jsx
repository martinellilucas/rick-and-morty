import style from "./Card.module.css";

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
          <h2 className={style.description}>~ NAME: {name}</h2>
          <h2 className={style.description}>~ SPECIE: {species}</h2>
          <h2 className={style.description}>~ GENDER: {gender}</h2>
        </div>
      </div>
    </div>
  );
}
