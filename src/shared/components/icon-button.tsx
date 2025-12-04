import { FC, ReactNode } from "react"
import { TouchableOpacity, TouchableOpacityProps } from "react-native"

interface IconButtonProps extends TouchableOpacityProps {
  icon: ReactNode
}

export const IconButton: FC<IconButtonProps> = ({
  icon,
  ...props
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      className="p-2 bg-sky-200 rounded-full"
      {...props}
    >
      {icon}
    </TouchableOpacity>
  )
}