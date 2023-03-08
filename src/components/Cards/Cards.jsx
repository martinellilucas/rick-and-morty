import Card from "../Card/Card";
import style from "./Cards.module.css";

export default function Cards(props) {
  return (
    <div className={style.cardsContainer}>
      {props.characters.map(({ id, name, species, gender, image }) => {
        return (
          <Card
            close={props.close}
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
