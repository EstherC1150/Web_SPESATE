// pages/index.tsx
"use client";
import React from "react";
import styled from "styled-components";
import MeritBox from "@/app/_components/business/MeritBox";
import MessageItem from "@/app/_components/business/MessageItem";

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
  background-image: url("/images/business/testimg3.jpg"); /* 이미지 경로 설정 */
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
      text: "1번: 정부 지원 사업이 너무 복잡해요!\n정부 지원 사업이 많지만, 맞는 걸 찾기 어렵고 공고도 복잡해요.",
      align: "left",
      delay: 0,
    } as const,
    {
      text: "정부 지원 사업은 점점 세분화되고 있어요.\n• 기업 규모, 사업 단계에 따라 신청 요건이 다름\n• 기존 지원 이력에 따라 중복 지원 여부 고려\n• 평가 기준(기술력, 재무 건전성 등)에 맞춰 전략 필요\n\n🔹SPESATE에서는 맞춤 분석을 통해\n✅ 최적의 지원 사업 추천\n✅ 신청부터 선정, 사후 관리까지 지원",
      align: "right",
      delay: 0.4,
    } as const,
    {
      text: "2번: 우리 회사에 맞는 지원 사업이 뭔가요?\n지원 사업이 많지만, 우리에게 맞는 걸 찾기 어려워요.",
      align: "left",
      delay: 0.8,
    } as const,
    {
      text: "업종, 매출만으로는 부족합니다!",
      align: "right",
      delay: 1.2,
    } as const,
  ];

  const merits = [
    {
      title: "정확하고 신속한 정보 제공",
      description:
        "기업형 맞춤형 정보 제공 시스템을 통해 중소기업이 필요로 하는 정보를 적시에 제공받아 경영 활동에 활용할 수 있습니다.",
      icon: "/images/business/ic-fasttime.png",
    },
    {
      title: "정기적인 정보 업데이트",
      description:
        "변화하는 정책과 시장 동향에 맞춰 시스템 내 정보가 주기적으로 업데이트되어 최신 정보를 항상 확인할 수 있습니다.",
      icon: "/images/business/ic-update.png",
    },
    {
      title: "맞춤형 상담 서비스",
      description:
        "중소기업의 개별 상황과 필요에 맞춘 전문 상담을 통해 맞춤형 솔루션을 제공합니다.",
      icon: "/images/business/ic-candidate.png",
    },
    {
      title: "변화하는 정책 환경에 대한 빠른 대응 지원",
      description:
        "정책 변화에 신속히 대응할 수 있도록 관련 정보를 제공하고, 필요한 경우 추가 지원 방안을 안내합니다.",
      icon: "/images/business/ic-responsibility.png",
    },
  ];

  return (
    <Container>
      <ContentContainer>
        <TImg>
          <Title>정기 관리 컨설팅</Title>
          <TText>사업공고분석& 매칭/ 고객아이템및자료관리</TText>
        </TImg>
      </ContentContainer>
      <ContentContainer>
        <NeedTitle>정기 관리 컨설팅이 왜 필요할까?</NeedTitle>
        <MessageContainer>
          {messages.map((msg, index) => (
            <MessageItem key={index} msg={msg} />
          ))}
        </MessageContainer>
      </ContentContainer>
      <ContentContainer>
        <MeritTitle>정기 관리 컨설팅의 이점</MeritTitle>
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
    </Container>
  );
};

export default SubscriptionPage;
