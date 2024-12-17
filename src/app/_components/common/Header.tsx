"use client";

import colors from "@/app/_constants/colors";
import { menuItems } from "@/app/_constants/menu";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const HeaderContainer = styled.header<{ $hasShadow: boolean }>`
  width: 100%;
  color: #fff;
  position: fixed;
  top: 0;
  z-index: 1000;
  box-shadow: ${({ $hasShadow }) =>
    $hasShadow ? "0px 4px 6px rgba(0, 0, 0, 0.1)" : "none"};
  transition: box-shadow 0.3s ease-in-out;
`;

const Inner = styled.div<{ $isVisible: boolean }>`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
`;

const Nav = styled.nav`
  display: flex;
  gap: 4px;
  padding: 15px 20px;
  margin-left: auto;
  margin-right: auto;
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
  color: #221e1f;
  font-size: 18px;
  font-weight: bold;

  &:hover {
    color: ${colors.primary.main};
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
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
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
    color: ${colors.primary.main};
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

const ImageBox = styled(Link)`
  width: 180px;
  height: 49px;
  position: relative;
`;

const Header = () => {
  const [isSubMenuVisible, setSubMenuVisible] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);

  const handleMouseEnter = () => {
    setSubMenuVisible(true);
  };

  const handleMouseLeave = () => {
    setSubMenuVisible(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setHasShadow(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <HeaderContainer $hasShadow={hasShadow}>
      <Inner $isVisible={isSubMenuVisible}>
        <HeaderLeft>
          <ImageBox href={"/"}>
            <Image
              src={"/images/logo-black.png"}
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
              <NavLink
                $isVisible={isSubMenuVisible}
                href={menu.subTitle[0].href}
              >
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
            </SubMenu>
            <RightContent />
          </SubMenuWrapper>
        </Nav>
        <HeaderRight></HeaderRight>
      </Inner>
    </HeaderContainer>
  );
};

export default Header;
