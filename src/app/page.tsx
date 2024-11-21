"use client";

import { motion, useAnimation } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export default function Home() {
  const controls = useAnimation();
  const [currentPage, setCurrentPage] = useState(0); // 현재 페이지
  const totalPages = 3; // 총 페이지 수
  const isScrolling = useRef(false); // 스크롤 제한 플래그

  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    if (isScrolling.current) return; // 이미 스크롤 중이면 동작하지 않음

    isScrolling.current = true; // 스크롤 제한 플래그 활성화

    if (event.deltaY > 0 && currentPage < totalPages - 1) {
      // 아래로 스크롤
      setCurrentPage((prev) => prev + 1);
    } else if (event.deltaY < 0 && currentPage > 0) {
      // 위로 스크롤
      setCurrentPage((prev) => prev - 1);
    }

    // 800ms 후 스크롤 제한 해제
    setTimeout(() => {
      isScrolling.current = false;
    }, 800);
  };

  // 페이지 전환 애니메이션
  useEffect(() => {
    console.log("현재 페이지 : " + currentPage);

    controls.start({
      y: -currentPage * window.innerHeight,
      // transition: {
      //   duration: 0.8,
      //   type: "tween",
      //   ease: "easeOut",
      // },
      transition: {
        type: "tween",
        duration: 0.8,
        ease: [0.25, 0, 0.55, 1], // cubic-bezier curve
      },
    });
  }, [currentPage, controls]);

  return (
    <>
      <div
        style={{
          overflow: "hidden",
          height: "100vh",
          backgroundColor: "#f0f0f0",
        }}
        onWheel={handleWheel} // 마우스 휠 이벤트 등록
      >
        <div
          style={{
            position: "fixed", // 항상 화면에 고정
            left: "12px",
            top: "50%",
            transform: "translateY(-50%)", // 중앙 정렬
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            zIndex: 10, // 페이지 컨텐츠 위에 표시
          }}
        >
          {Array(totalPages)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                style={{
                  height: "4px",
                  width: "4px",
                  margin: "4px 0",
                  borderRadius: "50%",
                  backgroundColor: currentPage === index ? "#4dd9ff" : "gray",
                  cursor: "pointer",
                }}
                onClick={() => setCurrentPage(index)}
              />
            ))}
        </div>

        <motion.div
          animate={controls}
          initial={{ y: 0 }}
          style={{
            height: `${100 * totalPages}vh`, // 전체 높이를 페이지 수에 맞게 설정
            backgroundColor: "#ffffff",
            borderRadius: "10px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          {/* Page 1 */}
          <div
            style={{
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1>Page 1</h1>
          </div>
          {/* Page 2 */}
          <div
            style={{
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1>Page 2</h1>
          </div>
          {/* Page 3 */}
          <div
            style={{
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1>Page 3</h1>
          </div>
        </motion.div>
      </div>
    </>
  );
}
