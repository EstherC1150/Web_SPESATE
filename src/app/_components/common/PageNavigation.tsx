import React from "react";
import styled from "styled-components";

type Props = {
  size: number;
  currentPage: number;
  onClickPageNav: (page: number) => void;
};

const SNavigationContainer = styled.nav`
  position: fixed;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 10;
`;

const PageNavigation = ({ size, currentPage, onClickPageNav }: Props) => {
  return (
    <SNavigationContainer>
      {Array(size)
        .fill(0)
        .map((_, index) => (
          <div
            key={index}
            style={{
              height: "12px",
              width: "12px",
              margin: "10px 12px",
              borderRadius: "50%",
              backgroundColor: currentPage === index ? "#4dd9ff" : "gray",
              cursor: "pointer",
            }}
            onClick={() => onClickPageNav(index)}
          />
        ))}
    </SNavigationContainer>
  );
};

export default PageNavigation;
