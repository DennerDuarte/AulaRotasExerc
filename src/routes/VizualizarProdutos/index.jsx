import { useNavigate, useParams } from "react-router-dom";
import { listaProdutos } from "../../listaProduto";
import { useState } from "react";
import style from "../Produtos.module.css"

export default function VizualizarProdutos() {
  document.title = "Editar Produtos";

  //utilizando redirecionamento de ROTAS com useNavigate();
  const navigate = useNavigate()

  //Utilizando o HOOK useParams()
  const { id } = useParams();

  //Filtrando o produto selecionado byId
  const produtoFiltrado = listaProdutos.filter(
    (item) => item.id === parseInt(id)
  )[0];

  //Utilizando o HOOK useState()

  const [produto, setProduto] = useState({
    id: produtoFiltrado.id,
    nome: produtoFiltrado.nome,
    desc: produtoFiltrado.desc,
    img: produtoFiltrado.img,
    preco: produtoFiltrado.preco,
  });

 


  return (
    <>
      <div className={style.vizuImages}>
        <h1 className={style.h1}>Detalhes do Produto</h1>
        <p>Nome do produto: {produto.nome}</p>
        <p>Preço: {produto.preco}</p>
        <div className={style.image}>
          <p>
            <img src={produto.img} alt={produto.desc} />
          </p>
        </div>
        <p>Descrição: {produto.desc}</p>
      </div>
      
 
    </>
  );
}
