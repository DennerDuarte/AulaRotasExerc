import { useEffect, useState } from "react";
import { listaProdutos } from "../../listaProduto";
import { Link } from "react-router-dom";
import style from "../Produtos.module.css"


export default function Produtos() {

  const [novaLista, setNovaLista] = useState([{}]);

  useEffect(()=>{
    setNovaLista(listaProdutos);
  },[]);
  
  return (

    <>
      <h1>Lista de Produtos</h1>

      <div>
        <table className={style.tblEstilo}>
          <thead className={style.tblHeader}>
            
            <tr>
              <th>ID</th>
              <th>NOME</th>
              <th>DESCRIÇÃO</th>
              <th>PREÇO</th>
              <th>EDITAR</th>
            </tr>
          </thead>


          <tbody>
            {novaLista.map( (item, indice) =>(
              <tr key={indice} className={style.tblRow}>            
                  <td>{item.id}</td>
                  <td>{item.nome}</td>
                  <td>{item.desc}</td>
                  <td>{item.preco}</td>
                  <td><Link to={`/editar/produtos/${item.id}`} >EDITAR</Link></td>      
              </tr>
            ))}
          </tbody>
        </table>
        <div>
              <Link to='/adicionar/produtos'>
                <button>
                  Adicionar Produto
                </button>
              </Link>
        </div>
      </div>
    </>
  )
}
