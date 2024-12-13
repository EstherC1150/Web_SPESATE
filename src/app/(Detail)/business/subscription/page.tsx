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
  width: 1200px;
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
  top: 44%; /* 이미지 중앙에 위치 */
  left: 8%;
  font-size: 40px;
  transform: translate(0, -44%);
  font-weight: 600;
  color: #fff;
  z-index: 50;
`;

const TText = styled.p`
  position: absolute;
  top: 60%;
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
      text: "최근 정부 지원사업이 많이 늘었는데,\n공고 내용이 너무 복잡하고, 평가 기준이나 신청 절차도 이해하기 어려워요.\n이런 상황에서 어떻게 해야 할까요?",
      align: "left",
      delay: 0,
    } as const,
    {
      text: "그렇습니다. 그렇기 때문에 기업들이 필요한 정보를 빠르게 얻기가 어렵습니다.\n이로 인해 많은 중소기업들이 지원사업을 선택하는 데 어려움을 겪고 있습니다.\n그 결과, 적합한 사업을 찾고 성공적으로 수행하는 데 큰 걸림돌이 되고 있죠.",
      align: "right",
      delay: 0.4,
    } as const,
    {
      text: "그렇군요.\n그럼 이런 문제를 해결할 수 있는 방법이 있을까요?",
      align: "left",
      delay: 0.8,
    } as const,
    {
      text: "네, 바로 맞춤형 정보 제공 솔루션이 필요합니다.\n저희 솔루션은 기업의 상태와 필요에 맞는 지원사업을 자동으로 추천해주고, 복잡한 절차를 간소화하여 쉽게 이해하고 빠르게 신청할 수 있도록 도와줍니다.\n이를 통해 기업들은 적합한 지원사업을 신속하게 찾아서, 더욱 효과적으로 활용할 수 있습니다.",
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
          <Title>정기 지원 컨설팅</Title>
          <TText>사업공고분석& 매칭/ 고객아이템및자료관리</TText>
        </TImg>
      </ContentContainer>
      <ContentContainer>
        <NeedTitle>정기 지원 컨설팅의 필요성</NeedTitle>
        <MessageContainer>
          {messages.map((msg, index) => (
            <MessageItem key={index} msg={msg} />
          ))}
        </MessageContainer>
      </ContentContainer>
      <ContentContainer>
        <MeritTitle>정기 지원 컨설팅의 이점</MeritTitle>
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
