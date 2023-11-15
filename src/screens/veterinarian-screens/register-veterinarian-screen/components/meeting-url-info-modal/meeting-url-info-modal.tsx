import { Link } from "@react-navigation/native";
import { forwardRef } from "react";
import { Linking, Text } from "react-native";

import {
  Container,
  LinkText,
  ModalDescription,
  ModalTitle,
} from "./meeting-url-info-modal-styles";

import { BottomModal } from "~/components/bottom-sheet-modal/bottom-sheet-modal";
import { IconButton } from "~/components/icon-button/icon-button";

type Props = object;

export const MeetingUrlInfoModal = forwardRef<any, Props>(
  function Modal(props, modalRef) {
    const onOpenWhatsAppLink = () => {
      Linking.openURL(
        "https://faq.whatsapp.com/456694046556486/?helpref=uf_share",
      );
    };

    return (
      <BottomModal
        BottomSheetModalProps={{
          snapPoints: ["50%", "55%"],
        }}
        ref={modalRef}
      >
        <Container>
          <ModalTitle>Como funciona a url da reunião?</ModalTitle>
          <ModalDescription>
            A url da reunião é um link que você pode compartilhar com seus
            clientes para que eles possam entrar na reunião. Recomendamos criar
            um link pelo WhatsApp por ser mais fácil, mas você pode usar
            qualquer outro meio de comunicação.
          </ModalDescription>
          <IconButton>
            <LinkText onPress={onOpenWhatsAppLink}>
              Aqui está um link que pode te ajudar a criar um link pelo WhatsApp
            </LinkText>
          </IconButton>
        </Container>
      </BottomModal>
    );
  },
);
