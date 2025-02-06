// pages/index.tsx
"use client";
import React from "react";
import styled from "styled-components";
import MeritBox from "@/app/_components/business/MeritBox";
import MessageItem from "@/app/_components/business/MessageItem";
import GovernmentProcess from "@/app/_components/business/GovernmentProcess";

const Container = styled.div`
  display: flex;
  flex-direction: column; /* 자식 요소를 세로로 배치 */
  align-items: center; /* 수평 중앙 정렬 */
  width: 100%;
  min-height: 100vh;
  background-color: #fff;
  overflow-y: auto; /* 수직 스크롤 활성화 */
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column; /* 내부 콘텐츠를 세로로 정렬 */
  width: 1200px; /* 고정 너비 */
  background-color: #fff;
  padding: 40px;
  margin-bottom: 80px; /* 각 ContentContainer 간격 */
  justify-content: center;
`;

const TImg = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  margin: 0 auto;
  background-image: url("/images/business/testimg4.jpg"); /* 이미지 경로 설정 */
  background-size: cover;
  background-position: center;
  border-radius: 15px; /* 모서리를 살짝 둥글게 */
  overflow: hidden;
  margin-top: 120px;
`;

const Title = styled.h2`
  position: absolute;
  top: 42%; /* 이미지 중앙에 위치 */
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

const NeedTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 60px;
`;

const MeritTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 60px;
`;

const ProcessTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 50px;
`;

const MeritContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
`;

// 메시지 컨테이너 스타일
const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px; /* 각 메시지 간 기본 간격 */
  width: 95%;
  margin: 0 auto;
`;

const SubscriptionPage = () => {
  const messages = [
    {
      text: "질문1 : 정부 R&D 과제를 찾기가 너무 어려워요!\n              정부 R&D 과제가 많지만, 우리 회사에 맞는 걸 찾기 어렵고 공고도 복잡해요.",
      align: "left",
      delay: 0,
    } as const,
    {
      text: "정부 R&D 과제는 매년 정책과 지원 대상이 바뀌어 직접 찾기 어렵습니다!\n▪️ 지원 기관마다 (산업부, 중기부, 과기부 등) 목표와 방식이 다름\n▪️ 연구개발 단계별 과제 (기초 연구, 시제품 개발, 상용화)\n▪️ 업종별 맞춤 지원 (스마트 제조, AI·SW, 바이오·의료, 수출 기업)\n\n🔹SPESATE에서는 기업 맞춤 분석을 통해\n☑️ 최적의 R&D 과제 추천\n☑️ 선정 가능성을 높이는 전략 지원",
      align: "right",
      delay: 0.4,
    } as const,
    {
      text: "질문2 : 정부 과제를 수주하려면 사업계획서를 어떻게 준비해야 하나요?\n              정부 과제를 신청하려는데, 사업계획서를 어떻게 작성해야 할지 모르겠어요.",
      align: "left",
      delay: 0.8,
    } as const,
    {
      text: "사업계획서는 정부 과제 선정의 핵심입니다!\n▪️ 기술력과 차별성 → 우리 기업만의 강점 강조\n▪️ 시장 분석 & 사업화 전략 → 실현 가능성 증명\n▪️ 정부 정책과 연계성 → 지원 필요성 명확화\n▪️ 구체적인 연구개발 일정 → 실행 가능성 확보\n\n🔹SPESATE에서는\n☑️ 정부 과제 평가 기준에 맞춘 사업계획서 작성 지원\n☑️ 기업의 강점을 극대화하는 전략 수립",
      align: "right",
      delay: 1.2,
    } as const,
    {
      text: "질문3 : 정부 과제 수행 중 일정 관리와 사후 관리는 어떻게 해야 하나요?\n              정부 과제에 선정됐지만 일정 관리와 보고서 작성이 어렵습니다.",
      align: "left",
      delay: 1.6,
    } as const,
    {
      text: "정부 과제는 선정 후에도 철저한 관리가 필요합니다!\n▪️ 연구 일정 준수 & 성과 관리 → 프로젝트 진행 체계화\n▪️ 과제 중간 점검 & 방향 조정 → 목표 달성률 향상\n▪️ 지원금 정산 & 최종 보고서 제출 → 불이익 방지\n\n🔹SPESATE에서는\n☑️ 과제 일정과 연구개발 진행을 체계적으로 관리\n☑️ 과제 종료 후 정산 및 평가까지 철저히 지원",
      align: "right",
      delay: 2.0,
    } as const,
  ];

  const merits = [
    {
      title: "정부 과제 신청 절차 및 필수 요건 점검",
      description:
        "✔ 정부 평가 기준(기술력, 재무 건전성, 사업성)에 맞춘 사전 준비 지원\n✔ 신청 과정의 행정 절차와 필수 서류를 정리해 효율적 준비 지원",
      icon: "/images/business/ic-goal.png",
    },
    {
      title: "성공적인 과제 수행을 위한 사업계획서 작성 지원",
      description:
        "✔ 평가 핵심 요소를 반영하여 계획서 작성 지원\n✔ 기술력, 사업성, 정책 부합도를 고려하여 과제 선정 확률을 높임",
      icon: "/images/business/ic-support.png",
    },
    {
      title: "정부 과제 수행 중 발생하는 문제 해결 지원",
      description:
        "✔ 연구개발 일정과 주요 마일스톤을 설정, 체계적인 일정 관리를 지원\n✔ 과제 수행 중 발생하는 행정 절차 및 기술적 문제 해결 컨설팅을 제공",
      icon: "/images/business/ic-solution.png",
    },
    {
      title: "최신 기술 동향 분석 및 사업화 전략 수립 지원",
      description:
        "✔ 연구개발 이후 사업화를 고려한 전략적 방향성을 제시\n✔ 기업의 핵심 기술과 시장 동향을 반영한 맞춤형 컨설팅을 제공",
      icon: "/images/business/ic-provide.png",
    },
  ];

  return (
    <Container>
      <ContentContainer>
        <TImg>
          <Title>정부 과제 컨설팅</Title>
          <TText>정부 과제 A-Z지원(신청-협약-수행-종료-사후관리)</TText>
        </TImg>
      </ContentContainer>
      <ContentContainer>
        <NeedTitle>정부 과제 컨설팅이 왜 필요할까?</NeedTitle>
        <MessageContainer>
          {messages.map((msg, index) => (
            <MessageItem key={index} msg={msg} />
          ))}
        </MessageContainer>
      </ContentContainer>
      <ContentContainer>
        <MeritTitle>정부 과제 컨설팅의 핵심 이점</MeritTitle>
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
        <ProcessTitle>정부 과제 프로세스</ProcessTitle>
        <GovernmentProcess />
      </ContentContainer>
    </Container>
  );
};

export default SubscriptionPage;
