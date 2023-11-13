import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

import { Form } from "./sign-up-form-styles";
import {
  SignUpFormData,
  SignUpFormValidation,
} from "../../validation/sign-up-form-validation";

import { Button } from "~/components/button/button";
import { ControlledTextInput } from "~/components/form/controlled-text-input/controlled-text-input";
import { useNavigationRoutes } from "~/hooks/general/use-navigation-routes";
import { useUserStore } from "~/store/user-store";

export const SignUpForm = () => {
  const methods = useForm<SignUpFormData>({
    resolver: zodResolver(SignUpFormValidation),
    mode: "onTouched",
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
          keyboardType="email-address"
          name="email"
          placeholder="E-mail"
        />
        <ControlledTextInput
          name="password"
          placeholder="Senha"
          secureTextEntry
        />
        <ControlledTextInput
          name="passwordConfirmation"
          placeholder="Confirmar senha"
          secureTextEntry
        />

        <Button
          width="300px"
          isLoading={methods.formState.isSubmitting}
          onPress={methods.handleSubmit(onSubmit)}
          disabled={!methods.formState.isValid}
        >
          Continuar
        </Button>
      </Form>
    </FormProvider>
  );
};
