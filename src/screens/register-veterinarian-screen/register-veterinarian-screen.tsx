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
import { useUpdateVeterinarian } from "~/hooks/veterinarian/use-update-veterinarian";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerVeterinarianValidation } from "./validations/register-veterinarian-validation";
import { UpdateVeterinarianParams } from "~/domain/services";
import { HeaderLogo } from "~/components/header-logo/header-logo";
import { useCreateUserAccount } from "../sign-up-screen/hooks/use-create-user-account";
import { useUserStore } from "~/store/user-store";
import { useCompleteUserRegistration } from "../onboarding-screen/steps/second-step/hooks/use-complete-user-registration";
import { UserTypeEnum } from "~/enums/user-type.enum";

export function RegisterVeterinarianScreen() {
  const { user } = useUserStore();

  const methods = useForm<UpdateVeterinarianParams>({
    mode: "all",
    resolver: zodResolver(registerVeterinarianValidation),
    defaultValues: {
      appointmentPrice: 0,
      crmv: "123",
      daysAvailable: [1, 2],
      fullName: "Teste",
      whatsapp: "123",
    },
  });

  const { mutationFn: createUser } = useCreateUserAccount();
  const { mutationFn: completeUserRegistration } =
    useCompleteUserRegistration();

  const onSubmit = async (data: UpdateVeterinarianParams) => {
    await createUser(user).then(async (createdUser) => {
      await completeUserRegistration({
        userId: createdUser.user.uid,
        userType: UserTypeEnum.VETERINARIAN,
        email: createdUser.user.email,
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
