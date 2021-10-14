import { createStore } from 'redux';

const defaultState = {
  isLogged: false,
	name: '',
	channel: 'default'
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_IS_LOGGED':
      return { ...state, isLogged: action.payload };
    case 'SET_NAME':
      return { ...state, name: action.payload };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store