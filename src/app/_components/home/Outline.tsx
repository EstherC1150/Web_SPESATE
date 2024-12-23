import React from "react";
import styled from "styled-components";
import Image from "next/image";

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

const Title = styled.h2`
  font-size: 36px;
  font-weight: 700;
  margin-left: 4px;
  color: white;
  margin-top: 40px;
  width: 50%;
  margin-right: auto;
  text-align: center;
`;

const ContentBox = styled.div`
  margin-top: 70px;
  display: flex;
  justify-content: space-between; /* 요소들 사이에 공간을 더 자연스럽게 배치 */
  align-items: flex-start;
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
  font-size: 30px;
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
  font-size: 20px;
  white-space: pre-wrap;
  line-height: 1.5;
  margin-bottom: 20px;
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
`;

const Outline = () => {
  return (
    <Background>
      <ContentWrapper>
        <Title>회사개요</Title>
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
            <STitle>경상도권 중소·중견기업 전문 컨설팅 기업</STitle>
            <BTitle>SPESATE</BTitle>
            <OutlineContent>{`저희 SPESATE는 경상도권 중소·중견기업 전문 컨설팅 기업으로,
경상도권 지역의 산업 협력 생태계 구축에 기여 하고자 합니다.

수도권 중심의 컨설팅 시장 속에서 경상도권에 중소·중견기업의
성장 잠재력을 발굴하고, 고객 맞춤형 컨설팅 서비스를 제공하여
지역 경제 활성화를 이끌겠습니다.`}</OutlineContent>
            <MoreBtn>More</MoreBtn>
          </RightContent>
        </ContentBox>
      </ContentWrapper>
    </Background>
  );
};
export default Outline;
