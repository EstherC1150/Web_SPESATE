"use client";
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import CertificationProcess from "@/app/_components/business/CertificationProcess";
import PatentProcess from "@/app/_components/business/PatentProcess";
import MessageItem from "@/app/_components/business/MessageItem";
import MeritBox from "@/app/_components/business/MeritBox";
import colors from "@/app/_constants/colors";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-color: #fff;
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
  margin-bottom: 60px;
`;

const ProcessTitle = styled(motion.h2)`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 50px;
`;

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px; /* 각 메시지 간 기본 간격 */
  width: 95%;
  margin: 0 auto;
`;

const MeritTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 60px;
`;

const MeritContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
`;

const Support = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  margin-bottom: 40px;
`;

const SupportBox = styled.div`
  width: 66px;
  height: 24px;
  border: 2px solid ${colors.primary.main};
  border-radius: 4px;
  background-color: #fff;
  font-size: 16px;
  margin-right: 4px;
  box-sizing: border-box;
`;

const SubscriptionPage = () => {
  const messages = [
    {
      text: "질문1 : 우리 회사에 맞는 인증은 어떻게 파악해야 할까요?\n              인증이 중요하다고 들었는데, 종류가 많아서 어떤 걸 받아야 할지 모르겠어요.",
      align: "left",
      delay: 0,
    } as const,
    {
      text: "기업 인증은 업종, 사업 목표, 거래처 요구사항에 따라 전략적으로 취득해야 합니다.\n▪️ ISO 9001 → 품질경영 시스템 (제품·서비스 품질 보장)\n▪️ ISO 14001 → 환경경영 시스템 (친환경 경영 필수 기업)\n▪️ 벤처기업 인증 → R&D 중심 기업의 투자 및 세제 혜택\n▪️ 이노비즈/메인비즈 인증 → 기술·경영 혁신 기업의 정부 지원 우대\n▪️ 기업부설연구소 인증 → 연구개발(R&D) 기업의 세제 혜택 및 정부 과제 신청 유리\n\n🔹SPESATE에서는\n☑️ 기업에 필요한 인증을 분석하여 추천합니다.\n☑️ 인증 취득 과정의 원활한 진행을 지원합니다.",
      align: "right",
      delay: 0.4,
    } as const,
    {
      text: "질문2 : 특허를 출원하려면 어떻게 준비해야 할까요?\n              특허를 내고 싶은데, 아이디어는 있지만 어떻게 정리해야 할지 모르겠어요.",
      align: "left",
      delay: 0.8,
    } as const,
    {
      text: "특허 출원은 단순한 아이디어 등록이 아니라, 기술 보호와 사업화 전략이 중요합니다.\n▪️ 기술 명세서 작성 → 특허 핵심 기술을 구체적으로 설명\n▪️ 선행 특허 조사 → 기존 특허와 차별성 분석\n▪️ 권리 범위 설정 → 경쟁사 대비 유리한 포지셔닝 전략\n▪️ 기술 보강 & 사업화 전략 → 특허를 실질적으로 활용할 수 있도록 기획\n\n🔹SPESATE에서는\n☑️ 기업의 핵심 기술 분석 & 특허 가능성을 검토합니다.\n☑️ 명확한 특허 전략 수립 & 기술을 보강 지원합니다.",
      align: "right",
      delay: 1.2,
    } as const,
  ];

  const merits = [
    {
      title: "기업 맞춤형 인증 취득 지원",
      description:
        "✔ 업종과 목표에 맞는 필수 인증을 분석하고 최적의 취득 전략 수립\n✔ 인증 기준에 맞춰 철저한 사전 준비를 위한 컨설팅 제공",
      icon: "/images/business/ic-social.png",
    },
    {
      title: "경쟁력 있는 특허 출원 및 전략 수립",
      description:
        "✔ 선행 특허 조사와 경쟁사 분석으로 차별성 확보와 사업화 극대화\n✔ 보유 기술 분석으로 특허 가능성 검토와 권리 범위 최적화",
      icon: "/images/business/ic-rating.png",
    },
    {
      title: "인증 및 특허 취득 과정에서 발생하는 문제 해결",
      description:
        "✔ 정부 및 심사기관과의 소통 전략 제공\n✔ 행정 절차와 심사 보완 요청에 따른 기술 보강 및 자료 준비 지원",
      icon: "/images/business/ic-solution2.png",
    },
    {
      title: "인증 및 특허의 실질적 활용 및 사업화 전략 제공",
      description:
        "✔ 인증 취득 후 공공조달 및 정부 지원 사업 활용 방안 제공\n ",
      icon: "/images/business/ic-strategy.png",
    },
  ];

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
      <ContentContainer>
        <NeedTitle>기타 지원 컨설팅이 왜 필요할까?</NeedTitle>
        <MessageContainer>
          {messages.map((msg, index) => (
            <MessageItem key={index} msg={msg} />
          ))}
        </MessageContainer>
      </ContentContainer>
      <ContentContainer>
        <MeritTitle>기타 지원 컨설팅의 핵심 이점</MeritTitle>
        <MeritContainer>
          {merits.map((merit, index) => (
            <MeritBox
              key={index}
              title={merit.title}
              description={merit.description}
              icon={merit.icon}
            />
          ))}
        </MeritContainer>
      </ContentContainer>
      <ContentContainer>
        <ProcessTitle>기업인증 프로세스</ProcessTitle>
        <Support>
          <SupportBox /> : 지원항목
        </Support>
        <CertificationProcess />
      </ContentContainer>
      <ContentContainer>
        <ProcessTitle>특허 및 디자인 프로세스</ProcessTitle>
        <Support>
          <SupportBox /> : 지원항목
        </Support>
        <PatentProcess />
      </ContentContainer>
    </Container>
  );
};

export default SubscriptionPage;
