"use client";

import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { easeInOut, motion } from "framer-motion";

const Section = styled.div`
  height: 100vh;
  min-width: 1200px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 120px;
`;
const Title = styled(motion.h2)`
  font-size: 36px;
  font-weight: 700;
  margin-top: 30px;
  align-self: flex-start;
  margin-left: 4px;
`;

const ContentBox = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  margin-top: 70px;
  margin-bottom: 80px;
  justify-content: flex-start;
`;

const ImageStyled = styled(Image)`
  width: 500px;
  height: 500px;
  object-fit: contain;
`;

const TextContainer = styled.div`
  width: 56%;
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: space-between;
  margin-left: 40px;
`;

const TextContent = styled.div`
  width: 100%;
  font-size: 19px;
  font-weight: 500;
  line-height: 1.5;
  margin-bottom: 20px;
  white-space: pre-wrap;
`;

const NextText = styled(Link)`
  font-size: 18px;
  font-weight: 500;
  margin-top: 20px;
  text-decoration: none;
  color: #000;
`;

const Cluster = () => {
  return (
    <Section>
      <Title
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.25, ease: easeInOut }}
        viewport={{ once: true }}
      >
        상호 신뢰와 협력을 바탕으로 가치를 공동 창출하는 협업 클러스터
      </Title>
      <ContentBox>
        <ImageStyled
          src={"/images/cluster.png"}
          alt="cluster img"
          width={500}
          height={500}
          priority
        ></ImageStyled>
        <TextContainer>
          <TextContent>
            {`SPESATE는 정부 과제 컨설팅, 기업 인증, 특허 및 연구개발 지원, 기업의 에로사항 해결 등을 통해 기업이 지속적으로 성장할 수 있도록 돕는 전문 컨설팅 기업입니다.

우리는 단순한 비즈니스 협력을 넘어, 파트너사와의 신뢰를 바탕으로 지속적인 가치를 공동 창출하는 협력 네트워크를 구축하고자 합니다.

특히, 정부 지원 사업 및 기술 개발 지원 뿐만 아니라, 기업 간 연결과 협력을 통해 지속적인 성장 기회를 제공하는 네트워크를 만들고자 합니다.

SPESATE와 함께 협업 클러스터를 구축하고, 기술·연구개발·사업 확장을 함께할 도전적인 파트너 여러분을 기다립니다.               
`}
          </TextContent>
          <NextText href="/partners">{`바로가기 >`}</NextText>
        </TextContainer>
      </ContentBox>
    </Section>
  );
};

export default Cluster;
