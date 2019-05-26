import { GET_USER } from "../actionTypes";

const initialState = {
  user: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
};

export default reducer;