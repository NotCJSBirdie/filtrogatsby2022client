import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Row8 = () => {
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
                  src="https://freight.cargo.site/w/736/q/75/i/f28de00d5509563a933d5e36d606be4bf66a3cdd00738fb3399936d493a82218/zanini.jpeg"
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
                  })[21]
                }
              </div>
            </div>
            <div className="p-4 w-full md:w-1/3 hover:transition-transform  hover:ease-in-out hover:rotate-3">
              <div className="h-full overflow-hidden">
                <img
                  className="h-96 w-full object-cover object-center"
                  src="https://freight.cargo.site/w/1000/q/75/i/6dbb11658a636b6afe21bb838be80e06d24508803cdb77b60cff6850cee99486/_86.jpeg"
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
                  })[22]
                }
              </div>
            </div>
            <div className="p-4 w-full md:w-1/3 hover:transition-transform  hover:ease-in-out hover:rotate-3">
              <div className="h-full overflow-hidden">
                <img
                  className="h-96 w-full object-cover object-center"
                  src="https://freight.cargo.site/w/800/q/75/i/03d650f585f1cc01d14dfe364e8f2b646d3ae1d9c68d47a2db17da9dfdf80166/buis.jpeg"
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
                  })[23]
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Row8;
