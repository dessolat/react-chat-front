import { createStore } from 'redux';

const defaultState = {
  isLogged: false
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_IS_LOGGED':
      return { ...state, isLogged: action.payload };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store