"use client";

import Image from "next/image";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  background-color: #fff;
  justify-content: center;
  overflow-y: auto; /* 수직 스크롤 활성화 */
  height: auto;
`;

const ContentContainer = styled.div`
  display: flex;
  max-width: 1200px;
  background-color: #fff;
  height: auto;
  width: 100%;
  padding: 40px;
  margin-top: 160px;
  flex-direction: column;
`;

const Title = styled.p`
  font-size: 32px;
  font-weight: 600;
`;

const CompanyName = styled.p`
  margin-top: 80px;
  font-size: 40px;
  font-weight: 700;
`;

const ContentBox = styled.div`
  margin-top: 20px;

  p {
    white-space: pre-wrap;
    line-height: 1.4;
    font-size: 20px;
    font-weight: 500;
    margin-top: 24px;
  }
`;

const ImageBox = styled.div`
  width: 100%;
  height: 360px;
  position: relative;
  margin-top: 40px;
  overflow: hidden;
  /* border-top-left-radius: 16px;
  border-bottom-left-radius: 16px; */
  border-radius: 24px;
  left: 0;
`;

const SubTitle = styled.p`
  font-size: 28px;
  font-weight: 700;
  margin-top: 80px;
`;

const CompanyAboutPage = () => {
  return (
    <Container>
      <ContentContainer>
        <Title>회사소개</Title>
        <CompanyName>SPESATE</CompanyName>
        <ContentBox>
          <p>{`중소·중견기업 간의 올바른 협력을 통해 긍정적인 시너지를 창출하고, 
상호 성장을 위한 협력 생태계를 구축 하는 것을 목표로  2024년 10월 10일에 설립 되었습니다.
`}</p>
          <p>{`고객만의 맞춤형 서비스를 통하여 고객의 바램을 충족시키는 기업으로 거듭 나기 위하여 
항상 최선을 다하는 기업이 되겠습니다.`}</p>
        </ContentBox>
        <ImageBox>
          <Image src={"/images/bg-about.png"} alt="" fill objectFit="cover" />
        </ImageBox>
        <SubTitle>
          상호 신뢰와 협력을 바탕으로 가치를 공동 창출하는 네트워크
        </SubTitle>
      </ContentContainer>
    </Container>
  );
};

export default CompanyAboutPage;
