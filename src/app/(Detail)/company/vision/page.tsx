"use client";

import Timeline from "@/app/_components/about/Timeline";
import VisionAnimaiton from "@/app/_components/about/VisionAnimaiton";

import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  padding-top: 120px;
  background-color: #ffffff;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
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

const Title = styled.p`
  font-size: 44px;
  font-weight: 600;
  margin-bottom: 120px;
`;

const page = () => {
  return (
    <Container>
      <ContentContainer>
        <Title>비전</Title>
        <VisionAnimaiton />
        <Title style={{ marginTop: "200px" }}>목표</Title>
        <Timeline />
      </ContentContainer>
    </Container>
  );
};

export default page;
