import { Outlet } from 'react-router-dom';
import style from'./App.module.css';
import Cabecalho from './components/Cabecalho';
import Rodape from './components/Rodape';

function App(){

  return(
    <>
      <div className={style.container}>
   
    <Cabecalho/>
    <Outlet/>
    <Rodape/>

      </div>
    </>
  )
}
export default App