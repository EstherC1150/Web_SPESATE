import useInViewAnimate from "@/app/_hooks/useInViewAnimate";
import { TValue } from "@/app/_types/company/about/about.types";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

const ValueBox = styled(motion.div)`
  width: 40%;
  margin-bottom: 80px;
`;

const ValueTitle = styled.p`
  font-size: 24px;
  font-weight: 600;
`;

const ValueContent = styled.div`
  font-size: 20px;
  font-weight: 400;
  padding-left: 4px;
`;

const SubTitle = styled.p`
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 4px;

  &::before {
    content: "●";
    margin-right: 8px;
    display: inline-block;
    font-size: 6px;
    vertical-align: middle;
  }
`;

const SubContent = styled.p`
  font-weight: 400;
  font-size: 18px;
  margin-bottom: 12px;
  line-height: 130%;
  margin-left: 14px;
`;

type Props = {
  value: TValue;
  delay: number;
};

const CompanyValue = ({ value, delay }: Props) => {
  const { ref: viewRef, isInView } = useInViewAnimate();

  return (
    <ValueBox
      ref={viewRef}
      initial={{ opacity: 0, y: 20 }} // 초기 상태 (투명하고 아래 위치)
      animate={isInView ? { opacity: 1, y: 0 } : {}} // 애니메이션 완료 상태 (보이고 제자리로 이동)
      transition={{
        duration: 0.5, // 애니메이션 지속 시간
        delay: delay, // 개별 딜레이 적용
        ease: "easeOut", // 부드러운 종료 효과
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            position: "relative",
            width: "28px",
            height: "28px",
            marginRight: "8px",
          }}
        >
          <Image src={value.imgUrl} alt={value.alt} fill />
        </div>
        <ValueTitle>{value.title}</ValueTitle>
      </div>
      <ValueContent>
        {value.content.map((sub) => (
          <div key={sub.subTitle}>
            <SubTitle>{sub.subTitle}</SubTitle>
            <SubContent>{sub.subContent}</SubContent>
          </div>
        ))}
      </ValueContent>
    </ValueBox>
  );
};

export default CompanyValue;
