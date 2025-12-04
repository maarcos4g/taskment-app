import { useRef, useState } from 'react'
import { BlurEvent, FocusEvent, TextInput } from 'react-native'

interface AppInputViewModelProps {
  isError?: boolean
  isDisabled?: boolean
  secureTextEntry?: boolean
  onFocus?: (event: FocusEvent) => void
  onBlur?: (event: BlurEvent) => void
  mask?: (text: string) => string | void
  onChangeText?: (text: string) => string | void
  value?: string
}

export const useInputViewModel = ({
  isError,
  isDisabled,
  secureTextEntry,
  onFocus,
  onBlur,
  mask,
  onChangeText,
  value,
}: AppInputViewModelProps) => {
  const [showPassword, setShowPassword] = useState(secureTextEntry)
  const [isFocused, setIsFocused] = useState(false)

  const inputRef = useRef<TextInput>(null)

  const handlePasswordToggle = () => {
    setShowPassword((prevValue) => !prevValue)
  }

  const handleWrapperPress = () => {
    inputRef.current?.focus()
  }

  const handleFocus = (event: FocusEvent) => {
    setIsFocused(true)
    onFocus?.(event)
  }

  const handleBlur = (event: BlurEvent) => {
    setIsFocused(false)
    onBlur?.(event)
  }

  const getIconColor = () => {
    if (isError) return 'text-red-500'
    if (isFocused) return 'text-sky-400'
    return 'text-zinc-400'
  }
  
  const getBorderColor = () => {
    if (isError) return 'border-red-500'
    if (isFocused) return 'border-sky-400'
    return 'border-zinc-400'
  }

  const handleTextChange = (text: string) => {
    if (mask) {
      onChangeText?.(mask(text) || '')
    } else {
      onChangeText?.(text)
    }
  }

  return {
    getIconColor,
    getBorderColor,
    handleBlur,
    handleFocus,
    handleWrapperPress,
    handlePasswordToggle,
    showPassword,
    handleTextChange,
    isFocused,
  }
}