"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 684px;
  background-color: #fff;
`;

const SVGContainer = styled.div`
  width: 100%;
  height: 600px; /* 높이를 충분히 확보 */
  position: relative;
`;

const labels = [
  { id: "고객" },
  { id: "지자체 기관" },
  { id: "시험 기관" },
  { id: "특허 사무소" },
  { id: "인증기관" },
  { id: "컨설팅" },
];

const icons = [
  "/images/company/ic-people.svg",
  "/images/company/ic-reichstag.svg",
  "/images/company/ic-museum.svg",
  "/images/company/ic-office.svg",
  "/images/company/ic-diploma.svg",
];

const NetworkDiagram = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  const centerX = 300; // 중앙 X 좌표
  const centerY = 300; // 중앙 Y 좌표
  const radius = 200; // 바깥 원들의 반경 (중앙에서의 거리)

  // 각도 기반으로 좌표 계산
  const positionedLabels = labels.map((label, index) => {
    const angle = (index / labels.length) * 2 * Math.PI + Math.PI / 6; // 45도 회전 추가
    const x = centerX + radius * Math.cos(angle); // X 좌표
    const y = centerY + radius * Math.sin(angle); // Y 좌표
    return { ...label, x, y };
  });

  return (
    <Container>
      <SVGContainer ref={containerRef}>
        <svg width="100%" height="100%" viewBox="50 50 500 500">
          {/* 모든 선을 먼저 렌더링 */}
          {positionedLabels.map((label, index) => {
            if (index === labels.length - 1) return;

            return (
              <motion.line
                key={`line-${index}`}
                x1="300"
                y1="300"
                x2={label.x}
                y2={label.y}
                stroke="#aaaaaa"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              />
            );
          })}

          {
            <motion.line
              x1="300"
              y1="300"
              x2={positionedLabels[positionedLabels.length - 1].x}
              y2={positionedLabels[positionedLabels.length - 1].y}
              stroke="#28AAE2"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            />
          }

          {/* 중앙 원 */}
          <motion.circle
            cx="300"
            cy="300"
            r="80"
            fill="#ffffff"
            stroke="#28AAE2"
            strokeWidth="3"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.5 }}
          />
          {/* 아이콘 */}
          <motion.image
            href="/images/company/ic-meeting.svg" // 아이콘 경로
            x={260} // 아이콘 X 좌표
            y={250} // 아이콘 Y 좌표 (텍스트 위에 위치)
            width="80" // 아이콘 크기
            height="80"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.5 }}
          />
          <motion.text
            x="300"
            y="350"
            fill="#28AAE2"
            textAnchor="middle"
            alignmentBaseline="central"
            fontSize="16px"
            fontWeight="700"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.5 }}
          >
            협력 생태계
          </motion.text>

          {/* 바깥 원과 텍스트 */}
          {positionedLabels.map((label, index) => {
            if (index === positionedLabels.length - 1) return;

            return (
              <React.Fragment key={`circle-${index}`}>
                {/* 바깥 원 */}
                <motion.circle
                  cx={label.x}
                  cy={label.y}
                  r="50"
                  fill="#ffffff"
                  stroke="#aaaaaa"
                  strokeWidth="2"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                />

                {/* 아이콘 */}
                <motion.image
                  href={icons[index]} // 아이콘 경로
                  x={label.x - 30} // 아이콘 X 좌표
                  y={label.y - 40} // 아이콘 Y 좌표 (텍스트 위에 위치)
                  width="60" // 아이콘 크기
                  height="60"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                />

                {/* 텍스트 */}
                <motion.text
                  x={label.x}
                  y={label.y + 25}
                  fill="#aaaaaa"
                  textAnchor="middle"
                  alignmentBaseline="central"
                  fontSize="14px"
                  fontWeight={600}
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  {label.id}
                </motion.text>
              </React.Fragment>
            );
          })}

          <React.Fragment>
            {/* 바깥 원 */}
            <motion.circle
              cx={positionedLabels[positionedLabels.length - 1].x}
              cy={positionedLabels[positionedLabels.length - 1].y}
              r="50"
              fill="#ffffff"
              stroke="#28AAE2"
              strokeWidth="3"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            />

            <React.Fragment>
              {/* 아이콘 */}
              <motion.image
                href="/images/company/logo.svg" // 아이콘 경로
                x={positionedLabels[positionedLabels.length - 1].x - 40} // 아이콘 X 좌표
                y={positionedLabels[positionedLabels.length - 1].y - 35} // 아이콘 Y 좌표 (텍스트 위에 위치)
                width="80" // 아이콘 크기
                height="60"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              />

              {/* 텍스트 */}
              <motion.text
                x={positionedLabels[positionedLabels.length - 1].x}
                y={positionedLabels[positionedLabels.length - 1].y + 25}
                fill="#28AAE2"
                textAnchor="middle"
                alignmentBaseline="central"
                fontSize="16px"
                fontWeight={700}
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                {labels[labels.length - 1].id}
              </motion.text>
            </React.Fragment>
          </React.Fragment>
        </svg>
      </SVGContainer>
    </Container>
  );
};

export default NetworkDiagram;
