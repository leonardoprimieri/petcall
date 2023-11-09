import {
  AppointmentPriceContainer,
  ButtonContainer,
  Container,
  DiscountLabel,
  WeekDaySelectorContainer,
} from "./register-veterinarian-screen-styles";
import { DefaultLayout } from "~/layouts/default-layout/default-layout";
import { FormProvider, useForm } from "react-hook-form";
import { ControlledTextInput } from "~/components/form/controlled-text-input/controlled-text-input";
import { WeekDaySelector } from "~/components/week-day-selector/week-day-selector";
import { Button } from "~/components/button/button";
import { ScrollView, View } from "react-native";
import { zodResolver } from "@hookform/resolvers/zod";
import { Text } from "react-native";
import {
  RegisterVeterinarianFormData,
  registerVeterinarianValidation,
} from "./validations/register-veterinarian-validation";
import { HeaderLogo } from "~/components/header-logo/header-logo";
import { useUserStore } from "~/store/user-store";
import { UserTypeEnum } from "~/enums/user-type.enum";
import { useCreateUserAccount, useCreateUserMutation } from "~/hooks/api";
import { useState } from "react";
import { UploadImage } from "~/components/upload-image/upload-image";
import { VeterinarianEntity } from "~/domain/entities/veterinarian-entity";
import { clearCurrencyInput } from "~/helpers/clear-currency-input";
import { formatCurrency } from "~/helpers/format-currency";

export function RegisterVeterinarianScreen() {
  const [imageUrl, setImageUrl] = useState("");

  const { user } = useUserStore();

  const methods = useForm<RegisterVeterinarianFormData>({
    mode: "all",
    resolver: zodResolver(registerVeterinarianValidation),
    defaultValues: {
      appointmentPrice: 0,
    },
  });

  const { mutationFn: createUserAccount } = useCreateUserAccount();
  const { mutationFn: createUser } = useCreateUserMutation();

  const onSubmit = async (data: RegisterVeterinarianFormData) => {
    await createUserAccount(user).then(async (createdUser) => {
      if (!createdUser) return;

      await createUser<VeterinarianEntity>({
        userId: createdUser.user.uid,
        userType: UserTypeEnum.VETERINARIAN,
        email: createdUser.user.email as string,
        imageUrl,
        ...data,
      });
    });
  };

  const appointmentPriceWithDiscount =
    clearCurrencyInput(String(methods.watch("appointmentPrice"))) -
    (clearCurrencyInput(String(methods.watch("appointmentPrice"))) * 10) / 100;

  const receivedAmountLabel = () => {
    if (clearCurrencyInput(String(methods.watch("appointmentPrice"))) === 0) {
      return "Você optou por voluntariar seu tempo";
    }

    return `Você recebe: ${formatCurrency(appointmentPriceWithDiscount)}`;
  };

  return (
    <DefaultLayout>
      <ScrollView>
        <HeaderLogo text="Preencha seus dados" removeGoBack />

        {!imageUrl && <UploadImage onUpload={setImageUrl} />}

        {imageUrl && (
          <FormProvider {...methods}>
            <Container>
              <ControlledTextInput name="fullName" label="Nome" />

              <ControlledTextInput name="crmv" label="CRMV" />
              <AppointmentPriceContainer>
                <ControlledTextInput
                  name="appointmentPrice"
                  label="Preço por consulta online"
                  keyboardType="numeric"
                  mask="currency"
                />
                <DiscountLabel>{receivedAmountLabel()}</DiscountLabel>
              </AppointmentPriceContainer>
              <ControlledTextInput
                name="meetingUrl"
                label="Link para reunião"
              />
              <WeekDaySelectorContainer>
                <WeekDaySelector />
              </WeekDaySelectorContainer>
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
        )}
      </ScrollView>
    </DefaultLayout>
  );
}
