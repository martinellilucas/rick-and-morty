import React from "react";
import { connect } from "react-redux";
import Card from "../Card/Card";
import style from "./Favorites.module.css";

class Favorites extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={style.container}>
        {this.props.favorites.map((character) => {
          return (
            <Card
              id={character.id}
              name={character.name}
              species={character.species}
              gender={character.gender}
              image={character.image}
            ></Card>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { favorites: state.myFavorites };
};

export default connect(mapStateToProps, null)(Favorites);
