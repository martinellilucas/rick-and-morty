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
      if (action.payload === "None")
        return { ...state, myFavorites: [...state.allCharacters] };
      else
        return {
          ...state,
          myFavorites: [
            ...state.allCharacters.filter(
              (char) => char.gender === action.payload
            ),
          ],
        };

    case ORDER:
      if (action.payload === "Ascendente")
        return {
          ...state,
          myFavorites: [
            ...state.allCharacters.sort((a, b) => {
              return a.id - b.id;
            }),
          ],
        };
      if (action.payload === "Descendente")
        return {
          ...state,
          myFavorites: [
            ...state.allCharacters.sort((a, b) => {
              return b.id - a.id;
            }),
          ],
        };
      else
        return {
          ...state,
          myFavorites: [...state.allCharacters],
        };
    case ADD_CHAR_DETAIL:
      return { ...state, charDetail: { ...action.payload } };
    case CLEAN_DETAIL:
      return { ...state, charDetail: {} };
    case GET_FAVORITES:
      return {
        ...state,
        myFavorites: [...state.allCharacters],
        allCharacters: [...action.payload],
      };
    default:
      return { ...state };
  }
};

export default reducer;
