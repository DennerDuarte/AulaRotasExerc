import {useParams, useNavigate} from 'react-router-dom'
import { listaProdutos } from '../../listaProduto'

export default function EditarProdutos() {
  
  
  const lista = listaProdutos
  const navegacao = useNavigate()
  const {id} = useParams()


  const proc = lista.filter(prod => prod.id == id)
  const produto = proc[0]

  const salvar = ()=>{
    alert(`Produto: ${produto.nome} editado com sucesso!`)
    return navegacao('/produtos')
  }
  return (
    <main>
      <h1>Editando o produto: {id}</h1>
      <p>Editando os dados do produto: {produto.nome}</p>
      <button onClick={salvar}>Salvar</button>

    </main>
    
  )
}
