import { TColorPalette } from "@/app/_types/company/about/about.types";
import React from "react";
import styled from "styled-components";

type TColor = {
  $color: string;
};

type TBackgroundColor = {
  $backgroundColor: string;
};

const ColorCard = styled.div<TBackgroundColor>`
  flex: 1;
  padding: 30px 24px 50px 24px;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
  background-color: ${(props) => props.$backgroundColor};
`;

const ColorPrev = styled.div<TColor>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.$color};
`;

const ColorName = styled.p<TColor>`
  font-size: 18px;
  font-weight: 700;
  margin-top: 16px;
  margin-bottom: 24px;
  color: ${(props) => props.$color};
`;

const ColorDescription = styled.p`
  font-size: 14px;
  color: #161616;
  font-weight: 400;
  margin-top: 8px;
`;

type Props = {
  colorPalette: TColorPalette;
  style?: React.CSSProperties;
};

const ColorPrevBox = ({ colorPalette, style }: Props) => {
  return (
    <ColorCard $backgroundColor={colorPalette.backgroundColor} style={style}>
      <ColorPrev $color={colorPalette.color} />
      <ColorName $color={colorPalette.color}>
        {colorPalette.colorName}
      </ColorName>
      <ColorDescription>{`R ${colorPalette.rgb.r}/ G ${colorPalette.rgb.g}/ B ${colorPalette.rgb.b}`}</ColorDescription>
      <ColorDescription>{`C ${colorPalette.cmyk.c}/ M ${colorPalette.cmyk.m}/ Y ${colorPalette.cmyk.y}/ K ${colorPalette.cmyk.k}`}</ColorDescription>
      <ColorDescription>{colorPalette.color}</ColorDescription>
      <ColorDescription>{`Pantone ${colorPalette.pantone}`}</ColorDescription>
    </ColorCard>
  );
};

export default ColorPrevBox;
