import AsyncStorage from '@react-native-async-storage/async-storage'
import { StateStorage } from 'zustand/middleware'

export const createTTLStorage = (): StateStorage => {
  return {
    getItem: async (key: string): Promise<string | null> => {
      const json = await AsyncStorage.getItem(key)

      if (!json) return null

      try {
        const storageData = JSON.parse(json)

        const expiresAt = storageData.state?.expiresAt

        if (expiresAt && Date.now() > expiresAt) {
          await AsyncStorage.removeItem(key)
          return null
        }
        return json
      } catch (error) {
        return null
      }
    },

    setItem: async (key: string, value: string): Promise<void> => {
      await AsyncStorage.setItem(key, value)
    },

    removeItem: async (key: string): Promise<void> => {
      await AsyncStorage.removeItem(key)
    }
  }
}