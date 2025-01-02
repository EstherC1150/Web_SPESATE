import { TColorPalette } from "@/app/_types/company/about/about.types";
import React from "react";
import styled from "styled-components";

type TColor = {
  $color: string;
};

const ColorCard = styled.div`
  /* flex: 1; */
  padding: 26px 24px;
  margin-top: 0px;
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  border: 1px solid #cecece;
  width: 220px;
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
};

const ColorPrevBox = ({ colorPalette }: Props) => {
  return (
    <ColorCard>
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
