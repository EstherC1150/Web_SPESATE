"use client";

import React from "react";
import styled from "styled-components";

const SHeader = styled.header`
  width: 100%;
  height: 90px;
  position: absolute;
  z-index: 1000;
  box-shadow: inset 0 -1px 0 0 #eaeaea;
  background-color: #fffc;
  backdrop-filter: saturate(180%) blur(5px);
`;

const Header = () => {
  return <SHeader>Header</SHeader>;
};

export default Header;
