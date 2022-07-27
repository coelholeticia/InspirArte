import image from '../../assets/moodb.png'
import './pastacss/arte.css'

function Sectionarte(){
    return(
       <div className='cont-principal'>
            <p className='paragrafo-principal'>
            <span>O artesanato brasileiro</span> é um dos mais ricos do mundo e garante o sustento de muitas famílias e comunidades (estima-se que temos cerca de 10 milhões de artesãos no Brasil). O artesanato faz parte do folclore e revela usos, costumes, tradições e características de cada região do nosso País.
            </p>
            <img className='img-principal' src={image} alt='ilustração-artesanatos'></img>
       </div>
    )
}

export default Sectionarte