import React from "react";
import styled from "styled-components";

const FooterSection = styled.section``;
const FooterContent = styled.div``;
const Address = styled.p``;
const SnsUrl = styled.div``;
const Footer = () => {
  return (
    <>
      <FooterSection>
        <FooterContent>
          a company that meets the needs of its customers
        </FooterContent>
        <Address>울산 광역시 남구 번영로 124번길 21 3층 301-7호</Address>
        <SnsUrl></SnsUrl>
      </FooterSection>
    </>
  );
};

export default Footer;
