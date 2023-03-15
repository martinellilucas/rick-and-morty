import React from "react";
import Card from "../Card/Card";
import style from "./Portfolio.module.css";
import rick from "../assets/images/rick&morty.png";
import zaida from "../assets/images/zaida.png";

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
  }

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
        <Card name="Rick & Morty API" image={rick}></Card>
        <Card name="Zaida Ind." image={zaida}></Card>
      </div>
    );
  }
}

export default Portfolio;
