import { AppInputController } from "@/shared/components/app-input-controller";
import { AuthHeader } from "@/shared/components/auth-header";
import { Button } from "@/shared/components/button";
import { KeyboardContainer } from "@/shared/components/keyboard-container";
import { router } from "expo-router";
import { MailCheck } from "lucide-react-native";
import { FC } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useForgotPasswordViewModule } from "./use-forgot-password.module";

export const ForgotPasswordView: FC<ReturnType<typeof useForgotPasswordViewModule>> = ({
  control,
  onSubmit,
  // isLoading
}) => {
  return (
    <KeyboardContainer>
      <View
        className="items-center flex-1 relative"
      >
        <AuthHeader
          title="Redefinir senha"
        />

        <View
          className="w-full px-3 mt-6 gap-6"
        >

          <Text
          className="text-base font-medium text-black"
          >
            Insira seu e-mail abaixo e enviaremos um link para a redefinição da senha.
          </Text>

          <AppInputController
            leftIcon={MailCheck}
            label="Seu e-mail"
            control={control}
            name="email"
          />


          <Button
            label="Solicitar e-mail"
            onPress={onSubmit}
          // isLoading={isLoading}
          />

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