import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
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
})

apiClient.interceptors.request.use(
  async (config) => {
    const userData = await AsyncStorage.getItem('taskment-auth')

    if (userData) {
      const {
        token
      } = JSON.parse(userData)

      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (
      error.response?.status === 401 &&
      error.response?.data?.message === 'Invalid token'
    ) {

      Toast.error('Sessão expirada, faça o login novamente.')
      await handleUnauthorized()
      return Promise.reject(
        new Error('Sessão expirada, faça o login novamente.'),
      )
    }

    if (error.response?.status === 400) {
      Toast.error(error.response?.data?.message)
      return Promise.reject(
        new Error('Falha na requisição.')
      )
    }
  }
)

async function handleUnauthorized() {
  const { logOut } = useUserStore()

  delete apiClient.defaults.headers.common.Authorization

  logOut()
}