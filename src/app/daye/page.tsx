"use client";

import styled from "styled-components";

const HeaderContainer = styled.header`
  width: 100%;
  background-color: #2f2f45;
  color: white;
  position: relative;
`;

const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
`;

const Nav = styled.nav`
  display: flex;
  gap: 30px;

  &:hover > div {
    display: block; /* 전체 서브메뉴 표시 */
  }
`;

const NavItem = styled.div`
  position: relative;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: white;
  font-size: 1rem;
  font-weight: bold;

  &:hover {
    color: #ff7f50;
  }
`;

const SubMenuWrapper = styled.div`
  display: none; /* 기본적으로 숨김 */
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%; /* HeaderContainer의 너비와 동일 */
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 999;
`;

const SubMenu = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4개의 열로 정렬 */
  gap: 10px;
`;

const SubMenuItem = styled.a`
  text-decoration: none;
  color: black;
  font-size: 0.9rem;
  padding: 5px 10px;
  border-radius: 5px;

  &:hover {
    background-color: #f0f0f0;
    color: #ff7f50;
  }
`;

const HeaderRight = styled.div`
  display: flex;
  gap: 15px;
`;

const RightLink = styled.a`
  text-decoration: none;
  color: #ff7f50;
  font-size: 0.9rem;

  &:hover {
    text-decoration: underline;
  }
`;

// 메뉴 데이터
const menuItems = {
  회사소개: [
    { label: "트위니", href: "#" },
    { label: "트위니 CI", href: "#" },
  ],
  솔루션: [
    { label: "물류센터", href: "#" },
    { label: "오더피킹", href: "#" },
    { label: "공장", href: "#" },
    { label: "관제 시스템", href: "#" },
  ],
  제품: [
    { label: "AMR", href: "#" },
    { label: "대화형 AI", href: "#" },
    { label: "자율주행 S/W", href: "#" },
    { label: "AGV", href: "#" },
    { label: "대상추종", href: "#" },
    { label: "플랫폼", href: "#" },
  ],
  홍보센터: [
    { label: "언론보도", href: "#" },
    { label: "인재채용", href: "#" },
    { label: "공지사항", href: "#" },
  ],
};

export default function Header() {
  return (
    <HeaderContainer>
      <Inner>
        <div>Logo</div>
        <Nav>
          {Object.keys(menuItems).map((menu, index) => (
            <NavItem key={index}>
              <NavLink href="#">{menu}</NavLink>
            </NavItem>
          ))}
          <SubMenuWrapper>
            <SubMenu>
              {Object.entries(menuItems).map(([key, items], index) => (
                <div key={index}>
                  <strong>{key}</strong> {/* 메뉴 제목 */}
                  {items.map((item, subIndex) => (
                    <SubMenuItem key={subIndex} href={item.href}>
                      {item.label}
                    </SubMenuItem>
                  ))}
                </div>
              ))}
            </SubMenu>
          </SubMenuWrapper>
        </Nav>
        <HeaderRight>
          <RightLink href="#">문의하기</RightLink>
          <RightLink href="#">EN</RightLink>
        </HeaderRight>
      </Inner>
    </HeaderContainer>
  );
}
