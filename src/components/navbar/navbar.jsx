import "./navbar.css";
import Logo from "../../assets/logo.png";
import bag from "../../assets/bag.png"

function Navbar() {
    return <div className="navbar">
        <img src={Logo} className="logo"/>

            <div className="menu">
                <a href="#">Histórico</a>
                <button className="btn btn-red">
                    <img src={bag} className="icon" />
                    Sacola
                </button>
            </div>
            
    </div>
}

export default Navbar;