import * as S from "./second-step-styles";
import { Button } from "@components/button/button";
import { Title } from "../components/title/title";

export function SecondStep() {
  return (
    <S.Container>
      <Title>Qual seu perfil?</Title>

      <Button>Avançar</Button>
    </S.Container>
  );
}
