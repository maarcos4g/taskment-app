import { useUserStore } from '@/shared/stores/user-store'
import { Redirect, Stack } from 'expo-router'

export default function PrivateLayout() {
  const { token } = useUserStore()

  if (!token) {
    return <Redirect href="/(public)/sign-in" />
  }

  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
      </Stack>
      {/* <AppBottomSheet /> */}
    </>
  )
}