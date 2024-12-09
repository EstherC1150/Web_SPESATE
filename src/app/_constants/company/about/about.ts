import { TColorPalette, TValue } from "@/app/_types/company/about/about.types";

export const mainColors: TColorPalette[] = [
  {
    colorName: "BLUE",
    color: "#28AAE2",
    backgroundColor: "#eEBEBEB",
    rgb: { r: 40, g: 170, b: 180 },
    cmyk: { c: 82, m: 25, y: 0, k: 11 },
    pantone: "298C",
  },
  {
    colorName: "GREY",
    color: "#D1D3D5",
    backgroundColor: "#1F86B3",
    rgb: { r: 209, g: 211, b: 213 },
    cmyk: { c: 2, m: 1, y: 0, k: 16 },
    pantone: "427C",
  },
  {
    colorName: "BACLK",
    color: "#221E1f",
    backgroundColor: "#FFFFFF",
    rgb: { r: 34, g: 30, b: 31 },
    cmyk: { c: 0, m: 12, y: 9, k: 87 },
    pantone: "419C",
  },
];

export const values: TValue[] = [
  {
    title: "문제 해결 능력",
    content: "복잡한 문제를 분석하고 최적의 해결책을 제시한다.",
    imgUrl: "/images/company/ic-brainstorm-skill.png",
    alt: "",
  },
  {
    title: "객관성",
    content: "객관적인 분석을 통해 의사결정을 지원한다.",
    imgUrl: "/images/company/ic-morale.png",
    alt: "",
  },
  {
    title: "신뢰성",
    content: "투명한 커뮤니케이션을 통한 신뢰를 구축한다.",
    imgUrl: "/images/company/ic-handshake.png",
    alt: "",
  },
  {
    title: "효율성",
    content: "빠르고 정확하게 문제를 해결한다.",
    imgUrl: "/images/company/ic-performance-macbook.png",
    alt: "",
  },
  {
    title: "미래지향성",
    content: "변화하는 환경에 적응하고 새로운 가치를 창출한다.",
    imgUrl: "/images/company/ic-rocket.png",
    alt: "",
  },
  {
    title: "고객중심",
    content: "고객과 함께 성장하는 파트너십을 구축한다.",
    imgUrl: "/images/company/ic-purposeful-man.png",
    alt: "",
  },
];
