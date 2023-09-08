import * as S from "./header-logo-styles";
import { AppLogo } from "../../components/app-logo/app-logo";
import { IconButton } from "../../components/icon-button/icon-button";
import { ArrowLeftIcon } from "@components/icons";
import { useTheme } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

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
    <S.Container>
      {!removeGoBack && (
        <IconButton onPress={handleGoBack}>
          <ArrowLeftIcon color={COLORS.PRIMARY} weight="bold" />
        </IconButton>
      )}
      <S.LogoContainer>
        <AppLogo removeText />
        <S.HeroText>{text}</S.HeroText>
      </S.LogoContainer>
    </S.Container>
  );
};
