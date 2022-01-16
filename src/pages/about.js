import React from "react";
import "../styles/global.css";
import AboutUs from "./components/AboutUs";
import { Fade } from "react-awesome-reveal";

const about = () => {
  return (
    <div className="p-10">
      <Fade>
        <AboutUs />
      </Fade>
    </div>
  );
};

export default about;
