import axios, { AxiosError } from "axios";
import { Platform } from "react-native";
import { Toast } from "toastify-react-native";
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
  timeout: 10000
})

apiClient.interceptors.request.use(
  async (config) => {
    const { token } = useUserStore.getState()

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

apiClient.interceptors.response.use(
  (response) => response,
  async (error: AxiosError<{ message?: string }>) => {
    if (error.response) {
      const { status, data } = error.response

      if (status === 401) {
        Toast.error('Sessão expirada, faça o login novamente.')
        await handleUnauthorized()
        return Promise.reject(
          new Error('Sessão expirada, faça o login novamente.'),
        )
      }
      if (status === 400) {
        const errorMessage = data?.message || 'Falha na requisição'
        Toast.error(errorMessage)
        return Promise.reject(
          new Error('Falha na requisição.')
        )
      }
    } else {
      Toast.error('Erro de conexão. Verifique sua internet.')
    }
    return Promise.reject(error)
  }
)

async function handleUnauthorized() {
  const { logOut } = useUserStore.getState()

  delete apiClient.defaults.headers.common.Authorization

  logOut()
}