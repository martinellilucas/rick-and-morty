import style from "./Error.module.css";
import { NavLink } from "react-router-dom";
const Error = () => {
  return (
    <div className={style.container}>
      <div className={style.space}></div>
      <div className={style.wrapper}>
        <div className={style.imgWrapper}>
          <span>44</span>
        </div>
        <p>
          The page you are trying to search has been moved to another universe.
        </p>
        <NavLink to="/">
          <button type="button">GET ME HOME</button>
        </NavLink>
      </div>
    </div>
  );
};
export default Error;
