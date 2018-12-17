const USER_ADD_START = 'redux-examples/advetisments/USER_ADD_START';
const USER_ADD_SUCCESS = 'redux-examples/interests/USER_ADD_SUCCESS';
const USER_ADD_FAIL = 'redux-examples/interests/USER_ADD_FAIL';

const initialState = {
  addInterests: []
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case USER_ADD_START: {
      return {
        ...state,
        addInterests: []
      };
    }
    case USER_ADD_SUCCESS: {
      return {
        ...state,
        addInterests: action.result.data[0].advetiser_interests
      };
    }
    case USER_ADD_FAIL: {
      return {
        ...state,
        addInterests: []
      };
    }
    default:
      return state;
  }
}

export function getUsersAdd(userId) {
  return {
    types: [USER_ADD_START, USER_ADD_SUCCESS, USER_ADD_FAIL],
    promise: async ({ client }) => client.get(`/users?where=(id*=*${userId})&relations=advetiser_interests`)
  };
}
