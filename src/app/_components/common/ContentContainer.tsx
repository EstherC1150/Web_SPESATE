import React, { ReactNode } from "react";
import styled from "styled-components";

type Props = {
  children: ReactNode;
};

const SContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentContainer = ({ children }: Props) => {
  return <SContainer>{children}</SContainer>;
};

export default ContentContainer;
