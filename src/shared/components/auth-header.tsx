import { FC } from "react";
import { Image, Text, View } from "react-native";

export const AuthHeader: FC = () => {
  return (
    <>
      <View
        className="size-[532px] bg-sky-300 rounded-full items-center justify-end absolute -top-[250px]"
      >
        <View
          className="mb-10"
        >
          <Image
            source={require('../../../assets/images/logo-taskment.png')}
            className="w-40 h-52"
          />
        </View>
      </View>
      
      <View
        className="mt-[282px] pt-12 items-center gap-6"
      >
        <Text className="font-bold text-2xl text-black">
          Acesse sua conta
        </Text>
      </View>
    </>
  )
}