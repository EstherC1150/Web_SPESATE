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
`;

const ContentSection = styled.section`
  height: 100%;
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-weight: 700;
  font-size: 44px;
  margin-top: 240px;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 900px;
  aspect-ratio: 900 / 440; /* 비율을 유지 */
  margin: 0 auto;
  margin-top: 120px;
  overflow: hidden; /* 필요 시 초과 영역 숨김 */
  border-radius: 8px; /* 선택 사항: 둥근 모서리 */
`;

const page = () => {
  return (
    <Container>
      <ContentSection>
        <Title>조직도</Title>
        <ImageContainer>
          <Image src={"/images/company/organization.png"} alt="" fill />
        </ImageContainer>
      </ContentSection>
    </Container>
  );
};

export default page;
