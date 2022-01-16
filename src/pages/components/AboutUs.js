import React from "react";
import { Link } from "gatsby";
import { Fade } from "react-awesome-reveal";
import Footer from "./Footer";

import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const AboutUs = () => {
  const [about, setAbout] = useState([]);

  useEffect(() => {
    axios
      .get("https://filtrogatsby2022aboutserver.vercel.app/getAbout")
      .then((response) => {
        setAbout(response.data);
      });
  }, []);

  return (
    <div>
      <Fade>
        <div className="flex flex-col text-center w-full my-5">
          <h1 className=" text-xl font-medium title-font mb-4 text-gray-900">
            <Link to="/">
              <span className="mr-2 hover:underline hover:underline-offset-2 hover:transition-all hover:ease-linear">
                Catalog,
              </span>
            </Link>
            <Link to="/about">
              <span className="mr-2 hover:underline hover:underline-offset-2 hover:transition-all hover:ease-linear">
                About Us,
              </span>
            </Link>
            <Link to="https://www.instagram.com/filtro_studio/">
              <span className="mr-2 hover:underline hover:underline-offset-2 hover:transition-all hover:ease-linear">
                Instagram
              </span>
            </Link>
          </h1>
        </div>
      </Fade>

      <Fade>
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-5 md:flex-row flex-col items-start">
            {
              about.map((aboutstatement) => {
                return (
                  <div className="lg:flex-grow md:w-2/3 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center text-xl">
                    <p className="mb-8 leading-relaxed">
                      {aboutstatement.paragraphone}
                    </p>
                    <p className="mb-8 leading-relaxed">
                      {aboutstatement.paragraphtwo}
                    </p>
                  </div>
                );
              })[0]
            }

            <div className="w-full md:w-1/3  ">
              <div className="flex flex-col text-left items-start text-xl">
                <p>O Email</p>
                <p>O Instagram</p>
              </div>
            </div>
          </div>
        </section>
      </Fade>

      <Fade>
        <img
          src="https://files.cargocollective.com/c1082749/filtroo.svg"
          alt="brandtitle"
        />
      </Fade>

      <Fade>
        <Footer />
      </Fade>
    </div>
  );
};

export default AboutUs;
