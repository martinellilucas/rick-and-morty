import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
          setCharacter(char);
        }
      })
      .catch((err) => {
        window.alert(err);
      });
  }, [detailId]);
  return (
    <div className={style.container}>
      <div className={style.descriptionContainer}>
        <h1 className={style.name}>Nombre: {character.name}</h1>
        <h4 className={style.text}>Status: {character.status}</h4>
        <h4 className={style.text}>Specie: {character.specie}</h4>
        <h4 className={style.text}>Gender: {character.gender}</h4>
        <h4 className={style.text}>Origin: {character.origin}</h4>
      </div>
      <div className={style.imgContainer}>
        <img className={style.image} src={character.image} alt=""></img>
      </div>
    </div>
  );
};

export default Detail;
