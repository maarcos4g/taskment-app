import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from "react-hook-form"
import { ForgotPasswordFormData, forgotPasswordSchema } from "./forgot-password.schema"

export const useForgotPasswordViewModule = () => {
  const { control, handleSubmit } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: '',
    }
  })

  // const registerMutation = useRegisterMutation()

  const onSubmit = handleSubmit(async (userFormData) => {
    // const userData = await registerMutation.mutate(userFormData)
    console.log(userFormData)
  })

  return {
    control,
    onSubmit,
    // isLoading: registerMutation.isPending
  }
}