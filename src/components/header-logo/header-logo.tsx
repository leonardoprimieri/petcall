import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components/native";

import { Container, HeroText, LogoContainer } from "./header-logo-styles";
import { AppLogo } from "../app-logo/app-logo";
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
      <LogoContainer>
        <AppLogo removeText />
        <HeroText>{text}</HeroText>
      </LogoContainer>
    </Container>
  );
};
