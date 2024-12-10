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
  gap: 8px;
`;

const ValueContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 140px;
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
            <p>{`중소·중견기업 간의 올바른 협력을 통해 긍정적인 시너지를 창출하고, 
상호 성장을 위한 협력 생태계를 구축 하는 것을 목표로  2024년 10월 10일에 설립 되었습니다.
`}</p>
            <p>{`고객만의 맞춤형 서비스를 통하여 고객의 바램을 충족시키는 기업으로 거듭 나기 위하여 
항상 최선을 다하는 기업이 되겠습니다.`}</p>
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
              {`우리 회사는 중소·중견 기업의 성공을 지원하는 `}
              <span style={{ fontWeight: "650" }}>원스톱 솔루션</span>
              {`을 제공합니다. \n\n지자체 기관 등록, 시험 기관 인증, 기업 인증, 특허 등록까지 기업 운영에 필요한 모든 과정을 전문적으로 컨설팅하며, 각 분야의 파트너들과 협력 생태계를 구축하여 기업이 본업에 집중할 수 있도록 돕습니다.`}
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
                height: "600px",
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
