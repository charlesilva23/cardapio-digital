import { useState } from "react";



function Checkout(){

    const [valor, setValor] = useState(0);

    function soma(){
        setValor(valor +1);
    }

    function subtracao(){
        setValor(valor - 1);
    }

    return <>
    
        <h1>{valor}</h1>
        <button onClick={soma}>+1</button>
        <button onClick={subtracao}>-1</button>
    </>



}

export default Checkout;