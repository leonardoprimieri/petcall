import { Container, HeroText, LogoContainer } from "./header-logo-styles";
import { useTheme } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { IconButton } from "@components/icon-button/icon-button";
import { ArrowLeftIcon } from "@components/icons";
import { AppLogo } from "@components/app-logo/app-logo";

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
