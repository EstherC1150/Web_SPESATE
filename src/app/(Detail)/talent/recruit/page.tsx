"use client";

import TalentCardList from "@/app/_components/talent/TalentCard";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
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

const page = () => {
  return (
    <Container>
      <ContentContainer>
        <Title>인재상</Title>
        <TalentCardList />
      </ContentContainer>
    </Container>
  );
};

export default page;
