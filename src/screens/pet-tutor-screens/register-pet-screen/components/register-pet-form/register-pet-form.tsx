import { FormProvider, useForm } from "react-hook-form";
import { FormContainer } from "./register-pet-form-styles";
import { ControlledTextInput } from "~/components/form";
import { Button } from "~/components/button/button";
import {
  CreatePetFormData,
  CreatePetValidation,
} from "./validation/create-pet-validation";
import { useCreatePetMutation } from "./hooks/use-create-pet-mutation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigationRoutes } from "~/hooks";
import { PetEntity } from "~/domain/entities/pet-entity";
import { View } from "react-native";

export const RegisterPetForm = () => {
  const methods = useForm<CreatePetFormData>({
    resolver: zodResolver(CreatePetValidation),
  });

  const { handleGoToMyPets } = useNavigationRoutes();

  const { mutationFn } = useCreatePetMutation();

  const onSubmit = async (values: CreatePetFormData) => {
    await mutationFn(values as PetEntity).then(handleGoToMyPets);
  };

  return (
    <FormProvider {...methods}>
      <FormContainer>
        <ControlledTextInput name="name" label="Nome" />
        <ControlledTextInput name="weight" label="Peso" />
        <ControlledTextInput name="birthday" label="Aniversário" />
        {/* <ControlledTextInput name="type" label="Tipo" /> */}

        <Button
          onPress={methods.handleSubmit(onSubmit)}
          isLoading={methods.formState.isSubmitting}
          width="300px"
        >
          Confirmar
        </Button>
      </FormContainer>
    </FormProvider>
  );
};
