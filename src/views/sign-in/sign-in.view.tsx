import { AppInputController } from "@/shared/components/app-input-controller";
import { AuthHeader } from "@/shared/components/auth-header";
import { Button } from "@/shared/components/button";
import { IconButton } from "@/shared/components/icon-button";
import { KeyboardContainer } from "@/shared/components/keyboard-container";
import { Instagram, LockKeyhole, MailCheck } from "lucide-react-native";
import { FC } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useSignInViewModule } from "./use-sign-in-view.module";

export const SignInView: FC<ReturnType<typeof useSignInViewModule>> = ({
  control,
  onSubmit,
  isLoading
}) => {
  return (
    <KeyboardContainer>
      <View
        className="items-center flex-1 relative"
      >
        <AuthHeader />

        <View
          className="w-full px-3 mt-6 gap-6"
        >
          <AppInputController
            leftIcon={MailCheck}
            label="Seu e-mail"
            control={control}
            name="email"
          />

          <View>
            <AppInputController
              leftIcon={LockKeyhole}
              label="Sua senha"
              control={control}
              name="password"
              secureTextEntry
            />

            <TouchableOpacity
              className="mt-2 items-end"
              onPress={() => { }}
              activeOpacity={0.7}
            >
              <Text
                className="text-sky-300 underline font-semibold text-sm"
              >
                Esqueci a senha
              </Text>
            </TouchableOpacity>
          </View>

          <Button
            label="Entrar"
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
        </View>

      </View>
    </KeyboardContainer>
  )
}