import React from "react";
import { motion } from "framer-motion";

import Header from "../Header";
import Home from "../Home";
import ReactFullpage from "@fullpage/react-fullpage";

const Portfolio = () => {
  return (
    <motion.div
      initial={{ translateX: 3000 }}
      animate={{ translateX: 0 }}
      exit={{ translateX: 3000 }}
      transition={{ type: "spring", duration: 1 }}
    >
      <ReactFullpage
        scrollingSpeed={750}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="portfolio-container section">
                <Header />
                <Home />
              </div>
              <div className="portfolio-container section">
                <Home />
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </motion.div>
  );
};

export default Portfolio;
