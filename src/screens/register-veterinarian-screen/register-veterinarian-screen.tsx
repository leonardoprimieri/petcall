import { HeaderLogo } from "@components/header-logo/header-logo";
import {
  ButtonContainer,
  Container,
} from "./register-veterinarian-screen-styles";
import { DefaultLayout } from "@layouts/default-layout/default-layout";
import { FormProvider, useForm } from "react-hook-form";
import { ControlledTextInput } from "@components/form/controlled-text-input/controlled-text-input";
import { WeekDaySelector } from "@components/week-day-selector/week-day-selector";
import { Button } from "@components/button/button";
import { ScrollView } from "react-native";
import { useUpdateVeterinarian } from "@hooks/veterinarian/use-update-veterinarian";
import { UpdateVeterinarianParams } from "@services/veterinarian/update-veterinarian";

export function RegisterVeterinarianScreen() {
  const methods = useForm();

  const { mutationFn } = useUpdateVeterinarian();

  const onSubmit = async (data: UpdateVeterinarianParams) => {
    await mutationFn(data);
  };

  return (
    <DefaultLayout>
      <ScrollView>
        <HeaderLogo text="Preencha seus dados" removeGoBack />
        <FormProvider {...methods}>
          <Container>
            <ControlledTextInput name="name" label="Nome" />
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
