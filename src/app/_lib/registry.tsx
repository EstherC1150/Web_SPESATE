"use client";

import React, { useState } from "react";
import { useServerInsertedHTML } from "next/navigation";
import {
  createGlobalStyle,
  ServerStyleSheet,
  StyleSheetManager,
} from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

  html, body {
    overflow: auto; /* 스크롤 활성화 */
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }

  // 이미지 드래그 방지
  img {
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
  }

  /* Button 기본 스타일 제거 */
  button {
    all: unset; /* 모든 기본 스타일 초기화 */
  }
`;

export default function StyledComponentsRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  // Only create stylesheet once with lazy initial state
  // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  if (typeof window !== "undefined") return <>{children}</>;

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      <GlobalStyle />
      {children}
    </StyleSheetManager>
  );
}
