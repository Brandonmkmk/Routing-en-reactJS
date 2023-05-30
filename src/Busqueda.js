import React from "react";
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Axios from "axios";
import ProductsList from "./ProductsList";

export default function Busqueda() {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState([[]]);

  useEffect(() => {
    Axios.get(
      `https://dummyjson.com/products/buscar?q=${searchParams.get("keyword")}`
    ).then((res) => setProducts(res.data.products));
  }, [searchParams]);
  return (
    <div>
      <h1>search results</h1>
      <ProductsList products={products} />
    </div>
  );
}
