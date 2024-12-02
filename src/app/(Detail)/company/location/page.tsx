"use client";
import React from "react";
import styled from "styled-components";
import Image from "next/image";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #fff;
  margin-top: 90px;
`;

const MapWrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
`;

const MTitle = styled.h2`
  padding-top: 120px;
  font-size: 42px;
  font-weight: 700;
  margin-bottom: 70px;
`;
const TextContent = styled.div`
  display: flex;
  justify-content: space-between;
`;
const LeftInfo = styled.div``;
const TopInfo = styled.div``;
const ComName = styled.h3`
  font-size: 32px;
  font-weight: 500;
`;
const ComAddress = styled.p``;
const BottomInfo = styled.div`
  display: flex;
  flex-wrap: wrap; /* 여러 줄로 감싸기 */
  column-gap: 10px; /* 칼럼 간 간격 */
  row-gap: 10px; /* 행 간 간격 */

  /* 자식 요소들이 칼럼당 2개씩 배치되도록 크기 조정 */
  & > * {
    flex: 1 1 calc(50% - 10px); /* 50% 너비에서 column-gap 보정 */
    box-sizing: border-box; /* 패딩과 보더 포함한 크기 계산 */
  }
`;
const InfoWrap = styled.div``;
const InfoSub = styled.p``;
const InfoText = styled.p``;
const RightImg = styled.div`
  width: 450px;
  height: 450px;
  position: relative;
`;
const MapContent = styled.div``;

const location = () => {
  return (
    <Container>
      <MapWrapper>
        <MTitle>찾아오시는 길</MTitle>
        <TextContent>
          <LeftInfo>
            <TopInfo>
              <ComName>스페세이트</ComName>
              <ComAddress>
                우)44718 울산 광역시 남구 번영로 124번길 21 3층 301-7호(달동)
              </ComAddress>
            </TopInfo>
            <BottomInfo>
              <InfoWrap>
                <InfoSub>E-Mail</InfoSub>
                <InfoText>joon1109@spesate.com</InfoText>
              </InfoWrap>
              <InfoWrap>
                <InfoSub>Tel</InfoSub>
                <InfoText>010-5727-3864</InfoText>
              </InfoWrap>
              <InfoWrap>
                <InfoSub>Website</InfoSub>
                <InfoText>www.spesate.com</InfoText>
              </InfoWrap>
            </BottomInfo>
          </LeftInfo>
          <RightImg>
            <Image
              alt="빌딩사진"
              src="/images/building1.png"
              fill
              objectFit="cover"
            ></Image>
          </RightImg>
        </TextContent>
      </MapWrapper>
      <MapContent>카카오맵</MapContent>
    </Container>
  );
};

export default location;
