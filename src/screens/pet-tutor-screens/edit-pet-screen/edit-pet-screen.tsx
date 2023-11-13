import { FormProvider, useForm } from "react-hook-form";

import { Container } from "./edit-pet-screen-styles";

import { Button } from "~/components/button/button";
import { ControlledTextInput } from "~/components/form";
import { HeaderLogo } from "~/components/header-logo/header-logo";
import { KeyboardContainer } from "~/components/keyboard-container/keyboard-container";
import { PetEntity } from "~/domain/entities/pet-entity";
import { updatePetProfile } from "~/domain/services/pet";
import { useNavigationRoutes } from "~/hooks";
import { DefaultLayout } from "~/layouts/default-layout/default-layout";

type RouteParams = {
  route: {
    params: {
      pet: PetEntity;
    };
  };
};

export const EditPetScreen = ({ route }: RouteParams) => {
  const { pet } = route.params;
  const { handleGoToPetTutorHomeScreen } = useNavigationRoutes();

  const methods = useForm({
    values: pet,
  });

  const onSubmit = async (data: PetEntity) => {
    await updatePetProfile({
      data,
      petId: pet.id as string,
    }).then(handleGoToPetTutorHomeScreen);
  };

  return (
    <DefaultLayout>
      <HeaderLogo text="Editar Pet" />
      <KeyboardContainer>
        <FormProvider {...methods}>
          <Container>
            <ControlledTextInput name="name" label="Nome" />
            <ControlledTextInput
              name="weight"
              label="Peso (em kg)"
              placeholder="Ex: 5.5"
              placeholderTextColor="#999"
            />
            <ControlledTextInput
              name="birthday"
              label="Aniversário"
              mask="birthDate"
              maxLength={10}
              placeholder="Ex: 01/01/2021"
              placeholderTextColor="#999"
            />

            <Button
              onPress={methods.handleSubmit(onSubmit)}
              isLoading={methods.formState.isSubmitting}
              width="300px"
              style={{ marginTop: 20 }}
              disabled={!methods.formState.isValid}
            >
              Salvar
            </Button>
          </Container>
        </FormProvider>
      </KeyboardContainer>
    </DefaultLayout>
  );
};
