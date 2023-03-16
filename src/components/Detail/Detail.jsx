import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { addCharDetail, cleanDetail } from "../../redux/actions";
import style from "./Detail.module.css";

const Detail = () => {
  const character = useSelector((state) => state.charDetail);
  const { detailId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addCharDetail(detailId));

    return () => {
      dispatch(cleanDetail());
    };
  }, [detailId]);

  return (
    <div className={character.name ? style.container : style.loadingContainer}>
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
          <h1 className={style.loading}>LOADING...</h1>
        </>
      )}
    </div>
  );
};

export default Detail;
