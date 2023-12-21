import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useGlobalState } from "../components/GlobalState";

const Connect = () => {
  const { setPageName } = useGlobalState();

  useEffect(() => {
    setPageName("- 연락주세요");
  }, [setPageName]);

  return (
    <>
      <Header />
      <div className="content">
        <div className="section">
          <h2 class="sub-title">Connect</h2>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Connect;
