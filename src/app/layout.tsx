import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google"; // Google Fonts에서 가져오기
import StyledComponentsRegistry from "./_lib/registry";
import "./styles.css";
import Script from "next/script";

// Noto Sans KR 폰트 설정
const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"], // 사용할 서브셋 지정 (latin 포함)
  weight: ["100", "300", "400", "500", "700", "900"], // 사용할 글꼴 두께
  variable: "--font-noto-sans-kr", // CSS 변수 이름
});

export const metadata: Metadata = {
  title: "스페세이트(SPESATE)",
  description: "경상도권 중소·중견기업 전문 컨설팅 기업 SPESATE입니다.",
  keywords: ["중견기업 전문 컨설팅", "스페세이트", "경상도권 컨설팅"],
  openGraph: {
    title: "스페세이트(SPESATE)",
    description: "경상도권 중소·중견기업 전문 컨설팅 기업 SPESATE입니다.",
    url: "https://spesate.com",
    type: "website",
    images: [
      {
        url: "/images/logo-black-kakao.png",
        width: 800,
        height: 400,
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  robots: {
    index: true, // 검색엔진이 페이지를 색인하도록 허용
    follow: true, // 검색엔진이 페이지의 링크를 따라가도록 허용
    nocache: true, // 검색엔진이 페이지를 캐시하지 않도록 설정
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false, // 이미지 색인 허용
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={notoSansKR.variable}>
      <body className={notoSansKR.className} style={{ minWidth: "1200px" }}>
        <Script
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.KAKAO_MAP_API_KEY}&autoload=false`}
          strategy="beforeInteractive"
        />
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
