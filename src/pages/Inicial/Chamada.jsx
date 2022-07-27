import { Link } from "react-router-dom"
import './pastacss/chamada.css'

function Chamada(){
    return(
        <div className="cont-chamada">
            <div className="bg-amarelo">
            <h2>Quero ser uma artesã de sucesso</h2>
            <Link className="button" to='cadastro'>CADASTRE</Link>  
            </div>
        </div>

    )
}

export default Chamada