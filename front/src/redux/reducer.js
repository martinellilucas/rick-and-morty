import {
  ADD_CHAR_DETAIL,
  CLEAN_DETAIL,
  FILTER,
  GET_FAVORITES,
  ORDER,
} from "./actions";

const initialState = { myFavorites: [], charDetail: {}, allCharacters: [] };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER:
      return {
        ...state,
        myFavorites: [
          ...state.myFavorites.filter((char) => char.gender === action.payload),
        ],
      };
    /*  return {
        ...state,
        myFavorites: myFavorites.filter(
          (char) => char.gender === action.payload
        ),
      }; */

    case ORDER:
      if (action.payload === "Ascendente")
        return {
          ...state,
          myFavorites: [
            ...state.myFavorites.sort((a, b) => {
              return a.id - b.id;
            }),
          ],
        };
      else
        return {
          ...state,
          myFavorites: [
            ...state.myFavorites.sort((a, b) => {
              return b.id - a.id;
            }),
          ],
        };

    case ADD_CHAR_DETAIL:
      return { ...state, charDetail: { ...action.payload } };
    case CLEAN_DETAIL:
      return { ...state, charDetail: {} };
    case GET_FAVORITES:
      return { ...state, myFavorites: action.payload };
    default:
      return { ...state };
  }
};

export default reducer;
