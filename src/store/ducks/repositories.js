/*
  ACTIONS TYPES
*/
export const Types = {
  LOAD_REQUEST: 'LOAD_REPOSITORIES_REQUEST',
  LOAD_SUCESS: 'LOAD_REPOSITORIES_SUCESS',
  LOAD_FAILURE: 'LOAD_REPOSITORIES_FAILURE',
};
/*
  REDUCERS
*/
const INITIAL_STATE = {
  data: [],
  loading: false,
  error: false,
};

export default function repositories(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOAD_REQUEST:
      return {...state, loading: true};
    case Types.LOAD_SUCESS:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        error: false,
      };
    case Types.LOAD_FAILURE:
      return {...state, error: true, loading: false};
    default:
      return state;
  }
}

/*
  ACTIONS CREATORS
*/
export const Creators = {
  loadRepositoriesRequest: () => ({
    type: Types.LOAD_REQUEST,
  }),

  loadRepositoriesSucess: data => ({
    type: Types.LOAD_SUCESS,
    payload: {data},
  }),

  loadRepositoriesFailure: () => ({
    type: Types.LOAD_FAILURE,
  }),
};
