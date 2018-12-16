const INTERESTS_START = 'redux-examples/interests/INTERESTS_START';
const INTERESTS_SUCCESS = 'redux-examples/interests/INTERESTS_SUCCESS';
const INTERESTS_FAIL = 'redux-examples/interests/INTERESTS_FAIL';

const initialState = {
  data: []
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case INTERESTS_START: {
      console.log('INTERESTS_START');
      return {
        ...state,
        data: []
      };
    }
    case INTERESTS_SUCCESS: {
      console.log('INTERESTS_SUCCESS');
      return {
        ...state,
        data: action.result.data
      };
    }
    case INTERESTS_FAIL: {
      console.log('INTERESTS_FAIL', action.result.data);
      return {
        ...state,
        data: []
      };
    }
    default:
      return state;
  }
}

export function getInterests() {
  console.log('================> getInterests');
  return {
    types: [INTERESTS_START, INTERESTS_SUCCESS, INTERESTS_FAIL],
    promise: async ({ client }) => client.get('/interests')
  };
}
