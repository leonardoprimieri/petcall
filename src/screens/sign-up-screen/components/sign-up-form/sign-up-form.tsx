import { Button } from "~/components/button/button";
import { zodResolver } from "@hookform/resolvers/zod";

import { Form } from "./sign-up-form-styles";

import { FormProvider, useForm } from "react-hook-form";
import { SignUpFormValidation } from "~/screens/sign-in-screen/validation/sign-up-form-validation";
import { ControlledTextInput } from "~/components/form/controlled-text-input/controlled-text-input";
import { useCreateUserAccount } from "~/screens/sign-up-screen/hooks/use-create-user-account";

type FormData = {
  email: string;
  password: string;
};

export const SignUpForm = () => {
  const methods = useForm<FormData>({
    resolver: zodResolver(SignUpFormValidation),
    mode: "onSubmit",
  });

  const { mutationFn } = useCreateUserAccount();

  const onSubmit = async (data: FormData) => {
    await mutationFn({
      email: data.email,
      password: data.password,
    });
  };

  return (
    <FormProvider {...methods}>
      <Form>
        <ControlledTextInput
          placeholder="E-mail"
          keyboardType="email-address"
          name="email"
        />
        <ControlledTextInput
          placeholder="Senha"
          name="password"
          secureTextEntry
        />

        <Button
          width="300px"
          isLoading={methods.formState.isSubmitting}
          onPress={methods.handleSubmit(onSubmit)}
        >
          Criar conta
        </Button>
      </Form>
    </FormProvider>
  );
};
