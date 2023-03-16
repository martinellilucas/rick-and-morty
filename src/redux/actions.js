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
  const url_base = "https://be-a-rym.up.railway.app/api";
  const key = "a4323caea686.b6efbb9249e0d434a6e8";

  return (dispatch) => {
    fetch(`${url_base}/character/${detailId}?key=${key}`)
      .then((res) => res.json())
      .then((char) => {
        dispatch({ type: ADD_CHAR_DETAIL, payload: char });
      });
  };
};

export const cleanDetail = () => {
  return { type: CLEAN_DETAIL };
};
