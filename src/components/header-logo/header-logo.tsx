import * as S from "./header-logo-styles";
import { AppLogo } from "../../components/app-logo/app-logo";
import { IconButton } from "../../components/icon-button/icon-button";
import { ArrowLeftIcon } from "@components/icons";
import { useTheme } from "styled-components/native";

type Props = {
  text?: string;
};

export const HeaderLogo = ({ text }: Props) => {
  const { COLORS } = useTheme();

  return (
    <S.Container>
      <IconButton>
        <ArrowLeftIcon color={COLORS.PRIMARY} weight="bold" />
      </IconButton>
      <S.LogoContainer>
        <AppLogo removeText />
        <S.HeroText>{text}</S.HeroText>
      </S.LogoContainer>
    </S.Container>
  );
};
