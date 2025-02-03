"use client";

import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Background = styled.section`
  width: 100%;
  background-color: #282834;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const ContentWrapper = styled.div`
  min-width: 1200px;
  height: 100vh;
  padding-top: 120px;
`;

const ContentBox = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: space-between; /* 요소들 사이에 공간을 더 자연스럽게 배치 */
  align-items: center;
  width: 100%;
  height: 95%;
`;

const LeftMap = styled.div`
  width: 50%; /* 비율로 크기 설정 */
  height: 66%;
  position: relative;
`;

const ImageStyled = styled(Image)`
  object-fit: contain; /* 이미지가 크기에 맞게 비율을 유지하면서 포함되도록 설정 */
`;

const RightContent = styled.div`
  width: 50%; /* 비율로 크기 설정 */
  height: 66%; /* 오른쪽 콘텐츠의 높이도 맞춰주기 */
  padding-left: 20px; /* 왼쪽 맵과 간격을 주기 위해 padding 추가 */
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: space-between;
`;

const STitle = styled.h3`
  color: white;
  font-size: 22px;
  font-weight: 700;
`;

const BTitle = styled.h2`
  color: #28aae2;
  font-size: 50px;
  font-weight: 700;
  margin-top: -20px;
  margin-bottom: 15px;
`;

const OutlineContent = styled.p`
  color: white;
  font-size: 19px;
  white-space: pre-wrap;
  line-height: 1.5;
  margin-bottom: 20px;
  padding-right: 20px;

  span {
    color: #28aae2;
    font-weight: 500;
  }
`;

const MoreBtn = styled.button`
  color: #28aae2;
  font-size: 18px;
  font-weight: 700;
  border-radius: 30px;
  border: solid 1px #28aae2;
  padding: 10px 36px;
  width: 5%;
  display: flex;
  justify-content: center;
  margin-top: auto;
  cursor: pointer;
`;

const Outline = () => {
  const router = useRouter(); // next/navigation 사용

  const goToAbout = () => {
    router.push("/company/about"); // 이동할 페이지 경로
  };
  return (
    <Background>
      <ContentWrapper>
        {/* <Title>회사개요</Title> */}
        <ContentBox>
          <LeftMap>
            <ImageStyled
              src={"/images/map.png"}
              alt="map"
              fill
              priority
            ></ImageStyled>
          </LeftMap>
          <RightContent>
            <STitle>
              경상도권 중소·중견기업의 성장을 위한 최고의 컨설팅 파트너!
            </STitle>
            <BTitle>SPESATE</BTitle>
            <OutlineContent>
              {`SPESATE는 경상도권 기업이 더 빠르게 성장하고,\n더 멀리 나아갈 수 있도록 돕는 전문 컨설팅 기업입니다.

정부 지원사업, 경영 자문, 기업 인증, 문제 해결까지!\n기업이 필요로 하는 맞춤형 솔루션을 제공합니다.
혁신을 통해 경상도권 기업의 가치를 높이고,\n지역 경제 발전을 함께 만들어갑니다.
\n`}
              <span>
                지금 문의하세요! 귀사의 성장을 위한 최적의 파트너를 만나보세요.
              </span>
            </OutlineContent>
            <MoreBtn onClick={goToAbout}>More</MoreBtn>
          </RightContent>
        </ContentBox>
      </ContentWrapper>
    </Background>
  );
};
export default Outline;
