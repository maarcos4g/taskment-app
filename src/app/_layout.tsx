import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Stack } from 'expo-router'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

export default function RootLayout() {
  const queryClient = new QueryClient()

  return (
    <GestureHandlerRootView
      className='flex-1'
    >
      <QueryClientProvider client={queryClient}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name='(public)' />
          <Stack.Screen name='(private)' />
        </Stack>
      </QueryClientProvider>
    </GestureHandlerRootView>
  )
}