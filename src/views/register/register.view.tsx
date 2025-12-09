import { AppInputController } from "@/shared/components/app-input-controller";
import { AuthHeader } from "@/shared/components/auth-header";
import { Button } from "@/shared/components/button";
import { IconButton } from "@/shared/components/icon-button";
import { KeyboardContainer } from "@/shared/components/keyboard-container";
import { router } from "expo-router";
import { Instagram, LockKeyhole, MailCheck, UserRoundCheck } from "lucide-react-native";
import { FC } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useRegisterViewModule } from "./use-register.module";

export const RegisterView: FC<ReturnType<typeof useRegisterViewModule>> = ({
  control,
  onSubmit,
  isLoading
}) => {
  return (
    <KeyboardContainer>
      <View
        className="items-center flex-1 relative"
      >
        <AuthHeader
        title="Crie sua conta"
        />

        <View
          className="w-full px-3 mt-6 gap-6"
        >
          <AppInputController
            leftIcon={UserRoundCheck}
            label="Seu nome"
            control={control}
            name="name"
          />

          <AppInputController
            leftIcon={MailCheck}
            label="Seu e-mail"
            control={control}
            name="email"
          />

          <AppInputController
            leftIcon={LockKeyhole}
            label="Sua senha"
            control={control}
            name="password"
            secureTextEntry
          />

          <Button
            label="Criar conta"
            onPress={onSubmit}
          isLoading={isLoading}
          />

          <View
            className="flex-row items-center justify-center gap-6"
          >
            <IconButton
              icon={<Instagram className="text-white size-6" />}
            />

            <IconButton
              icon={<Image source={require('../../../assets/images/google.png')} className="size-6" />}
            />
          </View>

          <View
            className="flex-row items-center justify-center gap-1"
          >
            <Text
              className="font-semibold text-base text-black"
            >
              Já tem conta?
            </Text>
            <TouchableOpacity
              onPress={() => router.push('/(public)/sign-in')}
              activeOpacity={0.7}
            >
              <Text
                className="text-sky-300 font-semibold p-0"
              >
                Entrar
              </Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>
    </KeyboardContainer>
  )
}