"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
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

const ImageContainer = styled.div`
  position: relative;
  width: 1000px;
  height: 660px;
  margin: 0 auto;
  margin-bottom: 40px;
`;

const ImageContainer2 = styled.div`
  position: relative;
  width: 600px;
  height: 400px;
  margin: 0 auto;
  margin-bottom: 40px;
`;

const ImageContainer3 = styled.div`
  position: relative;
  width: 1000px;
  height: 660px;
  margin: 0 auto;
`;

const DateText = styled.p`
  font-size: 16px;
  color: #d3d3d3;
  font-weight: 500;
  margin-bottom: 20px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 60px;
`;

const BackButton = styled.button`
  border: 1px solid #b6b6b6;
  background-color: #d6d6d6;
  margin-left: auto;
  padding: 10px 16px;
  color: black;
  font-weight: 500;
  border-radius: 4px;
  cursor: pointer;
  transition: border 0.3s ease, background-color 0.3s ease;

  &:hover {
    border: 1px solid #949494;
    background-color: #acacac;
  }
`;

const Title = styled.h2`
  font-size: 36px;
  font-weight: 600;
`;

const ArticlePage = () => {
  const router = useRouter();

  return (
    <Container>
      <ContentContainer>
        <DateText>2024.12.27</DateText>
        <Row>
          <Title>2025 중기부 주요사업별 편성</Title>
          <BackButton onClick={() => router.back()}>목록</BackButton>
        </Row>
        <ImageContainer>
          <Image src={"/images/news/news1.png"} alt="" fill />
        </ImageContainer>
        <ImageContainer2>
          <Image src={"/images/news/news2.png"} alt="" fill />
        </ImageContainer2>
        <ImageContainer3>
          <Image src={"/images/news/news3.png"} alt="" fill />
        </ImageContainer3>
      </ContentContainer>
    </Container>
  );
};

export default ArticlePage;
