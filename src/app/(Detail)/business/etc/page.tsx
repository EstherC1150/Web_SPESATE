// pages/index.tsx
"use client";
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import CertificationProcess from "@/app/_components/business/CertificationProcess";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-color: #fff;
  overflow-y: auto;
`;

const ContentContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 1200px;
  background-color: #fff;
  padding: 40px;
  margin-bottom: 80px;
  justify-content: center;
`;

const StaticContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1200px;
  background-color: #fff;
  padding: 40px;
  margin-bottom: 80px;
  justify-content: center;
`;

const TImg = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  margin: 0 auto;
  background-image: url("/images/business/testimg5.jpg");
  background-size: cover;
  background-position: center;
  border-radius: 15px;
  overflow: hidden;
  margin-top: 120px;
`;

const Title = styled.h2`
  position: absolute;
  top: 42%;
  left: 8%;
  font-size: 40px;
  transform: translate(0, -44%);
  font-weight: 600;
  color: #fff;
  z-index: 50;
`;

const TText = styled.p`
  position: absolute;
  top: 62%;
  left: 8%;
  transform: translate(0, -60%);
  font-size: 28px;
  font-weight: 400;
  color: #fff;
`;

const NeedTitle = styled(motion.h2)`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 70px;
`;

const ProcessTitle = styled(motion.h2)`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 70px;
`;

const GridContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  width: 100%;
`;

const InfoBox = styled.div`
  border-radius: 8px;
  overflow: hidden;
`;

const InfoTitle = styled.div`
  background-color: #282834;
  padding: 15px 20px;
  text-align: center;
  color: white;
  font-size: 20px;
  font-weight: 500;
`;

const InfoContent = styled.div`
  background-color: #f4f4f4;
  padding: 25px 24px;
