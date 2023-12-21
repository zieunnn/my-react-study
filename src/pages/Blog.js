import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useGlobalState } from "../components/GlobalState";

const Blog = () => {
  const { setPageName } = useGlobalState();

  useEffect(() => {
    setPageName("- 블로그");
  }, [setPageName]);

  return (
    <>
      <Header />
      <div className="content">
        <div className="section">Blog</div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
