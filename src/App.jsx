import { Outlet } from 'react-router-dom';
import './App.css';
import Cabecalho from './components/Cabecalho';
import Rodape from './components/Rodape';

function App(){

  return(
    <>
      <div className='container'>
   
    <Cabecalho/>
    <Outlet/>
    <Rodape/>

      </div>
    </>
  )
}
export default App