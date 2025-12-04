import { Eye, EyeOff, LucideIcon } from "lucide-react-native";
import { FC } from "react";
import { Pressable, Text, TextInput, TextInputProps, TouchableOpacity, View } from "react-native";
import { useInputViewModel } from "./use-input-view.model";

export interface InputProps extends TextInputProps {
  label?: string
  leftIcon?: LucideIcon
  rightIcon?: LucideIcon
  containerClassName?: string
  mask?: (value: string) => void | string
  error?: string
}

export const Input: FC<InputProps> = ({
  label,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  containerClassName,
  mask,
  value,
  secureTextEntry,
  onBlur,
  onFocus,
  onChangeText,
  error,
  ...props
}) => {
  const {
    getIconColor,
    getBorderColor,
    handleWrapperPress,
    handlePasswordToggle,
    showPassword,
    handleFocus,
    handleBlur,
    handleTextChange,
    isFocused
  } = useInputViewModel({
    onBlur,
    onFocus,
    isError: !!error,
    mask,
    onChangeText,
    secureTextEntry,
    value,
  })

  return (
    <View
      className="gap-3"
    >
      <Text
        className="font-medium text-base text-black"
      >
        {label}
      </Text>
      <Pressable onPress={handleWrapperPress}>
        <View
          className={`w-full flex-row items-center px-4 py-3 border ${getBorderColor} rounded-xl gap-2`}
        >
          {LeftIcon && <LeftIcon className={`${getIconColor()} stroke-[1.5] size-5`} />}

          <TextInput
            onBlur={handleBlur}
            onFocus={handleFocus}
            onChangeText={handleTextChange}
            value={value}
            secureTextEntry={showPassword}
            className="text-zinc-800 text-base flex-1 h-6 p-0"
            {...props}
          />

          {secureTextEntry && (
            <TouchableOpacity activeOpacity={0.7} onPress={handlePasswordToggle}>
              {showPassword ? (
                <Eye className="text-zinc-400" size={20} />
              ) : (
                <EyeOff className="text-zinc-400" size={20} />
              )}
            </TouchableOpacity>
          )}
        </View>

        {error && (
          <Text className="text-sm text-red-500 font-medium mt-1">{error}</Text>
        )}
      </Pressable>
    </View>
  )
}