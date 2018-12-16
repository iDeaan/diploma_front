const config = require('../../config');

const SIGN_START = 'boogaloo/auth/SIGN';
const SIGN_SUCCESS = 'boogaloo/auth/SIGN_SUCCESS';
const SIGN_FAIL = 'boogaloo/auth/SIGN_FAIL';

const TOKEN_CHECK_START = 'boogaloo/auth/TOKEN_CHECK_START';
const TOKEN_CHECK_SUCCESS = 'boogaloo/auth/TOKEN_CHECK_SUCCESS';
const TOKEN_CHECK_FAIL = 'boogaloo/auth/TOKEN_CHECK_FAIL';

const REGISTER_START = 'boogaloo/auth/REGISTER_START';
const REGISTER_SUCCESS = 'boogaloo/auth/REGISTER_SUCCESS';
const REGISTER_FAIL = 'boogaloo/auth/REGISTER_FAIL';

const LOGOUT_SUCCESS = 'boogaloo/auth/LOGOUT_SUCCESS';

const initialState = {
  signing: false,
  signed: false,
  data: {},
  error: {},
  registering: false,
  registered: false,
  registeredUser: {},
  isTokenValid: false,
  tokenChecking: false,
  tokenError: {},
  token: null,
  currentUserId: null
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SIGN_START:
      return {
        ...state,
        signing: true
      };
    case SIGN_SUCCESS: {
      if (__CLIENT__ && localStorage) {
        localStorage.setItem('user', action.result.data.user.id);
        localStorage.setItem('email', action.result.data.user.email);
        localStorage.setItem('login', action.result.data.user.login);
        localStorage.setItem('password', action.notHashedPassword);
        localStorage.setItem('token', action.result.data.token.token);
      }
      return {
        ...state,
        signing: false,
        signed: true,
        data: action.result.data,
        error: null
      };
    }
    case SIGN_FAIL:
      return {
        ...state,
        signing: false,
        signed: false,
        error: action.error
      };
    case REGISTER_START:
      return {
        ...state,
        registering: true
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        registering: false,
        registered: true,
        registeredUser: action.result.data,
        token: action.result.data && action.result.data.userToken ? action.result.data.userToken.token : null,
        currentUserId: action.result.data && action.result.data.userToken ? action.result.data.userToken.user_id : null,
        error: null
      };
    case REGISTER_FAIL:
      return {
        ...state,
        registering: false,
        registered: false,
        error: action.error
      };
    case TOKEN_CHECK_START:
      return {
        ...state,
        tokenChecking: true,
        isTokenValid: false
      };
    case TOKEN_CHECK_SUCCESS:
      return {
        ...state,
        tokenChecking: false,
        isTokenValid: true,
        tokenError: {}
      };
    case TOKEN_CHECK_FAIL:
      return {
        ...state,
        tokenChecking: false,
        isTokenValid: false,
        tokenError: action.error
      };
    case LOGOUT_SUCCESS: {
      if (__CLIENT__ && localStorage) {
        localStorage.removeItem('user', null);
        localStorage.removeItem('email', null);
        localStorage.removeItem('login', null);
        localStorage.removeItem('password', null);
        localStorage.removeItem('token', null);
      }
      return {
        signing: false,
        signed: false,
        data: {},
        error: {},
        registering: false,
        registered: false,
        registeredUser: {},
        isTokenValid: false,
        tokenChecking: false,
        tokenError: {},
        token: null,
        currentUserId: null
      };
    }
    default:
      return state;
  }
}

export function signIn(login = null, password = null) {
  if (login !== null && password != null) {
    return {
      types: [SIGN_START, SIGN_SUCCESS, SIGN_FAIL],
      promise: ({ client }) => client.get(`/sign?login=${login}&password=${password}`),
      notHashedPassword: password
    };
  }
  return new Promise(resolve => resolve());
}

export function logout() {
  return {
    type: LOGOUT_SUCCESS
  };
}

export function registerNewUser(userData) {
  return {
    types: [REGISTER_START, REGISTER_SUCCESS, REGISTER_FAIL],
    promise: ({ client }) => client.post('/sign', userData)
  };
}

export function checkIfTokenValid(token, userId) {
  return {
    types: [REGISTER_START, REGISTER_SUCCESS, REGISTER_FAIL],
    promise: ({ client }) => client.get(`${config.apiHost}/sign?token=${token}&userId=${userId}`)
  };
}
