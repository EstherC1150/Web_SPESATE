import React from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

interface PartnerCardProps {
  id: number;
  name: string;
  logo: string;
  url: string;
}

const CardWrapper = styled(Link)`
  display: block;
  padding: 20px 26px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 3px 3px 10px 0 rgba(0, 0, 0, 0.05);
  text-decoration: none;
  transition: box-shadow 0.3s;
  &:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  margin-bottom: 4px;
  aspect-ratio: 16 / 9;
  max-height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box; /* 패딩을 포함한 크기 조정 */
  margin: 0 auto;
  overflow: hidden; /* 이미지가 컨테이너를 벗어나지 않도록 */
`;

const CompanyName = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  text-align: center;
  color: black;
  margin-top: 30px;
  margin-bottom: 10px;
`;

const PartnerCard = ({ name, logo, url }: PartnerCardProps) => {
  return (
    <CardWrapper href={url} target="_blank" rel="noopener noreferrer">
      <ImageContainer>
        <Image
          src={logo}
          alt={`${name} 로고`}
          fill
          className="object-contain"
          style={{ objectFit: "contain" }} /* 이미지 왜곡 방지 */
        />
      </ImageContainer>
      <CompanyName>{name}</CompanyName>
    </CardWrapper>
  );
};

export default PartnerCard;
