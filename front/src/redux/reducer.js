import {
  ADD_CHAR_DETAIL,
  ADD_FAVORITE,
  CLEAN_DETAIL,
  FILTER,
  GET_FAVORITES,
  ORDER,
  REMOVE_FAVORITE,
} from "./actions";

const initialState = { myFavorites: [], charDetail: {}, allCharacters: [] };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER:
      const { allCharacters } = initialState;
      return {
        ...state,
        myFavorites: [
          ...allCharacters.filter((char) => char.gender === action.payload),
        ],
      };
    case ORDER:
      const { myFavorites } = initialState;
      if (action.payload === "Ascendente")
        return {
          ...state,
          myFavorites: {
            ...myFavorites.sort((a, b) => {
              return a.id - b.id;
            }),
          },
        };
      if (action.payload === "Descendente")
        return {
          ...state,
          myFavorites: {
            ...myFavorites.sort((a, b) => {
              return b.id - a.id;
            }),
          },
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
