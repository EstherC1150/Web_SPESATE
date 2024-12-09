import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import colors from "@/app/_constants/colors";

const SQuestionForm = styled(motion.div)`
  display: flex;
  position: fixed;
  bottom: 120px;
  right: 40px;
  width: 370px;
  height: 664px;
  max-height: 80vh; /* 화면 높이의 최대 90% */
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  z-index: 2000;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 30px 26px 0 26px;
  overflow-y: auto; /* 내부 스크롤 활성화 */
  scrollbar-width: none; /* Firefox에서 스크롤바 숨기기 */

  &::-webkit-scrollbar {
    display: none; /* Webkit 기반 브라우저에서 스크롤바 숨기기 */
  }
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
  flex: 1;
`;

const RowLine = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  gap: 8px;
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

const ContentTextArea = styled.textarea`
  font-weight: 400;
  font-size: 16px;
  color: #050505;
  width: 100%;
  flex: 1;
  padding: 10px;
  border-radius: 8px;
  outline: none;
  border: none;
  /* background-color: #e6e6e6; */
  resize: none;
  margin-top: 10px;
  border: 1px solid #d1d1d1;
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
  background-color: ${colors.primary.main}; /* 기본 배경색 */
  color: white; /* 기본 텍스트 색 */
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  text-align: center;
  cursor: pointer;
  flex: 1;
  transition: background-color 0.3s ease, color 0.3s ease; /* 부드러운 전환 효과 */

  &:hover {
    background-color: #1ba2c7; /* 호버 시 배경색 */
    color: #ffffff; /* 호버 시 텍스트 색 */
  }

  &:active {
    background-color: #24849e; /* 클릭 시 배경색 */
  }
`;

const PrevButton = styled.button`
  margin: -1px;
  background-color: white; /* 기본 배경색 */
  color: ${colors.primary.main}; /* 기본 텍스트 색 */
  padding: 10px 20px;
  border: 1px solid ${colors.primary.main};
  border-radius: 5px;
  font-size: 16px;
  text-align: center;
  cursor: pointer;
  flex: 1;
  transition: background-color 0.3s ease, color 0.3s ease; /* 부드러운 전환 효과 */

  &:hover {
    background-color: #1ba2c7; /* 호버 시 배경색 */
    color: #ffffff; /* 호버 시 텍스트 색 */
  }

  &:active {
    background-color: #24849e; /* 클릭 시 배경색 */
  }
`;

const PageContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const QuestionContextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const slideVariants = {
  hiddenLeft: { x: "-100%", opacity: 0 }, // 왼쪽으로 사라짐
  hiddenRight: { x: "100%", opacity: 0 }, // 오른쪽으로 사라짐
  visible: { x: 0, opacity: 1 }, // 화면에 보이는 상태
};

const options = ["정기관리", "정부과제", "기업 인증", "특허 및 디자인", "기타"];

const QuestionForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("문의 유형을 선택해주세요.");
  const [step, setStep] = useState<"개인정보작성" | "문의내용작성">(
    "개인정보작성"
  );
  const [hasRendered, setHasRendered] = useState(false); // 초기 렌더링 여부

  const toggleOptions = () => setIsOpen(!isOpen);

  const handleOptionClick = (option: string) => {
    setSelected(option);
    setIsOpen(false);
  };

  // 마운트 후 렌더링 상태를 업데이트
  useEffect(() => {
    setHasRendered(true);
  }, []);

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

      <AnimatePresence mode="wait">
        <PageContent
          key={step}
          variants={slideVariants}
          initial={
            hasRendered
              ? step !== "개인정보작성"
                ? "hiddenRight"
                : "hiddenLeft"
              : false
          }
          animate="visible"
          exit={step !== "개인정보작성" ? "hiddentRight" : "hiddenLeft"}
          transition={{ duration: 0.25, ease: "easeInOut" }}
        >
          {step === "개인정보작성" && (
            <>
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
                <SubTitle>직책 / 직급</SubTitle>
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
                <SendButton onClick={() => setStep("문의내용작성")}>
                  다음
                </SendButton>
              </ColLine>
            </>
          )}
          {step === "문의내용작성" && (
            <QuestionContextWrapper>
              <ColLine>
                <SubTitle>문의내용</SubTitle>
                <ContentTextArea placeholder="문의내용을 작성해주세요." />
              </ColLine>
              <RowLine style={{ marginTop: "auto" }}>
                <PrevButton onClick={() => setStep("개인정보작성")}>
                  이전
                </PrevButton>
                <SendButton onClick={() => setStep("문의내용작성")}>
                  작성
                </SendButton>
              </RowLine>
            </QuestionContextWrapper>
          )}
        </PageContent>
      </AnimatePresence>
    </SQuestionForm>
  );
};

export default QuestionForm;
