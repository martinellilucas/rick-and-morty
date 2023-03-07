import Titulo from "../Titulo/Titulo";
import style from "./Portal.module.css";

const Portal = () => {
  return (
    <div className={style.container}>
      <div className={style.portal}></div>
      <Titulo />
    </div>
  );
};

export default Portal;
