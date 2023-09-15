import { useState } from "react";
import { listaProdutos } from "../../listaProduto";
import { useNavigate } from "react-router-dom";

export default function Index() {
  
    const navigate = useNavigate()

    const [produtos, setProdutos] = useState(listaProdutos);
    const [novoProduto, setNovoProduto] = useState({
        id: listaProdutos.length + 1,
        nome: "",
        desc: "",
        preco: "",
    });

  const adicionarProduto = () => {
    setProdutos([...produtos, { ...novoProduto, id: novoProduto.id }]);
    setNovoProduto({
      id: novoProduto.id + 1, 
      nome: "",
      desc: "",
      preco: "",
    });

    listaProdutos.push(novoProduto);
    navigate("/produtos")
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNovoProduto({
      ...novoProduto,
      [name]: value,
    });

  };

  return (
    <div>
      <form>
        <div>
          <label htmlFor="idNome">Nome:</label>
          <input
            type="text"
            id="idNome"
            name="nome"
            value={novoProduto.nome}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="idDesc">Descrição:</label>
          <input
            type="text"
            id="idDesc"
            name="desc"
            value={novoProduto.descricao}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="idPreco">Preço:</label>
          <input
            type="text"
            id="idPreco"
            name="preco"
            value={novoProduto.preco}
            onChange={handleChange}
          />
        </div>
        <button type="button" onClick={adicionarProduto}>
          Adicionar Produto
        </button>
      </form>
    </div>
  );
}
