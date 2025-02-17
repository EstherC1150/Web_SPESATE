"use client";

import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import useInViewAnimate from "@/app/_hooks/useInViewAnimate";

interface CircleData {
  text: string;
  description: string;
  color: string;
}

const circles: CircleData[] = [
  {
    text: "고객 성공 파트너",
    description:
      "단순한 컨설팅을 넘어,\n고객의 비즈니스 성장을 위한 최고의 파트너",
    color: "#3b3536",
  },
  {
    text: "미래를 선도하는 기업",
    description: "미래 지향성을 바탕으로\n끊임없이 새로운 지식 습득",
    color: "#D1D3D5",
  },
  {
    text: "지속 가능한 성장",
    description:
      "단순히 이익 추구를 넘어,\n고객 중심의 가치창출로 지속 가능한 성장",
    color: "#28AAE2",
  },
];

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1120px;
  margin: 0 auto;
  position: relative;
  margin-top: 60px;
`;

const CircleContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 2rem;
  position: relative;
`;

const CircleWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 1;
`;

const CircleSVG = styled.svg`
  width: 240px;
  height: 240px;
`;

const TextBox = styled(motion.div)<{ color?: string }>`
  background-color: #ffffff;
  border-radius: 8px;
  padding: 30px 24px;
  width: 90%;
  margin-top: 30px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  text-align: center;

  h3 {
    font-size: 1.2rem;
    margin: 0 0 0.5rem 0;
    color: ${(props) => props.color || "#000"};
    margin-bottom: 20px;
    font-weight: 500;
  }

  p {
    font-size: 1rem;
    margin: 0;
    line-height: 1.2;
    font-weight: 400;
    text-align: center;
    white-space: pre-wrap;
  }
`;

const PlusBoxOne = styled(motion.div)`
  position: absolute;
  top: 30%;
  left: 33.2%;
  transform: translateX(-33.2%) translateY(-30%);
  font-size: 32px;
  color: #575757;
`;

const PlusBoxTwo = styled(motion.div)`
  position: absolute;
  top: 30%;
  left: 67%;
  transform: translateX(-67%) translateY(-30%);
  font-size: 32px;
  color: #575757;
`;

const imageUrl = [
  "/images/company/ic-partner.png",
  "/images/company/ic-company.png",
  "/images/company/ic-growth.png",
];

const text = ["고객 성공 파트너", "미래를 선도하는 기업", "지속 가능한 성장"];

const VisionAnimaiton = () => {
  const { ref: containerRef, isInView } = useInViewAnimate();

  return (
    <Layout>
      <PlusBoxOne
        initial={{ opacity: 0, y: 0, x: "-33.2%" }}
        animate={isInView ? { opacity: 1, y: "-70%", x: "-33.2%" } : {}}
        transition={{
          delay: 0.3,
          duration: 0.5,
          ease: "easeInOut",
        }}
      >
        +
      </PlusBoxOne>
      <PlusBoxTwo
        initial={{ opacity: 0, y: 0, x: "-67%" }}
        animate={isInView ? { opacity: 1, y: "-70%", x: "-67%" } : {}}
        transition={{
          delay: 1,
          duration: 0.5,
          ease: "easeInOut",
        }}
      >
        +
      </PlusBoxTwo>
      {/* 원과 텍스트를 함께 배치 */}
      <CircleContainer ref={containerRef}>
        {circles.map((circle, index) => (
          <CircleWrapper key={index}>
            {/* 원 애니메이션 */}
            <CircleSVG viewBox="0 0 100 100">
              <motion.circle
                cx="50"
                cy="50"
                r="45"
                fill="#FFFFFF"
                stroke={circle.color}
                strokeWidth="3.5"
                strokeDasharray="283" // 2 * π * r
                strokeDashoffset="283"
                initial={{ strokeDashoffset: 283 }}
                animate={
                  isInView ? { strokeDashoffset: 0 } : { strokeDashoffset: 283 }
                }
                transition={{
                  delay: index * 0.5,
                  duration: 1,
                  ease: "easeInOut",
                }}
                style={{
                  transformOrigin: "center",
                  transform: "rotate(135deg)",
                }}
              />
              <motion.image
                href={imageUrl[index]} // 아이콘 경로
                x={35}
                y={27}
                width="32" // 아이콘 크기
                height="32"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{
                  delay: index * 0.5 + 0.5,
                  duration: 0.5,
                  ease: "easeInOut",
                }}
              />
              <motion.text
                x="50"
                y="68"
                fill="#2e2e2e"
                textAnchor="middle"
                alignmentBaseline="central"
                fontSize="7px"
                fontWeight="700"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{
                  delay: index * 0.5 + 0.5,
                  duration: 0.5,
                  ease: "easeInOut",
                }}
              >
                {text[index]}
              </motion.text>
            </CircleSVG>

            {/* 텍스트 애니메이션 */}
            <TextBox
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: index * 0.5 + 0.5, duration: 0.5 }}
              color={circle.color === "#D1D3D5" ? "#6e6e6e" : circle.color}
            >
              <h3>{circle.text}</h3>
              <p>{circle.description}</p>
            </TextBox>
          </CircleWrapper>
        ))}
      </CircleContainer>
    </Layout>
  );
};

export default VisionAnimaiton;
