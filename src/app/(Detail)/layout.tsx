import { QuestionIcon } from "../_components/common/QuestionIcon";

type Prosp = {
  children: React.ReactNode;
};

const Testlayout = ({ children }: Prosp) => {
  return (
    <>
      <QuestionIcon />
      {children}
    </>
  );
};

export default Testlayout;
