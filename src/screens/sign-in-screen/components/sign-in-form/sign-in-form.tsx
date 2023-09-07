import { Button } from "@components/button/button";
import { GoogleLogoIcon } from "@components/icons";

import {
  Footer,
  FooterText,
  Form,
  LinkButton,
  LinkText,
} from "./sign-in-form-styles";
import { useEmailLogin } from "@screens/sign-in-screen/hooks/use-email-login";
import { useNavigationRoutes } from "@hooks/use-navigation-routes";

import { FormProvider, useForm } from "react-hook-form";
import { ControlledTextInput } from "@components/controlled-text-input/controlled-text-input";

type FormData = {
  email: string;
  password: string;
};

export const SignInForm = () => {
  const methods = useForm<FormData>();

  const { handleGoToOnboarding } = useNavigationRoutes();

  const { mutationFn } = useEmailLogin();

  const onSubmit = async (data: FormData) => {
    await mutationFn({
      email: data.email,
      password: data.password,
    });
  };

  return (
    <FormProvider {...methods}>
      <Button
        width="200px"
        icon={<GoogleLogoIcon color="white" weight="bold" />}
        bold
        variant="secondary"
      >
        com Google
      </Button>
      <FooterText>Ou com email</FooterText>

      <Form>
        <ControlledTextInput
          placeholder="E-mail"
          keyboardType="email-address"
          name="email"
          required
        />
        <ControlledTextInput
          placeholder="Senha"
          name="password"
          secureTextEntry
          required
        />

        <Button width="300px" onPress={methods.handleSubmit(onSubmit)}>
          {methods.formState.isSubmitting ? "Carregando..." : "Entrar"}
        </Button>
      </Form>

      <Footer>
        <FooterText>Novo usuário?</FooterText>
        <LinkButton onPress={handleGoToOnboarding}>
          <LinkText>Criar conta</LinkText>
        </LinkButton>
      </Footer>
    </FormProvider>
  );
};
