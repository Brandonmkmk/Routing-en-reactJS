import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import ProductsDetails from "./ProductsDetails";
import ProductsList from "./ProductsList";
import Axios from "axios";
export default function Products() {
  let [products, setProducts] = useState([]);

  /*llamada a una api con Axios*/
  useEffect(() => {
    Axios.get("https://dummyjson.com/products").then((res) =>
      setProducts(res.data.products)
    );
  });

  return (
    <>
      <h2>Products page</h2>
      <Routes>
        {/*index hace referencia que esta sera la ruta inicial, se mostrara el componente ProductsList*/}
        <Route index element={<ProductsList products={products} />} />
        {/*esta es la ruta anidada de la ruta products, cuando el usuario escriba products/1 u otro numero o letras qud hagan referencia a :productID que es una ruta anidada a la de products, se mostrara el componente ProductsDetails*/}

        {/*Los 2 puntos significa que esto es una variable (parametro) que puede cambiar, es decir una ruta dinamica*/}
        <Route path=":productID" element={<ProductsDetails />} />
      </Routes>
    </>
  );
}
