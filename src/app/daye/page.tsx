"use client";

import styled, { createGlobalStyle } from "styled-components";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #191922; /* 원하는 배경색 */
    /* font-family: 'Arial', sans-serif; 폰트도 설정 가능 */
  }
`;
const HeaderContainer = styled.header`
  width: 100%;
  color: #fff;
  position: relative;
`;

const Inner = styled.div<{ $isVisible: boolean }>`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ $isVisible }) =>
    $isVisible ? "#FFF" : "transparent"};
`;

const Nav = styled.nav`
  display: flex;
  gap: 4px;
  padding: 15px 20px;
  flex: 10;
  align-items: center;
  justify-content: center;
  height: 90px;
`;

const NavItem = styled.div`
  width: 150px;
  text-align: center;
`;

const NavLink = styled(Link)<{ $isVisible: boolean }>`
  text-decoration: none;
  color: ${({ $isVisible }) => ($isVisible ? "#221e1f" : "#fff")};
  font-size: 18px;
  font-weight: bold;

  &:hover {
    color: #4dd9ff;
  }
`;

const SubMenuWrapper = styled.div<{ $isVisible: boolean }>`
  display: ${({ $isVisible }) => ($isVisible ? "flex" : "none")};
  position: absolute;
  top: 100%;
  left: 0;
  right: 0; /* HeaderContainer 전체 너비로 확장 */
  /* background-color: #ffffff45; */
  background-color: #fff;
  /* box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); */
  color: #221e1f;
  z-index: 999;
`;

const LeftContent = styled.div`
  display: flex;
  width: 180px;
  margin-left: 20px;
`;

const RightContent = styled.div`
  display: flex;
  flex: 1;
`;

const SubMenu = styled.div`
  display: flex;
  flex: 10;
  justify-content: center;
  gap: 4px;
  padding: 15px 20px;
`;

const SubMenuColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 10px 0;
`;

const SubMenuItem = styled(Link)`
  text-decoration: none;
  color: #221e1f;
  font-size: 16px;
  padding: 5px 10px;
  text-align: center;
  width: 150px;

  &:hover {
    color: #4dd9ff;
  }
`;

const HeaderRight = styled.div`
  display: flex;
  gap: 15px;
  flex: 1;
`;

const HeaderLeft = styled.div`
  width: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
`;

const RightLink = styled(Link)`
  text-decoration: none;
  color: #ffffff;
  font-size: 0.9rem;

  &:hover {
    text-decoration: underline;
  }
`;

const ImageBox = styled.div`
  width: 180px;
  height: 49px;
  position: relative;
`;

type MenuItems = {
  [key: string]: { label: string; href: string }[];
};

const menuItems: THeader[] = [
  {
    title: "회사소개",
    subTitle: [
      { label: "트위니", href: "#" },
      { label: "트위니 CI", href: "#" },
    ],
  },
  {
    title: "솔루션",
    subTitle: [
      { label: "물류센터", href: "#" },
      { label: "오더피킹", href: "#" },
      { label: "공장", href: "#" },
      { label: "관제 시스템", href: "#" },
    ],
  },
  {
    title: "제품",
    subTitle: [
      { label: "AMR", href: "#" },
      { label: "대화형 AI", href: "#" },
      { label: "자율주행 S/W", href: "#" },
      { label: "AGV", href: "#" },
      { label: "대상추종", href: "#" },
      { label: "플랫폼", href: "#" },
    ],
  },
  {
    title: "홍보센터",
    subTitle: [
      { label: "언론보도", href: "#" },
      { label: "인재채용", href: "#" },
      { label: "공지사항", href: "#" },
    ],
  },
];

type THeader = {
  title: string;
  subTitle: { label: string; href: string }[];
};

export default function Header() {
  const [isSubMenuVisible, setSubMenuVisible] = useState(false);

  const handleMouseEnter = () => {
    setSubMenuVisible(true);
  };

  const handleMouseLeave = () => {
    setSubMenuVisible(false);
  };

  return (
    <HeaderContainer>
      <GlobalStyle />
      <Inner $isVisible={isSubMenuVisible}>
        <HeaderLeft>
          {/* Logo */}
          <ImageBox>
            <Image
              src={
                isSubMenuVisible
                  ? "/images/logo-black.png"
                  : "/images/logo-white.png"
              }
              alt="Logo"
              fill
              priority // 중요 이미지 로드 우선 처리
            />
          </ImageBox>
        </HeaderLeft>
        <Nav
          onMouseEnter={handleMouseEnter} // Nav에 마우스 올리면 서브메뉴가 보이도록
          onMouseLeave={handleMouseLeave} // Nav에서 마우스 떠나면 서브메뉴가 사라지도록
        >
          {menuItems.map((menu) => (
            <NavItem key={menu.title}>
              <NavLink $isVisible={isSubMenuVisible} href="#">
                {menu.title}
              </NavLink>
            </NavItem>
          ))}
          <SubMenuWrapper $isVisible={isSubMenuVisible}>
            <LeftContent />
            <SubMenu>
              {menuItems.map((menu) => (
                <SubMenuColumn key={menu.title}>
                  {menu.subTitle.map((item) => (
                    <SubMenuItem key={item.label} href={item.href}>
                      {item.label}
                    </SubMenuItem>
                  ))}
                </SubMenuColumn>
              ))}
              {/* {Object.entries(menuItems).map(([key, items], index) => (
                <SubMenuColumn key={index}>
                  <strong>{key}</strong>
                  {items.map((item, subIndex) => (
                    <SubMenuItem key={subIndex} href={item.href}>
                      {item.label}
                    </SubMenuItem>
                  ))}
                </SubMenuColumn>
              ))} */}
            </SubMenu>
            <RightContent />
          </SubMenuWrapper>
        </Nav>
        <HeaderRight>
          {/* <RightLink href="#">문의하기</RightLink>
          <RightLink href="#">EN</RightLink> */}
        </HeaderRight>
      </Inner>
    </HeaderContainer>
  );
}
