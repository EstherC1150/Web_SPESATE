import React from "react";
import styled from "styled-components";

const Box = styled.div`
  flex: 1 1 calc(50% - 20px);
  background-color: #f4f4f4;
  /* border: 1px solid #ddd; */
  border-radius: 8px;
  padding: 34px 24px;
  /* box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); */
  display: flex;
  flex-direction: column;
`;

const Icon = styled.img`
  width: 66px;
  height: 66px;
  margin-left: auto;
`;

const Title = styled.h3`
  font-size: 1.3rem;
  color: #221e1f;
  margin-bottom: 10px;
  font-weight: 700;
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: #221e1f;
  margin-top: 20px;
  margin-bottom: 50px;
  font-weight: 500;
  line-height: 150%;
  white-space: pre-wrap;
`;

interface MeritBoxProps {
  title: string;
  description: string;
  icon: string; // Image file name or URL
}

const MeritBox = ({ title, description, icon }: MeritBoxProps) => {
  return (
    <Box>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Icon src={icon} alt={title} />
    </Box>
  );
};

export default MeritBox;
