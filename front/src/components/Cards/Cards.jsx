import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getFavorites } from "../../redux/actions";
import Card from "../Card/Card";
import style from "./Cards.module.css";

export default function Cards({ characters, close }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFavorites());
  }, []);
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
