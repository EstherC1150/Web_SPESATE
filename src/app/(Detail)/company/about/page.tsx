"use client";

import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  background-color: #fff;
`;

const TestText = styled.p`
  margin-top: 120px;
  margin-left: 20px;
  font-size: 24px;
  font-weight: 600;
`;

const CompanyAboutPage = () => {
  return (
    <Container>
      <TestText>Test중 입니다아아아아아아아아</TestText>
    </Container>
  );
};

export default CompanyAboutPage;
