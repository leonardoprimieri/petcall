import { LinearGradient } from "expo-linear-gradient";
import { PropsWithChildren } from "react";
import { useTheme } from "styled-components";

import * as S from "./default-layout-styles";

import heartsImg from "~/assets/hearts.png";

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
