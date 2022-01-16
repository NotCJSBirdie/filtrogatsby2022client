import React from "react";
import Header from "./components/Header";
import "../styles/global.css";
import Row1 from "./components/Row1";
import Row2 from "./components/Row2";
import Row3 from "./components/Row3";
import Row4 from "./components/Row4";
import Row5 from "./components/Row5";
import Row6 from "./components/Row6";
import Row7 from "./components/Row7";
import { Fade } from "react-awesome-reveal";
import Row8 from "./components/Row8";
import Row9 from "./components/Row9";
import Row10 from "./components/Row10";
import Row11 from "./components/Row11";
import Row12 from "./components/Row12";
import Row13 from "./components/Row13";
import Footer from "./components/Footer";

// markup
const IndexPage = () => {
  return (
    <main id="mainbody" className="overflow-hidden p-10">
      <title>Filtro Gatsby 2022</title>
      <Fade>
        <Header />
      </Fade>

      <Fade>
        <Row1 />
      </Fade>

      <Fade>
        <Row2 />
      </Fade>

      <Fade>
        <Row3 />
      </Fade>

      <Fade>
        <Row4 />
      </Fade>

      <Fade>
        <Row5 />
      </Fade>

      <Fade>
        <Row6 />
      </Fade>

      <Fade>
        <Row7 />
      </Fade>

      <Fade>
        <Row8 />
      </Fade>

      <Fade>
        <Row9 />
      </Fade>

      <Fade>
        <Row10 />
      </Fade>

      <Fade>
        <Row11 />
      </Fade>

      <Fade>
        <Row12 />
      </Fade>

      <Fade>
        <Row13 />
      </Fade>

      <Fade>
        <Footer />
      </Fade>
    </main>
  );
};

export default IndexPage;
