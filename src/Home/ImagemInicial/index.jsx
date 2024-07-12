import style from './ImagemInicial.module.css'; 
import fundo_tela from '../../assets/imagem/player.png';

export default function ImagemInicial(){
    return(
        <section className={style}>
        <div>
        <img src={fundo_tela} alt="Imagem de video" /> 
        </div> 
        <div className={style['text-container']}>
        <h1>Front End</h1>
        <h4>seo com react</h4>
        <p>Eu to aqui pra nesse vídeo dizer 
            que a gente vai aprender a começar uma app 
            inspirada no desenho Pokémon com Nextjs e React, 
            ver algumas dicas sobre performance e de quebra 
            conhecer uma plataforma sensacional pra fazer deploy 
            que é a Vercel. Tudo em 22 minutos nesse vídeo feito 
            com todo o carinho
            do mundo construindo uma Pokedex!</p>
        </div>
       </section> 
    )
}