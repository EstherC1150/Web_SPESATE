import { THeader } from "../_types/menu.types";

export const menuItems: THeader[] = [
  {
    title: "회사소개",
    subTitle: [
      { label: "회사 개요", href: "/company/about" },
      { label: "비전 및 목표", href: "/company/vision" },
      { label: "연혁", href: "/company/history" },
      { label: "조직도", href: "/company/organization" },
      { label: "찾아오시는 길", href: "/company/location" },
    ],
  },
  {
    title: "비즈니스",
    subTitle: [
      { label: "정기 관리 컨설팅", href: "/business/subscription" },
      { label: "정부 과제 컨설팅", href: "/business/government" },
      { label: "기타 지원 컨설팅", href: "/business/etc" },
    ],
  },
  {
    title: "소식",
    subTitle: [
      { label: "뉴스", href: "/news/article" },
      { label: "파트너십", href: "/partner" },
    ],
  },
  {
    title: "인재채용",
    subTitle: [{ label: "인재상", href: "/talent/recruit" }],
  },
];
