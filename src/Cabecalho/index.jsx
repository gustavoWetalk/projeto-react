import style from './Cabecalho.module.css';
import logo from '../assets/imagem/LogoMain.png';
import Navegacao from './Navegacao';

export default function Cabecalho(){
    return(
   <header className={style}> 
    <img src={logo} alt="Imagem Aluraflix" /> 
    <Navegacao/>
   </header>
    )
}