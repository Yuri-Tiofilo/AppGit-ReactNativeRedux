/*
  actionstypes
*/
export const Types = {
  REQUEST: 'LOGIN_REQUEST',
  SUCESS: 'LOGIN_SUCESS',
  FAILURE: 'LOGIN_FAILURE',
};

/*
  reducers
*/

const INITIAL_STATE = {
  username: null,
  loading: false,
  error: false,
};

export default function login(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.REQUEST:
      return {...state, loading: true};
    case Types.SUCESS:
      return {
        ...state,
        username: action.payload.username,
        error: false,
        loading: false,
      };
    case Types.FAILURE:
      return {...state, error: true, loading: false};
    default:
      return state;
  }
}

/*
  actions creators
*/

export const Creators = {
  loginRequest: username => ({
    type: Types.REQUEST,
    payload: {username},
  }),

  loginSucess: username => ({
    type: Types.SUCESS,
    payload: {username},
  }),

  loginFailure: () => ({
    type: Types.FAILURE,
  }),
};
