import { Button } from "~/components/button/button";
import { zodResolver } from "@hookform/resolvers/zod";

import { Form } from "./sign-up-form-styles";

import { FormProvider, useForm } from "react-hook-form";
import { SignUpFormValidation } from "~/screens/user-screens/sign-in-screen/validation/sign-up-form-validation";
import { ControlledTextInput } from "~/components/form/controlled-text-input/controlled-text-input";
import { useNavigationRoutes } from "~/hooks/general/use-navigation-routes";
import { useUserStore } from "~/store/user-store";
import { SignUpFormData } from "../../validation/sign-up-form-validation";

export const SignUpForm = () => {
  const methods = useForm<SignUpFormData>({
    resolver: zodResolver(SignUpFormValidation),
    mode: "onSubmit",
  });

  const { setUser } = useUserStore();

  const { handleGoToOnboarding } = useNavigationRoutes();

  const onSubmit = async (data: SignUpFormData) => {
    setUser(data);
    handleGoToOnboarding();
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
          Continuar
        </Button>
      </Form>
    </FormProvider>
  );
};
