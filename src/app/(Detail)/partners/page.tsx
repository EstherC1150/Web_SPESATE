"use client";

import React from "react";
import styled from "styled-components";
import PartnerCard from "@/app/_components/partners/PartnerCard";
import { easeInOut, motion } from "framer-motion";

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

const ClusterSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
`;

const StyledRoleContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

const RoleNumber = styled.div`
  font-size: 36px;
  font-weight: 700;
  color: #ccc;
  margin-bottom: 20px;
`;

const RoleTitle = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 10px;
`;

const RoleDescription = styled.div`
  font-size: 18px;
  line-height: 1.5;
`;

const RoleFlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FlexItemHalf = styled.div`
  flex: 0 1 45%;
  display: flex;
  justify-content: space-between;
`;

const FlexItemHalfPadded = styled.div`
  flex: 0 1 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

const List = styled.ul`
  padding-left: 20px;
  margin-top: 10px;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const ListItemImage = styled.img`
  margin-right: 10px;
`;

const BenefitsFlexContainer = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
  margin-bottom: 40px;

  & > * {
    flex: 0 1 calc(50% - 10px); // 한 줄에 2개씩 배치되도록 설정
  }
`;

const StyledBox = styled(motion.div)`
  text-align: center;
  width: 50%;
  display: inline-block;
  vertical-align: top;
  box-sizing: border-box;
  font-size: 18px;
`;

const StyledBoxTitle = styled.div`
  background-color: #484c51;
  color: #ffffff;
  padding: 12px;
  border-radius: 8px 8px 0 0;
  font-weight: bold;
  transition: all 0.3s ease;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const StyledBoxContent = styled.div`
  padding: 12px;
  font-weight: 600;
  background-color: #ececec;
  border-radius: 0 0 8px 8px;
  color: #1f2937;
  text-align: center;
  transition: all 0.3s ease;
  height: 80px; // 높이를 줄였습니다.
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const RecruitmentContainer = styled(motion.div)`
  margin-top: 60px;
  padding: 40px;
  width: 100%;
  max-width: 1200px;
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
`;

const PinIcon = styled.span`
  color: #ff4757;
  font-size: 24px;
  margin-right: 0.5rem;
`;

const RecruitmentTitle = styled.h2`
  font-size: 22px;
  font-weight: 600;
  color: #2d3436;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  color: #636e72;
  line-height: 1.8;
`;

const Paragraph = styled.p`
  margin-bottom: 1rem;
  font-size: 20px;
  font-weight: 600;
  text-align: center;

  &:last-child {
    color: #2d3436;
    font-weight: 600;
  }
`;

const Highlight = styled.span`
  color: #0984e3;
  font-weight: 500;
`;
const ArrowDown = styled(motion.div)`
  width: 50px;
  height: 50px;
  background-color: #0984e3;
  clip-path: polygon(
    50% 100%,
    100% 50%,
    75% 50%,
    75% 0%,
    25% 0%,
    25% 50%,
    0% 50%
  );
  margin: 20px auto;
