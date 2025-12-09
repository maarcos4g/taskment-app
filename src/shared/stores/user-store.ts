import { createTTLStorage } from "@/helpers/storage-ttl"
import { jwtDecode } from "jwt-decode"
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

interface SetSessionParams {
  token: string
}

export interface UserStore {
  token: string | null
  expiresAt: number | null

  setSession: (sessionData: SetSessionParams) => void
  logOut: () => void
}

const sessionStorage = createTTLStorage()

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      token: null,
      expiresAt: null,

      logOut: () => set({ token: null, expiresAt: null }),
      setSession: (sessionData: SetSessionParams) => {
        try {
          const decoded = jwtDecode(sessionData.token)

          const expiresAt = decoded.exp ? decoded.exp * 1000 : 0
          set({ ...sessionData, expiresAt })
        } catch (error) {
          console.error('Token inválido', error)
          set({ ...sessionData, expiresAt: null })
        }
      }
    }),
    {
      name: 'taskment-auth',
      storage: createJSONStorage(() => sessionStorage)
    }
  )
)