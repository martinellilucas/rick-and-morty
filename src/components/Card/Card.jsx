import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addFavorite, removeFavorite } from "../../redux/actions";
import { useState, useEffect } from "react";

export default function Card({ id, name, species, gender, image, close }) {
  const favorites = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch();
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    favorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [id, favorites]);

  const handleFav = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(removeFavorite(id));
    }
    if (!isFav) {
      setIsFav(true);
      dispatch(
        addFavorite({
          id: id,
          name: name,
          species: species,
          gender: gender,
          image: image,
        })
      );
    }
  };
  return (
    <div className={style.container}>
      <div className={style.card}>
        <div className={style.image}>
          <Link
            to={
              id
                ? `/detail/${id}`
                : `https://www.linkedin.com/in/martinellilucas8/`
            }
          >
            <img className={style.img} src={image} alt="" />
          </Link>
        </div>
        <div className={style.content}>
          <div className={style.buttonContainer}>
            {isFav ? (
              <button className={style.button} onClick={handleFav}>
                💕
              </button>
            ) : (
              <button className={style.button} onClick={handleFav}>
                🤍
              </button>
            )}
            <button
              className={style.button}
              onClick={() => {
                close(id);
              }}
            >
              X
            </button>
          </div>
          <h2 className={style.name}>~ NAME: {name}</h2>

          <h2 className={style.description}>~ SPECIE: {species}</h2>
          <h2 className={style.description}>~ GENDER: {gender}</h2>
        </div>
      </div>
    </div>
  );
}
