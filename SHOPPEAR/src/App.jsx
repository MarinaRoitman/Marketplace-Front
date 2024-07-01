import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/footer";
import "bootstrap/dist/css/bootstrap.min.css";
import {useSelector, useDispatch} from 'react-redux'
import {useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Menu/menu.jsx";
import Account from "./Pages/Cuenta/cuenta.jsx";
import Pago from './Pages/Pago/pago.jsx';
import ProductosDisplay from "./Components/ProductosDisplay/productosDisplay.jsx";
import Login from "./Pages/Login/login.jsx";
import CrearCuenta from "./Pages/CrearCuenta/crearCuenta.jsx";
import {startSearch} from "./redux/actions/search.actions.js";
import ProductosFiltrados from "./Pages/ProductosFiltrados/productosFiltrados.jsx";

import { fetchCategorias, fetchProducts } from './redux/actions/products.actions.js';

function App() {
  const dispatch = useDispatch();
  const { loading, products, error } = useSelector(state => state.products);
  const datosUsuario = useSelector(state => state.auth.datosUsuario)
  console.log(datosUsuario, "datos del usuario")
  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchCategorias());
      await dispatch(fetchProducts());
    };
    
    fetchData();
  }, [dispatch]);

  useEffect(() => {
    if (products.length > 0) {
      dispatch(startSearch(products));
    }
  }, [products])

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>Error al cargar productos: {error}</p>;

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/productos/:category" element={<ProductosFiltrados />}></Route>
          <Route path="/Cuenta" element={<Account />}></Route>
          <Route path="/Pago" element={<Pago />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/CrearCuenta" element={<CrearCuenta />}></Route>
          <Route path="/producto/:searchID" element={<ProductosDisplay />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
