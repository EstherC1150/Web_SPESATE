"use client";

import React, { useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import QuestionForm from "./QuestionForm";
import colors from "@/app/_constants/colors";

const SContioner = styled.button`
  position: fixed;
  z-index: 999;
  bottom: 40px;
  right: 40px;
  width: 60px;
  height: 60px;
  background-color: ${colors.primary.main};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.15), 0px 2px 6px rgba(0, 0, 0, 0.1);
    transform: scale(1.05);
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 44px;
  height: 44px;
  overflow: hidden;
`;

const ImageStyle = styled(motion.img)`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const images = ["/images/ic-qeustion.png", "/images/ic-close.png"];

export const QuestionIcon = () => {
  const [index, setIndex] = useState(0);

  const handleToggleImage = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <>
      <SContioner onClick={handleToggleImage}>
        <ImageWrapper>
          <AnimatePresence mode="wait">
            <ImageStyle
              key={index}
              src={images[index]}
              alt={`Image ${index + 1}`}
              initial={{ opacity: 0, rotate: 0, scale: 0.8 }}
              animate={{ opacity: 1, rotate: 360, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
            />
          </AnimatePresence>
        </ImageWrapper>
      </SContioner>

      <AnimatePresence>{index === 1 && <QuestionForm />}</AnimatePresence>
    </>
  );
};
