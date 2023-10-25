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
import { UploadImage } from "~/components/upload-image/upload-image";
import { useState } from "react";

export const RegisterPetForm = () => {
  const [imageUrl, setImageUrl] = useState("");

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
    });
  };

  if (!imageUrl) return <UploadImage onUpload={setImageUrl} />;

  return (
    <FormProvider {...methods}>
      <FormContainer>
        <ControlledTextInput name="name" label="Nome" />
        <ControlledTextInput name="weight" label="Peso" />
        <ControlledTextInput name="birthday" label="Aniversário" />

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
