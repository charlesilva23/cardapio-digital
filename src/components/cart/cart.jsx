import { useEffect, useState } from "react";
import { Dock } from "react-dock";
import ProdutoCart from "../produto-cart/produto-cart";
import "./cart.css";
import { useNavigate } from "react-router-dom";

function Cart(){

    const [show, setShow] = useState(false);
    const navigate = useNavigate();


    useEffect( function(){
        window.addEventListener("openSidebar", function(){
            setShow(true);
        })
    }, []);

    function checkout(){
        navigate('/checkout');
    }


    return <>
        <Dock isVisible={show}
            position="right"
            fluid={false}
            size={420}
            onVisibleChange={ function(visible){
                setShow(visible);
            }}  
    
        >
        <div className="text-center">
            <h1>Meu pedido</h1>
        </div>

        <div className="lista-produtos">
            <ProdutoCart />
            <ProdutoCart />
            <ProdutoCart />
            <ProdutoCart />

        </div>

        <div className="footer-cart">
            <div className="footer-cart-valor">
                <span>Total</span>
                <span>R$ 250,00</span>
            </div>
            <div>
                <button onClick={checkout} className=" btn-checkout">Finalizar Pedido</button>
            </div>
        </div>        
        </Dock>    
    </>

}

export default Cart;
