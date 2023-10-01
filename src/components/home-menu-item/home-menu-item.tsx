import React, { ComponentProps } from "react";
import { Label, Container } from "./home-menu-item-styles";
import { Image } from "react-native";

type Props = {
  label: string;
  ImageProps: ComponentProps<typeof Image>;
} & ComponentProps<typeof Container>;

export function HomeMenuItem({ label, ImageProps, ...props }: Props) {
  return (
    <Container {...props}>
      <Image
        {...ImageProps}
        style={{
          width: 100,
          height: 100,
        }}
      />
      <Label>{label}</Label>
    </Container>
  );
}
