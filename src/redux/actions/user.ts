import { LOGIN_SUCCESS, LOGOUT } from "../types/user";
import { fetchHandler } from "../../common/fetch-handler";

export const loginUser =
  (accessToken: string, refreshToken: string) =>
  async (dispatch: any) => {

    // Save tokens
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);

    // Fetch user profile from backend
    const profile = await fetchHandler({
      method: "GET",
      endpoint: "/auth/profile",
    });

    dispatch({
      type: LOGIN_SUCCESS,
      payload: {
        id: profile.id,
        email: profile.email,
        name: profile.name,
        avatarUrl: profile.avatarUrl,
      },
    });
  };

export const logoutUser = () => (dispatch: any) => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");

  dispatch({ type: LOGOUT });
};
