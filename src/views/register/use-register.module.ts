import { useRegisterMutation } from '@/shared/queries/auth/use-register.mutation'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from "react-hook-form"
import { RegisterFormData, registerSchema } from "./register.schema"

export const useRegisterViewModule = () => {
  const { control, handleSubmit } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: '',
      password: '',
      name: ''
    }
  })

  const registerMutation = useRegisterMutation()

  const onSubmit = handleSubmit(async (userFormData) => {
    const userData = await registerMutation.mutate(userFormData)
    console.log(userFormData)
  })

  return {
    control,
    onSubmit,
    isLoading: registerMutation.isPending
  }
}