`;

const InfoItem = styled.div`
  position: relative;
  padding-left: 15px;
  margin-bottom: 15px;
  color: #333;
  font-size: 18px;
  line-height: 1.5;

  &:before {
    content: "·";
    position: absolute;
    left: 0;
    color: #666;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

interface CircleHalfProps {
  $isLeft?: boolean;
}

const ConsultingWrapper = styled(motion.div)`
  position: relative;
  width: 100%;
  padding: 20px;
  height: 580px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CenterCircle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 180px;
  height: 180px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  z-index: 10;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
`;

const CircleHalf = styled.div<CircleHalfProps>`
  width: 50%;
  height: 100%;
  background-color: ${(props) => (props.$isLeft ? "#059dde" : "#006793")};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

const CircleText = styled.div`
  color: white;
  font-size: 24px;
  font-weight: 700;
  text-align: center;
`;

const GridLayout = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 510px);
  grid-template-rows: repeat(2, 240px);
  column-gap: 100px;
  row-gap: 80px;
  max-width: 1200px;
  margin: 0 auto;
`;

const ConsultingBox = styled(motion.div)`
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 30px;
  width: 100%;
  height: 100%;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const BoxTitle = styled.div`
  font-size: 22px;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 14px;
`;

const BoxSubtitle = styled.div`
  font-size: 17px;
  font-weight: 600;
  color: #374151;
  margin-bottom: 30px;
`;

const ListItem = styled.div`
  position: relative;
  padding-left: 20px;
  margin-bottom: 14px;
  font-size: 16px;
  color: #4b5563;
  line-height: 1.6;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 8px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #28aae2;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const SubscriptionPage = () => {
  const contentRef1 = useRef(null);
  const contentRef2 = useRef(null);
  const contentRef3 = useRef(null);
  const contentRef4 = useRef(null);
  const isInView1 = useInView(contentRef1, { once: true });
  const isInView2 = useInView(contentRef2, { once: true });
  const isInView3 = useInView(contentRef3, { once: true });
  const isInView4 = useInView(contentRef4, { once: true });

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <Container>
      <StaticContentContainer>
        <TImg>
          <Title>기타 지원 컨설팅</Title>
          <TText>
            인증 관리 및 취득 지원 / 특허 관리 및 특허 출원, 등록지원
          </TText>
        </TImg>
      </StaticContentContainer>
      <ContentContainer
        ref={contentRef2}
        initial="hidden"
        animate={isInView2 ? "visible" : "hidden"}
        variants={staggerContainerVariants}
      >
        <NeedTitle variants={fadeInUpVariants}>
          기타 지원 컨설팅의 필요성
        </NeedTitle>
        <GridContainer variants={fadeInUpVariants}>
          <InfoBox>
            <InfoTitle>기타관리(인증) 컨설팅</InfoTitle>
            <InfoContent>
              <InfoItem>
                중소기업 인증에서 어떤 인증을 받아야 혜택이 있는지 판단 어려움
              </InfoItem>
              <InfoItem>
                각 인증마다 요구하는 서류와 심사 기준이 달라 과정이 복잡함
              </InfoItem>
              <InfoItem>인증 절차에서 시간이 많이 소요됨</InfoItem>
            </InfoContent>
          </InfoBox>
          <InfoBox>
            <InfoTitle>기타관리(특허) 컨설팅</InfoTitle>
            <InfoContent>
              <InfoItem>중소기업 특허 출원 및 등록이 어려움</InfoItem>
              <InfoItem>
                기업에 맞는 R&D 과제 지원 및 사업 수행 문제 해결
              </InfoItem>
              <InfoItem>
                기술 개발 및 사업화 성공률 향상을 위한 자문 제공
              </InfoItem>
            </InfoContent>
          </InfoBox>
        </GridContainer>
      </ContentContainer>
      <ContentContainer
        ref={contentRef3}
        initial="hidden"
        animate={isInView3 ? "visible" : "hidden"}
        variants={staggerContainerVariants}
      >
        <NeedTitle variants={fadeInUpVariants}>
          기타 지원 컨설팅의 이점
        </NeedTitle>
        <ConsultingWrapper variants={fadeInUpVariants}>
          <CenterCircle>
            <CircleHalf $isLeft>
              <CircleText>인증</CircleText>
            </CircleHalf>
            <CircleHalf>
              <CircleText>특허</CircleText>
            </CircleHalf>
          </CenterCircle>
          <GridLayout>
            {[1, 2, 3, 4].map((_, index) => (
              <ConsultingBox
                key={index}
                variants={fadeInUpVariants}
                custom={index}
              >
                <BoxTitle>
                  {index === 0 && "Tailored Support"}
                  {index === 1 && "Documentation Support"}
                  {index === 2 && "Technical Support"}
                  {index === 3 && "On-site Evaluation"}
                </BoxTitle>
                <BoxSubtitle>
                  {index === 0 && "중소기업 맞춤형 인증 지원"}
                  {index === 1 && "서류 작성 지원"}
                  {index === 2 && "기술 자료 작성 지원"}
                  {index === 3 && "현장 평가 지원"}
                </BoxSubtitle>
                <ListItem>
                  {index === 0 &&
                    "기업의 특성에 맞는 최적의 인증을 추천받을 수 있음"}
                  {index === 1 &&
                    "인증 취득에 필요한 서류를 작성하는 지원을 받음"}
                  {index === 2 && "인증에 필요한 기술 자료 작성 지원을 받음"}
                  {index === 3 &&
                    "인증 취득을 위한 현장 평가를 지원받을 수 있음"}
                </ListItem>
              </ConsultingBox>
            ))}
          </GridLayout>
        </ConsultingWrapper>
      </ContentContainer>
      <ContentContainer
        ref={contentRef4}
        initial="hidden"
        animate={isInView4 ? "visible" : "hidden"}
        variants={fadeInUpVariants}
      >
        <ProcessTitle>기업 인증 프로세스</ProcessTitle>
        <CertificationProcess />
      </ContentContainer>
    </Container>
  );
};

export default SubscriptionPage;
