import React from "react";
import { Link } from "react-router-dom";

function Product({ id, name, description, image, price }) {
  let imgSrc = require(`./images/${image}`).default;
  return (
    <div>
      <Link to={`/product/${id}`}>
        <div>
          <img
            src={imgSrc}
            class="block h-64 w-full rounded-lg shadow-lg bg-white"
          />
          <div class="flex items-center justify-between mt-3">
            <div>
              <a href="#" class="font-medium">
                {name}
              </a>
              <a class="flex items-center" href="#">
                <span class="text-xs font-medium text-gray-600">by</span>
                <span class="text-xs font-medium ml-1 text-indigo-500">
                  Store Name
                </span>
              </a>
            </div>
            <span class="flex items-center h-8 bg-indigo-200 text-indigo-600 text-sm px-2 rounded">
              {`$${price}`}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Product;
