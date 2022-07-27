import image from '../../assets/img-blog.png'
import './blog.css'
import Cursos from './Cursos/Cursos'

function Blog(){
    return(
        <>
        <div className="intro-blog">
            <img className='img-blog' src={image} alt="ilustração do blog" />
            <h3>As melhores dicas de canais de artesanato, vendas e cursos gratuitos para você. </h3>    
        </div>
        <div className='cursos'>
            <Cursos />
        </div>

       

        

    
        </>
    )
}

export default Blog