import * as S from "./vet-card-styles";

export const VetCard = () => {
  return (
    <S.Container>
      <S.FirstContainer>
        <S.VetAvatar />
        <S.VetInfo>
          <S.VetName>Jane Doe</S.VetName>
          <S.VetPricePerHour>R$ 120,00</S.VetPricePerHour>
          <S.Text>por consulta</S.Text>
        </S.VetInfo>
      </S.FirstContainer>
      <S.VetSchedule>
        <S.Text>Atende</S.Text>
        <S.VetAvailableDays>Seg, Qua, Sex</S.VetAvailableDays>
      </S.VetSchedule>
    </S.Container>
  );
};
