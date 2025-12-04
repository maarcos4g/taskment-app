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

  const onSubmit = handleSubmit(async (userFormData) => {
    console.log(userFormData)
  })

  return {
    control,
    onSubmit
  }
}