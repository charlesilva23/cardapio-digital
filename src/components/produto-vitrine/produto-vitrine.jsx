import "./produto-vitrine.css";
import bag from "../../assets/bag-black.png";
import foto from "../../assets/hamburguer.png"

function ProdutoVitrine(){
    return <div className="produto text-center">
            <img src={foto} alt="Foto" />
    <div>
         
            <h2>Hamburguer</h2>
            <p className="prod-vitrine-descricao">250 de hamburguer, queijo, bacon e cheddar</p>
            <p className="prod-vitrine-preco">18,99</p>
        </div>

        <div>
            <button className="btn btn-cart">
                <img src={bag} className="icon" />
                Adicionar
            </button>
        </div>
    
</div> 

    
}

export default ProdutoVitrine;