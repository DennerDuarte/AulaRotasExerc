import { listaProdutos } from "../../listaProduto";
import { Link } from "react-router-dom";

export default function Produtos() {
  return (
    
    <main >
        <h1>Produtos</h1>
        {listaProdutos.map(produto =>(
            <div key={produto}>
                <Link to = {`./produto/editar/${produto.id}`}>
                    Editar o Produto: {produto.nome} 
                </Link>
                    
            </div>
        ))}
    </main>
  )
}
