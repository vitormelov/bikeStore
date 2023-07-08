import { BrowserRouter, Routes, Route } from "react-router-dom";

import Menu from "./Components/Menu";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Product from "./pages/Product";

export default function App() { 
  return (
    <BrowserRouter>
      <div className="container">
        <Menu/>
        <NavBar/>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>} />
          <Route path="/produto/:id" element={<Product/>}/>
          <Route path="/admin" element={<Admin/>}/>
          <Route path="/meus-pedidos" />
        </Routes>

        <Footer/>
      </div>

    </BrowserRouter>
  )
}