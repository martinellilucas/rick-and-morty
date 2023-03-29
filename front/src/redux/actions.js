import axios from "axios";

export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
export const ADD_CHAR_DETAIL = "ADD_CHAR_DETAIL";
export const CLEAN_DETAIL = "CLEAN_DETAIL";
export const GET_FAVORITES = "GET_FAVORITES";

export const getFavorites = () => {
  return async function (dispatch) {
    const response = await axios.get("http://localhost:3001/rickandmorty/fav");
    dispatch({ type: GET_FAVORITES, payload: response.data });
  };
};
export const removeFavorite = (id) => {
  return { type: REMOVE_FAVORITE, payload: id };
};

export const addCharDetail = (detailId) => {
  const url_base = "http://localhost:3001/rickandmorty";

  return (dispatch) => {
    fetch(`${url_base}/detail/${detailId}`)
      .then((res) => res.json())
      .then((char) => {
        dispatch({ type: ADD_CHAR_DETAIL, payload: char });
      });
  };
};

export const cleanDetail = () => {
  return { type: CLEAN_DETAIL };
};
