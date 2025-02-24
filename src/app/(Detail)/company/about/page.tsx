"use client";

import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { easeInOut, motion } from "framer-motion";
import NetworkDiagram from "@/app/_components/about/NetworkDiagram";
import { mainColors, values } from "@/app/_constants/company/about/about";
import ColorPrevBox from "@/app/_components/about/ColorPrevBox";
import CompanyValue from "@/app/_components/about/CompanyValue";
import VisionAnimaiton from "@/app/_components/about/VisionAnimaiton";
import Timeline from "@/app/_components/about/Timeline";
import Authorization from "@/app/_components/company/Authorization";

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
  margin-bottom: 60px;
`;

const ContentBox = styled(motion.div)`
  display: flex;
  flex-direction: column;

  > p {
    white-space: pre-wrap;
    line-height: 1.4;
    font-size: 20px;
    font-weight: 500;
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

const ImageContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  max-width: 900px;
  aspect-ratio: 900 / 440; /* 비율을 유지 */
  margin: 0 auto;
  margin-top: 60px;
  overflow: hidden; /* 필요 시 초과 영역 숨김 */
  border-radius: 8px; /* 선택 사항: 둥근 모서리 */
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
            <p>{`SPESATE는 고객 맞춤형 솔루션을 제공하며, 협업 글러스터 구축을 통한 시너지 창출을 지원합니다.
`}</p>
          </ContentBox>
          <ImageBox
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.14, ease: easeInOut }}
            viewport={{ once: true }}
          >
            <Image
              src={"/images/bg-about3.jpg"}
              alt="bg-about"
              fill
              objectFit="cover"
            />
          </ImageBox>
        </ContentSection>

        <ContentSection>
          <SubTitle
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0, ease: easeInOut }}
            viewport={{ once: true }}
          >
            상호 신뢰와 협력을 바탕으로 가치를 공동 창출하는 협업 클러스터
          </SubTitle>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <div style={{ width: "50%" }}>
              <NetworkDiagram />
            </div>
            <motion.div
              style={{
                width: "50%",
                wordBreak: "keep-all",
                wordWrap: "break-word",
                whiteSpace: "pre-wrap",
                fontSize: "18px",
                fontWeight: "500",
                lineHeight: "140%",
                marginLeft: "60px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: easeInOut }}
              viewport={{ once: true }}
            >
              <p style={{ fontSize: "20px" }}>
                {`SPESATE는 중소·중견기업의 지속적인 성장을 지원하는\n전문 컨설팅 기업입니다.
                
협업 클러스터를 통해 다양한 분야의 기업들과 협력하며,\n각 분야의 전문가들이 모여 기업 맞춤형 솔루션을 제공합니다.\n`}
              </p>
              <p
                style={{ fontSize: "20px", fontWeight: "700" }}
              >{`\nSPESATE가 제공하는 솔루션\n`}</p>

              <p>{`✔ 기업 맞춤형 컨설팅`}</p>

              <p>
                {`✔ 협업 클러스터를 통한 상호 지원 네트워크 구축
`}
              </p>

              <p>
                {`✔ 사업 효율화 및 공동 성장을 위한 전략 제시
`}
              </p>

              <p>{`✔ 다양한 분야의 전문기관과의 연계를 통한 문제 해결
`}</p>
            </motion.div>
          </div>
        </ContentSection>

        <ContentSection>
          <SubTitle
            style={{ marginTop: "80px" }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0, ease: easeInOut }}
            viewport={{ once: true }}
          >
            비전
          </SubTitle>
          <VisionAnimaiton />
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

        <ContentSection>
          <SubTitle
            style={{ marginTop: "80px" }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0, ease: easeInOut }}
            viewport={{ once: true }}
          >
            조직도
          </SubTitle>
          <ImageContainer
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5, ease: easeInOut }}
            viewport={{ once: true }}
          >
            <Image src={"/images/company/organization.png"} alt="" fill />
          </ImageContainer>
        </ContentSection>

        <ContentSection>
          <SubTitle
            style={{ marginTop: "80px" }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0, ease: easeInOut }}
            viewport={{ once: true }}
          >
            인증
          </SubTitle>
          <Authorization />
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
            목표
          </SubTitle>
          <Timeline />
        </ContentSection>
      </ContentContainer>
    </Container>
  );
};

export default CompanyAboutPage;
