import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

const CardContainer = styled(Link)`
  width: 30%;
  height: 530px;
  box-shadow: 3px 3px 10px 0 rgba(0, 0, 0, 0.05);
  cursor: pointer;
  overflow: hidden;
  border-radius: 6px;
  color: black;
  text-decoration: none;
`;

const ImageContainer = styled.div`
  position: relative;
  height: 340px;
  overflow: hidden;
`;

const ImageBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease; /* 애니메이션 부드럽게 */

  &:hover {
    transform: scale(1.05); /* 1.05배 확대 */
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 20px;
`;

const DateText = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #d3d3d3;
`;

const Title = styled.p`
  font-size: 18px;
  font-weight: 700;
  margin-top: 12px;
`;

type Props = {
  title: string;
  image: string;
  date: string;
};

const AriticleCard = ({ title, image, date }: Props) => {
  return (
    <CardContainer href={"/news/article/1"}>
      <ImageContainer>
        <ImageBox>
          <Image src={image} alt="" width={400} height={100} />
        </ImageBox>
      </ImageContainer>
      <ContentContainer>
        <DateText>{date}</DateText>
        <Title>{title}</Title>
      </ContentContainer>
    </CardContainer>
  );
};

export default AriticleCard;
