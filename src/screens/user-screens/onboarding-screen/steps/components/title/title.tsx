import * as S from "./title-styles";

type Props = {
  children: React.ReactNode;
};

export function Title({ children }: Props) {
  return <S.Title>{children}</S.Title>;
}
