import { BrowserRouter, Routes, Route } from "react-router-dom";

import Menu from "./Components/Menu";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Home from "./pages/Home";

export default function App() { 
  return (
    <BrowserRouter>
      <div className="container">
        <Menu/>
        <NavBar/>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/produtos" />
          <Route path="/produto/:id"/>
          <Route path="/categorias" />
          <Route path="/meus-pedidos" />
        </Routes>

        <Footer/>
      </div>

    </BrowserRouter>
  )
}