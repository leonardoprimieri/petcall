import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

import { Container } from "./pet-tutor-profile-screen-styles";
import {
  RegisterPetTutorFormData,
  registerPetTutorValidation,
} from "../register-pet-tutor-screen/validations/register-pet-tutor-validation";

import { Button } from "~/components/button/button";
import { ControlledTextInput } from "~/components/form";
import { HeaderLogo } from "~/components/header-logo/header-logo";
import { updateUserProfileService } from "~/domain/services";
import { useAuthentication, useNavigationRoutes } from "~/hooks";
import { DefaultLayout } from "~/layouts/default-layout/default-layout";

export function PetTutorProfileScreen() {
  const { userDetails, setUserDetails } = useAuthentication();
  const { handleGoToPetTutorHomeScreen } = useNavigationRoutes();

  const methods = useForm({
    values: {
      fullName: userDetails?.fullName,
      birthDate: userDetails?.birthDate,
    },
    resolver: zodResolver(registerPetTutorValidation),
  });

  const onSubmit = async (values: RegisterPetTutorFormData) => {
    setUserDetails({
      fullName: values?.fullName,
    });

    await updateUserProfileService({
      data: values,
      userId: userDetails?.id,
    }).then(() => {
      handleGoToPetTutorHomeScreen();
    });
  };

  return (
    <DefaultLayout>
      <Container>
        <HeaderLogo text="Meu Perfil" />
        <FormProvider {...methods}>
          <ControlledTextInput name="fullName" label="Nome" />
          <ControlledTextInput
            name="birthDate"
            label="Data de Nascimento"
            mask="birthDate"
            maxLength={10}
            keyboardType="numeric"
          />
          <Button
            isLoading={methods.formState.isSubmitting}
            disabled={!methods.formState.isValid}
            onPress={methods.handleSubmit(onSubmit)}
            width="300px"
          >
            Salvar
          </Button>
        </FormProvider>
      </Container>
    </DefaultLayout>
  );
}
