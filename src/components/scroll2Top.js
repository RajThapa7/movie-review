import React, { useState, useContext } from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { Link } from "react-scroll";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const scrollBtn = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 200) {
      setVisible(true);
    } else if (scrolled <= 200) {
      setVisible(false);
    }
  };

  window.addEventListener("scroll", scrollBtn);
  return (
    <>
      <Link
        to="nav-top"
        spy={true}
        smooth={true}
        offset={0}
        duration={600}
        style={{ display: visible ? "inline" : "none" }}
      >
        <BsFillArrowUpCircleFill className="fixed bottom-8 right-3 z-50 text-4xl text-cyan-400 hover:text-cyan-600 transition-all duration-300 ease-in-out"></BsFillArrowUpCircleFill>
      </Link>
    </>
  );
}