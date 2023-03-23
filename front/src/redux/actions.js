export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
export const ADD_CHAR_DETAIL = "ADD_CHAR_DETAIL";
export const CLEAN_DETAIL = "CLEAN_DETAIL";

export const addFavorite = ({ id, name, species, gender, image }) => {
  return {
    type: ADD_FAVORITE,
    payload: { id, name, species, gender, image },
  };
};
export const removeFavorite = (id) => {
  return { type: REMOVE_FAVORITE, payload: id };
};

export const addCharDetail = (detailId) => {
  const url_base = "https://localhost:3001/rickandmorty";

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
