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
  margin-bottom: 70px;
`;

const MeritTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 70px;
`;

const ProcessTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 70px;
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
      text: "1. 정부 R&D 과제의 복잡성과 불확실성 심화",
      align: "left",
      delay: 0,
    } as const,
    {
      text: "정부R&D 과제는 분야별, 규모별, 지원내용별로 다양하게 구성되어 있으며, 각 과제마다 참여자격, 기술요건, 사업화계획 등 세부적인 수행조건이 상이, 최근에는 대형과제가 증가하면서 중소기업 입장에서는 복잡한 평가기준과 까다로운 행정절차에 어려움을 겪고있음",
      align: "right",
      delay: 0.4,
    } as const,
    {
      text: "2. 중소기업의 자원부족",
      align: "left",
      delay: 0.8,
    } as const,
    {
      text: "중소기업은 대기업에 비해 시간, 인력, 정보 등 자원 부족으로 정부 R&D 과제를 효과적으로 수행하기가 어려움",
      align: "right",
      delay: 1.2,
    } as const,
    {
      text: "3. 경쟁 심화",
      align: "left",
      delay: 1.6,
    } as const,
    {
      text: "정부 R&D 과제는 기업의 성장을 위한 중요한 기회이므로, 많은 기업들이 참여하여 경쟁이 치열함. 특히 정부의 R&D 투자가 확대되면서 경쟁 강도가 더욱 심화되고 있음",
      align: "right",
      delay: 2.0,
    } as const,
    {
      text: "4. 사업화의 어려움",
      align: "left",
      delay: 2.4,
    } as const,
    {
      text: "정부 R&D 과제에 성공적으로 참여하더라도, 연구결과를 사업화하는 과정에서 많음 어려움이 있음",
      align: "right",
      delay: 2.8,
    } as const,
  ];

  const merits = [
    {
      title: "기업 역량과 목표에 맞는 정부 R&D 과제 발굴",
      description:
        "다양한 정부 R&D 과제 중에서 기업의 기술 역량과 목표에 가장 부합하는 과제를 선별해 지원받을 수 있습니다.",
      icon: "/images/business/ic-goal.png",
    },
    {
      title: "경쟁력 있는 사업계획서 작성 지원",
      description:
        "평가위원의 요구사항을 반영하여 보다 완성도 높고 경쟁력 있는 사업계획서를 작성할 수 있도록 지원합니다.",
      icon: "/images/business/ic-support.png",
    },
    {
      title: "기술적·행정적 문제 해결을 통한 원활한 사업 수행",
      description:
        "사업 수행 과정에서 발생하는 기술적, 행정적 문제를 해결하여 프로젝트가 원활하게 진행될 수 있도록 도와줍니다.",
      icon: "/images/business/ic-solution.png",
    },
    {
      title: "최신 기술 동향 파악 및 사업화 자문 제공",
      description:
        "정부 R&D 과제를 통해 최신 기술 동향을 파악하고, 기술 개발 및 사업화에 필요한 전문적인 자문을 받을 수 있습니다.",
      icon: "/images/business/ic-provide.png",
    },
  ];

  return (
    <Container>
      <ContentContainer>
        <TImg>
          <Title>정부 관리 컨설팅</Title>
          <TText>정부 과제 A-Z지원(신청, 수행, 종료)</TText>
        </TImg>
      </ContentContainer>
      <ContentContainer>
        <NeedTitle>정부 관리 컨설팅의 필요성</NeedTitle>
        <MessageContainer>
          {messages.map((msg, index) => (
            <MessageItem key={index} msg={msg} />
          ))}
        </MessageContainer>
      </ContentContainer>
      <ContentContainer>
        <MeritTitle>정부 관리 컨설팅의 이점</MeritTitle>
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
