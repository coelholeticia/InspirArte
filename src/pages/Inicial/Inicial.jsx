import Chamada from './Chamada'
import Sectionarte from './Sectionarte'
import imagem from '../../assets/gif-pagina.gif'
import Sobre from'./Sobre'
import './pastacss/inicial.css'

function Inicial(){
    return(
        <>
            <Sectionarte />
            <Chamada />
            <Sobre />

            <div className="imagem-gif">
                <img className="gif" src={imagem} alt="gif-animado" />
                <p className='citação'>
                    "O coletivo de artesãos empreendedores, promovendo geração de renda e impacto social." - Centro cultural Dona Antonia.
                </p>
            </div>
           
        </>
     
    )
}

export default Inicial