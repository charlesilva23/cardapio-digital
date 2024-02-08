import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Checkout from "./pages/checkout/checkout";


function Rotas(){
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/checkout" element={ <Checkout /> } />
        </Routes>
    </BrowserRouter>
}

export default Rotas;