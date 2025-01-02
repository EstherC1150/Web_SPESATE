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
  margin-bottom: 0px;
`;

const ImageContainer2 = styled.div`
  position: relative;
  width: 600px;
  height: 400px;
  margin: 0 auto;
  margin-bottom: 40px;
`;

const TextContainer = styled.div`
  width: 1000px;
  margin: 0 auto;
  padding: 20px 60px;
`;

const SectionTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 32px;
  color: black;
`;

const Content = styled.div`
  font-size: 18px;
  line-height: 1.8;
  white-space: pre-wrap;
  margin-bottom: 40px;
  letter-spacing: -0.3px;

  p {
    margin-bottom: 24px;
  }
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
        <TextContainer>
          <SectionTitle>2025년 중기부 주요사업별 편성</SectionTitle>
          <Content>
            <p>
              중소벤처기업부는 2025년도 주요 사업 예산을 다섯 가지 핵심 분야로
              나누어 편성했습니다. 이번 예산 편성은 중소기업과 벤처기업의 혁신
              성장을 지원하고, 글로벌 경쟁력을 강화하는데 중점을 두었습니다.
            </p>

            <p>
              첫째, 혁신성장개발 분야에 1조 8,220억원이 배정되었습니다. 이는
              유망 스타트업 육성, 민간 중심의 벤처투자 활성화, 그리고 혁신적인
              R&D 지원을 위한 예산입니다.
            </p>

            <p>
              둘째, 글로벌화 분야에는 5,864억원이 편성되었습니다. 이 예산은
              수출중소기업의 해외 진출 지원, K-글로벌 기업의 세계 시장 진출,
              그리고 기업의 스케일업을 위해 사용될 예정입니다.
            </p>

            <p>
              셋째, 지역 혁신촉진을 위해 5,016억원이 배정되었습니다. 지역 주도의
              혁신 성장을 지원하고, 중소기업의 디지털 전환을 통한 스마트화를
              추진할 계획입니다.
            </p>

            <p>
              넷째, 소상공인상권 활력 제고에 가장 큰 규모인 4조 9,231억원이
              편성되었습니다. 이는 소상공인들의 경영 회복을 돕고, 상권 활성화를
              지원하며, 자영업자들의 재기를 지원하는데 사용될 예정입니다.
            </p>

            <p>
              마지막으로, 지속가능한 성장을 위해 7,393억원이 배정되었습니다. 이
              예산은 중소기업의 상생 사다리 구축, 성장 기반 조성, 그리고
              중소기업과 근로자가 함께 성장할 수 있는 환경을 만드는데 투입될
              예정입니다.
            </p>
          </Content>
        </TextContainer>
      </ContentContainer>
    </Container>
  );
};

export default ArticlePage;
