import { AuthLayout } from "../AuthLayout/AuthLayout";
import { SignUpForm } from "./SignUpForm";

export const SignUpPage = () => {
  return (
    <div className="flex justify-center items-center  h-screen max-w-md mx-auto">
      <AuthLayout>
        <SignUpForm />
      </AuthLayout>
    </div>
  );
};
