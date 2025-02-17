"use client";

import colors from "@/app/_constants/colors";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import styled from "styled-components";
import { AnimatePresence, easeInOut, motion } from "framer-motion";
import { TBusiness } from "@/app/_types/home/home.types";

const Section = styled.section`
  height: 100vh;
  min-width: 1200px;
  background-color: "${colors.white}";
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 120px;
`;

const TopLine = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 30px;
`;

const ContentBox = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
  margin-top: 40px;
  margin-bottom: 80px;
`;

const BusinessItemBox = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 95%;
  /* min-width: 400px; */
  padding: 0px 60px;
  margin-top: 20px;
  margin-top: auto;
`;

const BusinessImageBox = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.3); /* X, Y, Blur, Color */
  background-color: #000000;
`;

const BusinessImage = styled(Image)`
  width: 100%;
  height: 100%;
  opacity: 35%;
`;

const BusinessBox = styled.div`
  display: flex;
  margin-top: auto;
  flex-direction: column;
`;

const BusinessName = styled(motion.p)`
  font-size: 34px;
  font-weight: 700;
  color: ${colors.white};
`;

const BusinessContent = styled(motion.p)`
  font-size: 18px;
  font-weight: 400;
  color: ${colors.white};
  white-space: pre-wrap;
  margin-top: 40px;
  line-height: 1.4;
  margin-bottom: 40px;
`;

const NextBox = styled(motion.div)`
  margin-top: 40px;
  cursor: pointer;
  z-index: 1;
  margin: auto 0px 40px auto;
`;

const NextText = styled(Link)`
  font-size: 18px;
  font-weight: 400;
  color: ${colors.white};
  text-decoration: none;
`;

const Title = styled(motion.h2)`
  font-size: 36px;
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
  height: 2px;
  width: 100%;
  background-color: ${colors.primary.main};
  transform-origin: center; // 중앙에서 애니메이션 시작
`;

const businesses: TBusiness[] = [
  {
    name: "정기 관리 컨설팅",
    content: `기업의 강점과 가능성을 분석하여 최적의 정부 과제를 찾고, 성공적인 수주와 실행을 위한 전략을 수립합니다.
또한, 기업이 겪는 다양한 문제를 정확히 진단하고, 맞춤형 컨설팅을 통해 실질적인 해결책과 성장 방향을 제시합니다.
`,
    backgroundImage1: "/images/testimage3.jpg",
    backgrpundImage2: "/images/testimage2.png",
    link: "/business/subscription",
  },
  {
    name: "정부 과제 컨설팅",
    content: `사업 계획서 작성 지원, 평가 준비 지원, 수행 지원, 사후 관리 지원까지 전문 컨설팅을 통해 모든 과정을 체계적으로 지원합니다.
정부 평가 기준을 반영한 전략적 사업 계획서 작성 지원, 전문가 멘토링을 통한 완성도 향상으로 수주 성공률을 극대화합니다.
`,
    backgroundImage1: "/images/testimage4.jpg",
    backgrpundImage2: "/images/testimage1.png",
    link: "/business/government",
  },
  {
    name: "기타 지원 컨설팅",
    content: `기업이 필요한 인증을 전략적으로 획득하여 시장 경쟁력을 높이고, 브랜드 가치를 강화할 수 있도록 지원합니다.
특허 출원·등록, 기술자료 보호, 지식재산권 활용 전략을 수립하여 핵심 기술을 보호하고, 이를 수익 창출로 연결합니다.            
`,
    backgroundImage1: "/images/testimage5.jpg",
    backgrpundImage2: "/images/testimage6.jpg",
    link: "/business/etc",
  },
];

const BusinessIntroduce = () => {
  const [seletedBusinessIndex, setSeletedBusinessIndex] = useState(0);

  return (
    <Section>
      <TopLine>
        <Title
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: easeInOut }}
          viewport={{ once: true }}
        >
          비즈니스 소개
        </Title>
        <SubTitleBox>
          {businesses.map((category, index) => (
            <Category
              key={category.name}
              onClick={() => setSeletedBusinessIndex(index)}
            >
              {category.name}
              <AnimatedBorder
                initial={{ scaleX: 0 }} // 초기 상태: 너비 없음
                animate={{ scaleX: index === seletedBusinessIndex ? 1 : 0 }} // 선택 시 너비 전체로 확장
                transition={{ duration: 0.2, ease: "easeInOut" }} // 애니메이션 속도와 이징 설정
              />
            </Category>
          ))}
        </SubTitleBox>
      </TopLine>
      <AnimatePresence mode="wait">
        <ContentBox>
          {businesses.map((business, index) => {
            if (index === seletedBusinessIndex) {
              return (
                <div key={index} style={{ display: "flex", flex: "1" }}>
                  <BusinessItemBox key={business.name}>
                    <BusinessBox>
                      <BusinessName
                        key={business.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                      >
                        {business.name}
                      </BusinessName>
                      <BusinessContent
                        key={business.content}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                      >
                        {business.content}
                      </BusinessContent>
                    </BusinessBox>

                    <NextBox
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                      <NextText href={business.link}>{`바로가기 >`}</NextText>
                    </NextBox>
                    <BusinessImageBox
                      key={business.backgroundImage1}
                      initial={{ opacity: 0.2 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0.2 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                      <BusinessImage
                        alt=""
                        src={business.backgroundImage1}
                        fill
                        objectFit="cover"
                      />
                    </BusinessImageBox>
                  </BusinessItemBox>
                  {/* <BusinessSomenailBox
                    key={business.backgrpundImage2}
                    initial={{ x: 70, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -70, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <BusinessSomenail
                      alt=""
                      src={business.backgrpundImage2}
                      fill
                      objectFit="cover"
                    />
                  </BusinessSomenailBox> */}
                </div>
              );
            }
          })}
        </ContentBox>
      </AnimatePresence>
    </Section>
  );
};

export default BusinessIntroduce;
