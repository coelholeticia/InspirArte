import { Link } from "react-router-dom"
import './header.css'
import logo from '../../assets/logoArt.png'


function Header() {
    return(
        <>
            
             <ul className="Lista-menu">
                     <li className="item-menu">
                        <Link className="logo-focus" to='/'><img className="logo-tipo" src={logo} alt="Logo mi/au" /></Link>
                    </li>
                    <li className="item-menu">
                        <Link to='blog'>BLOG</Link>
                    </li>
                    <li className="item-menu">
                        <Link to='artesa'>ARTESÃS</Link>
                    </li>
                    <li className="item-menu">
                        <Link to='cadastro'>CADASTRO</Link>
                    </li>
        
                </ul>


        </>
    )
}

export default Header