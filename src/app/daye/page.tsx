// pages/index.tsx
"use client";
import React from "react";
import styled, { keyframes } from "styled-components";

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
  width: 1200px;
  margin: 0 auto;
`;
const Title = styled.h2`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 70px;
`;

// 메시지 컨테이너 스타일
const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px; /* 각 메시지 간 기본 간격 */
  width: 600px;
  margin: 0 auto;
`;

// 메시지 박스 스타일
const MessageWrapper = styled.div<{ align: "left" | "right" }>`
  display: flex;
  justify-content: ${(props) =>
    props.align === "left" ? "flex-start" : "flex-end"};
  margin-bottom: 30px; /* 왼쪽-오른쪽 메시지 간 추가 간격 */
`;

const Message = styled.div<{ align: "left" | "right"; delay: number }>`
  background-color: ${(props) =>
    props.align === "left" ? "#d1d3d5" : "#28aae2"};
  color: #221e1f;
  font-size: 18px;
  padding: 10px 15px;
  border-radius: 15px;
  max-width: 400px;
  position: relative;
  animation: ${fadeIn} 0.5s ease-out forwards;
  animation-delay: ${(props) => props.delay}s;
  opacity: 0;
  transform: translateY(20px);
  line-height: 1.2;

  // 말풍선 꼬리 추가
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    ${(props) =>
      props.align === "left"
        ? `left: -6px; border: 8px solid transparent; border-top-color: #d1d3d5;`
        : `right: -6px; border: 8px solid transparent; border-top-color: #28aae2;`}
  }
`;

// 메시지 버블 컴포넌트
function MessageBubble() {
  const messages = [
    {
      text: "최근 정부 지원사업이 많이 늘었는데, 공고 내용이 너무 복잡하고, 평가 기준이나 신청 절차도 이해하기 어려워요. 이런 상황에서 어떻게 해야 할까요?",
      align: "left",
      delay: 0,
    } as const,
    {
      text: "그렇습니다. 그렇기 때문에 기업들이 필요한 정보를 빠르게 얻기가 어렵습니다. 이로 인해 많은 중소기업들이 지원사업을 선택하는 데 어려움을 겪고 있습니다. 그 결과, 적합한 사업을 찾고 성공적으로 수행하는 데 큰 걸림돌이 되고 있죠.",
      align: "right",
      delay: 0.4,
    } as const,
    {
      text: "그렇군요. 그럼 이런 문제를 해결할 수 있는 방법이 있을까요?",
      align: "left",
      delay: 0.8,
    } as const,
    {
      text: "네, 바로 맞춤형 정보 제공 솔루션이 필요합니다. 저희 솔루션은 기업의 상태와 필요에 맞는 지원사업을 자동으로 추천해주고, 복잡한 절차를 간소화하여 쉽게 이해하고 빠르게 신청할 수 있도록 도와줍니다. 이를 통해 기업들은 적합한 지원사업을 신속하게 찾아서, 더욱 효과적으로 활용할 수 있습니다.",
      align: "right",
      delay: 1.2,
    } as const,
  ];

  return (
    <Container>
      <Title>정기 지원 컨설팅의 필요성</Title>
      <MessageContainer>
        {messages.map((msg, index) => (
          <MessageWrapper key={index} align={msg.align}>
            <Message align={msg.align} delay={msg.delay}>
              {msg.text}
            </Message>
          </MessageWrapper>
        ))}
      </MessageContainer>
    </Container>
  );
}

// 페이지 컴포넌트
export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#ffffff",
      }}
    >
      <MessageBubble />
    </div>
  );
}
