import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function ProductsList({ products }) {
  /*el hook useNavigete funciona para hacer redirecciones, se tiene que importar de react-router-dom*/
  const navigete = useNavigate();
  const [keyword, setKeyword] = useState[""];

  const buscar = (e) => {
    navigete(`/buscar?keyword=${keyword}`);
  };

  return (
    <div>
      <h1>Lista de productos</h1>
      <div>
        <input
          onChange={(e) => setKeyword(e.target.value)}
          type="text"
          placeholder="busca un producto"
        />
        <button onClick={buscar}>Buscar</button>
      </div>
      <ul>
        {products.map((product) => {
          return (
            <li key={product.id}>
              <h4>{product.title}</h4>
              {/*cada producto tendra un Link que navegara al parametro :productID de la ruta /products, ese parametro es el id de cada producto que se esta iterando, si le damos click al primer producto el id seria 1, entonces quedaria asi: /products/1*/}
              <Link to={`/products/${product.id}`}>More details</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
