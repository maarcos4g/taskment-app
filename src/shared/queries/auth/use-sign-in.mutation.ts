import { SignInHTTPRequestParams } from "@/shared/interfaces/http/sign-in"
import { signIn } from "@/shared/services/auth.service"
import { useUserStore } from "@/shared/stores/user-store"
import { useMutation } from "@tanstack/react-query"

export const useSignInMutation = () => {
  const { setSession } = useUserStore()

  const mutation = useMutation({
    mutationFn: (data: SignInHTTPRequestParams) => signIn(data),
    onSuccess: (response) => {
      setSession(response)
    },
    onError: (error) => { }
  })

  return mutation
}