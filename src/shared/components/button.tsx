import { LucideIcon } from "lucide-react-native";
import { FC } from "react";
import { ActivityIndicator, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  leftIcon?: LucideIcon
  rightIcon?: LucideIcon
  label: string
  isLoading?: boolean
}

export const Button: FC<ButtonProps> = ({
  label,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  isLoading,
  ...props
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className="flex-row items-center justify-center bg-sky-400 py-3 rounded-2xl gap-2 disabled:bg-zinc-400"
      disabled={isLoading}
      {...props}
    >

      {isLoading ? (
        <ActivityIndicator
          size="small"
          className="text-white"
        />
      ) : (

        <>
          {LeftIcon && <LeftIcon className="text-white size-4" />}

          <Text
            className="font-bold text-base text-white"
          >
            {label}
          </Text>

          {RightIcon && <RightIcon className="text-white size-4" />}
        </>
      )
      }
    </TouchableOpacity >
  )
}