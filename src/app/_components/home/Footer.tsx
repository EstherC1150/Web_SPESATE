"use client";

import React from "react";
import styled from "styled-components";
import Image from "next/image";

const FooterSection = styled.section`
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
const FRight = styled.div``;
const Info = styled.p``;
const Address = styled.p``;
const BusinessNo = styled.p``;
const CopyRight = styled.p`
  margin-top: 30px;
  color: #272727;
`;
const SnsUrl = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
`;
const Footer = () => {
  return (
    <>
      <FooterSection>
        <FooterTop>
          <FTitle>A COMPANY THAT MEETS THE NEEDS OF ITS CUSTOMERS</FTitle>
          <FText>
            단순한 솔루션 제공을 넘어, 고객의 비즈니스를 변화시킵니다.
          </FText>
        </FooterTop>
        <FooterBottom>
          <FLeft>
            <BusinessNo>사업자번호: 245-06-03067</BusinessNo>
            <Address>
              울산 광역시 남구 번영로 124번길 21 3층 301-7호(달동)
            </Address>
            <Info>
              T. 010-5727-3864&nbsp;&nbsp;&nbsp;E. joon1109@spesate.com
            </Info>
            <CopyRight>
              Copyright ©Kim&Choi Inc Co., Ltd. All rights reserved.
            </CopyRight>
          </FLeft>
          <FRight>
            <SnsUrl>
              <Image
                src="/images/ic-instagram.png"
                alt="instagramIcon"
                width={26}
                height={26}
              ></Image>
              <Image
                src="/images/ic-facebook.png"
                alt="facebookIcon"
                width={14}
                height={24}
              ></Image>
              <Image
                src="/images/ic-youtube.png"
                alt="youtubeIcon"
                width={28}
                height={22}
              ></Image>
              <Image
                src="/images/ic-blog.png"
                alt="blogIcon"
                width={30}
                height={30}
              ></Image>
              {/* https://blog.naver.com/spesate */}
            </SnsUrl>
          </FRight>
        </FooterBottom>
      </FooterSection>
    </>
  );
};

export default Footer;
