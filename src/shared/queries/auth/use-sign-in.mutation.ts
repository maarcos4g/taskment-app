import { SignInHTTPRequestParams } from "@/shared/interfaces/http/sign-in"
import { signIn } from "@/shared/services/auth.service"
import { useMutation } from "@tanstack/react-query"

export const useSignInMutation = () => {
  const mutation = useMutation({
    mutationFn: (data: SignInHTTPRequestParams) => signIn(data),
    onSuccess: (response) => {
      console.log(response)
    },
    onError: (error) => {}
  })

  return mutation
}