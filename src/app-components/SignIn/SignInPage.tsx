import { AuthLayout } from "../AuthLayout/AuthLayout";
import { SignInForm } from "./SignInForm";

export const SignInPage = () => {
  return (
    <AuthLayout>
      <SignInForm />
    </AuthLayout>
  );
};
