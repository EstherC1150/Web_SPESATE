"use client";

import React from "react";
import styled from "styled-components";
import PartnerCard from "@/app/_components/partners/PartnerCard";
import { easeInOut, motion } from "framer-motion";

const partners = [
  {
    id: 1,
    name: "(주)청우아이앤에스",
    logo: "/images/partners/logo-chungwoo.png",
    url: "/",
  },
];

const Container = styled.div`
  height: fit-content;
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
  margin-top: 100px;
  margin-bottom: 160px; // 우선 파트너사 늘어나면 조정요망
  flex-direction: column;
`;

const Title = styled(motion.h4)`
  font-size: 44px;
  font-weight: 600;
  margin-bottom: 60px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
`;

const TextContent = styled(motion.div)`
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 40px;
`;

const PointText = styled.div`
  font-size: 20px;
  font-weight: 600;
`;

const SpanText = styled.span`
  font-size: 20px;
  font-weight: 600;
  color: #28aae2;
`;

const StyledRoleContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 60px;
`;

const RoleNumber = styled.div`
  font-size: 36px;
  font-weight: 700;
  color: #ccc;
  margin-bottom: 20px;
`;

const RoleTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
`;

const RoleDescription = styled.div`
  font-size: 16px;
  line-height: 1.5;
`;

const PartnerPage = () => {
  return (
    <>
      <Container>
        <ContentContainer>
          <Title
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: easeInOut }}
            viewport={{ once: true }}
          >
            파트너사
          </Title>
          <Grid>
            {partners.map((partner) => (
              <PartnerCard key={partner.id} {...partner} />
            ))}
          </Grid>
        </ContentContainer>
      </Container>
      <Container>
        <ContentContainer>
          <Title
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: easeInOut }}
            viewport={{ once: true }}
          >
            클러스터
          </Title>
          <Grid>
            {partners.map((partner) => (
              <PartnerCard key={partner.id} {...partner} />
            ))}
          </Grid>
        </ContentContainer>
      </Container>
      <Container>
        <ContentContainer>
          <Title
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: easeInOut }}
            viewport={{ once: true }}
          >
            협업 클러스터란?
          </Title>
          <TextContent
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: easeInOut }}
            viewport={{ once: true }}
          >
            <PointText>
              SPESATE는 파트너(고객)의 지속적인 성장과 성공을 지원하기 위해,
              다양한 전문 기관 및 기업들과 협력하는 협업 생태계를 구축하고
              있습니다.
            </PointText>
            이를 <SpanText>협업 클러스터</SpanText>라고 명명하며, 특허사무소,
            인증기관, 컨설팅기관,{" "}
            <SpanText>
              다양한 산업의 기업들이 유기적으로 연결된 전략적 네트워크입니다.
            </SpanText>
            <br />
            <PointText>
              협업 클러스터는 단순한 협력사가 아닌, 기업의 성장을 위한
              핵심동반자로서 긴밀한 파트너십을 형성하여 최적의 솔루션을
              제공합니다.
            </PointText>
          </TextContent>
          <TextContent
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: easeInOut }}
            viewport={{ once: true }}
          ></TextContent>
          <Title
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: easeInOut }}
            viewport={{ once: true }}
          >
            협업 클러스터의 역할
          </Title>
          <StyledRoleContainer
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: easeInOut }}
            viewport={{ once: true }}
          >
            <div>
              <RoleNumber>01</RoleNumber>
              <RoleTitle>통합적 기업 지원 시스템 구축</RoleTitle>
              <RoleDescription>
                협업 클러스터는 개별 기업이 혼자 해결하기 어려운 다양한 문제를
                전문가 네트워크를 통해 신속하고 효과적으로 해결할 수 있도록
                돕습니다.
                <br />
                <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
                  <li>정부 지원 사업 컨설팅</li>
                  <li>기업 인증 및 규제 대응</li>
                  <li>지식재산권 및 특허 전략 수립</li>
                  <li>경영, 법률, 세무, 회계 컨설팅</li>
                  <li>신사업 개발 및 비즈니스 매칭</li>
                </ul>
              </RoleDescription>
            </div>
            <div>
              <RoleNumber>02</RoleNumber>
              <RoleTitle>최신 정보와 트렌드 공유</RoleTitle>
              <RoleDescription>
                각 분야의 전문가 및 기관들과의 협력을 통해 정부 정책, 산업 동향,
                지원 사업, 기술 개발 등 최신 정보를 신속하게 제공하여 기업이
                변화에 빠르게 대응할 수 있도록 합니다.
              </RoleDescription>
            </div>
            <div>
              <RoleNumber>03</RoleNumber>
              <RoleTitle>맞춤형 솔루션 제공</RoleTitle>
              <RoleDescription>
                기업마다 필요한 지원이 다르므로, 협업 클러스터는 개별 기업의
                특성과 목표에 맞는 전략적 컨설팅과 최적의 협업 파트너 연결을
                지원합니다.
              </RoleDescription>
            </div>
            <div>
              <RoleNumber>04</RoleNumber>
              <RoleTitle>지속적인 네트워킹 및 공동 성장</RoleTitle>
              <RoleDescription>
                기업과 기관들이 서로 연결되고 협력하여 단순한 1회성 협업을 넘어
                장기적인 파트너십을 구축하며, 이를 통해 상호 성장하는 파트너십
                성장 모델을 실현합니다.
              </RoleDescription>
            </div>
          </StyledRoleContainer>

          <Title
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: easeInOut }}
            viewport={{ once: true }}
          >
            SPESATE와 협력하면 어떤 점이 좋은가요?
          </Title>
          <TextContent
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: easeInOut }}
            viewport={{ once: true }}
          >
            ✔ 가치를 공동 창출하는 신뢰 기반의 협업 네트워크 – 단순한 프로젝트
            협업이 아닌, 지속적인 성장 기회 제공
            <br />
            ✔ 정부 지원 사업 연계 + 기업 간 협업 기회 제공 – 기업 간 공동 개발,
            유통, 투자 기회 창출
            <br />
            ✔ 지속적인 협력 기회 제공 – 정부 과제, 연구개발 프로젝트, 기술 이전,
            투자 유치 등 다양한 기회 창출
            <br />✔ 정부 지원금 및 사업 연계를 통한 실질적 성과 창출 – 정부 지원
            사업과의 연계를 통해 장기적인 성장 가능
          </TextContent>
          <TextContent
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: easeInOut }}
            viewport={{ once: true }}
          >
            📌 함께할 준비가 되셨나요?
            <br />
            SPESATE는 단순한 네트워크가 아닌, 상호 신뢰와 협력을 바탕으로
            지속적인 가치를 창출할 파트너사를 찾고 있습니다.
            <br />
            정부 지원 사업을 함께할 기업 뿐만 아니라, 기업 간 협업을 통해
            시너지를 창출하고자 합니다.
            <br />
            지금 바로 SPESATE의 파트너사가 되어 기업 지원 및 연구개발 생태계를
            함께 구축할 기회를 잡으세요!
          </TextContent>
        </ContentContainer>
      </Container>
    </>
  );
};

export default PartnerPage;
