import React, { useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

const SQuestionForm = styled(motion.div)`
  display: flex;
  position: fixed;
  bottom: 120px;
  right: 40px;
  width: 370px;
  height: 660px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  z-index: 999;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 30px 26px;
`;

const Title = styled.p`
  font-weight: 700;
  font-size: 22px;
  margin-bottom: 36px;
`;

const ColLine = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 16px;
`;

const SubTitle = styled.p`
  font-weight: 600;
  font-size: 15px;
  color: #535353;
  margin-bottom: 10px;
  margin-left: 4px;
`;

const Content = styled.input`
  font-weight: 400;
  font-size: 16px;
  outline: none;
  border: none;
  border-bottom: 1px solid #888888;
  flex: 1;
  padding-bottom: 8px;
  padding-right: 4px;
  padding-left: 4px;
  color: #050505;
`;

// 셀렉트 박스 관련 스타일
const SelectBoxWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 300px; /* Optional: Adjust to your design */
`;

const SelectedValue = styled(motion.div)`
  height: 27px;
  width: 100%;
  background: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 10px;
  cursor: pointer;
`;

const OptionsList = styled(motion.ul)`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 4px;
  margin-top: 4px;
  overflow: hidden;
  z-index: 10;
`;

const OptionItem = styled(motion.li)`
  list-style: none;
  padding: 5px 10px;
  cursor: pointer;
  &:hover {
    background: #f0f0f0;
  }
`;

const SendButton = styled.button`
  background-color: #4dd9ff; /* 기본 배경색 */
  color: white; /* 기본 텍스트 색 */
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  text-align: center;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.3s ease, color 0.3s ease; /* 부드러운 전환 효과 */

  &:hover {
    background-color: #1ba2c7; /* 호버 시 배경색 */
    color: #ffffff; /* 호버 시 텍스트 색 */
  }

  &:active {
    background-color: #24849e; /* 클릭 시 배경색 */
  }
`;

const options = ["정기관리", "정부과제 프로젝트", "인증", "특허 및 디자인"];

const QuestionForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("문의 유형을 선택해주세요.");

  const toggleOptions = () => setIsOpen(!isOpen);

  const handleOptionClick = (option: string) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <SQuestionForm
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.5, // 자연스러운 애니메이션 시간
        ease: "easeInOut", // 부드러운 시작과 끝
      }}
    >
      <Title>문의하기</Title>
      <ColLine>
        <SubTitle>문의유형</SubTitle>
        <SelectBoxWrapper>
          {/* Selected Value */}
          <SelectedValue
            onClick={toggleOptions}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {selected}
            <motion.span
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              ▼
            </motion.span>
          </SelectedValue>

          {/* Options */}
          <AnimatePresence>
            {isOpen && (
              <OptionsList
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                {options.map((option, index) => (
                  <OptionItem
                    key={index}
                    onClick={() => handleOptionClick(option)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                  >
                    {option}
                  </OptionItem>
                ))}
              </OptionsList>
            )}
          </AnimatePresence>
        </SelectBoxWrapper>
      </ColLine>
      <ColLine>
        <SubTitle>회사명</SubTitle>
        <Content placeholder="OO회사" />
      </ColLine>
      <ColLine>
        <SubTitle>부서명</SubTitle>
        <Content placeholder="Dx 사업부" />
      </ColLine>
      <ColLine>
        <SubTitle>담당자명</SubTitle>
        <Content placeholder="홍길동" />
      </ColLine>
      <ColLine>
        <SubTitle>직책</SubTitle>
        <Content placeholder="대리" />
      </ColLine>
      <ColLine>
        <SubTitle>연락처</SubTitle>
        <Content placeholder="010-XXXX-XXXX" />
      </ColLine>
      <ColLine>
        <SubTitle>이메일</SubTitle>
        <Content placeholder="korea@xxxxx.com" />
      </ColLine>
      <ColLine>
        <SendButton>다음</SendButton>
      </ColLine>
    </SQuestionForm>
  );
};

export default QuestionForm;
