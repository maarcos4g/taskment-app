import { useUserStore } from "@/shared/stores/user-store";
import { Text, TouchableOpacity, View } from "react-native";

export default function Home() {
  const { token, logOut } = useUserStore()

  return (
    <View
    className="flex-1 items-center justify-center px-2"
    >
      <Text>
        Token do Usuário: {token}
      </Text>

      <TouchableOpacity
      activeOpacity={0.8}
      className="mt-3 bg-red-500 w-full h-10 items-center justify-center rounded-md"
      onPress={logOut}
      >
        <Text className="text-white">Sair</Text>
      </TouchableOpacity>
    </View>
  )
}