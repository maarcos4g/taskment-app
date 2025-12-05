import { Tabs } from 'expo-router'
import { Home } from 'lucide-react-native'

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 110,
          paddingTop: 16,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'HOME',
          // tabBarActiveTintColor: colors['purple-base'],
          tabBarIcon: ({ color }) => (
            <Home color={color} size={25} />
          ),
          tabBarLabelStyle: {
            fontSize: 14,
            marginTop: 4,
          },
        }}
      />
    </Tabs>
  )
}