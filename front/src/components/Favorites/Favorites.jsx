import React from "react";
import { connect } from "react-redux";
import Cards from "../Cards/Cards";
import style from "./Favorites.module.css";

class Favorites extends React.Component {
  render() {
    return (
      <div className={style.container}>
        <div className={style.menuContainer}>
          <select className={style.menu} name="">
            <option className={style.menuOption} value="Ascendente">
              ⬆
            </option>
            <option className={style.menuOption} value="Descendente">
              ⬇
            </option>
          </select>

          <select className={style.menu} name="">
            <option className={style.menuOption} value="Male">
              Male
            </option>
            <option className={style.menuOption} value="Female">
              Female
            </option>
            <option className={style.menuOption} value="Genderless">
              Genderless
            </option>
            <option className={style.menuOption} value="unknown">
              unknown
            </option>
          </select>
        </div>

        <div>
          <Cards characters={this.props.favorites}></Cards>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { favorites: state.myFavorites };
};

export default connect(mapStateToProps, null)(Favorites);
