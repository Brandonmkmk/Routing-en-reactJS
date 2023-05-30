import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Axios from "axios";

export default function ProductsDetails() {
  const [producto, setProducto] = useState([]);
  /*el hook useParams() nos permite consumir los parametros que se pasen directamente en la ruta products. En esta ruta el parametro es ":productID. Es importante poner el mismo nombre del parametro de la ruta."*/
  const { productID } = useParams();
  useEffect(() => {
    Axios.get(`https://dummyjson.com/products/${productID}`).then((res) =>
      setProducto(res.data)
    );
  }, [productID]);
  return (
    <div>
      <h1>producto:{producto.title}</h1>
      <img src={producto.thumbnail} alt="" />
      <p>{producto.category}</p>
      <p>Descripcion: {producto.description}</p>
      <Link to={"/products"}>Regresar a la lista de productos</Link>
    </div>
  );
}
