"use client";

import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { easeInOut, motion } from "framer-motion";
import NetworkDiagram from "@/app/_components/about/NetworkDiagram";
import { mainColors } from "@/app/_constants/company/about/about";
import ColorPrevBox from "@/app/_components/about/ColorPrevBox";

const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  background-color: #fff;
  justify-content: center;
  overflow-y: auto; /* 수직 스크롤 활성화 */
  height: auto;
`;

const ContentContainer = styled.div`
  display: flex;
  max-width: 1200px;
  background-color: #fff;
  height: auto;
  width: 100%;
  padding: 40px;
  margin-bottom: 80px;
  margin-top: 160px;
  flex-direction: column;
`;

const Title = styled(motion.p)`
  font-size: 32px;
  font-weight: 600;
`;

const CompanyName = styled(motion.p)`
  margin-top: 80px;
  font-size: 40px;
  font-weight: 700;
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

const SubTitle = styled.p`
  font-size: 28px;
  font-weight: 700;
  margin-top: 100px;
`;

const ColorContainer = styled(motion.div)`
  display: flex;
  gap: 8px;
`;

const ValueContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 140px;
  justify-content: space-between;
`;

const ValueBox = styled.div`
  width: 48%;
  margin-bottom: 100px;
`;

const ValueTitle = styled.p`
  font-size: 24px;
  font-weight: 600;
`;

const ValueContent = styled.p`
  font-size: 20px;
  font-weight: 400;
`;

const CompanyAboutPage = () => {
  return (
    <Container>
      <ContentContainer>
        <Title
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0, ease: easeInOut }}
          viewport={{ once: true }}
        >
          회사개요
        </Title>
        <CompanyName
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.07, ease: easeInOut }}
          viewport={{ once: true }}
        >
          SPESATE
        </CompanyName>
        <ContentBox
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.14, ease: easeInOut }}
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
          transition={{ duration: 0.7, delay: 0.21, ease: easeInOut }}
          viewport={{ once: true }}
        >
          <Image src={"/images/bg-about.png"} alt="" fill objectFit="cover" />
        </ImageBox>
        <SubTitle>
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
            transition={{ duration: 0.7, delay: 0.3, ease: easeInOut }}
            viewport={{ once: true }}
          >
            {`우리 회사는 중소·중견 기업의 성공을 지원하는 `}
            <span style={{ fontWeight: "650" }}>원스톱 솔루션</span>
            {`을 제공합니다. \n\n지자체 기관 등록, 시험 기관 인증, 기업 인증, 특허 등록까지 기업 운영에 필요한 모든 과정을 전문적으로 컨설팅하며, 각 분야의 파트너들과 협력 생태계를 구축하여 기업이 본업에 집중할 수 있도록 돕습니다.`}
          </motion.div>
        </div>
        <SubTitle>CI</SubTitle>
        <ContentBox>
          <p>
            스페세이트의 CI는 회사의 가치와 비전을 함축적으로 표현하여 고객과의
            신뢰를 쌓고, 지속적인 협력을 통해 함께 성장하는 컨설팅 파트너로서의
            정체성을 담고 있습니다.
          </p>
          <div
            style={{
              width: "900px",
              height: "600px",
              position: "relative",
              margin: "0 auto",
            }}
          >
            <Image
              src={"/images/company/ci-description.png"}
              alt=""
              fill
              objectFit=""
            />
          </div>
          <ColorContainer>
            {mainColors.map((color) => {
              return <ColorPrevBox key={color.color} colorPalette={color} />;
            })}
          </ColorContainer>
        </ContentBox>
        <SubTitle style={{ marginTop: "200px" }}>핵심가치</SubTitle>
        <ValueContainer>
          <ValueBox>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  position: "relative",
                  width: "28px",
                  height: "28px",
                  marginRight: "8px",
                }}
              >
                <Image
                  src={"/images/company/ic-brainstorm-skill.png"}
                  alt=""
                  fill
                />
              </div>
              <ValueTitle>문제 해결 능력</ValueTitle>
            </div>
            <ValueContent>
              복잡한 문제를 분석하고 최적의 해결책을 제시한다.
            </ValueContent>
          </ValueBox>
          <ValueBox>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  position: "relative",
                  width: "28px",
                  height: "28px",
                  marginRight: "8px",
                }}
              >
                <Image src={"/images/company/ic-morale.png"} alt="" fill />
              </div>
              <ValueTitle>객관성</ValueTitle>
            </div>
            <ValueContent>
              객관적인 분석을 통해 의사결정을 지원한다.
            </ValueContent>
          </ValueBox>
          <ValueBox>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  position: "relative",
                  width: "28px",
                  height: "28px",
                  marginRight: "8px",
                }}
              >
                <Image src={"/images/company/ic-handshake.png"} alt="" fill />
              </div>
              <ValueTitle>신뢰성</ValueTitle>
            </div>
            <ValueContent>
              투명한 커뮤니케이션을 통한 신뢰를 구축한다.
            </ValueContent>
          </ValueBox>
          <ValueBox>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  position: "relative",
                  width: "28px",
                  height: "28px",
                  marginRight: "8px",
                }}
              >
                <Image
                  src={"/images/company/ic-performance-macbook.png"}
                  alt=""
                  fill
                />
              </div>
              <ValueTitle>효율성</ValueTitle>
            </div>
            <ValueContent>빠르고 정확하게 문제를 해결한다.</ValueContent>
          </ValueBox>
          <ValueBox>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  position: "relative",
                  width: "28px",
                  height: "28px",
                  marginRight: "8px",
                }}
              >
                <Image src={"/images/company/ic-rocket.png"} alt="" fill />
              </div>
              <ValueTitle>미래지향성</ValueTitle>
            </div>
            <ValueContent>
              변화하는 환경에 적응하고 새로운 가치를 창출한다.
            </ValueContent>
          </ValueBox>
          <ValueBox>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  position: "relative",
                  width: "28px",
                  height: "28px",
                  marginRight: "8px",
                }}
              >
                <Image
                  src={"/images/company/ic-purposeful-man.png"}
                  alt=""
                  fill
                />
              </div>
              <ValueTitle>고객중심</ValueTitle>
            </div>
            <ValueContent>
              고객과 함께 성장하는 파트너십을 구축한다.
            </ValueContent>
          </ValueBox>
        </ValueContainer>
      </ContentContainer>
    </Container>
  );
};

export default CompanyAboutPage;
