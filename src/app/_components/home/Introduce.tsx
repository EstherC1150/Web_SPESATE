import colors from "@/app/_constants/colors";

import React from "react";
import styled from "styled-components";
import IntroductionAnimationTest from "./IntroduceTextAnimation";

const SSection = styled.section`
  height: 100vh;
  width: 100%;
  background-color: #191922;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const STextContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 22px;
  width: 1200px;
`;

const STitle = styled.h1`
  font-size: 66px;
  font-weight: 800;
  color: #fdfdfd;
  margin-top: 60px;
  letter-spacing: 0.03em;
  position: relative;

  span {
    color: ${colors.primary.main}; /* 텍스트 기본 색상 */
  }

  &::before {
    content: "";
    position: absolute;
    top: 210px;
    left: 50%;
    width: 1px; /* 1px 선 */
    height: 100%;
    background-color: #fdfdfd; /* 선 색상 */
    transform-origin: top;
    animation: spiderLine 2.5s infinite ease-in-out; /* 거미줄 늘어났다 줄어드는 애니메이션 */
  }

  &::after {
    content: "아래로";
    color: #fdfdfd; /* 텍스트 색상 */
    font-size: 0.875rem;
    font-weight: 600;
    text-align: center;
    position: absolute;
    top: calc(100% + 200px);
    left: 50%;
    transform: translateX(-50%);
    animation: spiderText 2.5s infinite ease-in-out; /* 텍스트 위아래로 움직이는 애니메이션 */
  }

  @keyframes spiderText {
    0%,
    100% {
      transform: translateX(-50%) translateY(0);
    }
    50% {
      transform: translateX(-50%) translateY(20px); /* 아래로 이동 */
    }
  }

  @keyframes spiderLine {
    0%,
    100% {
      transform: scaleY(0.5); /* 선이 줄어든 상태 */
    }
    50% {
      transform: scaleY(0.7); /* 선이 늘어난 상태 */
    }
  }
`;

const Introduce = () => {
  return (
    <SSection>
      <STextContainer>
        <IntroductionAnimationTest />
      </STextContainer>
      <STitle>
        고객 맞춤형 컨설팅 서비스는 <span>SPESATE</span>
      </STitle>
    </SSection>
  );
};

export default Introduce;
