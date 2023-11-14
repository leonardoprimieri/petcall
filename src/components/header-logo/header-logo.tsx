import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components/native";

import { Container, HeroText } from "./header-logo-styles";
import { IconButton } from "../icon-button/icon-button";
import { ArrowLeftIcon } from "../icons";

type Props = {
  text?: string;
  removeGoBack?: boolean;
  smallTitle?: boolean;
  onGoBack?: () => void;
};

export const HeaderLogo = ({
  text,
  removeGoBack,
  smallTitle,
  onGoBack,
}: Props) => {
  const navigation = useNavigation();

  const { COLORS } = useTheme();

  const handleGoBack = () => {
    if (onGoBack) return onGoBack();

    navigation.goBack();
  };

  return (
    <Container>
      {!removeGoBack && (
        <IconButton onPress={handleGoBack}>
          <ArrowLeftIcon color={COLORS.PRIMARY} weight="bold" />
        </IconButton>
      )}
      <HeroText smallTitle={smallTitle}>{text}</HeroText>
    </Container>
  );
};
