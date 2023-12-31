import React from "react";

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="footer">
      <div className="section">
        <div className="copyright">
          All rights reserved. &copy; Jang Jieun 2023
          <button className="btn-scrolltotop" onClick={handleScrollToTop}>
            <svg
              className="arrow up"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="M15.101 5.5V23.1094L9.40108 17.4095L8.14807 18.6619L15.9862 26.5L23.852 18.6342L22.5996 17.3817L16.8725 23.1094V5.5H15.101Z"
              ></path>
            </svg>
            <span>맨위로</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
