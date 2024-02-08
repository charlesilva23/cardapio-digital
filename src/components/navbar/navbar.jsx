import "./navbar.css";
import Logo from "../../assets/logo.png";
import bag from "../../assets/bag.png"
import Cart from "../cart/cart";
import { useEffect } from "react";


function Navbar() {

    function openSidebar(){
        const event = new CustomEvent("openSidebar")

        window.dispatchEvent(event);
    }

    return <div className="navbar">
        <img src={Logo} className="logo"/>

            <div className="menu">
                <a href="#">Histórico</a>
                <button onClick={openSidebar} className="btn btn-red">
                    <img src={bag} className="icon" />
                    Sacola
                </button>
            </div>
          <Cart />
    </div>
}

export default Navbar;