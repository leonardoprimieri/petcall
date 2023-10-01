import {
  ButtonContainer,
  Container,
} from "./register-veterinarian-screen-styles";
import { DefaultLayout } from "~/layouts/default-layout/default-layout";
import { FormProvider, useForm } from "react-hook-form";
import { ControlledTextInput } from "~/components/form/controlled-text-input/controlled-text-input";
import { WeekDaySelector } from "~/components/week-day-selector/week-day-selector";
import { Button } from "~/components/button/button";
import { ScrollView } from "react-native";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  RegisterVeterinarianFormData,
  registerVeterinarianValidation,
} from "./validations/register-veterinarian-validation";
import { HeaderLogo } from "~/components/header-logo/header-logo";
import { useCreateUserAccount } from "../sign-up-screen/hooks/use-create-user-account";
import { useUserStore } from "~/store/user-store";
import { UserTypeEnum } from "~/enums/user-type.enum";
import { useCreateUserMutation } from "../onboarding-screen/steps/second-step/hooks/use-create-user-mutation";

export function RegisterVeterinarianScreen() {
  const { user } = useUserStore();

  const methods = useForm<RegisterVeterinarianFormData>({
    mode: "all",
    resolver: zodResolver(registerVeterinarianValidation),
    defaultValues: {
      appointmentPrice: "R$ 0,00",
      crmv: "123",
      daysAvailable: [1, 2],
      fullName: "Teste",
      whatsapp: "123",
    },
  });

  const { mutationFn: createUserAccount } = useCreateUserAccount();
  const { mutationFn: createUser } = useCreateUserMutation();

  const onSubmit = async (data: RegisterVeterinarianFormData) => {
    await createUserAccount(user).then(async (createdUser) => {
      if (!createdUser) return;

      await createUser<RegisterVeterinarianFormData>({
        userId: createdUser.user.uid,
        userType: UserTypeEnum.VETERINARIAN,
        email: createdUser.user.email as string,
        ...data,
      });
    });
  };

  return (
    <DefaultLayout>
      <ScrollView>
        <HeaderLogo text="Preencha seus dados" removeGoBack />
        <FormProvider {...methods}>
          <Container>
            <ControlledTextInput name="fullName" label="Nome" />
            <ControlledTextInput name="whatsapp" label="Whatsapp" />
            <ControlledTextInput name="crmv" label="CRMV" />
            <WeekDaySelector />
            <ButtonContainer>
              <Button
                isLoading={methods.formState.isSubmitting}
                onPress={methods.handleSubmit(onSubmit)}
                width="300px"
              >
                Confirmar
              </Button>
            </ButtonContainer>
          </Container>
        </FormProvider>
      </ScrollView>
    </DefaultLayout>
  );
}
