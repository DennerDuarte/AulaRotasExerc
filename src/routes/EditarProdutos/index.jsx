import { useNavigate, useParams } from "react-router-dom";
import { listaProdutos } from "../../listaProduto";
import { useState } from "react";
import style from "../Produtos.module.css"

export default function EditarProdutos() {
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

  const handleChange = (event)=>{
      const {name,value} = event.target;
      setProduto({...produto, [name]:value});
  }

  const handleSubmit = (event)=>{
    event.preventDefault();


        let indice;

        listaProdutos.forEach((item,index)=>{
          if(item.id == produto.id){
            indice = index;
          }
        });
      listaProdutos.splice(indice,1,produto);

      //Redirecionando após realizar a edição do produto filtrado.
      navigate("/produtos");
  }


  return (
    <>
      <h1 className={style.h1}>Editar Produtos</h1>

      <div>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Produto Selecionado</legend>
            <div>
              <label htmlFor="idNome">Nome</label>
              <input type="text" name="nome" id="idNome" onChange={handleChange} value={produto.nome} />
            </div>
            <div>
              <label htmlFor="idDesc">Descrição</label>
              <input type="text" name="desc" id="idDesc" onChange={handleChange} value={produto.desc} />
            </div>
            <div>
              <label htmlFor="idPreco">Preço</label>
              <input type="text" name="preco" id="idPreco" onChange={handleChange} value={produto.preco} />
            </div>
            <div>
              <button>EDITAR</button>
            </div>
          </fieldset>
        </form>
      </div>
 
    </>
  );
}
