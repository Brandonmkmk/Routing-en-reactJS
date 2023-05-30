import "./App.css";
import {
  Link,
  Route,
  Routes,
  useParams /*nos permite capturar segmentos dinamicos y recuperarlo en un componente*/,
} from "react-router-dom"; /*Al Route se le tiene que indicar cual es el path (Url) en el cual se tiene que renderizar el elemento*/
import Products from "./Products";
import Login from "./Login";
import Busqueda from "./Busqueda";

const Home = () => {
  return <h1>Esta es la pagina de inicio</h1>;
};

const About = ({ empresa }) => {
  return (
    <>
      <h1>Acerca de:{empresa}</h1>
    </>
  );
};

const Admin = () => {
  return <h1>Apartado de administrador</h1>;
};
function App() {
  return (
    <div className="App">
      <header>
        <nav>
          {/*el componente Link de react-router-dom a diferencia de el elemento a que su atributo href siempre obliga a recargar la pagina. en Link no se ve que este navegando y no se esta volviendo a recargar la aplicacion y sus recursos. dentro del atributo to de Link se especifica que ruta(url) se quiere renderizar.  */}
          <Link to="/">Home</Link>
          <Link to="/about">acerca de</Link>
          <Link to="/admin">Admin</Link>
          <Link to="/products">products</Link>
          <Link to="/login">Login</Link>
        </nav>
      </header>
      {/*este header se muestra en cualquier ruta, ya que esta fuera de ellas*/}
      <Routes>
        {/*el componente routes es para indicar las rutas que tiene nuestra aplicacion*/}
        {/*El componente Home se va a renderizar en el path raiz, es decir se muestra cuando se carga nuestra aplicacion de react*/}
        <Route path="/" element={<Home />} />
        {/*el componente about se renderiza cuando entremos a la url /about. El paso de las props de los componentes es posible. ejemplo, el componente About tiene una prop empresa y cuando se renderiza esta ruta se le asigna ese valor a la prop*/}
        <Route path="/about" element={<About empresa="prohogar" />} />
        {/*el arterisco hace referencia a cuando la pagina que se requiera no exista. se renderizara un h1 con el mensaje de la pagina no se encontro*/}
        <Route path="*" element={<h1>La pagina no se encontro</h1>} />
        <Route path="/admin" element={<Admin />} />

        {/*el /* indica que dentro de la ruta products habra subrutas, en el componente products hay una subruta ":productsID"*/}
        <Route path="products/*" element={<Products />} />
        <Route path="login/*" element={<Login />} />
        <Route path="buscar" element={<Busqueda />}></Route>
      </Routes>
    </div>
  );
}

export default App;
