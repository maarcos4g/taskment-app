import { apiClient } from "../api/client";
import { AuthResponse } from "../interfaces/http/auth-response";
import { SignInHTTPRequestParams } from "../interfaces/http/sign-in";

export async function signIn(data: SignInHTTPRequestParams) {
  const { data: response } = await apiClient.post<AuthResponse>(
    '/sessions/password',
    data
  )
  return response
}