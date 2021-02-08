import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const initialState = {
  dukcapils: [],
  religions: [],
  maritalStatus: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "set_dukcapils":
      return { ...state, dukcapils: action.payload };
    case "set_religions":
      return { ...state, religions: action.payload };
    case "set_marital_status":
      return { ...state, maritalStatus: action.payload };

    default:
      return state;
  }
}

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
