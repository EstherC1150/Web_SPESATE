"use client";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  /* background: #f7f7f7; */
`;

const Line = styled(motion.div)<{ $hasCursor?: boolean }>`
  font-size: 3.5rem;
  font-weight: 600;
  color: #ffffff;
  white-space: nowrap;
  line-height: 1.2;
  overflow: hidden;
  margin: 0.5rem 0;
  border-right: ${(props) => (props.$hasCursor ? "2px solid #f1f1f1" : "none")};
`;

const IntroductionAnimationTest = () => {
  const [line1Cursor, setLine1Cursor] = useState(true);
  const [line2Cursor, setLine2Cursor] = useState(false);

  const line1 = "중소·중견기업간 올바른 협력으로";
  const line2 = "긍정 시너지 창출 및 협력 생태계 구축";

  // 첫 번째 줄 애니메이션 후 커서 제거
  useEffect(() => {
    const timer1 = setTimeout(() => {
      setLine1Cursor(false); // 첫 번째 줄의 커서를 제거
      setLine2Cursor(true); // 두 번째 줄의 커서를 표시
    }, 2000); // 첫 번째 애니메이션 지속 시간과 동일

    const timer2 = setTimeout(() => {
      setLine2Cursor(false); // 두 번째 줄의 커서를 제거
    }, 4000); // 두 번째 줄 애니메이션 지속 시간까지 계산

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <Container>
      <Line
        $hasCursor={line1Cursor}
        initial={{ width: 0 }}
        animate={{ width: "fit-content" }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        {line1}
      </Line>
      <Line
        $hasCursor={line2Cursor}
        initial={{ width: 0 }}
        animate={{ width: "fit-content" }}
        transition={{ duration: 2, ease: "easeInOut", delay: 2 }}
      >
        {line2}
      </Line>
    </Container>
  );
};

export default IntroductionAnimationTest;
