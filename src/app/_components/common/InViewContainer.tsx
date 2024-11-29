import { useInView, motion } from "framer-motion";
import React, { ReactNode, useRef } from "react";

type Props = {
  children: ReactNode;
  delayTime: number;
};

const InViewContainer = ({ children, delayTime }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // 화면에 보일 때마다 트리거

  const variants = {
    hidden: { opacity: 0, y: 50 }, // 초기 상태: 불투명도 0, 아래로 50px 이동
    visible: { opacity: 1, y: 0 }, // 최종 상태: 불투명도 1, 제자리
  };

  return (
    <motion.div
      style={{ display: "flex", position: "relative", width: " 100%" }}
      ref={ref}
      initial="hidden" // 컴포넌트가 화면에 보이기 전에 "hidden" 상태
      animate={isInView ? "visible" : "hidden"} // 보일 때 "visible", 안 보일 때 "hidden"
      exit="hidden" // 화면에서 벗어나면 "hidden" 상태로 전환
      variants={variants} // 상태 변화를 정의한 객체
      transition={{ duration: 0.7, ease: "easeOut", delay: delayTime }}
    >
      {children}
    </motion.div>
  );
};

export default InViewContainer;
