import axios from "axios";
import { Platform } from "react-native";
import { useUserStore } from "../stores/user-store";

function getBaseURL() {
  return Platform.select({
    ios: "http://localhost:3333",
    android: 'http://192.168.1.11:3333'
  })
}

export const baseURL = getBaseURL()

export const apiClient = axios.create({
  baseURL,
})

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config

    if (
      error.response?.status === 401    
    ) {
      await handleUnauthorized()
    }
  }
)

async function handleUnauthorized() {
  const { logOut } = useUserStore()

  delete apiClient.defaults.headers.common.Authorization

  logOut()
}