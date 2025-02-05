"use client";

import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface FooterProps {
  isSpecialPage?: boolean;
}

const FooterSection = styled.section<{
  $isSpecialPage?: boolean;
  $isHome?: boolean;
}>`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ $isSpecialPage }) => ($isSpecialPage ? "black" : "white")};
  background-color: ${({ $isHome }) => ($isHome ? "#282834" : "inherit")};
`;

const ContentWrapper = styled.div`
  width: 1200px;
`;

const FooterTop = styled.div`
  margin-top: 70px;
  margin-bottom: 340px;
`;

const FTitle = styled.h2`
  font-size: 42px;
  font-weight: 700;
`;

const FText = styled.p`
  font-size: 30px;
  padding-top: 20px;
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
`;

const FLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const CopyRight = styled.p<{ $isSpecialPage?: boolean }>`
  margin-top: 30px;
  color: ${({ $isSpecialPage }) => ($isSpecialPage ? "#272727" : "#afafaf")};
`;

const SnsUrl = styled.div<{ $isSpecialPage?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;

  img {
    filter: ${({ $isSpecialPage }) => ($isSpecialPage ? "none" : "invert(1)")};
  }
`;

const Footer = ({}: FooterProps) => {
  const router = usePathname();
  const isHome = router === "/";

  return (
    <FooterSection $isSpecialPage={!isHome} $isHome={isHome}>
      <ContentWrapper>
        <FooterTop>
          <FTitle>A COMPANY THAT MEETS THE NEEDS OF ITS CUSTOMERS</FTitle>
          <FText>
            단순한 솔루션 제공을 넘어, 고객의 비즈니스를 변화시킵니다.
          </FText>
        </FooterTop>
        <FooterBottom>
          <FLeft>
            <p>사업자번호: 245-06-03067</p>
            <p>울산 광역시 남구 번영로 124번길 21 3층 301-7호(달동)</p>
            <p>T. 010-5727-3864&nbsp;&nbsp;&nbsp;E. joon1109@spesate.com</p>
            <CopyRight $isSpecialPage={!isHome}>
              Copyright ©Kim&Choi Inc Co., Ltd. All rights reserved.
            </CopyRight>
          </FLeft>
          <div>
            <SnsUrl $isSpecialPage={!isHome}>
              <Image
                src="/images/ic-instagram.png"
                alt="instagramIcon"
                width={26}
                height={26}
              />
              <Image
                src="/images/ic-facebook.png"
                alt="facebookIcon"
                width={14}
                height={24}
              />
              <Image
                src="/images/ic-youtube.png"
                alt="youtubeIcon"
                width={28}
                height={22}
              />
              <Link href="https://blog.naver.com/spesate" target="_blank">
                <Image
                  src="/images/ic-blog.png"
                  alt="blogIcon"
                  width={30}
                  height={30}
                />
              </Link>
            </SnsUrl>
          </div>
        </FooterBottom>
      </ContentWrapper>
    </FooterSection>
  );
};

export default Footer;
