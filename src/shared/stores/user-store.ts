import { createTTLStorage } from "@/helpers/storage-ttl"
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

const SEVEN_DAYS_IN_SECONDS = 7 * 24 * 60 * 60

interface SetSessionParams {
  token: string
}

export interface UserStore {
  token: string | null

  setSession: (sessionData: SetSessionParams) => void
  logOut: () => void
}

const sessionStorage = createTTLStorage(SEVEN_DAYS_IN_SECONDS)

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      token: null,

      logOut: () => set({ token: null }),
      setSession: (sessionData: SetSessionParams) => {
        set({ ...sessionData })
      }
    }),
    {
      name: 'taskment-auth',
      storage: createJSONStorage(() => sessionStorage)
    }
  )
)