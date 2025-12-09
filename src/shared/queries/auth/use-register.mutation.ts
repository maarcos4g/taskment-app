import { RegisterHttpRequestParams } from "@/shared/interfaces/http/register"
import { register, signIn } from "@/shared/services/auth.service"
import { useUserStore } from "@/shared/stores/user-store"
import { useMutation } from "@tanstack/react-query"

export const useRegisterMutation = () => {
  const { setSession } = useUserStore()

  const mutation = useMutation({
    mutationFn: (data: RegisterHttpRequestParams) => register(data),
    onSuccess: async (_response, variables) => {
      const { token } = await signIn(variables)
      setSession({
        token
      })
    },
    onError: (error) => {
      console.log(error)
    }
  })

  return mutation
}