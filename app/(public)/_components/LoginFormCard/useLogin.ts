import { TLoginSchema, loginSchema } from "@/schema/login.schema";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UsersAPI } from "@/services/users";
import { credentialsProviderName } from "@/config/nextAuthOptions";
import { signIn } from "next-auth/react";
import { IUser } from "@/types";

export default function useLogin() {
  const [isSubmittingForm, setIsSubmittingForm] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const loginForm = useForm<TLoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      emailAddress: "",
      password: "",
    },
  });

  const login = async (formValues: TLoginSchema) => {
    setErrorMessage((_) => "");

    const data = await UsersAPI.login(formValues);

    if (data?.error) {
      setErrorMessage((_) => data.error as string);
    } else {
      const loggedInUser = data.data as IUser;
      const user = {
        id: loggedInUser.id,
        name: `${loggedInUser.firstName} ${loggedInUser.lastName}`,
        email: loggedInUser.email,
        image: loggedInUser.image,
      };
      signIn(credentialsProviderName, {
        ...user,
        callbackUrl: `/dashboard`,
        redirect: true,
      });
    }
  };
  return { login, isSubmittingForm, loginForm, errorMessage };
}
