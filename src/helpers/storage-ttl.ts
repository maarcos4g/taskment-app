import AsyncStorage from '@react-native-async-storage/async-storage'
import { StateStorage } from 'zustand/middleware'

interface StorageItem {
  value: string
  expiry: number
}

export const createTTLStorage = (ttlInSeconds: number): StateStorage => {
  return {
    getItem: async (key: string): Promise<string | null> => {
      const json = await AsyncStorage.getItem(key)

      if (!json) return null

      try {
        const data: StorageItem = JSON.parse(json)
        const now = Date.now()

        if (now > data.expiry) {
          await AsyncStorage.removeItem(key)
          return null
        }
        return data.value
      } catch (error) {
        return null
      }
    },

    setItem: async (key: string, value: string): Promise<void> => {
      const now = Date.now()

      const item: StorageItem = {
        value: value,
        expiry: now + (ttlInSeconds * 1000)
      }

      await AsyncStorage.setItem(key, JSON.stringify(item))
    },

    removeItem: async (key: string): Promise<void> => {
      await AsyncStorage.removeItem(key)
    }
  }
}