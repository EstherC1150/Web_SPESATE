"use client";

import colors from "@/app/_constants/colors";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Section = styled.section`
  height: 100vh;
  min-width: 1200px;
  background-color: "${colors.white}";
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px 70px;
`;

const TopLine = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const ContentBox = styled.div`
  display: flex;
  width: 100%;
  height: 560px;
  margin-top: 40px;
`;

const BusinessItemBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 560px;
  min-width: 400px;
  padding: 100px 60px;
  background-color: #00004b;
`;

const BusinessImageBox = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.3); /* X, Y, Blur, Color */
`;

const BusinessImage = styled(Image)`
  width: 100%;
  height: 100%;
  opacity: 20%;
`;

const BusinessName = styled.p`
  font-size: 36px;
  font-weight: 700;
  color: ${colors.white};
`;

const BusinessContent = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: ${colors.white};
  white-space: pre-wrap;
  margin-top: 40px;
  line-height: 1.4;
`;

const BusinessSomenailBox = styled.div`
  display: flex;
  width: 100%;
  margin: 50px 0;
  z-index: 1;
  position: relative;
`;

const BusinessSomenail = styled(Image)`
  width: 100%;
  height: 100%;
`;

const NextText = styled(Link)`
  font-size: 20px;
  font-weight: 500;
  color: ${colors.white};
  margin-top: 40px;
  cursor: pointer;
  z-index: 1;
  text-decoration: none;
`;

const Title = styled.h2`
  font-size: 42px;
  font-weight: 700;
  margin-left: 4px;
`;

const SubTitleBox = styled.div`
  display: flex;
  gap: 60px;
  font-weight: 700;
`;

const Category = styled.div`
  font-size: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
`;

const AnimatedBorder = styled(motion.div)`
  position: absolute;
  bottom: -4px;
  left: 0;
  height: 3px;
  width: 100%;
  background-color: ${colors.primary.main};
  transform-origin: center; // 중앙에서 애니메이션 시작
`;

const businessCategories = [
  "정기 관리 컨설팅",
  "정부 과제 컨설팅",
  "기타 관리 컨설팅",
];

const BusinessIntroduce = () => {
  const [seletedBusinessIndex, setSeletedBusinessIndex] = useState(0);

  return (
    <Section>
      <TopLine>
        <Title>비즈니스 소개</Title>
        <SubTitleBox>
          {businessCategories.map((category, index) => (
            <Category
              key={category}
              onClick={() => setSeletedBusinessIndex(index)}
            >
              {category}
              <AnimatedBorder
                initial={{ scaleX: 0 }} // 초기 상태: 너비 없음
                animate={{ scaleX: index === seletedBusinessIndex ? 1 : 0 }} // 선택 시 너비 전체로 확장
                transition={{ duration: 0.2, ease: "easeInOut" }} // 애니메이션 속도와 이징 설정
              />
            </Category>
          ))}
        </SubTitleBox>
      </TopLine>
      <ContentBox>
        <BusinessItemBox>
          <BusinessImageBox>
            <BusinessImage alt="" src={"/images/testimage1.png"} fill />
          </BusinessImageBox>
          <BusinessName>정기 관리 컨설팅</BusinessName>
          <BusinessContent>{`컨설팅 업체의
새로운 시작점으로
소개소개하는 글입니다아
융합 솔루션을 제공합니다.`}</BusinessContent>
          <NextText href={"#"}>{`바로가기 >`}</NextText>
        </BusinessItemBox>
        <BusinessSomenailBox>
          <BusinessSomenail
            alt=""
            src={"/images/testimage2.png"}
            fill
            objectFit="cover"
          />
        </BusinessSomenailBox>
      </ContentBox>
    </Section>
  );
};

export default BusinessIntroduce;
