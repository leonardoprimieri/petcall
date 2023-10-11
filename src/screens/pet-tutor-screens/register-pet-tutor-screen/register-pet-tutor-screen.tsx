import { ButtonContainer, Container } from "./register-pet-tutor-screen-styles";
import { DefaultLayout } from "~/layouts/default-layout/default-layout";
import { FormProvider, useForm } from "react-hook-form";
import { ControlledTextInput } from "~/components/form/controlled-text-input/controlled-text-input";
import { Button } from "~/components/button/button";
import { ScrollView } from "react-native";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  RegisterPetTutorFormData,
  registerPetTutorValidation,
} from "./validations/register-pet-tutor-validation";
import { HeaderLogo } from "~/components/header-logo/header-logo";
import { useUserStore } from "~/store/user-store";
import { UserTypeEnum } from "~/enums/user-type.enum";
import { useCreateUserAccount, useCreateUserMutation } from "~/hooks/api";

export function RegisterPetTutorScreen() {
  const { user } = useUserStore();

  const methods = useForm<RegisterPetTutorFormData>({
    mode: "all",
    resolver: zodResolver(registerPetTutorValidation),
  });

  const { mutationFn: createUserAccount } = useCreateUserAccount();
  const { mutationFn: createUser } = useCreateUserMutation();

  const onSubmit = async (data: RegisterPetTutorFormData) => {
    await createUserAccount(user).then(async (createdUser) => {
      if (!createdUser) return;

      await createUser<RegisterPetTutorFormData>({
        userId: createdUser.user.uid,
        userType: UserTypeEnum.PET_TUTOR,
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
            <ControlledTextInput
              name="whatsapp"
              label="Whatsapp"
              mask="phone"
            />
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
