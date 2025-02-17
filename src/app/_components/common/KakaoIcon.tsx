"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const StyledLink = styled(Link)`
  position: fixed;
  bottom: 110px;
  right: 40px;
  width: 60px;
  height: 60px;
  border-radius: 9999px;
  background-color: #ffe812;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
  transition: background-color 0.2s, transform 0.2s;
  z-index: 50;

  &:hover {
    background-color: #ffd700;
    transform: scale(1.05);
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 2rem;
  height: 2rem;
`;

const KakaoChatButton = () => {
  return (
    <StyledLink href={"https://open.kakao.com/o/sxBDmAgh"} target="_blank">
      <ImageWrapper>
        <Image
          src="/images/ic-kakao-talk.png"
          alt="카카오톡 채팅 문의"
          fill
          className="object-contain"
        />
      </ImageWrapper>
    </StyledLink>
  );
};

export default KakaoChatButton;
