import colors from "@/app/_constants/colors";
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
              height: currentPage === index ? "20px" : "12px",
              width: "12px",
              margin: "10px 12px",
              borderRadius: currentPage === index ? "24px" : "50%",
              backgroundColor:
                currentPage === index ? `${colors.primary.main}` : "gray",
              cursor: "pointer",
              transition: `
              width 0.2s cubic-bezier(0.25, 1, 0.5, 1), 
              height 0.2s cubic-bezier(0.25, 1, 0.5, 1),
              border-radius 0.2s cubic-bezier(0.25, 1, 0.5, 1),
              background-color 0.2s ease`,
            }}
            onClick={() => onClickPageNav(index)}
          />
        ))}
    </SNavigationContainer>
  );
};

export default PageNavigation;
