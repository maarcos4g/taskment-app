import { LucideIcon } from "lucide-react-native";
import { FC } from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  leftIcon?: LucideIcon
  rightIcon?: LucideIcon
  label: string
}

export const Button: FC<ButtonProps> = ({
  label,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  ...props
}) => {
  return (
    <TouchableOpacity
    activeOpacity={0.7}
      className="flex-row items-center justify-center bg-sky-400 py-3 rounded-2xl gap-2"
      {...props}
    >

      {LeftIcon && <LeftIcon className="text-white size-4" />}

      <Text
        className="font-bold text-base text-white"
      >
        {label}
      </Text>

      {RightIcon && <RightIcon className="text-white size-4" />}
    </TouchableOpacity>
  )
}