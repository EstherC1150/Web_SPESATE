"use client";

import React from "react";
import { easeInOut, motion } from "framer-motion";

const Timeline = () => {
  const milestones = [
    { year: "2024", text: "회사설립\n고객사 1개 유지" },
    {
      year: "2025",
      text: "고객사 10개 유지\n고객사 과제 총 사업비 합산 20억\n성능시험 전문기관 연계\n벤처기업등록",
    },
    {
      year: "2026",
      text: "고객사 25개 유지\n고객사 과제 총 사업비 합산 60억\n인증 전문인력 확보\n사업 전문가 컨설팅 기업 등록",
    },
    {
      year: "2027",
      text: "고객사 50개 유지\n고객사 과제 총 사업비 합산 120억\n특허 사무소 연계\n고객사 컨소시움 구성",
    },
    {
      year: "2028",
      text: "고객사 100개 유지\n고객사 과제 총 사업비 합산 300억\n기업부설 연구소 등록\n평가기관 심사위원 등록",
    },
  ];

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
    hidden: { opacity: 0 }, // 아래에서 시작
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: index * 0.3, easeInOut }, // 딜레이 추가
    },
  });

  const textVariants = (index: number) => ({
    hidden: { opacity: 0, x: "-50%", y: index % 2 === 0 ? 50 : -50 }, // 아래에서 시작
    visible: {
      opacity: 1,
      y: 0,
      x: "-50%",
      transition: { duration: 0.5, delay: index * 0.3, easeInOut }, // 딜레이 추가
    },
  });

  return (
    <div
      style={{
        overflow: "hidden",
        padding: "300px 20px",
        backgroundColor: "#f4f4f4",
        height: "700px",
        width: "1200px",
      }}
    >
      <motion.div
        className="timeline"
        initial="hidden"
        animate="visible"
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
          {/* SVG Marker 정의 */}
          <defs>
            <marker
              id="arrow"
              viewBox="7 0 11 10"
              markerWidth="6"
              markerHeight="6"
              refX="7" /* 삼각형 끝을 선 끝과 맞추기 위해 조정 */
              refY="5"
              orient="auto"
            >
              <motion.path
                d="M 0 0 L 10 5 L 0 10 Z"
                fill="#ccc"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 1.3, // 0.3초 후에 나타남
                  duration: 0.25, // 0.5초 동안 애니메이션
                  ease: "easeInOut",
                }}
              />
            </marker>
          </defs>

          {/* 선 애니메이션 */}
          <motion.line
            x1="0"
            y1="25"
            x2="calc(100% - 50px)" /* 끝에서 30px 멈춤 */
            y2="25"
            stroke="#ccc"
            strokeWidth="30"
            markerEnd="url(#arrow)"
            initial={{ strokeDasharray: "0, 10000" }}
            animate={{ strokeDasharray: "10000, 0" }}
            transition={{ duration: 8, ease: "linear" }}
          />
        </svg>

        {milestones.map((milestone, index) => (
          <motion.div
            className="milestone"
            key={index}
            style={{
              position: "relative",
              marginLeft: index === 0 ? "100px" : "18%",
              textAlign: "center",
            }}
          >
            <motion.div
              style={{
                width: "16px",
                height: "16px",
                borderRadius: "50%",
                background: "#007BFF",
                margin: "0 auto",
              }}
              custom={index} // Framer Motion의 variants를 동적 적용
              variants={itemVariants(index)}
            ></motion.div>

            {/* 연도와 텍스트 박스를 연결하는 선 추가 */}
            <motion.svg
              style={{
                position: "absolute",
                top: "-100px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "2px",
                height: "200px", // 전체 길이를 100%로 설정하여 화면에 꽉 채우기
              }}
              custom={index}
              // variants={lineVariants(index)}
            >
              {/* 아래쪽 선 */}
              {index % 2 === 0 ? (
                <motion.line
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="40" // 길이 조절
                  stroke="black" // 선 색을 검은색으로 설정
                  strokeWidth="2"
                  initial={{ strokeDasharray: "0, 100" }}
                  animate={{ strokeDasharray: "100, 0" }}
                  transition={{ duration: 1, ease: "linear" }}
                />
              ) : (
                <motion.line
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="-40" // 길이 조절
                  stroke="black" // 선 색을 검은색으로 설정
                  strokeWidth="2"
                  initial={{ strokeDasharray: "0, 100" }}
                  animate={{ strokeDasharray: "100, 0" }}
                  transition={{ duration: 1, ease: "linear" }}
                />
              )}
            </motion.svg>

            {/* 연도를 표시하는 부분 추가 */}
            <motion.div
              className="year-text"
              style={{
                position: "absolute",
                top: index % 2 === 0 ? "35px" : "-35px", // 점과 텍스트 박스 사이에 위치
                left: "50%",
                transform: "translateX(-50%)",
                fontSize: "18px",
                fontWeight: "bold",
                color: "#007BFF",
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
                padding: "10px",
                borderRadius: "8px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                whiteSpace: "pre-line",
                position: "absolute",
                top: index % 2 === 0 ? "100px" : "-220px", // 순차적으로 아래/위에 배치
                left: "50%",
                transform: "translateX(-50%)",
                width: "200px",
                height: "120px",
              }}
              custom={index}
              variants={textVariants(index)}
            >
              <p>{milestone.text}</p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Timeline;
