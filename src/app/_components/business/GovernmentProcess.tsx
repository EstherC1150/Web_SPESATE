"use client";

import React from "react";
import { motion } from "framer-motion";
import colors from "@/app/_constants/colors";
import useInViewAnimate from "@/app/_hooks/useInViewAnimate";

const milestones = [
  {
    label: "사업 공고분석",
    text: "- 사업공고 분석 지원\n- 기업 맞춤형 과제 매칭",
  },
  {
    label: "사업 기획",
    text: "- 사업계획서 작성 지원\n- 시장성 분석지원",
  },
  {
    label: "평가",
    text: "- 발표 자료 작성 지원\n- 평가 지원",
  },
  {
    label: "협약",
    text: "- 행정절차지원",
  },
  {
    label: "연구개발 수행",
    text: "-사업 일정 및 비용 관리 지원\n- 연구노트 작성 지원",
  },
  {
    label: "최종보고",
    text: "- 결과보고서 작성지원\n- 과제 수행결과 분석",
  },
  {
    label: "사후관리",
    text: "- 사후관리 지원",
  },
];

const GovernmentProcess = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const itemVariants = (index: number) => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: index * 0.3, ease: "easeInOut" },
    },
  });

  const textVariants = (index: number) => ({
    hidden: { opacity: 0, x: "-50%", y: index % 2 === 0 ? 50 : -50 },
    visible: {
      opacity: 1,
      y: 0,
      x: "-50%",
      transition: { duration: 0.5, delay: index * 0.3, ease: "easeInOut" },
    },
  });

  // Ref로 감싸서 뷰포트에 들어왔는지 확인
  const { ref: timelineRef, isInView } = useInViewAnimate();

  return (
    <div
      style={{
        overflow: "hidden",
        padding: "200px 0",
        height: "430px",
        width: "1120px",
      }}
      ref={timelineRef} // 타임라인 감지할 DOM에 ref 추가
    >
      <motion.div
        className="timeline"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"} // 뷰포트에 들어올 때만 애니메이션 실행
        variants={containerVariants}
        style={{ display: "flex", alignItems: "center", position: "relative" }}
      >
        {/* SVG로 선과 화살표를 나타냄 */}
        <svg
          style={{
            width: "1120px",
            height: "50px",
            position: "absolute",
            top: "50%",
            left: "0",
            transform: "translateY(-50%)",
          }}
        >
          <defs>
            <marker
              id="arrow"
              viewBox="7 0 11 10"
              markerWidth="8"
              markerHeight="6"
              refX="7"
              refY="5"
              orient="auto"
            >
              <motion.path
                d="M 0 0 L 10 5 L 0 10 Z"
                fill={`${colors.primary.main}`}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  delay: 2.1,
                  duration: 0.25,
                  ease: "easeInOut",
                }}
              />
            </marker>
          </defs>

          <motion.line
            x1="0"
            y1="25"
            x2="calc(100% - 20px)"
            y2="25"
            stroke={`${colors.primary.main}`}
            strokeWidth="10"
            markerEnd="url(#arrow)"
            initial={{ strokeDasharray: "0, 10000" }}
            animate={isInView ? { strokeDasharray: "10000, 0" } : {}}
            transition={{ duration: 20, ease: "linear" }}
          />
        </svg>

        {milestones.map((milestone, index) => (
          <motion.div
            className="milestone"
            key={index}
            style={{
              position: "relative",
              marginLeft: index === 0 ? "140px" : "9%",
              textAlign: "center",
              overflow: "visible",
            }}
          >
            <motion.div
              style={{
                width: "32px", // 감싸는 원의 크기 (기존 동그라미보다 큼)
                height: "32px",
                borderRadius: "50%",
                background: "#fff", // 감싸는 원의 색
                margin: "0 auto",
                display: "flex", // 내부 동그라미와 겹치지 않게 배치
                justifyContent: "center", // 내부 동그라미를 가운데로 배치
                alignItems: "center",
                border: "1px solid #d8d8d8",
              }}
              custom={index}
              variants={itemVariants(index)}
            >
              <motion.div
                style={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  background: `${colors.primary.main}`, // 기존 동그라미의 색
                }}
                custom={index}
                variants={itemVariants(index)}
              />
            </motion.div>

            <motion.svg
              style={{
                position: "absolute",
                top: index % 2 === 0 ? "65px" : "-45px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "2px",
                height: "150px",
                zIndex: "100",
                overflow: "visible",
              }}
            >
              <motion.line
                x1="0"
                y1="5"
                x2="0"
                y2={index % 2 === 0 ? "55" : "-45"}
                stroke={`${colors.primary.main}`}
                strokeWidth="2"
                initial={{ strokeDasharray: "0, 150" }}
                animate={isInView ? { strokeDasharray: "150, 0" } : {}}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                  delay: index * 0.3,
                }}
              />
            </motion.svg>

            <motion.div
              className="year-text"
              style={{
                position: "absolute",
                top: index % 2 === 0 ? "45px" : "-35px",
                left: "50%",
                transform: "translateX(-50%)",
                fontSize: "18px",
                fontWeight: "bold",
                color: "#221E1F",
                opacity: 0,
                width: "180px",
              }}
              custom={index}
              variants={textVariants(index)}
            >
              {milestone.label}
            </motion.div>

            <motion.div
              className="milestone-box"
              style={{
                marginTop: "10px",
                backgroundColor: "#fff",
                padding: "20px 12px",
                borderRadius: "8px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                whiteSpace: "pre-line",
                position: "absolute",
                top: index % 2 === 0 ? "110px" : "-200px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "220px",
                height: "100px",
                textAlign: "left",
                display: "flex",
                alignItems: "center",
                border: `2px solid ${colors.primary.main}`,
              }}
              custom={index}
              variants={textVariants(index)}
            >
              <p
                style={{
                  lineHeight: "1.2",
                  width: "100%",
                }}
              >
                {milestone.text}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default GovernmentProcess;
