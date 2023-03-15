export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";

export const addFavorite = ({ id, name, species, gender, image, close }) => {
  return {
    type: ADD_FAVORITE,
    payload: { id, name, species, gender, image, close },
  };
};
export const removeFavorite = (id) => {
  return { type: REMOVE_FAVORITE, payload: id };
};
