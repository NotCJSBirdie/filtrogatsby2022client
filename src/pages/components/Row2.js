import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Row2 = () => {
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
                  src="https://freight.cargo.site/w/798/q/75/i/d97052bfe7237bf356ea635d2483dbc242fa294c377cac207dfb5431d3bfea24/alky.jpeg"
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
                  })[3]
                }
              </div>
            </div>
            <div className="p-4 w-full md:w-1/3 hover:transition-transform  hover:ease-in-out hover:rotate-3">
              <div className="h-full overflow-hidden">
                <img
                  className="h-96 w-full object-cover object-center"
                  src="https://freight.cargo.site/w/768/q/75/i/96d8998e6800a5a86165ac7d84fb8ff6c62b6f555c4f8aa898817f2278a174e2/kartell.jpeg"
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
                  })[4]
                }
              </div>
            </div>
            <div className="p-4 w-full md:w-1/3 hover:transition-transform  hover:ease-in-out hover:rotate-3">
              <div className="h-full overflow-hidden">
                <img
                  className="h-96 w-full object-cover object-center"
                  src="https://freight.cargo.site/w/1000/q/75/i/9bd2703b7e93777843fe16cb50be5095cb531ef7807adf890ddf66a90cf10ac6/table.jpeg"
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
                  })[5]
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Row2;
