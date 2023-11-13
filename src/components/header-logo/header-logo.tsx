import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components/native";

import { Container, HeroText } from "./header-logo-styles";
import { IconButton } from "../icon-button/icon-button";
import { ArrowLeftIcon } from "../icons";

type Props = {
  text?: string;
  removeGoBack?: boolean;
};

export const HeaderLogo = ({ text, removeGoBack }: Props) => {
  const navigation = useNavigation();

  const { COLORS } = useTheme();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <Container>
      {!removeGoBack && (
        <IconButton onPress={handleGoBack}>
          <ArrowLeftIcon color={COLORS.PRIMARY} weight="bold" />
        </IconButton>
      )}
      <HeroText>{text}</HeroText>
    </Container>
  );
};
