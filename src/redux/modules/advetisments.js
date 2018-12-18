const USER_ADD_START = 'redux-examples/advetisments/USER_ADD_START';
const USER_ADD_SUCCESS = 'redux-examples/interests/USER_ADD_SUCCESS';
const USER_ADD_FAIL = 'redux-examples/interests/USER_ADD_FAIL';

const CREATE_NEW_ADD = 'redux-examples/advetisments/CREATE_NEW_ADD';

const GET_ADVETISMENTS = 'redux-examples/advetisments/GET_ADVETISMENTS';

const HANDLE_ADD_CLICK = 'redux-examples/advetisments/HANDLE_ADD_CLICK';

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
    case CREATE_NEW_ADD: {
      return {
        ...state
      };
    }
    case GET_ADVETISMENTS: {
      return {
        ...state
      };
    }
    case HANDLE_ADD_CLICK: {
      return {
        ...state
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

export function createNewAdd(data) {
  return {
    types: [CREATE_NEW_ADD, CREATE_NEW_ADD, CREATE_NEW_ADD],
    promise: ({ client }) => client.post('/advetisments', data)
  };
}

export function getAdvetismentByAdvetiserAndInterest(advetiserId, interestId) {
  return {
    types: [GET_ADVETISMENTS, GET_ADVETISMENTS, GET_ADVETISMENTS],
    promise: async ({ client }) => client.get(`/advetisments?where=((advetiser_id*=*${advetiserId}),(interest_id*=*${interestId}))`)
  };
}

export function handleAddClick(addId) {
  return {
    types: [HANDLE_ADD_CLICK, HANDLE_ADD_CLICK, HANDLE_ADD_CLICK],
    promise: async ({ client }) => client.put(`http://localhost:3030/advetisments?advId=${addId}`)
  };
}
