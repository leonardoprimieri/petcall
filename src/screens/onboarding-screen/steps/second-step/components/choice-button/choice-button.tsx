import { Image, TouchableOpacityProps } from "react-native";
import { Container, Label } from "./choice-button-styles";

import petTutorImage from "@assets/veterinary-choice.png";
import veterinaryImage from "@assets/pet-tutor.png";

type Props = {
  type: "veterinary" | "pet-tutor";
  isSelected?: boolean;
} & TouchableOpacityProps;

export const ChoiceButton = ({ type, isSelected, ...props }: Props) => {
  const variants = {
    veterinary: {
      label: "Sou veterinário",
      image: petTutorImage,
    },
    "pet-tutor": {
      label: "Sou tutor de pet",
      image: veterinaryImage,
    },
  };

  const content = variants[type];

  return (
    <Container isSelected={isSelected} {...props}>
      <Image
        style={{
          width: 100,
          height: 100,
        }}
        source={content?.image}
      />
      <Label>{content?.label}</Label>
    </Container>
  );
};
