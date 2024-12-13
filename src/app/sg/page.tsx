"use client";

import React from "react";
// import { easeInOut, motion } from "framer-motion";
import CertificationProcess from "../_components/business/CertificationProcess";

const Timeline = () => {
  // const milestones = [
  //   { year: "2024", text: "회사설립\n고객사 1개 유지" },
  //   {
  //     year: "2025",
  //     text: "고객사 10개 유지\n고객사 과제 총 사업비 합산 20억\n성능시험 전문기관 연계\n벤처기업등록",
  //   },
  //   {
  //     year: "2026",
  //     text: "고객사 25개 유지\n고객사 과제 총 사업비 합산 60억\n인증 전문인력 확보\n사업 전문가 컨설팅 기업 등록",
  //   },
  //   {
  //     year: "2027",
  //     text: "고객사 50개 유지\n고객사 과제 총 사업비 합산 120억\n특허 사무소 연계\n고객사 컨소시움 구성",
  //   },
  //   {
  //     year: "2028",
  //     text: "고객사 100개 유지\n고객사 과제 총 사업비 합산 300억\n기업부설 연구소 등록\n평가기관 심사위원 등록",
  //   },
  // ];

  // const containerVariants = {
  //   hidden: { opacity: 0 },
  //   visible: {
  //     opacity: 1,
  //     transition: {
  //       staggerChildren: 0.5,
  //     },
  //   },
  // };

  // const itemVariants = (index: number) => ({
  //   hidden: { opacity: 0 }, // 아래에서 시작
  //   visible: {
  //     opacity: 1,
  //     y: 0,
  //     transition: { duration: 0.5, delay: index * 0.3, easeInOut }, // 딜레이 추가
  //   },
  // });

  // const textVariants = (index: number) => ({
  //   hidden: { opacity: 0, x: "-50%", y: index % 2 === 0 ? 50 : -50 }, // 아래에서 시작
  //   visible: {
  //     opacity: 1,
  //     y: 0,
  //     x: "-50%",
  //     transition: { duration: 0.5, delay: index * 0.3, easeInOut }, // 딜레이 추가
  //   },
  // });

  return <CertificationProcess />;
};

export default Timeline;
