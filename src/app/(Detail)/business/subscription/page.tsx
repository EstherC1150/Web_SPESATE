// pages/index.tsx
"use client";
import React from "react";
import styled, { keyframes } from "styled-components";
import Image from "next/image";

// 애니메이션 정의
const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

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
  background-image: url("/images/business/testimg2.png"); /* 이미지 경로 설정 */
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

// 메시지 컨테이너 스타일
const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px; /* 각 메시지 간 기본 간격 */
  width: 95%;
  margin: 0 auto;
`;

// 메시지 박스 스타일
const MessageWrapper = styled.div<{ align: "left" | "right" }>`
  display: flex;
  justify-content: ${(props) =>
    props.align === "left" ? "flex-start" : "flex-end"};
  margin-bottom: 30px; /* 왼쪽-오른쪽 메시지 간 추가 간격 */
  white-space: pre-wrap;
`;

const Message = styled.div<{ align: "left" | "right"; delay: number }>`
  background-color: ${(props) =>
    props.align === "left" ? "#dddddd" : "#4ecaff"};
  color: #221e1f;
  font-size: 22px;
  padding: 15px 20px;
  border-radius: 15px;
  max-width: 60%;
  position: relative;
  animation: ${fadeIn} 0.5s ease-out forwards;
  animation-delay: ${(props) => props.delay}s;
  opacity: 0;
  transform: translateY(20px);
  line-height: 150%;
  text-align: left;
  font-weight: 500;

  // 말풍선 꼬리 추가
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    ${(props) =>
      props.align === "left"
        ? `left: -6px; border: 8px solid transparent; border-top-color: #dddddd;`
        : `right: -6px; border: 8px solid transparent; border-top-color: #4ecaff;`}
  }
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
            <MessageWrapper key={index} align={msg.align}>
              <Message align={msg.align} delay={msg.delay}>
                {msg.text}
              </Message>
            </MessageWrapper>
          ))}
        </MessageContainer>
      </ContentContainer>
    </Container>
  );
};

export default SubscriptionPage;
