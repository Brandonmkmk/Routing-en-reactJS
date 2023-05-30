import React from "react";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import WelcomeUser from "./WelcomeUser";

export default function Login() {
  const [name, setName] = useState("");
  return (
    <>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      {/*cuando el usuario presione este Link, navegara a la ruta login/:user y es por eso que se mostrara el componente WelcomeUser*/}
      <Link to="/login/user">Entrar</Link>
      <Routes>
        {/*subruta de login, cuando la ruta sea login/:user se mostrara el componente WelcomeUser*/}
        {/*Los 2 puntos significa que esto es una variable (parametro) que puede cambiar, es decir una ruta dinamica*/}
        <Route path=":user" element={<WelcomeUser name={name} />} />
      </Routes>
    </>
  );
}
