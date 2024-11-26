"use client";

import styled, { createGlobalStyle } from "styled-components";
import { useState } from "react";
import Link from "next/link";

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
  color: white;
  position: relative;
`;

const Inner = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Nav = styled.nav`
  display: flex;
  gap: 4px;
  padding: 15px 20px;
  flex: 10;
  align-items: center;
  justify-content: center;
`;

const NavItem = styled.div`
  width: 150px;
  text-align: center;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: white;
  font-size: 1rem;
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
  background-color: #ffffff45;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  color: white;
  z-index: 999;
`;

const LeftContent = styled.div`
  display: flex;
  flex: 1;
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
  gap: 5px;
`;

const SubMenuItem = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 0.9rem;
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
  flex: 1;
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
      <Inner>
        <HeaderLeft>Logo</HeaderLeft>
        <Nav
          onMouseEnter={handleMouseEnter} // Nav에 마우스 올리면 서브메뉴가 보이도록
          onMouseLeave={handleMouseLeave} // Nav에서 마우스 떠나면 서브메뉴가 사라지도록
        >
          {menuItems.map((menu) => (
            <NavItem key={menu.title}>
              <NavLink href="#">{menu.title}</NavLink>
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
