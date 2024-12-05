import Header from "../_components/common/Header";
import { QuestionIcon } from "../_components/common/QuestionIcon";
import Footer from "../_components/home/Footer";

type Prosp = {
  children: React.ReactNode;
};

const Testlayout = ({ children }: Prosp) => {
  return (
    <>
      <Header />
      <QuestionIcon />
      {children}
      <div
        style={{
          display: "flex",
          backgroundColor: "#ffffff",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          paddingLeft: "17px",
        }}
      >
        <Footer />
      </div>
    </>
  );
};

export default Testlayout;
