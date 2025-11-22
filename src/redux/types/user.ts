export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT = "LOGOUT";

export interface UserState {
  id: number | null;
  email: string | null;
  name: string | null;
  avatarUrl: string | null;
  loading: boolean;
}

export interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  payload: {
    id: number;
    email: string;
    name: string;
    avatarUrl: string;
  };
}

export interface LogoutAction {
  type: typeof LOGOUT;
}

export type UserAction = LoginSuccessAction | LogoutAction;
