import React from "react";
import styled from "styled-components";
import Image from "next/image";

const Background = styled.section`
  height: 100vh;
  width: 100%;
  background-color: #191922;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ContentWrapper = styled.div`
  min-width: 1200px;
  padding: 20px 70px;
`;

const Title = styled.h2`
  font-size: 42px;
  font-weight: 700;
  margin-left: 4px;
  color: white;
`;

const ContentBox = styled.div`
  margin-top: 70px;
  display: flex;
  justify-content: space-between;
`;
const LeftMap = styled.div`
  width: 363px;
  height: 523px;
  position: relative;
`;
const RightContent = styled.div``;
const STitle = styled.h3`
  color: white;
  font-size: 30px;
  font-weight: 700;
`;
const BTitle = styled.h2`
  color: #28aae2;
  font-size: 50px;
  font-weight: 700;
  margin-top: 15px;
  margin-bottom: 56px;
`;
const OutlineContent = styled.p`
  color: white;
  font-size: 20px;
  white-space: pre-wrap;
  line-height: 1.5;
`;
const MoreBtn = styled.button`
  color: #28aae2;
  font-size: 18px;
  font-weight: 700;
  border-radius: 30px;
  border: solid 1px #28aae2;
  padding: 10px 36px;
  margin-top: 60px;
`;

const Outline = () => {
  return (
    <Background>
      <ContentWrapper>
        <Title>회사개요</Title>
        <ContentBox>
          <LeftMap>
            <Image src={"/images/map.png"} alt="map" fill priority></Image>
          </LeftMap>
          <RightContent>
            <STitle>경상도권 중소·중견기업 전문 컨설팅 기업</STitle>
            <BTitle>SPESATE</BTitle>
            <OutlineContent>{`저희 SPESATE는 경상도권 중소·중견기업 전문 컨설팅 기업으로,
경상도권 지역의 산업 협력 생태계 구축에 기여 하고자 합니다.

수도권 중심의 컨설팅 시장 속에서 경상도권에 중소·중견기업의
성장 잠재력을 발굴하고, 고객 맞춤형 컨설팅 서비스를 제공하여
지역 경제 활성화를 이끌겠습니다.`}</OutlineContent>
            <MoreBtn>더보기</MoreBtn>
          </RightContent>
        </ContentBox>
      </ContentWrapper>
    </Background>
  );
};

export default Outline;
