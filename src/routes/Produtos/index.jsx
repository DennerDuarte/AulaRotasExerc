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
      <h1 className={style.h1}>Lista de Produtos</h1>

      <div>
        <table className={style.tblEstilo}>
          <thead className={style.tblHeader}>
            
            <tr>
              <th>ID</th>
              <th>NOME</th>
              <th>DESCRIÇÃO</th>
              <th>PREÇO</th>
              <th>VIZUALIZAR</th>
            </tr>
          </thead>


          <tbody>
            {novaLista.map( (item, indice) =>(
              <tr key={indice} className={style.tblRow}>            
                  <td>{item.id}</td>
                  <td>{item.nome}</td>
                  <td>{item.desc}</td>
                  <td>{item.preco}</td>
                  <td><Link to={`/vizualizar/produtos/${item.id}`} >VIZUALIZAR</Link></td>      
              </tr>
            ))}
          </tbody>
        </table>
        <div className={style.button}>
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
