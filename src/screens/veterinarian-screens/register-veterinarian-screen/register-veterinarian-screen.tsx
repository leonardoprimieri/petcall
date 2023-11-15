import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { ScrollView, Text } from "react-native";

import { MeetingUrlInfoModal } from "./components/meeting-url-info-modal/meeting-url-info-modal";
import {
  ButtonContainer,
  Container,
} from "./register-veterinarian-screen-styles";
import {
  RegisterVeterinarianFormData,
  registerVeterinarianValidation,
} from "./validations/register-veterinarian-validation";

import { BottomModal } from "~/components/bottom-sheet-modal/bottom-sheet-modal";
import { Button } from "~/components/button/button";
import { AppointmentPriceInput } from "~/components/form";
import { ControlledTextInput } from "~/components/form/controlled-text-input/controlled-text-input";
import { HeaderLogo } from "~/components/header-logo/header-logo";
import { UploadImage } from "~/components/upload-image/upload-image";
import { WeekDaySelector } from "~/components/week-day-selector/week-day-selector";
import { VeterinarianEntity } from "~/domain/entities/veterinarian-entity";
import { UserTypeEnum } from "~/enums/user-type.enum";
import { useCreateUserAccount, useCreateUserMutation } from "~/hooks/api";
import { DefaultLayout } from "~/layouts/default-layout/default-layout";
import { useUserStore } from "~/store/user-store";

export function RegisterVeterinarianScreen() {
  const [imageUrl, setImageUrl] = useState("");
  const modalRef = useRef<BottomSheetModal>(null);

  const { user } = useUserStore();

  const methods = useForm<RegisterVeterinarianFormData>({
    mode: "all",
    resolver: zodResolver(registerVeterinarianValidation),
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

  return (
    <DefaultLayout>
      <ScrollView>
        <HeaderLogo text="Preencha seus dados" removeGoBack />

        {!imageUrl && <UploadImage onUpload={setImageUrl} />}

        {imageUrl && (
          <FormProvider {...methods}>
            <Container>
              <ControlledTextInput name="fullName" label="Nome" />
              <ControlledTextInput
                name="birthDate"
                label="Data de Nascimento"
                mask="birthDate"
                maxLength={10}
                keyboardType="numeric"
              />
              <ControlledTextInput name="crmv" label="CRMV" />
              <AppointmentPriceInput />
              <ControlledTextInput
                name="meetingUrl"
                label="Link para reunião"
                TooltipProps={{
                  onPress: () => {
                    modalRef.current?.present();
                  },
                }}
              />
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
        )}
        <MeetingUrlInfoModal ref={modalRef} />
      </ScrollView>
    </DefaultLayout>
  );
}
