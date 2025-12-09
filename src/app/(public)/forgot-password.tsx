import { ForgotPasswordView } from "@/views/forgot-password/forgot-password.view"
import { useForgotPasswordViewModule } from "@/views/forgot-password/use-forgot-password.module"

export default function ForgotPassword() {
  const props = useForgotPasswordViewModule()
  
    return <ForgotPasswordView {...props} />
}