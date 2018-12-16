const MATERIAL_START = 'redux-examples/interests/MATERIAL_START';
const MATERIAL_SUCCESS = 'redux-examples/interests/MATERIAL_SUCCESS';
const MATERIAL_FAIL = 'redux-examples/interests/MATERIAL_FAIL';

const initialState = {
  data: [],
  currentMaterial: {}
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case MATERIAL_START: {
      return {
        ...state,
        data: [],
        currentInterest: {}
      };
    }
    case MATERIAL_SUCCESS: {
      return {
        ...state,
        currentMaterial: action.result.data[0]
      };
    }
    case MATERIAL_FAIL: {
      return {
        ...state,
        data: [],
        currentInterest: {}
      };
    }
    default:
      return state;
  }
}

export function getMaterialById(materialId) {
  return {
    types: [MATERIAL_START, MATERIAL_SUCCESS, MATERIAL_FAIL],
    promise: async ({ client }) => client.get(`/materials?where=(id*=*${materialId})`)
  };
}
