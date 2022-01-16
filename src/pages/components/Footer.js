import React from "react";
import Clock from "react-live-clock";
import moment from "moment";
import Marquee from "react-fast-marquee";

const currentTime = () => {
  moment().format("[Today is] dddd, MMMM Do YYYY, h:mm:ss");
};

const Footer = () => {
  return (
    <div className="w-full py-10">
      <Marquee gradient={false} direction="right" speed={80}>
        <h1 className="text-xl mx-2">
          Today is
          <span className="mx-2">
            <Clock format={currentTime} ticking={true} className="text-xl" />
          </span>
        </h1>
        <h1 className="text-xl mx-2">
          Today is
          <span className="mx-2">
            <Clock format={currentTime} ticking={true} className="text-xl" />
          </span>
        </h1>
        <h1 className="text-xl mx-2">
          Today is
          <span className="mx-2">
            <Clock format={currentTime} ticking={true} className="text-xl" />
          </span>
        </h1>
      </Marquee>
    </div>
  );
};

export default Footer;
