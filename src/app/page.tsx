"use client";

import { motion, useAnimation } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import ContentContainer from "./_components/common/ContentContainer";
import PageNavigation from "./_components/common/PageNavigation";
import Introduce from "./_components/home/Introduce";
import BusinessIntroduce from "./_components/home/BusinessIntroduce";
import Outline from "./_components/home/Outline";
import useSettingStore from "./_store/settingStore";
import { QuestionIcon } from "./_components/common/QuestionIcon";
import Footer from "./_components/home/Footer";
import HomeHeader from "./_components/common/HomeHeader";

export default function Home() {
  const controls = useAnimation();
  const [currentPage, setCurrentPage] = useState(0); // 현재 페이지
  const [delay, setDelay] = useState(600);
  const totalPages = 4; // 총 페이지 수
  const isScrolling = useRef(false); // 스크롤 제한 플래그
  const { handleHeaderType } = useSettingStore();
  const isLastPage = currentPage === totalPages - 1;

  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    if (isScrolling.current) return; // 이미 스크롤 중이면 동작하지 않음

    isScrolling.current = true; // 스크롤 제한 플래그 활성화

    if (event.deltaY > 0 && currentPage < totalPages - 1) {
      // 아래로 스크롤
      setCurrentPage((prev) => prev + 1);
      setDelay(600);
    } else if (event.deltaY < 0 && currentPage > 0) {
      // 위로 스크롤
      setCurrentPage((prev) => prev - 1);
      setDelay(100);
    }

    // 800ms 후 스크롤 제한 해제
    setTimeout(() => {
      isScrolling.current = false;
    }, 800);
  };

  const onClickPageNav = (page: number) => {
    setCurrentPage(page);
  };

  // 페이지 전환 애니메이션
  useEffect(() => {
    console.log("현재 페이지 : " + currentPage);

    const updateAnimation = () => {
      controls.start({
        y: -currentPage * window.innerHeight,
        transition: {
          type: "tween",
          duration: 0.8,
          ease: [0.25, 0, 0.55, 1], // cubic-bezier curve
        },
      });
    };

    updateAnimation();

    // 화면 크기 변경 시 다시 계산
    const handleResize = () => {
      updateAnimation();
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [currentPage, controls]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      // 짝수인 경우 블랙모드
      if (currentPage % 2 === 0) {
        handleHeaderType("black");
      } else {
        handleHeaderType("white");
      }
    }, delay); // 0.7초(700ms) 뒤에 상태 변환
    return () => clearTimeout(timeout);
  }, [currentPage, delay, handleHeaderType]);

  return (
    <>
      <HomeHeader />
      <div
        style={{
          overflow: "hidden",
          height: "100vh",
          backgroundColor: "#f0f0f0",
        }}
        onWheel={handleWheel} // 마우스 휠 이벤트 등록
      >
        {!isLastPage && (
          <PageNavigation
            size={totalPages - 1}
            currentPage={currentPage}
            onClickPageNav={onClickPageNav}
          />
        )}
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
          <ContentContainer>
            <Introduce />
          </ContentContainer>
          {/* Page 2 */}
          <ContentContainer>
            <BusinessIntroduce />
          </ContentContainer>
          {/* Page 3 */}
          <ContentContainer>
            <Outline />
          </ContentContainer>
          <ContentContainer>
            <Footer />
          </ContentContainer>
        </motion.div>
      </div>
      {!isLastPage && <QuestionIcon />}
    </>
  );
}
