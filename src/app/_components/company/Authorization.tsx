import { easeInOut, motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

const AuthorizationContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 60px;
  width: 100%;
  gap: 20px;
`;

const ImageBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
`;

const ImageContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  aspect-ratio: 534 / 735; /* 비율을 유지 */
  box-shadow: 2px 2px 10px 0 rgba(0, 0, 0, 0.1);
`;

const ImageName = styled(motion.p)`
  font-size: 18px;
  font-weight: 500;
  margin-top: 20px;
`;

const Authorization = () => {
  const authList = [
    { url: "/images/company/spesate_인증서.png", name: "중소기업 확인서" },
  ];

  return (
    <AuthorizationContainer>
      {authList.map((item) => (
        <ImageBox key={item.name}>
          <ImageContainer>
            <Image src={item.url} alt="" fill />
          </ImageContainer>
          <ImageName>{item.name}</ImageName>
        </ImageBox>
      ))}
    </AuthorizationContainer>
  );
};

export default Authorization;
