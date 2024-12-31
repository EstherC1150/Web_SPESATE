"use client";

import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { easeInOut, motion } from "framer-motion";
import NetworkDiagram from "@/app/_components/about/NetworkDiagram";
import { mainColors, values } from "@/app/_constants/company/about/about";
import ColorPrevBox from "@/app/_components/about/ColorPrevBox";
import CompanyValue from "@/app/_components/about/CompanyValue";

const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  background-color: #fff;
  justify-content: center;
  overflow-y: auto; /* 수직 스크롤 활성화 */
  height: auto;
`;

const ContentSection = styled.section`
  min-height: 100vh;
  height: fit-content;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 60px;
`;

const ContentContainer = styled.div`
  display: flex;
  max-width: 1200px;
  background-color: #fff;
  height: auto;
  width: 100%;
  padding: 0 40px;
  flex-direction: column;
`;

const CompanyName = styled(motion.p)`
  font-size: 34px;
  font-weight: 700;
  margin-top: 60px;
`;

const ContentBox = styled(motion.div)`
  margin-top: 20px;
  display: flex;
  flex-direction: column;

  > p {
    white-space: pre-wrap;
    line-height: 1.4;
    font-size: 20px;
    font-weight: 500;
    margin-top: 24px;
  }
`;

const ImageBox = styled(motion.div)`
  width: 100%;
  height: 360px;
  position: relative;
  margin-top: 40px;
  overflow: hidden;
  border-radius: 24px;
  left: 0;
`;

const SubTitle = styled(motion.p)`
  font-size: 34px;
  font-weight: 700;
`;

const ColorContainer = styled(motion.div)`
  display: flex;
  gap: 16px;
  justify-content: center;
`;

const ValueContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 60px;
  justify-content: space-around;
`;

const CompanyAboutPage = () => {
  return (
    <Container>
      <ContentContainer>
        <ContentSection>
          <CompanyName
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0, ease: easeInOut }}
            viewport={{ once: true }}
          >
            SPESATE
          </CompanyName>
          <ContentBox
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.07, ease: easeInOut }}
            viewport={{ once: true }}
          >
            <p>{`SPESATE는 중소·중견기업의 성장 잠재력을 극대화하기 위해 설립된 전문 컨설팅 기업입니다.
`}</p>
            <p>{`깊이 있는 산업 분석과 데이터 기반의 전략 수립을 통해 고객 맞춤형 솔루션을 제공하며,\n협력 생태계 구축을 통한 시너지 창출을 지원합니다. 저희는 지속 가능한 성장을 위한 최적의 파트너가 되어 드릴 것을 약속드립니다.
`}</p>
          </ContentBox>
          <ImageBox
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.14, ease: easeInOut }}
            viewport={{ once: true }}
          >
            <Image src={"/images/bg-about.png"} alt="" fill objectFit="cover" />
          </ImageBox>
        </ContentSection>

        <ContentSection>
          <SubTitle
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0, ease: easeInOut }}
            viewport={{ once: true }}
          >
            상호 신뢰와 협력을 바탕으로 가치를 공동 창출하는 네트워크
          </SubTitle>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ width: "60%" }}>
              <NetworkDiagram />
            </div>
            <motion.div
              style={{
                width: "40%",
                whiteSpace: "pre-wrap",
                fontSize: "20px",
                fontWeight: "500",
                lineHeight: 1.4,
                marginLeft: "8px",
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: easeInOut }}
              viewport={{ once: true }}
            >
              {`SPESATE는 중소·중견 기업의 성공을 지원하는 `}
              <span style={{ fontWeight: "650" }}>원스톱 솔루션</span>
              {`을 제공합니다.\n\n지역 내 기업, 연구기관, 대학 등 다양한 주체와의 협력을 통해 개방형 혁신을 추구하며, 지역 산업의 경쟁력을 강화합니다.\n\n`}
              {`각 분야의 전문가들로 구성된 네트워크를 통해 고객에게 최적화된 맞춤형 솔루션을 제시하며, 불필요한 절차를 간소화하여 효율적인 업무 처리가 가능하도록 지원합니다. 이를 통해 고객사의 시간과 비용을 절감할 수 있으며, 다양한 협력 기관들의 지원을 바탕으로 성공적인 사업 추진을 위한 최적의 환경을 조성합니다.`}
            </motion.div>
          </div>
        </ContentSection>

        <ContentSection>
          <SubTitle
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0, ease: easeInOut }}
            viewport={{ once: true }}
          >
            CI
          </SubTitle>
          <ContentBox>
            <motion.div
              style={{
                width: "900px",
                height: "480px",
                position: "relative",
                margin: "0 auto",
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.07, ease: easeInOut }}
              viewport={{ once: true }}
            >
              <Image
                src={"/images/company/ci-description.png"}
                alt=""
                fill
                objectFit=""
              />
            </motion.div>
            <ColorContainer
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.14, ease: easeInOut }}
              viewport={{ once: true }}
            >
              {mainColors.map((color) => {
                return <ColorPrevBox key={color.color} colorPalette={color} />;
              })}
            </ColorContainer>
          </ContentBox>
        </ContentSection>

        <ContentSection>
          <SubTitle
            style={{ marginTop: "80px" }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0, ease: easeInOut }}
            viewport={{ once: true }}
          >
            핵심가치
          </SubTitle>
          <ValueContainer>
            {values.map((value, index) => (
              <CompanyValue
                key={value.title}
                value={value}
                delay={index * 0.07}
              />
            ))}
          </ValueContainer>
        </ContentSection>
      </ContentContainer>
    </Container>
  );
};

export default CompanyAboutPage;
