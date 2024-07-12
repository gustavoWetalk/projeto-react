import style from './Navegacao.module.css';

export default function Navegacao(){
return(
    <nav className={style}>
        <ul>
            <li><a href='/'>Home</a></li> 
            <li><a href='/cadastro'>Novo Video</a></li>       
        </ul>
    </nav>
)
}