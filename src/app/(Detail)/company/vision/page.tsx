"use client";

import Vision from "@/app/sg/page";
import Image from "next/image";
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

const ImageBox = styled.div`
  width: 100%;
  height: 340px;
  margin-bottom: 140px;
  position: relative;
  border-radius: 32px;
  overflow: hidden;
  margin-top: 120px;
`;

const ImageText = styled.p`
  font-size: 40px;
  font-weight: 500;
  color: #ffffff;
  position: absolute;
  z-index: 2;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
`;

const Test = styled.div`
  height: 500px;
  width: 100%;
  background-color: red;
`;

const page = () => {
  return (
    <Container>
      <ContentContainer>
        <Title>비전</Title>
        <Vision />
        <Title style={{ marginTop: "200px" }}>목표</Title>
      </ContentContainer>
    </Container>
  );
};

export default page;
