import React from "react";
import styled, { keyframes } from "styled-components";

interface TalentCardProps {
  number: string;
  title: string;
  description: string;
  bgColor: string;
  icon: string;
}

const slideUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const CardWrapper = styled.div`
  width: 100%;
  height: 100%;
  filter: drop-shadow(4px 4px 5px rgba(0, 0, 0, 0.2));
  opacity: 0;
  animation: ${slideUp} 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  will-change: transform, opacity;
`;

const Card = styled.div<{ $bgColor: string }>`
  background-color: ${(props) => props.$bgColor};
  color: white;
  padding: 60px 30px;
  text-align: center;
  width: 100%;
  height: 100%;
  min-height: 400px;
  position: relative;
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  clip-path: polygon(0 0, 85% 0, 100% 15%, 100% 100%, 0 100%);
  transition: transform 0.5s ease;

  &:hover {
    transform: translateY(-5px);
  }

  h1 {
    margin: 0;
    font-size: 24px;
    font-weight: bold;
  }

  h2 {
    margin: 0;
    font-size: 18px;
    font-weight: bold;
    line-height: 1.4;
    white-space: pre-wrap;
  }

  p {
    font-size: 15px;
    margin-top: 12px;
    line-height: 1.6;
    word-break: keep-all;
    white-space: pre-wrap;
  }

  img {
    width: 70px;
    height: 70px;
    margin-bottom: 16px;
    filter: brightness(0) invert(1);
    transition: transform 0.5s ease;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

function TalentCard({
  number,
  title,
  description,
  bgColor,
  icon,
}: TalentCardProps) {
  return (
    <CardWrapper>
      <Card $bgColor={bgColor}>
        <img src={icon} alt="icon" />
        <h1>0{number}</h1>
        <h2>{title}</h2>
        <p>{description}</p>
      </Card>
    </CardWrapper>
  );
}

const cardData = [
  {
    number: "1",
    title: "창의적이고 혁신적인\n" + "문제 해결 능력을 갖춘 인재",
    description:
      "혁신적인 사고와 새로운 아이디어로\n" + "컨설팅의 한계를 극복하고 발전",
    bgColor: "#38bdf8",
    icon: "/images/talent/ic-creative.png",
  },
  {
    number: "2",
    title: "고객과의 신뢰를 바탕으로\n" + "최고의 품질을 추구하는 인재",
    description:
      "고객의 요구를 정확하게 파악하고,\n" + "신뢰를 바탕으로 파트너십을 구축",
    bgColor: "#2563eb",
    icon: "/images/talent/ic-trust.png",
  },
  {
    number: "3",
    title: "전문성을 바탕으로\n" + "컨설팅을 성공적으로 이끄는 인재",
    description:
      "끊임없이 학습하고 자기 개발을 통해\n" +
      "전문성을 강화하고, 변화하는 환경에 적응",
    bgColor: "#1e3a8a",
    icon: "/images/talent/ic-expert.png",
  },
];

function TalentCardList() {
  return (
    <CardContainer>
      {cardData.map((card, index) => (
        <TalentCard
          key={index}
          number={card.number}
          title={card.title}
          description={card.description}
          bgColor={card.bgColor}
          icon={card.icon}
        />
      ))}
    </CardContainer>
  );
}

export default TalentCardList;
