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
    content: [
      {
        subTitle: "데이터 기반의 문제 해결",
        subContent:
          "데이터 분석을 통해 문제의 근본 원인을 정확하게 파악하고, 최적의 해결책을 제시",
      },
      {
        subTitle: "복잡한 문제에 대한 종합적인 솔루션 제공",
        subContent:
          "다양한 경영 환경 변수를 고려하여 문제의 복합성을 해결하고, 지속 가능한 성장을 위한 맞춤형 솔루션을 제공",
      },
    ],
    imgUrl: "/images/company/ic-brainstorm-skill.png",
    alt: "",
  },
  {
    title: "객관성",
    content: [
      {
        subTitle: "객관적인 데이터 분석을 통한 의사 결정 지원",
        subContent:
          "주관적인 판단을 배제하고, 객관적인 데이터 분석을 기반으로 의사 결정을 지원",
      },
      {
        subTitle: "고객의 사안에 대한 객관적인 솔루션 제공",
        subContent:
          "다양한 경영 환경 변수를 고려하여 문제의 복합성을 해결하고, 지속 가능한 성장을 위한 맞춤형 솔루션을 제공",
      },
    ],
    imgUrl: "/images/company/ic-morale.png",
    alt: "",
  },
  {
    title: "신뢰성",
    content: [
      {
        subTitle: "투명하고 공정한 컨설팅 과정",
        subContent:
          "모든 컨설팅 과정을 투명하게 운영하고, 고객에게 명확한 정보를 제공하여 신뢰를 구축",
      },
      {
        subTitle: "장기적인 파트너십 구축",
        subContent:
          "단발적인 프로젝트가 아닌, 고객과 함께 성장하는 장기적인 파트너십을 구축",
      },
    ],
    imgUrl: "/images/company/ic-handshake.png",
    alt: "",
  },
  {
    title: "효율성",
    content: [
      {
        subTitle: "빠르고 정확한 문제 해결",
        subContent:
          "최신 컨설팅 기법과 도구를 활용하여 문제를 신속하게 파악하고, 효율적인 해결책을 제시",
      },
      {
        subTitle: "최소한의 자원으로 최대의 효과 창출",
        subContent: "제한된 자원 내에서 최대한의 성과를 달성할 수 있도록 지원",
      },
    ],
    imgUrl: "/images/company/ic-performance-macbook.png",
    alt: "",
  },
  {
    title: "미래지향성",
    content: [
      {
        subTitle: "미래 트렌드를 선도하는 혁신적인 솔루션 제공",
        subContent:
          "급변하는 시장 환경 변화에 선제적으로 대응하고, 미래 성장을 위한 혁신적인 솔루션을 제사",
      },
      {
        subTitle: "지속 가능한 성장을 위한 전략 수립",
        subContent:
          "단기적인 성과뿐만 아니라 장기적인 관점에서 지속 가능한 성장을 위한 전략을 수립하고 실행을 지원",
      },
    ],
    imgUrl: "/images/company/ic-rocket.png",
    alt: "",
  },
  {
    title: "고객중심",
    content: [
      {
        subTitle: "고객의 성공을 최우선으로 생각",
        subContent:
          "고객의 목표 달성을 위해 최선을 다하고, 고객 만족을 최우선으로 생각",
      },
      {
        subTitle: "맞춤형 컨설팅을 통해 고객의 가치를 극대화",
        subContent:
          "고객의 특성과 비즈니스 환경을 고려하여 맞춤형 컨설팅을 제공하고, 고객의 가치를 극대화",
      },
    ],
    imgUrl: "/images/company/ic-purposeful-man.png",
    alt: "",
  },
];
