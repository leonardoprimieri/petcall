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
  const [imageUrl, setImageUrl] = useState("");

  const { handleGoToPetTutorHomeScreen } = useNavigationRoutes();

  const methods = useForm<CreatePetFormData>({
    resolver: zodResolver(CreatePetValidation),
  });

  const { mutationFn } = useCreatePetMutation();

  const onSubmit = async (values: CreatePetFormData) => {
    await mutationFn({
      birthday: values.birthday,
      imageUrl,
      name: values.name,
      weight: values.weight,
      type: "dog",
    }).then(handleGoToPetTutorHomeScreen);
  };

  if (!imageUrl) return <UploadImage onUpload={setImageUrl} />;

  return (
    <FormProvider {...methods}>
      <FormContainer>
        <ControlledTextInput name="name" label="Nome" />
        <ControlledTextInput name="weight" label="Peso" />
        <ControlledTextInput
          name="birthday"
          label="Aniversário"
          mask="birthDate"
          maxLength={10}
        />

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
