import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Row3 = () => {
  const [listofProducts, setListofProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://filtrogatsby2022productserver.vercel.app/getProducts")
      .then((response) => {
        setListofProducts(response.data);
      });
  }, []);

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-5 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 w-full md:w-1/3 hover:transition-transform  hover:ease-in-out hover:rotate-3">
              <div className="h-full overflow-hidden">
                <img
                  className="w-full object-cover object-center h-96"
                  src="https://freight.cargo.site/w/768/q/75/i/77076d5c4e59773bc551289fca6dd2999328a507d21dc24ac96fe68b1d8de133/vase.jpeg"
                  alt="blog"
                />
                {
                  listofProducts.map((product) => {
                    return (
                      <div>
                        <h1 className="title-font text-lg font-medium mt-3">
                          {product.productname}
                        </h1>
                        <p className="leading-relaxed mb-3 text-gray-400">
                          {product.productcategory}
                        </p>
                      </div>
                    );
                  })[6]
                }
              </div>
            </div>
            <div className="p-4 w-full md:w-1/3 hover:transition-transform  hover:ease-in-out hover:rotate-3">
              <div className="h-full overflow-hidden">
                <img
                  className="h-96 w-full object-cover object-center"
                  src="https://freight.cargo.site/w/800/q/75/i/821935a37dde772b4bd98410165d0a9ce1d3e13a634d1d43a1867a5b4c5cebc1/_86-3.jpeg"
                  alt="blog"
                />
                {
                  listofProducts.map((product) => {
                    return (
                      <div>
                        <h1 className="title-font text-lg font-medium mt-3">
                          {product.productname}
                        </h1>
                        <p className="leading-relaxed mb-3 text-gray-400">
                          {product.productcategory}
                        </p>
                      </div>
                    );
                  })[7]
                }
              </div>
            </div>
            <div className="p-4 w-full md:w-1/3 hover:transition-transform  hover:ease-in-out hover:rotate-3">
              <div className="h-full overflow-hidden">
                <img
                  className="h-96 w-full object-cover object-center"
                  src="https://freight.cargo.site/w/1000/q/75/i/ae5785a5cb3b77ce8c8bcb923a4a1e65c1d3d89ceab873ecf4736f358cfe6d67/_86.JPG"
                  alt="blog"
                />
                {
                  listofProducts.map((product) => {
                    return (
                      <div>
                        <h1 className="title-font text-lg font-medium mt-3">
                          {product.productname}
                        </h1>
                        <p className="leading-relaxed mb-3 text-gray-400">
                          {product.productcategory}
                        </p>
                      </div>
                    );
                  })[8]
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Row3;
