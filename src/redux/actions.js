export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";

export const addFavorite = ({ id, name, species, gender, image }) => {
  return { type: ADD_FAVORITE, payload: { id, name, species, gender, image } };
};
export const removeFavorite = (id) => {
  return { type: REMOVE_FAVORITE, payload: id };
};
