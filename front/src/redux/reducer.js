import {
  ADD_CHAR_DETAIL,
  ADD_FAVORITE,
  CLEAN_DETAIL,
  GET_FAVORITES,
  REMOVE_FAVORITE,
} from "./actions";

const initialState = { myFavorites: [], charDetail: {} };

const reducer = (state = initialState, action) => {
  switch (action.type) {
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
