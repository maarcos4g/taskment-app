import { SignInView } from "@/views/sign-in/sign-in.view";
import { useSignInViewModule } from "@/views/sign-in/use-sign-in-view.module";

export default function SignIn() {
  const props = useSignInViewModule()

  return <SignInView {...props} />
}