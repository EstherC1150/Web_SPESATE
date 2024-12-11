export type TColorPalette = {
  backgroundColor: string;
  color: string;
  rgb: TRGB;
  cmyk: TCMYK;
  colorName: string;
  pantone: string;
};

type TRGB = {
  r: number;
  g: number;
  b: number;
};

type TCMYK = {
  c: number;
  m: number;
  y: number;
  k: number;
};

export type TValue = {
  title: string;
  content: string;
  imgUrl: string;
  alt: string;
};