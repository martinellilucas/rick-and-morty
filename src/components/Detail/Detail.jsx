import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import style from "./Detail.module.css";
const Detail = () => {
  const [character, setCharacter] = useState({});
  const { detailId } = useParams();

  useEffect(() => {
    const url_base = "https://be-a-rym.up.railway.app/api";
    const key = "a4323caea686.b6efbb9249e0d434a6e8";
    console.log(detailId);
    console.log(character);
    fetch(`${url_base}/character/${detailId}?key=${key}`)
      .then((res) => res.json())
      .then((char) => {
        if (char.name) {
          setCharacter({ ...char });
        }
      })
      .catch((err) => {
        window.alert(err);
      });
  }, [detailId, character]);
  return (
    <div className={style.container}>
      {character.name ? (
        <>
          <div className={style.descriptionContainer}>
            <h1 className={style.name}>Name: {character.name}</h1>
            <h4 className={style.text}>Status: {character.status}</h4>
            <h4 className={style.text}>Specie: {character.species}</h4>
            <h4 className={style.text}>Gender: {character.gender}</h4>
            <h4 className={style.text}>Origin: {character.origin?.name}</h4>
          </div>
          <hr className={style.separator} />
          <div className={style.imgContainer}>
            <img className={style.image} src={character.image} alt=""></img>
          </div>
          <NavLink to="/home">
            <button className={style.button}>GET ME HOME</button>
          </NavLink>
        </>
      ) : (
        <>
          <h1 className={style.name}>LOADING...</h1>
        </>
      )}
    </div>
  );
};

export default Detail;
