"use client";

import AriticleCard from "@/app/_components/news/AriticleCard";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: fit-content;
  min-height: 100vh;
  padding-top: 120px;
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: #fff;
`;

const ContentContainer = styled.div`
  display: flex;
  max-width: 1200px;
  background-color: #fff;
  height: auto;
  width: 100%;
  margin: 40px;
  margin-bottom: 80px;
  margin-top: 100px;
  flex-direction: column;
`;

const Title = styled.h4`
  font-size: 44px;
  font-weight: 600;
  margin-bottom: 60px;
`;

const CardContainer = styled.div`
  height: fit-content;
  gap: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const NewsPage = () => {
  return (
    <Container>
      <ContentContainer>
        <Title>뉴스룸</Title>
        <CardContainer>
          <AriticleCard
            image={"/images/logo-black.png"}
            title="2025 중기부 주요사업별 편성"
            date="2024.12.27"
          />
        </CardContainer>
      </ContentContainer>
    </Container>
  );
};

export default NewsPage;