`;

const partners = [
  {
    id: 1,
    name: "(주)청우아이앤에스",
    logo: "/images/partners/logo-chungwoo.png",
    url: "/",
  },
];

const roles = [
  {
    id: 1,
    number: 1,
    title: "통합적 기업 지원 시스템 구축",
    description: (
      <>
        협업 클러스터는 개별 기업이 혼자 해결하기 어려운 다양한 문제를 전문가
        네트워크를 통해 신속하고 효과적으로 해결할 수 있도록 돕습니다.
        <br />
        <List>
          <ListItem>
            <ListItemImage src="/images/ic-check.png" alt="check" />
            정부 지원 사업 컨설팅
          </ListItem>
          <ListItem>
            <ListItemImage src="/images/ic-check.png" alt="check" />
            기업 인증 및 규제 대응
          </ListItem>
          <ListItem>
            <ListItemImage src="/images/ic-check.png" alt="check" />
            지식재산권 및 특허 전략 수립
          </ListItem>
          <ListItem>
            <ListItemImage src="/images/ic-check.png" alt="check" />
            경영, 법률, 세무, 회계 컨설팅
          </ListItem>
          <ListItem>
            <ListItemImage src="/images/ic-check.png" alt="check" />
            신사업 개발 및 비즈니스 매칭
          </ListItem>
        </List>
      </>
    ),
    image: "/images/testimage5.jpg",
  },
  {
    id: 2,
    number: 2,
    title: "최신 정보와 트렌드 공유",
    description: (
      <>
        각 분야의 전문가 및 기관들과의 협력을 통해 정부 정책, 산업 동향, 지원
        사업, 기술 개발 등 최신 정보를 신속하게 제공하여 기업이 변화에 빠르게
        대응할 수 있도록 합니다.
      </>
    ),
    image: "/images/testimage5.jpg",
  },
  {
    id: 3,
    number: 3,
    title: "맞춤형 솔루션 제공",
    description: (
      <>
        기업마다 필요한 지원이 다르므로, 협업 클러스터는 개별 기업의 특성과
        목표에 맞는 전략적 컨설팅과 최적의 협업 파트너 연결을 지원합니다.
      </>
    ),
    image: "/images/testimage5.jpg",
  },
  {
    id: 4,
    number: 4,
    title: "지속적인 네트워킹 및 공동 성장",
    description: (
      <>
        기업과 기관들이 서로 연결되고 협력하여 단순한 1회성 협업을 넘어 장기적인
        파트너십을 구축하며, 이를 통해 상호 성장하는 파트너십 성장 모델을
        실현합니다.
      </>
    ),
    image: "/images/testimage5.jpg",
  },
];

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
          <ClusterSection>
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
          </ClusterSection>
          <ClusterSection>
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
              {roles.map((role) => (
                <RoleFlexContainer key={role.id}>
                  {role.number % 2 !== 0 ? (
                    <>
                      <FlexItemHalf>
                        <Image src={role.image} alt="임시 이미지" />
                      </FlexItemHalf>
                      <FlexItemHalfPadded>
                        <RoleNumber>{`0${role.number}`}</RoleNumber>
                        <RoleTitle>{role.title}</RoleTitle>
                        <RoleDescription>{role.description}</RoleDescription>
                      </FlexItemHalfPadded>
                    </>
                  ) : (
                    <>
                      <FlexItemHalfPadded>
                        <RoleNumber>{`0${role.number}`}</RoleNumber>
                        <RoleTitle>{role.title}</RoleTitle>
                        <RoleDescription>{role.description}</RoleDescription>
                      </FlexItemHalfPadded>
                      <FlexItemHalf>
                        <Image src={role.image} alt="임시 이미지" />
                      </FlexItemHalf>
                    </>
                  )}
                </RoleFlexContainer>
              ))}
            </StyledRoleContainer>
          </ClusterSection>
          <ClusterSection>
            <Title
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: easeInOut }}
              viewport={{ once: true }}
            >
              SPESATE와 협력하면 어떤 점이 좋은가요?
            </Title>
            <BenefitsFlexContainer
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: easeInOut }}
              viewport={{ once: true }}
            >
              <StyledBox>
                <StyledBoxTitle>
                  가치를 공동 창출하는 신뢰 기반의 협업 네트워크
                </StyledBoxTitle>
                <StyledBoxContent>
                  단순한 프로젝트 협업이 아닌, 지속적인 성장 기회 제공
                </StyledBoxContent>
              </StyledBox>
              <StyledBox>
                <StyledBoxTitle>
                  정부 지원 사업 연계 + 기업 간 협업 기회 제공
                </StyledBoxTitle>
                <StyledBoxContent>
                  기업 간 공동 개발, 유통, 투자 기회 창출
                </StyledBoxContent>
              </StyledBox>
              <StyledBox>
                <StyledBoxTitle>지속적인 협력 기회 제공</StyledBoxTitle>
                <StyledBoxContent>
                  정부 과제, 연구개발 프로젝트, 기술 이전, 투자 유치 등 다양한
                  기회 창출
                </StyledBoxContent>
              </StyledBox>
              <StyledBox>
                <StyledBoxTitle>
                  정부 지원금 및 사업 연계를 통한 실질적 성과 창출
                </StyledBoxTitle>
                <StyledBoxContent>
                  정부 지원 사업과의 연계를 통해 장기적인 성장 가능
                </StyledBoxContent>
              </StyledBox>
            </BenefitsFlexContainer>
            <ArrowDown />
            <RecruitmentContainer
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: easeInOut }}
              viewport={{ once: true }}
            >
              <RecruitmentTitle>
                <PinIcon>📌</PinIcon>
                함께할 준비가 되셨나요?
              </RecruitmentTitle>
              <Content>
                <Paragraph>
                  <Highlight>SPESATE</Highlight>는 단순한 네트워크가 아닌, 상호
                  신뢰와 협력을 바탕으로 지속적인 가치를 창출할 파트너사를 찾고
                  있습니다.
                </Paragraph>
                <Paragraph>
                  정부 지원 사업을 함께할 기업 뿐만 아니라, 기업 간 협업을 통해
                  시너지를 창출하고자 합니다.
                </Paragraph>
                <Paragraph>
                  지금 바로 <Highlight>SPESATE</Highlight>의 파트너사가 되어
                  기업 지원 및 연구개발 생태계를 함께 구축할 기회를 잡으세요!
                </Paragraph>
              </Content>
            </RecruitmentContainer>
          </ClusterSection>
        </ContentContainer>
      </Container>
    </>
  );
};

export default PartnerPage;
