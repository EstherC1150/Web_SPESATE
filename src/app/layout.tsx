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
  title: "SPESATE",
  description: "컨설팅 전문 기업 SPESATE입니다.",
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
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=343acd45a03376f09966f0ec83342f0e&autoload=false"
          strategy="beforeInteractive"
        />
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
