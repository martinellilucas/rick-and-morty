import Card from "../Card/Card";
import style from "./Cards.module.css";

export default function Cards({ characters, close }) {
  return (
    <div className={style.cardsContainer}>
      {characters.map(({ id, name, species, gender, image }) => {
        return (
          <Card
            key={id}
            close={close}
            id={id}
            name={name}
            species={species}
            gender={gender}
            image={image}
          />
        );
      })}
    </div>
  );
}
