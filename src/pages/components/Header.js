import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "gatsby";

const Header = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-5 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
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
            <img
              src="https://files.cargocollective.com/c1082749/filtroo.svg"
              alt="brandtitle"
            />

            <div className="py-5"></div>

            <Marquee gradient={false} direction="right" speed={80}>
              <h1 className="text-3xl mr-2">
                Filtro Studio is a curated catalogue of furniture and objects
                Filtro Studio is a curated catalogue of furniture and objects
                Filtro Studio is a curated catalogue of furniture and objects
                Filtro Studio is a curated catalogue of furniture and objects
              </h1>
            </Marquee>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
