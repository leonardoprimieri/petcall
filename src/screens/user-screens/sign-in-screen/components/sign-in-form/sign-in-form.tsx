import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

import {
  Footer,
  FooterText,
  Form,
  LinkButton,
  LinkText,
} from "./sign-in-form-styles";
import { SignInFormValidation } from "../../validation/sign-in-form-validation";

import { Button } from "~/components/button/button";
import { ControlledTextInput } from "~/components/form/controlled-text-input/controlled-text-input";
import { useNavigationRoutes } from "~/hooks/general/use-navigation-routes";
import { useEmailLogin } from "~/screens/user-screens/sign-in-screen/hooks/use-email-login";

type FormData = {
  email: string;
  password: string;
};

export const SignInForm = () => {
  const methods = useForm<FormData>({
    resolver: zodResolver(SignInFormValidation),
    mode: "onSubmit",
  });

  const { handleGoToSignUp } = useNavigationRoutes();

  const { mutationFn } = useEmailLogin();

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
          disabled={!methods.formState.isValid}
        >
          Entrar
        </Button>
      </Form>

      <Footer>
        <FooterText>Novo usuário?</FooterText>
        <LinkButton onPress={handleGoToSignUp}>
          <LinkText>Criar conta</LinkText>
        </LinkButton>
      </Footer>
    </FormProvider>
  );
};
