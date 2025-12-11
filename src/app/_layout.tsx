import {
  DMSans_400Regular,
  DMSans_500Medium,
  DMSans_600SemiBold,
  DMSans_700Bold,
  useFonts
} from '@expo-google-fonts/dm-sans'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SplashScreen, Stack } from 'expo-router'
import { useEffect } from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import ToastManager from 'toastify-react-native'

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const queryClient = new QueryClient()

  const [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSans_500Medium,
    DMSans_600SemiBold,
    DMSans_700Bold
  })

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) return null;

  return (
    <GestureHandlerRootView
      className='flex-1'
    >
      <QueryClientProvider client={queryClient}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name='(public)' />
          <Stack.Screen name='(private)' />
        </Stack>
        <ToastManager useModal={false} />
      </QueryClientProvider>
    </GestureHandlerRootView>
  )
}