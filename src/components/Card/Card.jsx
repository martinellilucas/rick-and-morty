import style from "./Card.module.css";

export default function Card({ name, species, gender, image, onClose }) {
  return (
    <div className={style.container}>
      <div className={style.descriptionContainer}>
        <h2 className={style.description}>~ Name: {name}</h2>
        <h2 className={style.description}>~ Species: {species}</h2>
        <h2 className={style.description}>~ Gender: {gender}</h2>
      </div>
      <img className={style.image} src={image} alt="" />
      <button className={style.button} onClick={onClose}>
        X
      </button>
    </div>
  );
}
