"use client";

import React from "react";
import { motion } from "framer-motion";
import colors from "@/app/_constants/colors";
import useInViewAnimate from "@/app/_hooks/useInViewAnimate";

const milestones = [
  { year: "2024", text: "- SPESATE설립\n- 파트너 1개 유치" },
  {
    year: "2025",
    text: "- 파트너 5개 유치\n- 파트너 과제 총 사업비 합산 5억\n- 성능시험 전문기관 연계",
  },
  {
    year: "2026",
    text: "- 파트너 10개 유치\n- 파트너 과제 총 사업비 합산 10억\n- 특허사무소 연계",
  },
  {
    year: "2027",
    text: "- 파트너 20개 유치\n- 파트너 과제 총 사업비 합산 30억\n- 파트너 컨소시움 구성",
  },
  {
    year: "2028",
    text: "- 파트너 50개 유치\n- 파트너 과제 총 사업비 합산 100억\n- 평가기관 심사위원 등록",
  },
];

const Timeline = () => {
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
        padding: "200px 20px",
        height: "430px",
        width: "1200px",
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
            width: "100%",
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
              markerWidth="6"
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
                  delay: 1.1,
                  duration: 0.25,
                  ease: "easeInOut",
                }}
              />
            </marker>
          </defs>

          <motion.line
            x1="0"
            y1="25"
            x2="calc(100% - 50px)"
            y2="25"
            stroke={`${colors.primary.main}`}
            strokeWidth="10"
            markerEnd="url(#arrow)"
            initial={{ strokeDasharray: "0, 10000" }}
            animate={isInView ? { strokeDasharray: "10000, 0" } : {}}
            transition={{ duration: 12, ease: "linear" }}
          />
        </svg>

        {milestones.map((milestone, index) => (
          <motion.div
            className="milestone"
            key={index}
            style={{
              position: "relative",
              marginLeft: index === 0 ? "140px" : "15%",
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
              }}
              custom={index}
              variants={textVariants(index)}
            >
              {milestone.year}
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
                width: "280px",
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

export default Timeline;
