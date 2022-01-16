import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Row6 = () => {
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
                  src="https://freight.cargo.site/w/768/q/75/i/0eeb4c303c23f5ba28f748024948ea846985faf23f42fe3e0cade5f6a2b4a566/_86.JPG"
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
                  })[15]
                }
              </div>
            </div>
            <div className="p-4 w-full md:w-1/3 hover:transition-transform  hover:ease-in-out hover:rotate-3">
              <div className="h-full overflow-hidden">
                <img
                  className="h-96 w-full object-cover object-center"
                  src="https://freight.cargo.site/w/700/q/94/i/b8b4b7697451dd5df5245fae72067d111a70a1cadd2f0ecccf958f19c8bb6a4b/a81fcfbf-53c7-455f-8a6f-07b07ef80947.jpeg"
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
                  })[16]
                }
              </div>
            </div>
            <div className="p-4 w-full md:w-1/3 hover:transition-transform  hover:ease-in-out hover:rotate-3">
              <div className="h-full overflow-hidden">
                <img
                  className="h-96 w-full object-cover object-center"
                  src="https://freight.cargo.site/w/768/q/75/i/928baa639af42c51d42571b03d59aca5043e606a6452264b02b1bbefc84dc2c7/orange.jpeg"
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
                  })[17]
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Row6;
