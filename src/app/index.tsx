import { useUserStore } from '@/shared/stores/user-store'
import { Redirect } from 'expo-router'
import '../helpers/icons-config'
import '../styles/global.css'

export default function App() {

  const { token } = useUserStore()

  if (token) {
    return <Redirect href="/home" />
  }

  return <Redirect href="/(public)/sign-in" />
}