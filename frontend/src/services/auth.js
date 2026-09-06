import { ACCESS_TOKEN, REFRESH_TOKEN } from "../config/constants";

export function clearAuthTokens() {
  localStorage.removeItem(ACCESS_TOKEN);
  localStorage.removeItem(REFRESH_TOKEN);
}
