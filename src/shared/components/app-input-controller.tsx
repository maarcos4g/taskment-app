import { Control, Controller, FieldErrors, FieldValues, Path } from "react-hook-form";
import { Input, InputProps } from "./input";

interface AppInputControllerProps<T extends FieldValues> 
extends Omit<InputProps, 'value' | 'onChangeText' | 'error'> {
  control: Control<T>
  name: Path<T>
  errors?: FieldErrors<T>
}

export const AppInputController = <T extends FieldValues>({
  name,
  control,
  errors,
  ...props
}: AppInputControllerProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onBlur, onChange, value },
        fieldState: { error },
        formState: { isSubmitting }
      }) => (
        <Input 
        onBlur={onBlur}
        onChangeText={onChange}
        value={value}
        error={error?.message}
        {...props}
        />
      )}
    />
  )
}