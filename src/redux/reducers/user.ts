import { UserState, UserAction, LOGIN_SUCCESS, LOGOUT } from "../types/user";

const initialState: UserState = {
  id: null,
  email: null,
  name: null,
  avatarUrl: null,
  loading: true,
};

export function userReducer(
  state = initialState,
  action: UserAction
): UserState {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        ...action.payload,
        loading: false,
      };

    case LOGOUT:
      return {
        ...initialState,
        loading: false,
      };

    default:
      return state;
  }
}
