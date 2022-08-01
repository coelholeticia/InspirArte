import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Inicial from '../pages/Inicial/Inicial'
import Blog from '../pages/Blog/Blog'
import Cadastro from '../pages/Cadastro/Cadastro'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Artesa from '../pages/Artesa/Artesa'




function Rotas(){
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Inicial />} />
                <Route path='blog' element={<Blog />} />
                <Route path='artesa' element={<Artesa />} />
                <Route path='cadastro' element={<Cadastro />} />  
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default Rotas