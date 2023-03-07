import style from "./Titulo.module.css";

const Titulo = () => {
  return (
    <div>
      <div className={style.title}>
        Rick<span className={style.span}>and</span>Morty
      </div>
      <div className={style.middle}>
        Rick<span className={style.span}>and</span>Morty
      </div>
      <div className={style.bottom}>
        Rick<span className={style.span}>and</span>Morty
      </div>
    </div>
  );
};

export default Titulo;
