import { ACCESS_TOKEN, REFRESH_TOKEN } from "./constants";

export function clearAuthTokens() {
  localStorage.removeItem(ACCESS_TOKEN);
  localStorage.removeItem(REFRESH_TOKEN);
}
