import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { useCreatePetMutation } from "./hooks/use-create-pet-mutation";
import { FormContainer } from "./register-pet-form-styles";
import {
  CreatePetFormData,
  CreatePetValidation,
} from "./validation/create-pet-validation";

import { Button } from "~/components/button/button";
import { ControlledTextInput } from "~/components/form";
import { UploadImage } from "~/components/upload-image/upload-image";
import { useNavigationRoutes } from "~/hooks";

export const RegisterPetForm = () => {
  const { handleGoToMyPets } = useNavigationRoutes();
  const [imageUrl, setImageUrl] = useState("");

  const methods = useForm<CreatePetFormData>({
    resolver: zodResolver(CreatePetValidation),
    mode: "onChange",
  });

  const { mutationFn } = useCreatePetMutation();

  const onSubmit = async (values: CreatePetFormData) => {
    await mutationFn({
      birthday: values.birthday,
      imageUrl,
      name: values.name,
      weight: values.weight,
      type: "dog",
    }).then(() =>
      handleGoToMyPets({
        refetch: true,
      })
    );
  };

  if (!imageUrl) return <UploadImage onUpload={setImageUrl} />;

  return (
    <FormProvider {...methods}>
      <FormContainer>
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
          Confirmar
        </Button>
      </FormContainer>
    </FormProvider>
  );
};
