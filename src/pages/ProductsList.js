import React from "react";
import PaginationFooter from "../components/Products/PaginationFooter";
import Product from "../components/Products/Product";
import { products } from "../data/Products";

function ProductsList() {
  return (
    <div>
      <div class="flex flex-col w-full min-h-full p-10 bg-gray-100 text-gray-800 pt-20">
        <h1 class="mb-5 text-5xl font-bold text-center">Products</h1>
        <span class="text-sm font-semibold">1-16 of 148 Products</span>
        <div class="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-6 gap-y-12 w-full mt-6">
          {products.map((p) => {
            return (
              <Product
                key={p.id}
                id={p.id}
                name={p.name}
                description={p.description}
                image={p.image}
                price={p.price}
              />
            );
          })}
        </div>
        <PaginationFooter />
      </div>
    </div>
  );
}

export default ProductsList;
