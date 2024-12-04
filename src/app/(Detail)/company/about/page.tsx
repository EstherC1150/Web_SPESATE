"use client";

import CollaborationDiagram from "@/app/sg/page";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { easeInOut, motion } from "framer-motion";

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

const Title = styled.p`
  font-size: 32px;
  font-weight: 600;
`;

const CompanyName = styled.p`
  margin-top: 80px;
  font-size: 40px;
  font-weight: 700;
`;

const ContentBox = styled.div`
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

const ImageBox = styled.div`
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
`;

const ColorBox = styled.div`
  flex: 1;
  padding: 30px 24px 50px 24px;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
`;

const ColorPrev = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;

const ColorText = styled.p`
  font-size: 18px;
  font-weight: 700;
  margin-top: 16px;
  margin-bottom: 24px;
`;

const ColorDescription = styled.p`
  font-size: 14px;
  color: #161616;
  font-weight: 400;
  margin-top: 8px;
`;

const CompanyAboutPage = () => {
  return (
    <Container>
      <ContentContainer>
        <Title>회사개요</Title>
        <CompanyName>SPESATE</CompanyName>
        <ContentBox>
          <p>{`중소·중견기업 간의 올바른 협력을 통해 긍정적인 시너지를 창출하고, 
상호 성장을 위한 협력 생태계를 구축 하는 것을 목표로  2024년 10월 10일에 설립 되었습니다.
`}</p>
          <p>{`고객만의 맞춤형 서비스를 통하여 고객의 바램을 충족시키는 기업으로 거듭 나기 위하여 
항상 최선을 다하는 기업이 되겠습니다.`}</p>
        </ContentBox>
        <ImageBox>
          <Image src={"/images/bg-about.png"} alt="" fill objectFit="cover" />
        </ImageBox>
        <SubTitle>
          상호 신뢰와 협력을 바탕으로 가치를 공동 창출하는 네트워크
        </SubTitle>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ width: "60%" }}>
            <CollaborationDiagram />
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
            <ColorBox style={{ backgroundColor: "#ebebeb" }}>
              <ColorPrev style={{ backgroundColor: "#28aae2" }} />
              <ColorText style={{ color: "#28aae2" }}>Blue</ColorText>
              <ColorDescription>R 40/ G 170/ B 180</ColorDescription>
              <ColorDescription>C 82/ M 25/ Y 0/ K 11</ColorDescription>
              <ColorDescription>#28AAE2</ColorDescription>
              <ColorDescription>Pantone 298C</ColorDescription>
            </ColorBox>
            <ColorBox
              style={{ backgroundColor: "#1f86b3", marginLeft: "-10px" }}
            >
              <ColorPrev style={{ backgroundColor: "#d1d3d5" }} />
              <ColorText style={{ color: "#d1d3d5" }}>GREY</ColorText>
              <ColorDescription>R 209/ G 211/ B 213</ColorDescription>
              <ColorDescription>C 2/ M 1/ Y 0/ K 16</ColorDescription>
              <ColorDescription>#FFFFFF</ColorDescription>
              <ColorDescription>Pantone 427C</ColorDescription>
            </ColorBox>
            <ColorBox
              style={{ backgroundColor: "#ffffff", marginLeft: "-10px" }}
            >
              <ColorPrev style={{ backgroundColor: "#221e1f" }} />
              <ColorText style={{ color: "#221e1f" }}>BLACK</ColorText>
              <ColorDescription>R 34/ G 30/ B 31</ColorDescription>
              <ColorDescription>C 0/ M 12 Y 9/ K 87</ColorDescription>
              <ColorDescription>#221E1F</ColorDescription>
              <ColorDescription>Pantone 419C</ColorDescription>
            </ColorBox>
          </ColorContainer>
        </ContentBox>
      </ContentContainer>
    </Container>
  );
};

export default CompanyAboutPage;
