import { Link } from "react-router-dom";

export default function Cabecalho() {
  return (
    <header className="cabecalho">
        <Link to='/'>Home</Link>
        <span> | </span>
        <Link to='/produtos'> Produtos </Link>
    </header>
  )
}
