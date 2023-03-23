import React from "react";

import style from "./Portfolio.module.css";
import rick from "../assets/images/rick&morty.png";
import zaida from "../assets/images/zaida.png";

class Portfolio extends React.Component {
  render() {
    return (
      <div className={style.container}>
        <div className={style.textContainer}>
          <h1 className={style.title}>Portfolio</h1>
          <hr className={style.separator} />
          <p className={style.text}>
            Esta es una muestra de las páginas y aplicaciones realizadas por mí.
          </p>
          <hr className={style.separator} />
          <p className={style.text}>
            This is a view of the pages and apps created by me.
          </p>
          <hr className={style.separator} />
        </div>
        {/*   <NavLink to="https://github.com/martinellilucas/rick-and-morty"></NavLink>
          <NavLink to="https://github.com/martinellilucas/RJ24895"></Link> */}
        <a href="https://github.com/martinellilucas">
          <section className={style.section}>
            <img className={style.imagen} src={rick} alt="Rick&Morty API" />

            <img className={style.imagen} src={zaida} alt="Tienda Zaida Ind." />
          </section>
        </a>
      </div>
    );
  }
}

export default Portfolio;
