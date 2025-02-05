// pages/index.tsx
"use client";
import React from "react";
import styled from "styled-components";
import MeritBox from "@/app/_components/business/MeritBox";
import MessageItem from "@/app/_components/business/MessageItem";

const Container = styled.div`
  display: flex;
  flex-direction: column; /* 자식 요소를 세로로 배치 */
  align-items: center; /* 수평 중앙 정렬 */
  width: 100%;
  min-height: 100vh;
  background-color: #fff;
  overflow-y: auto; /* 수직 스크롤 활성화 */
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column; /* 내부 콘텐츠를 세로로 정렬 */
  width: 1200px; /* 고정 너비 */
  background-color: #fff;
  padding: 40px;
  margin-bottom: 80px; /* 각 ContentContainer 간격 */
  justify-content: center;
`;

const TImg = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  margin: 0 auto;
  background-image: url("/images/business/testimg3.jpg"); /* 이미지 경로 설정 */
  background-size: cover;
  background-position: center;
  border-radius: 15px; /* 모서리를 살짝 둥글게 */
  overflow: hidden;
  margin-top: 120px;
`;

const Title = styled.h2`
  position: absolute;
  top: 42%; /* 이미지 중앙에 위치 */
  left: 8%;
  font-size: 40px;
  transform: translate(0, -44%);
  font-weight: 600;
  color: #fff;
  z-index: 50;
`;

const TText = styled.p`
  position: absolute;
  top: 62%;
  left: 8%;
  transform: translate(0, -60%);
  font-size: 28px;
  font-weight: 400;
  color: #fff;
`;

const NeedTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 60px;
`;

const MeritTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 60px;
`;

const MeritContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
`;

// 메시지 컨테이너 스타일
const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px; /* 각 메시지 간 기본 간격 */
  width: 95%;
  margin: 0 auto;
`;

const SubscriptionPage = () => {
  const messages = [
    {
      text: "질문1: 정부 지원 사업이 너무 복잡해요!\n정부 지원 사업이 많지만, 맞는 걸 찾기 어렵고 공고도 복잡해요.",
      align: "left",
      delay: 0,
    } as const,
    {
      text: "정부 지원 사업은 점점 세분화되고 있어요.\n▪️ 기업 규모, 사업 단계에 따라 신청 요건이 다름\n▪️ 기존 지원 이력에 따라 중복 지원 여부 고려\n▪️ 평가 기준(기술력, 재무 건전성 등)에 맞춰 전략 필요\n\n🔹SPESATE에서는 맞춤 분석을 통해\n☑️ 최적의 지원 사업 추천\n☑️ 신청부터 선정, 사후 관리까지 지원",
      align: "right",
      delay: 0.4,
    } as const,
    {
      text: "질문2: 우리 회사에 맞는 지원 사업이 뭔가요?\n         지원 사업이 많지만, 우리에게 맞는 걸 찾기 어려워요.",
      align: "left",
      delay: 0.8,
    } as const,
    {
      text: "업종, 매출만으로는 부족합니다!\n▪️ 제조업 → 스마트 공장 지원 (자동화 구축)\n▪️ IT 기업 → AI·SW 개발 지원 (연구개발비)\n▪️ 바이오·헬스케어 → 첨단기술 R&D 지원 (기술 개발)\n▪️ 수출 기업 → 수출 바우처 지원 (해외 시장 개척)\n\n🔹SPESATE에서는 기업 특성을 분석해\n☑️ 신청 가능성이 높은 지원 사업을 추천\n☑️ 정부가 원하는 방향에 맞춰 사업계획서 작성 지원",
      align: "right",
      delay: 1.2,
    } as const,
    {
      text: "질문3: 중소기업이 겪는 애로사항, 해결할 수 있을까요?\n인력 부족, 자금 조달, 경영 관리… 해결 방법이 있을까요?",
      align: "left",
      delay: 1.6,
    } as const,
    {
      text: "중소기업이 자주 겪는 어려움, 이렇게 해결하세요!\n▪️ 운영 자금 부족 → 저금리 정책 자금 & 투자 연계\n▪️ 전문 인력 부족 → R&D·청년 채용 지원\n▪️ 신청 부담 → 전담 컨설팅 & 사후 관리\n▪️ 지원금 활용 어려움 → 정산 교육 & 전문가 컨설팅\n\n🔹SPESATE에서는 기업 상황을 분석해\n☑️ 자금 조달 & 투자 유치 전략 수립\n☑️ 정부 지원 사업 활용 & 운영 최적화 지원",
      align: "right",
      delay: 2.0,
    } as const,
  ];

  const merits = [
    {
      title: "우리기업에 맞는 정부 지원 사업 분석",
      description:
        "✔ 정부 지원 사업을 체계적으로 정리하여 기업 맞춤형 정보를 제공\n✔ 성공 확률을 높일 수 있도록 지원 과제를 분석 및 전략을 수립",
      icon: "/images/business/ic-candidate.png",
    },
    {
      title: "기업 운영의 애로사항 해결",
      description:
        "✔ 자금 조달, 연구 인력 확보, 정책 변화 대응 등 맞춤형 컨설팅을 제공\n✔ 기업의 특성을 고려한 전략적 해결 방안을 제시",
      icon: "/images/business/ic-responsibility.png",
    },
    {
      title: "기업 운영 및 경영 개선 지원",
      description:
        "✔ 기업별 맞춤 분석을 통해 재무, 마케팅, 조직 운영 개선 전략을 제공\n✔ 지속 성장 위한 디지털 전환, 자동화, 신규 시장 전략 수립",
      icon: "/images/business/ic-update.png",
    },
    {
      title: "정책 변화에 대한 신속한 대응 지원",
      description:
        "✔ 정부 정책 변화 및 지원 사업 정보를 실시간 분석 제공\n✔ 기업이 최적의 지원을 받도록 컨설팅 진행",
      icon: "/images/business/ic-fasttime.png",
    },
  ];

  return (
    <Container>
      <ContentContainer>
        <TImg>
          <Title>정기 관리 컨설팅</Title>
          <TText>사업공고분석& 매칭/ 고객아이템및자료관리</TText>
        </TImg>
      </ContentContainer>
      <ContentContainer>
        <NeedTitle>정기 관리 컨설팅이 왜 필요할까?</NeedTitle>
        <MessageContainer>
          {messages.map((msg, index) => (
            <MessageItem key={index} msg={msg} />
          ))}
        </MessageContainer>
      </ContentContainer>
      <ContentContainer>
        <MeritTitle>정기 관리 컨설팅의 핵심 이점</MeritTitle>
        <MeritContainer>
          {merits.map((merit, index) => (
            <MeritBox
              key={index}
              title={merit.title}
              description={merit.description}
              icon={merit.icon}
            />
          ))}
        </MeritContainer>
      </ContentContainer>
    </Container>
  );
};

export default SubscriptionPage;
