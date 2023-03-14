import React from "react";
import Card from "../Card/Card";
import style from "./Portfolio.module.css";
import image from "../assets/images/rick&morty.png";

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={style.container}>
        <h1 className={style.title}>Portfolio</h1>
        <Card name="Rick & Morty API" image={image}></Card>
      </div>
    );
  }
}

export default Portfolio;
