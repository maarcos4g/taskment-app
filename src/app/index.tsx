import { Text, View } from 'react-native'
import '../styles/global.css'

export default function Index() {
  return (
    <View
      className='flex-1 items-center justify-center bg-sky-500'
    >
      <Text className='text-zinc-50'>Hello World</Text>
    </View>
  )
}