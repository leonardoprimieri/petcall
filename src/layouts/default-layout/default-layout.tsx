import { PropsWithChildren } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useTheme } from "styled-components";
import heartsImg from "~/assets/hearts.png";
import * as S from "./default-layout-styles";

export const DefaultLayout = ({ children }: PropsWithChildren) => {
  const { COLORS } = useTheme();

  return (
    <S.Container>
      <LinearGradient
        colors={[COLORS.SECONDARY, COLORS.SECONDARY, COLORS.SECONDARY_DARK]}
        style={{ width: "100%", flex: 1 }}
        start={{ x: 1, y: 1 }}
        end={{ x: 0, y: 0 }}
      >
        <S.HeartsImage source={heartsImg} />
        {children}
      </LinearGradient>
    </S.Container>
  );
};
