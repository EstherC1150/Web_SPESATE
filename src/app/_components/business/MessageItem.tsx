"use client";

import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import styled from "styled-components";

// 메시지 박스 스타일
const MessageWrapper = styled(motion.div)<{ $align: "left" | "right" }>`
  display: flex;
  justify-content: ${(props) =>
    props.$align === "left" ? "flex-start" : "flex-end"};
  margin-bottom: 30px; /* 왼쪽-오른쪽 메시지 간 추가 간격 */
  white-space: pre-wrap;
`;

const Message = styled(motion.div)<{
  $align: "left" | "right";
  $delay: number;
}>`
  background-color: ${(props) =>
    props.$align === "left" ? "#dddddd" : "#4ecaff"};
  color: #221e1f;
  font-size: 22px;
  padding: 15px 20px;
  border-radius: 15px;
  max-width: 70%;
  position: relative;
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
      props.$align === "left"
        ? `left: -7px; border: 8px solid transparent; border-top-color: #dddddd;`
        : `right: -7px; border: 8px solid transparent; border-top-color: #4ecaff;`}
  }
`;

type Props = {
  msg: {
    text: string;
    align: "left" | "right";
    delay: number;
  };
};

const MessageItem = ({ msg }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });

  return (
    <MessageWrapper $align={msg.align} ref={ref}>
      <Message
        $align={msg.align}
        $delay={msg.delay}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        {msg.text}
      </Message>
    </MessageWrapper>
  );
};

export default MessageItem;
