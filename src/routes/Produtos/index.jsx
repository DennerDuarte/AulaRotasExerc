import { listaProdutos } from "../../listaProduto";
import { Link } from "react-router-dom";


export default function Produtos() {
  
  const estiloDaTable = {
    borderCollapse: "collapse",
    margin: "0 auto",
    border: "2px solid #ccc",
  }
  
  return (

    <>
      <h1>Lista de Produtos</h1>

      <div>
        <table style={estiloDaTable}>
          <tr>
            <th>ID</th>
            <th>NOME</th>
            <th>DESCRIÇÃO</th>
            <th>PREÇO</th>
            <th>EDITAR</th>
          </tr>

            {listaProdutos.map( (item, indice) =>(
              <tr key={indice}>            
                  <td>{item.id}</td>
                  <td>{item.nome}</td>
                  <td>{item.desc}</td>
                  <td>{item.preco}</td>
                  <td><Link to={`/editar/produtos/${item.id}`} >EDITAR</Link></td>            
              </tr>
            ))}
        </table>
      </div>
    </>
  )
}
