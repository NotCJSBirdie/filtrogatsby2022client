import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Row7 = () => {
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
                  src="https://freight.cargo.site/w/768/q/94/i/be06d09fef04474e596c5452777ee1e7dcfb294e9388a59dbd926cf182d6b736/vase.jpeg"
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
                  })[18]
                }
              </div>
            </div>
            <div className="p-4 w-full md:w-1/3 hover:transition-transform  hover:ease-in-out hover:rotate-3">
              <div className="h-full overflow-hidden">
                <img
                  className="h-96 w-full object-cover object-center"
                  src="https://freight.cargo.site/w/800/q/75/i/80b4c867013fe3e6514689fcbd15e1514a018f479567e6026160575f78115ae8/kho.jpeg"
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
                  })[19]
                }
              </div>
            </div>
            <div className="p-4 w-full md:w-1/3 hover:transition-transform  hover:ease-in-out hover:rotate-3">
              <div className="h-full overflow-hidden">
                <img
                  className="h-96 w-full object-cover object-center"
                  src="https://freight.cargo.site/w/1000/q/75/i/11ccb17875e932b461a8d9b89444e5e762e84782744b709244de7777935c05d9/_86.JPG"
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
                  })[20]
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Row7;
