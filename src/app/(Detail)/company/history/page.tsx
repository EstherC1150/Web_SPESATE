"use client";

import colors from "@/app/_constants/colors";
import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  background-color: #fff;
  justify-content: center;
`;

const ContentSection = styled.section`
  height: 100vh;
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

const HistoryBox = styled.div`
  padding: 60px 0 60px 40px;
  display: flex;
  margin-bottom: 140px;
  align-items: flex-start;
  position: relative;
`;

const YearContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContentContainer = styled.div`
  margin-left: 140px;
  line-height: 160%;
`;

const YearBox = styled.button`
  cursor: default;
  height: 90px;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;

const Year = styled.span<{ $isSelected: boolean }>`
  color: ${({ $isSelected }) =>
    $isSelected ? colors.primary.main : "#d8e0ec"};
  font-size: 22px;
  line-height: 160%;
  margin-right: 50px;
  cursor: pointer;
  font-weight: 500;
`;

const YearCircle = styled.span<{ $isLast: boolean; $isSelected: boolean }>`
  background-color: ${({ $isSelected }) =>
    $isSelected ? colors.primary.main : "#d8e0ec"};
  position: relative;
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  line-height: 160%;
  cursor: pointer;

  &::after {
    position: absolute;
    content: "";
    display: ${({ $isLast }) =>
      $isLast ? "none" : "inline-block"}; /* 조건부 렌더링 */
    width: 1px;
    height: 70px;
    background-color: #d8e0ec;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    cursor: default;
  }
`;

const ContentBox = styled.div`
  flex-direction: column;
  text-align: left;
  height: 90px;
  padding-bottom: 100px;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;

const HistoryDate = styled.span`
  font-size: 18px;
  color: ${colors.primary.main};
  margin-bottom: 5px;
  font-weight: 500;
  line-height: 150%;
  width: 100%;
  display: block;
`;

const HistoryDesc = styled.p`
  font-size: 24px;
  font-weight: 500;
  line-height: 150%;
`;

const years = ["2024"];

const HistoryPage = () => {
  const [seletedYear, setSeletedYear] = useState("2024");

  return (
    <Container>
      <ContentSection>
        <Title>연혁</Title>
        <HistoryBox>
          <YearContainer>
            {years.map((year, index) => (
              <YearBox key={year}>
                <Year
                  $isSelected={seletedYear === year}
                  onClick={() => {
                    setSeletedYear(year);
                  }}
                >
                  {year}
                </Year>
                <YearCircle
                  $isLast={index === years.length - 1}
                  $isSelected={seletedYear === year}
                  onClick={() => {
                    setSeletedYear(year);
                  }}
                />
              </YearBox>
            ))}
          </YearContainer>
          <ContentContainer>
            <ContentBox>
              <HistoryDate>2024.10.01</HistoryDate>
              <HistoryDesc>
                첫 파트너사와 시범 협업 진행 및 협업 클러스터 참여
              </HistoryDesc>
            </ContentBox>
            <ContentBox>
              <HistoryDate>2024.10.10</HistoryDate>
              <HistoryDesc>SPESATE 공식 출범 및 본격 운영 시작</HistoryDesc>
            </ContentBox>
          </ContentContainer>
        </HistoryBox>
      </ContentSection>
    </Container>
  );
};

export default HistoryPage;
