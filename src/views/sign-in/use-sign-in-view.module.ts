import { useSignInMutation } from '@/shared/queries/auth/use-sign-in.mutation'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from "react-hook-form"
import { SignInFormData, signInSchema } from "./sign-in.schema"

export const useSignInViewModule = () => {
  const { control, handleSubmit } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const signInMutation = useSignInMutation()

  const onSubmit = handleSubmit(async (userFormData) => {
    const userData = await signInMutation.mutate(userFormData)
  })

  return {
    control,
    onSubmit,
    isLoading: signInMutation.isPending
  }
}