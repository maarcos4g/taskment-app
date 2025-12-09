import { RegisterView } from "@/views/register/register.view";
import { useRegisterViewModule } from "@/views/register/use-register.module";

export default function Register() {
  const props = useRegisterViewModule()

  return <RegisterView {...props} />
}