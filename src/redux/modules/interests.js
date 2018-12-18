const INTERESTS_START = 'redux-examples/interests/INTERESTS_START';
const INTERESTS_SUCCESS = 'redux-examples/interests/INTERESTS_SUCCESS';
const INTERESTS_FAIL = 'redux-examples/interests/INTERESTS_FAIL';

const FULL_INTERESTS_START = 'redux-examples/interests/FULL_INTERESTS_START';
const FULL_INTERESTS_SUCCESS = 'redux-examples/interests/FULL_INTERESTS_SUCCESS';
const FULL_INTERESTS_FAIL = 'redux-examples/interests/FULL_INTERESTS_FAIL';

const INTERESTS_MAT_START = 'redux-examples/interests/INTERESTS_MAT_START';
const INTERESTS_MAT_SUCCESS = 'redux-examples/interests/INTERESTS_MAT_SUCCESS';
const INTERESTS_MAT_FAIL = 'redux-examples/interests/INTERESTS_MAT_FAIL';

const CREATE_UI_START = 'redux-examples/interests/CREATE_UI_START';
const CREATE_UI_SUCCESS = 'redux-examples/interests/CREATE_UI_SUCCESS';
const CREATE_UI_FAIL = 'redux-examples/interests/CREATE_UI_FAIL';

const DELETE_UI_START = 'redux-examples/interests/DELETE_UI_START';
const DELETE_UI_SUCCESS = 'redux-examples/interests/DELETE_UI_SUCCESS';
const DELETE_UI_FAIL = 'redux-examples/interests/DELETE_UI_FAIL';

const initialState = {
  data: [],
  currentInterest: {},
  full: []
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case INTERESTS_START: {
      return {
        ...state,
        data: [],
        currentInterest: {}
      };
    }
    case INTERESTS_SUCCESS: {
      return {
        ...state,
        data: action.result.data
      };
    }
    case INTERESTS_FAIL: {
      return {
        ...state,
        data: [],
        currentInterest: {}
      };
    }
    case FULL_INTERESTS_START: {
      return {
        ...state,
        full: []
      };
    }
    case FULL_INTERESTS_SUCCESS: {
      return {
        ...state,
        full: action.result.data
      };
    }
    case FULL_INTERESTS_FAIL: {
      return {
        ...state,
        full: []
      };
    }
    case INTERESTS_MAT_START: {
      return {
        ...state,
        data: [],
        currentInterest: {}
      };
    }
    case INTERESTS_MAT_SUCCESS: {
      return {
        ...state,
        currentInterest: action.result.data[0]
      };
    }
    case INTERESTS_MAT_FAIL: {
      return {
        ...state,
        data: [],
        currentInterest: {}
      };
    }
    case CREATE_UI_START: {
      return state;
    }
    case CREATE_UI_SUCCESS: {
      return state;
    }
    case CREATE_UI_FAIL: {
      return state;
    }
    case DELETE_UI_START: {
      return state;
    }
    case DELETE_UI_SUCCESS: {
      return state;
    }
    case DELETE_UI_FAIL: {
      return state;
    }
    default:
      return state;
  }
}

export function createUserInterest(userId, interestId) {
  return {
    types: [CREATE_UI_START, CREATE_UI_SUCCESS, CREATE_UI_FAIL],
    promise: async ({ client }) => client.post(`/users_interests?userId=${userId}&interestId=${interestId}`)
  };
}

export function deleteUserInterest(userId, interestId) {
  return {
    types: [DELETE_UI_START, DELETE_UI_SUCCESS, DELETE_UI_FAIL],
    promise: async ({ client }) => client.delete(`/users_interests?userId=${userId}&interestId=${interestId}`)
  };
}

export function getInterestsListById(userId) {
  return {
    types: [INTERESTS_START, INTERESTS_SUCCESS, INTERESTS_FAIL],
    promise: async ({ client }) => client.get(`/interests?userId=${userId}`)
  };
}

export function getInterests(idsList) {
  return {
    types: [INTERESTS_START, INTERESTS_SUCCESS, INTERESTS_FAIL],
    promise: async ({ client }) => client.get(`/interests?where=(id*IN*${idsList.join(',')})`)
  };
}

export function getCurrentInterest(interestId) {
  return {
    types: [INTERESTS_MAT_START, INTERESTS_MAT_SUCCESS, INTERESTS_MAT_FAIL],
    promise: async ({ client }) => client.get(`/interests?where=(id*=*${interestId})&relations=materials`)
  };
}

export function getFullInterests() {
  return {
    types: [FULL_INTERESTS_START, FULL_INTERESTS_SUCCESS, FULL_INTERESTS_FAIL],
    promise: async ({ client }) => client.get('/interests')
  };
}
