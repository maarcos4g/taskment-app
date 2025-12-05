import { useUserStore } from '@/shared/stores/user-store'
import { Redirect, Stack } from 'expo-router'

export default function PublicLayout() {
  const { token } = useUserStore()

  if (token) {
    return <Redirect href="/home" />
  }

  return <Stack screenOptions={{ headerShown: false }} />
}