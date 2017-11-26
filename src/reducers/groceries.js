import { combineReducers } from 'redux';

export const CREATE_GROCERY = 'CREATE_GROCERY';

export const createGrocery = payload => ({
  type: CREATE_GROCERY,
  payload,
});

export const initialState = {
  all: [],
};

export const all = (state = initialState.all, action) => {
  switch(action.type) {
    case CREATE_GROCERY:
      const grocery = { id: Date.now(), name: action.payload };
      return [grocery, ...state];
    default:
      return state;
  }
};

export default combineReducers({
  all,
});
