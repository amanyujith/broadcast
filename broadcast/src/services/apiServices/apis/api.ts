import { remove, post, get } from "../api.service";

export interface tryKeyCloakLoginOptions {
  realm?: string;
  sname?: string;
  grant_type?: "password" | "refresh_token";
  username?: string;
  password?: string;
  refresh_token?: string;
}

/**
 * Retrieves a client from the API using the provided email address.
 *
 * @param {string} email - The email address of the client.
 * @return {Promise<APIResponse>} A promise that resolves to the API response containing the client data.
 */
export async function getClientFromEmail(email: string) {
  const url = `getUserRealm`;
  return post(url,{user:email}, { source: "default", skipTelco: true });
}

export async function getEmployeeProfile(email: string) {
  const url = `viewEmployee`;
  return post(url,{"user_uuid":email,"select":["title","uuid","user_uuid","branch","status"]}, { source: "default", skipTelco: true });
}

export async function tryKeyCloakLogin(options: any) {
  const url = `realms/${options.realm}/protocol/openid-connect/token`;
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  const payload = new URLSearchParams({
    username: options.username,
    password: options.password,
    grant_type: options.grant_type,
    client_id: options.sname,
  });
  return post(url, payload, { source: "keyCloak" }, headers);
}

/**
 * Performs a Keycloak logout operation using the provided options.
 *
 * @param {any} options - The options required for the logout operation.
 * @return {Promise<APIResponse>} A promise that resolves to the result of the logout operation.
 */
export async function tryKeyCloakLogOut(options: tryKeyCloakLoginOptions) {
  const url = `realms/${options.realm}/protocol/openid-connect/logout`;
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  const payload = new URLSearchParams({
    refresh_token: options.refresh_token || "",
    client_id: options.sname || "",
  });
  return post(url, payload, { source: "keyCloak", skipTelco: true }, headers);
}

export async function tryKeyCloakRefresh(options: any) {
  const url = `realms/${options.realm}/protocol/openid-connect/token`;
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  const payload = new URLSearchParams({
    refresh_token: options.refresh_token,
    grant_type: options.grant_type,
    client_id: options.sname,
  });
  return post(url, payload, { source: "keyCloak", skipTelco: true }, headers);
}
