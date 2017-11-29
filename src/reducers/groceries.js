import { combineReducers } from 'redux';

export const FETCH_GROCERY_REQUEST = 'FETCH_GROCERY_REQUEST';
export const FETCH_GROCERY_REQUEST_FAILURE = 'FETCH_GROCERY_REQUEST_FAILURE';
export const FETCH_GROCERY_REQUEST_SUCCESS = 'FETCH_GROCERY_REQUEST_SUCCESS';

export const CREATE_GROCERY_REQUEST = 'CREATE_GROCERY_REQUEST';
export const CREATE_GROCERY_REQUEST_FAILURE = 'CREATE_GROCERY_REQUEST_FAILURE';
export const CREATE_GROCERY_REQUEST_SUCCESS = 'CREATE_GROCERY_REQUEST_SUCCESS';

export const fetchGroceryRequest = () => ({
  type: FETCH_GROCERY_REQUEST,
});

export const fetchGroceryRequestSuccess = payload => ({
  type: FETCH_GROCERY_REQUEST_SUCCESS,
  payload,
});

export const fetchGroceryRequestFailure = () => ({
  type: FETCH_GROCERY_REQUEST_FAILURE,
});

export const fetchGroceries = () => (dispatch, getState) => {
  dispatch(fetchGroceryRequest());

  fetch('https://intro-to-redux-groceries-api.herokuapp.com/groceries')
  .then(response => {
    if (response.ok) {
      return response.json();
    }

    throw new Error('request failed');
  })
  .then(
    body => dispatch(fetchGroceryRequestSuccess(body)),
    () => dispatch(fetchGroceryRequestFailure),
  );
}

export const createGroceryRequest = () => ({
  type: CREATE_GROCERY_REQUEST,
});

export const createGroceryRequestSuccess = payload => ({
  type: CREATE_GROCERY_REQUEST_SUCCESS,
  payload,
});

export const createGroceryRequestFailure = () => ({
  type: CREATE_GROCERY_REQUEST_FAILURE,
});

export const createGrocery = value => (dispatch, getState) => {
  const body = JSON.stringify({
    "grocery": {
      "name": value,
    }
  });

  dispatch(createGroceryRequest());

  fetch('https://intro-to-redux-groceries-api.herokuapp.com/groceries', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body,
  })
  .then(response => {
    if (response.ok) {
      return response.json();
    }

    throw new Error('request failed');
  })
  .then(
    body => dispatch(createGroceryRequestSuccess(body)),
    () => dispatch(createGroceryRequestFailure),
  );
}

export const initialState = {
  all: [],
};

export const all = (state = initialState.all, action) => {
  switch(action.type) {
    case FETCH_GROCERY_REQUEST_SUCCESS:
      return action.payload.groceries;
    case CREATE_GROCERY_REQUEST_SUCCESS:
      return [action.payload.grocery, ...state];
    default:
      return state;
  }
};

export default combineReducers({
  all,
});
