import { AuthLayout } from "../AuthLayout/AuthLayout";
import { SignInForm } from "./SignInForm";

export const SignInPage = () => {
  return (
    <div className="flex justify-center items-center  h-screen">
      <AuthLayout>
        <SignInForm />
      </AuthLayout>
    </div>
  );
};
